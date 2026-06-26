import { useState, useRef, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { motion, useDragControls } from 'framer-motion';

const updateSortBarMargin = (element: HTMLElement | null) => {
  if (!element) return;
  const sortBar = element.closest('.sort-group-bar') as HTMLElement;
  if (!sortBar) return;
  
  // Need a tiny delay to allow React to render the DOM nodes (like search suggestions)
  setTimeout(() => {
    let maxMargin = 0;
    
    sortBar.querySelectorAll('.custom-select-container.active').forEach(c => {
        const drop = c.querySelector('.custom-select-dropdown');
        if (drop) maxMargin = Math.max(maxMargin, drop.scrollHeight - 20);
    });
    
    const search = sortBar.querySelector('.search-suggestions.active');
    if (search) maxMargin = Math.max(maxMargin, search.scrollHeight + 10);
    
    if (maxMargin > 0) {
        sortBar.style.marginBottom = maxMargin + 'px';
    } else {
        sortBar.style.marginBottom = '';
    }
  }, 10);
};

// Custom Select Component to match the original DOM exactly
const CustomSelect = ({ 
  id, 
  label, 
  value, 
  options, 
  onChange 
}: { 
  id: string, 
  label: string, 
  value: string, 
  options: {value: string, text: string}[], 
  onChange: (val: string) => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOpt = options.find(o => o.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    updateSortBarMargin(containerRef.current);
  }, [isOpen]);

  return (
    <div className="control-select-group">
      <label htmlFor={id}>{label}</label>
      {/* Hidden native select for compatibility if needed */}
      <select id={id} style={{ display: 'none' }} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>)}
      </select>
      
      {/* Custom Select DOM */}
      <div 
        className={`custom-select-container ${isOpen ? 'active' : ''}`} 
        id={`custom-select-${id}`}
        ref={containerRef}
      >
        <button 
          className="custom-select-trigger" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="custom-select-text">{selectedOpt.text}</span>
          <svg className="custom-select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div className="custom-select-dropdown">
          {options.map((opt) => (
            <div 
              key={opt.value}
              className={`custom-select-option ${opt.value === value ? 'selected' : ''}`}
              data-value={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              <span>{opt.text}</span>
              {opt.value === value && (
                <svg className="custom-select-checkmark" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterBar = () => {
  const { tricks, activeSection, activeTopics, activeTags, toggleTopic, toggleTag, resetFilters } = useAppStore();

  const sectionTricks = tricks.filter(t => t.section.toLowerCase() === activeSection.toLowerCase());
  
  const topicsSet = new Set<string>();
  const tagsSet = new Set<string>();
  
  sectionTricks.forEach(t => {
      if (t.topic) topicsSet.add(t.topic);
      if (t.tags && Array.isArray(t.tags)) {
          t.tags.forEach(tag => tagsSet.add(tag));
      }
  });

  if (topicsSet.size === 0 && tagsSet.size === 0) {
      return <div className="filter-bar" id="filter-bar" style={{ display: 'none' }}></div>;
  }

  const isAllActive = activeTags.length === 0 && activeTopics.length === 0;
  const isVocab = activeSection === 'Vocab';
  const topicsLabelText = isVocab ? 'Alphabet' : 'Topics';
  const tagsLabelText = isVocab ? 'Word Types' : 'Tags';

  return (
    <div className="filter-bar" id="filter-bar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div className="filter-modules-row" style={{ alignItems: 'center', marginBottom: '0.4rem' }}>
        <button 
          className={`filter-pill ${isAllActive ? 'active' : ''}`} 
          onClick={resetFilters}
        >
          <span className="filter-pill-dot"></span>Reset Filters
        </button>
      </div>

      {topicsSet.size > 0 && (
        <div className="module-filter-group" style={{ width: '100%' }}>
          <span className="module-filter-label">{topicsLabelText}</span>
          <div className="module-filter-topics">
            {Array.from(topicsSet).map(topic => (
              <button 
                key={topic}
                className={`filter-pill ${activeTopics.includes(topic) ? 'active' : ''}`}
                onClick={() => toggleTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {tagsSet.size > 0 && (
        <div className="module-filter-group" style={{ width: '100%' }}>
          <span className="module-filter-label">{tagsLabelText}</span>
          <div className="module-filter-topics">
            {Array.from(tagsSet).map(tag => (
              <button 
                key={tag}
                className={`filter-pill ${activeTags.includes(tag) ? 'active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const { 
    tricks,
    activeSection, setActiveSection, 
    searchQuery, setSearchQuery,
    activeSort, setActiveSort,
    activeGroup, setActiveGroup,
    activeView, setActiveView
  } = useAppStore();

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const tabDragControls = useDragControls();
  const viewDragControls = useDragControls();

  const tabsRef = useRef<HTMLDivElement>(null);
  const viewToggleRef = useRef<HTMLDivElement>(null);
  const [tabSliderStyle, setTabSliderStyle] = useState({ left: 0, width: 0 });
  const [viewSliderStyle, setViewSliderStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector('.tab.active') as HTMLElement;
      if (activeTab) {
        setTabSliderStyle({ left: activeTab.offsetLeft, width: activeTab.offsetWidth });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    if (viewToggleRef.current) {
      const activeBtn = viewToggleRef.current.querySelector('.view-toggle-btn.active') as HTMLElement;
      if (activeBtn) {
        setViewSliderStyle({ left: activeBtn.offsetLeft, width: activeBtn.offsetWidth });
      }
    }
  }, [activeView]);

  useEffect(() => {
    const searchContainer = document.querySelector('.search-group') as HTMLElement;
    updateSortBarMargin(searchContainer);
  }, [isSearchFocused, searchQuery]);

  const sortOptions = [
    { value: 'default', text: 'Default (Drag Order)' },
    { value: 'newest-first', text: 'New to Old' },
    { value: 'alphabetical-az', text: 'Alphabetical (A-Z)' },
    { value: 'alphabetical-za', text: 'Alphabetical (Z-A)' },
    { value: 'length', text: 'Word Length (Short to Long)' },
  ];

  const groupOptions = activeSection === 'Vocab' ? [
    { value: 'none', text: 'None (Flat Grid)' },
    { value: 'topic', text: 'Alphabet Range' },
    { value: 'root', text: 'Root / Prefix Origin' },
    { value: 'pos', text: 'Word Type (POS)' },
  ] : [
    { value: 'none', text: 'None (Flat Grid)' },
    { value: 'topic', text: 'Module & Topic' }
  ];

  const tabs = [
    { id: 'Quant', label: 'Quant' },
    { id: 'DILR', label: 'DILR' },
    { id: 'VARC', label: 'VARC' },
    { id: 'Vocab', label: 'Vocab' },
  ];

  return (
    <header>
      <div className="badge">
          <span className="badge-dot"></span>
          Pro Strategies
      </div>
      <h1><span className="title-light">Master the</span><br /><span className="title-gradient">Shortcuts.</span></h1>
      <p className="subtitle">Interactive logic shortcuts &amp; trap-avoidance techniques. Hover over any card to reveal the underlying trick and formulas.</p>
      
      <div 
        className="tabs" 
        ref={tabsRef}
        onPointerDown={(e) => {
          if (e.button === 0) tabDragControls.start(e);
        }}
        style={{ touchAction: 'none' }}
      >
          <motion.div 
            className="tab-slider" 
            id="tab-slider" 
            drag="x"
            dragControls={tabDragControls}
            dragListener={false}
            dragConstraints={{ 
              left: 0, 
              right: tabsRef.current ? tabsRef.current.offsetWidth - tabSliderStyle.width - 8 : 0 
            }}
            dragElastic={0.1}
            onDragEnd={(_e, { offset }) => {
              const swipe = offset.x;
              const currentIndex = tabs.findIndex(t => t.id === activeSection);
              
              if (swipe > 30 && currentIndex < tabs.length - 1) {
                 setActiveSection(tabs[currentIndex + 1].id as any);
              } else if (swipe < -30 && currentIndex > 0) {
                 setActiveSection(tabs[currentIndex - 1].id as any);
              }
            }}
            initial={false}
            animate={{ 
              width: tabSliderStyle.width,
              x: tabSliderStyle.left
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
            style={{ 
              cursor: 'grab', 
              left: 0, 
              opacity: tabSliderStyle.width > 0 ? 1 : 0 
            }}
            whileDrag={{ cursor: 'grabbing' }}
          />
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              className={`tab ${activeSection === tab.id ? 'active' : ''}`} 
              onClick={() => setActiveSection(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
      </div>

      {/* Filter Bar */}
      <div style={{ display: activeView === 'cards' ? 'block' : 'none' }}>
        <FilterBar />
      </div>

      <div className="sort-group-bar" id="sort-group-bar" style={{ display: activeView === 'cards' ? 'flex' : 'none' }}>
          <div className={`search-group ${isSearchFocused && searchQuery.length >= 2 ? 'active' : ''}`} style={{ position: 'relative' }}>
              <input 
                type="text" 
                id="search-input" 
                className="search-input" 
                placeholder="Search cards..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              {isSearchFocused && searchQuery.length >= 2 && (
                <div className="search-suggestions active" id="search-suggestions" style={{ display: 'block' }}>
                  {tricks
                    .filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .slice(0, 5)
                    .map(t => (
                      <div 
                        key={t.title} 
                        className="search-suggestion-item" 
                        onMouseDown={() => {
                          setSearchQuery(t.title);
                          setIsSearchFocused(false);
                        }}
                      >
                        <span className="suggestion-icon">🔍</span>
                        <span>{t.title}</span>
                      </div>
                    ))}
                </div>
              )}
          </div>
          
          <CustomSelect 
            id="sort-select"
            label="Sort By:"
            value={activeSort}
            options={sortOptions}
            onChange={(val) => setActiveSort(val as any)}
          />

          <CustomSelect 
            id="group-select"
            label="Group By:"
            value={activeGroup}
            options={groupOptions}
            onChange={(val) => setActiveGroup(val as any)}
          />
      </div>

      <div 
        className="view-toggle" 
        id="view-toggle" 
        ref={viewToggleRef}
        onPointerDown={(e) => {
          if (e.button === 0) viewDragControls.start(e);
        }}
        style={{ touchAction: 'none' }}
      >
          <motion.div 
            className="view-toggle-slider" 
            id="view-toggle-slider"
            drag="x"
            dragControls={viewDragControls}
            dragListener={false}
            dragConstraints={{ 
              left: 0, 
              right: viewToggleRef.current ? viewToggleRef.current.offsetWidth - viewSliderStyle.width - 8 : 0 
            }}
            dragElastic={0.1}
            onDragEnd={(_e, { offset }) => {
              const swipe = offset.x;
              const views = ['cards', 'quiz', 'analytics'];
              const currentIndex = views.indexOf(activeView);
              
              if (swipe > 30 && currentIndex < views.length - 1) {
                 setActiveView(views[currentIndex + 1] as any);
              } else if (swipe < -30 && currentIndex > 0) {
                 setActiveView(views[currentIndex - 1] as any);
              }
            }}
            initial={false}
            animate={{ 
              width: viewSliderStyle.width,
              x: viewSliderStyle.left
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
            style={{ 
              cursor: 'grab', 
              left: 0, 
              opacity: viewSliderStyle.width > 0 ? 1 : 0 
            }}
            whileDrag={{ cursor: 'grabbing' }}
          />
          <button 
            className={`view-toggle-btn ${activeView === 'cards' ? 'active' : ''}`} 
            id="view-cards-btn"
            onClick={() => setActiveView('cards')}
          >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
                Cards
              </span>
          </button>
          <button 
            className={`view-toggle-btn ${activeView === 'quiz' ? 'active' : ''}`} 
            id="view-quiz-btn"
            onClick={() => setActiveView('quiz')}
          >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                Study Quiz
              </span>
          </button>
          <button 
            className={`view-toggle-btn ${activeView === 'analytics' ? 'active' : ''}`} 
            id="view-analytics-btn"
            onClick={() => setActiveView('analytics')}
          >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                Analytics
              </span>
          </button>
      </div>
    </header>
  );
};

export default Header;
