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
  );
};

export default CardGrid;
