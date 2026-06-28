import { useMemo, useState, type ReactNode } from 'react';
import { useAppStore } from '../store/useAppStore';
import { DndContext, pointerWithin, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import { motion, AnimatePresence } from 'framer-motion';
import SortableCardWrapper from './SortableCardWrapper';
import VocabCard from './cards/VocabCard';
import QuantCard from './cards/QuantCard';

const CardGrid = () => {
    const { 
    tricks, 
    activeSection, 
    searchQuery, 
    activeSort,
    activeTopics,
    activeTags,
    activeGroup,
    reorderTricks
  } = useAppStore();

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeTrick = useMemo(() => tricks.find(t => t.title === activeId), [activeId, tricks]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
        activationConstraint: {
            distance: 5,
        }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const filteredAndSortedTricks = useMemo(() => {
    let result = [...tricks];

    // Filter by Section
    result = result.filter(t => t.section.toLowerCase() === activeSection.toLowerCase());

    // Filter by Topics
    if (activeTopics.length > 0) {
      result = result.filter(t => t.topic && activeTopics.includes(t.topic));
    }

    // Filter by Tags
    if (activeTags.length > 0) {
      result = result.filter(t => t.tags && t.tags.some(tag => activeTags.includes(tag)));
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t => 
        t.title.toLowerCase().includes(q) || 
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q))) ||
        (t.example && t.example.toLowerCase().includes(q))
      );
    }

    // Grouping overrides Sorting because we must cluster items
    if (activeGroup !== 'none') {
      if (activeGroup === 'topic') {
          result.sort((a, b) => (a.topic || '').localeCompare(b.topic || ''));
      } else if (activeGroup === 'root') {
          // @ts-ignore
          result.sort((a, b) => (a.rootGroup || '').localeCompare(b.rootGroup || ''));
      } else if (activeGroup === 'pos') {
          result.sort((a, b) => {
              const posA = a.tags ? a.tags[0] : '';
              const posB = b.tags ? b.tags[0] : '';
              return posA.localeCompare(posB);
          });
      }
    } else {
      // Normal Sort
      if (activeSort === 'newest-first') {
        result.sort((a, b) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
      } else if (activeSort === 'alphabetical-az') {
        result.sort((a, b) => a.title.localeCompare(b.title));
      } else if (activeSort === 'alphabetical-za') {
        result.sort((a, b) => b.title.localeCompare(a.title));
      } else if (activeSort === 'length') {
        result.sort((a, b) => a.title.length - b.title.length);
      }
    }

    return result;
  }, [tricks, activeSection, activeTopics, activeTags, searchQuery, activeSort, activeGroup]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      reorderTricks(active.id as string, over.id as string);
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const isDragEnabled = activeSort === 'default' && searchQuery === '' && activeGroup === 'none';

  const renderElements = () => {
    const elements: ReactNode[] = [];
    let currentGroupValue = '';

    filteredAndSortedTricks.forEach((trick, index) => {
      let trickGroupValue = '';
      if (activeGroup === 'topic') trickGroupValue = trick.topic || 'Other';
      // @ts-ignore
      else if (activeGroup === 'root') trickGroupValue = trick.rootGroup || 'Other';
      else if (activeGroup === 'pos') trickGroupValue = trick.tags?.[0] || 'Other';

      if (activeGroup !== 'none' && trickGroupValue !== currentGroupValue) {
        currentGroupValue = trickGroupValue;
        
        // Count total cards in this specific group
        const count = filteredAndSortedTricks.filter(t => {
            if (activeGroup === 'topic') return (t.topic || 'Other') === currentGroupValue;
            // @ts-ignore
            if (activeGroup === 'root') return (t.rootGroup || 'Other') === currentGroupValue;
            if (activeGroup === 'pos') return (t.tags?.[0] || 'Other') === currentGroupValue;
            return false;
        }).length;

        elements.push(
          <motion.div 
            layout="position"
            key={`group-${currentGroupValue}`} 
            className="group-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span>{currentGroupValue}</span>
            <span className="group-header-count">{count} cards</span>
          </motion.div>
        );
      }

      elements.push(
        <SortableCardWrapper 
          key={trick.title} 
          id={trick.title} 
          disabled={!isDragEnabled}
        >
          {trick.section === 'Vocab' ? (
            <VocabCard trick={trick} index={index} />
          ) : (
            <QuantCard trick={trick} index={index} />
          )}
        </SortableCardWrapper>
      );
    });

    return elements;
  };

  return (
    <>
      {activeSection === 'Vocab' && (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '2rem', marginTop: '-0.5rem' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              background: 'var(--card-bg)',
              border: '1px solid var(--accent-2)',
              padding: '10px 28px',
              borderRadius: '100px',
              backdropFilter: 'var(--glass-blur)',
              WebkitBackdropFilter: 'var(--glass-blur)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px var(--bg-glow)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default'
            }}
          >
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 10, 0],
                scale: [1, 1.2, 1.2, 1.2, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                repeatDelay: 5,
                repeat: Infinity 
              }}
              style={{ fontSize: '1.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 0 8px var(--bg-glow))', zIndex: 1 }}
            >
              🧠
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', lineHeight: '1.2', zIndex: 1 }}>
              <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-muted)', fontWeight: 600 }}>
                Vocabulary Bank
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ 
                  fontFamily: '"Outfit", sans-serif', 
                  fontWeight: 800, 
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, var(--text-main), var(--text-muted))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {filteredAndSortedTricks.length}
                </span>
                <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', color: 'var(--accent-2)', fontWeight: 600 }}>
                  Total Words
                </span>
              </div>
            </div>
            
            {/* Animated background glow */}
            <motion.div 
              animate={{ 
                x: ['-200%', '300%']
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 4
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transform: 'skewX(-20deg)',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        </div>
      )}
      <div className="grid-container" id="grid-container">
        {filteredAndSortedTricks.length === 0 ? (
          <div className="no-results-message">
            No strategies found matching your criteria. Try adjusting your filters or search terms.
          </div>
        ) : (
          <DndContext 
            sensors={sensors}
            collisionDetection={pointerWithin}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <SortableContext 
              items={filteredAndSortedTricks.map(t => t.title)}
              strategy={rectSortingStrategy}
            >
              <motion.div className="grid-container-inner" style={{ display: 'contents' }}>
                
                  {renderElements()}
                
              </motion.div>
            </SortableContext>
            <DragOverlay>
              {activeTrick ? (
                <div style={{ transform: 'scale(1.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderRadius: '15px', cursor: 'grabbing' }}>
                  {activeTrick.section === 'Vocab' ? (
                    <VocabCard trick={activeTrick} index={0} />
                  ) : (
                    <QuantCard trick={activeTrick} index={0} />
                  )}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        )}
      </div>
    </>
  );
};

export default CardGrid;
