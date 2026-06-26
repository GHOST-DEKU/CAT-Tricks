import { create } from 'zustand';
import type { Trick } from '../types';
import defaultTricks from '../data/tricks';

interface AppState {
    tricks: Trick[];
    searchQuery: string;
    activeSection: 'Quant' | 'VARC' | 'DILR' | 'Vocab';
    activeTopics: string[];
    activeSort: 'default' | 'newest-first' | 'alphabetical-az' | 'alphabetical-za' | 'length';
    activeGroup: 'none' | 'topic' | 'tags' | 'root' | 'pos';
    activeTags: string[];
    activeView: 'cards' | 'quiz' | 'analytics';

    setTricks: (tricks: Trick[]) => void;
    setSearchQuery: (query: string) => void;
    setActiveSection: (section: 'Quant' | 'VARC' | 'DILR' | 'Vocab') => void;
    toggleTopic: (topic: string) => void;
    toggleTag: (tag: string) => void;
    resetFilters: () => void;
    setActiveSort: (sort: 'default' | 'newest-first' | 'alphabetical-az' | 'alphabetical-za' | 'length') => void;
    setActiveGroup: (group: 'none' | 'topic' | 'tags' | 'root' | 'pos') => void;
    setActiveView: (view: 'cards' | 'quiz' | 'analytics') => void;
    reorderTricks: (activeId: string, overId: string) => void;
}

const getInitialTricks = (): Trick[] => {
    const savedOrderJson = localStorage.getItem('quantTricksOrder');
    if (!savedOrderJson) return defaultTricks;
    try {
        const savedOrder: string[] = JSON.parse(savedOrderJson);
        const orderMap = new Map(savedOrder.map((title, index) => [title, index]));
        
        return [...defaultTricks].sort((a, b) => {
            const indexA = orderMap.has(a.title) ? orderMap.get(a.title)! : 999999;
            const indexB = orderMap.has(b.title) ? orderMap.get(b.title)! : 999999;
            return indexA - indexB;
        });
    } catch (e) {
        return defaultTricks;
    }
};

export const useAppStore = create<AppState>((set) => ({
    tricks: getInitialTricks(),
    searchQuery: '',
    activeSection: 'Quant',
    activeTopics: [],
    activeSort: 'default',
    activeGroup: 'none',
    activeTags: [],
    activeView: 'cards',

    setTricks: (tricks) => set({ tricks }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setActiveSection: (section) => {
        set((state) => {
            const isVocab = section === 'Vocab';
            const wasVocab = state.activeSection === 'Vocab';
            let newGroup = state.activeGroup;
            
            // Reset invalid groups when switching out of vocab
            if (wasVocab && !isVocab && (newGroup === 'root' || newGroup === 'pos')) {
                newGroup = 'none';
            }
            
            return { 
                activeSection: section, 
                activeTopics: [], 
                activeTags: [],
                activeGroup: newGroup
            };
        });
        if (section !== 'all') {
            const themeMap: Record<string, string> = {
                'vocab': 'Vocab',
                'quant': 'Quant',
                'dilr': 'DILR',
                'varc': 'VARC',
                'grammar': 'Grammar'
            };
            document.body.setAttribute('data-theme', themeMap[section.toLowerCase()] || 'Quant');
        }
    },
    toggleTopic: (topic) => set((state) => ({
        activeTopics: state.activeTopics.includes(topic) 
            ? state.activeTopics.filter(t => t !== topic)
            : [...state.activeTopics, topic]
    })),
    toggleTag: (tag) => set((state) => ({
        activeTags: state.activeTags.includes(tag)
            ? state.activeTags.filter(t => t !== tag)
            : [...state.activeTags, tag]
    })),
    resetFilters: () => set({ activeTopics: [], activeTags: [] }),
    setActiveSort: (sort) => set({ activeSort: sort }),
    setActiveGroup: (group) => set({ activeGroup: group }),
    setActiveView: (view) => set({ activeView: view }),
    
    reorderTricks: (activeId, overId) => set((state) => {
        const activeIndex = state.tricks.findIndex(t => t.title === activeId);
        const overIndex = state.tricks.findIndex(t => t.title === overId);
        
        if (activeIndex === -1 || overIndex === -1) return state;
        
        const newTricks = [...state.tricks];
        const [movedItem] = newTricks.splice(activeIndex, 1);
        newTricks.splice(overIndex, 0, movedItem);
        
        // Save to localStorage as an array of titles to maintain custom order
        const savedOrder = newTricks.map(t => t.title);
        localStorage.setItem('quantTricksOrder', JSON.stringify(savedOrder));
        
        return { tricks: newTricks };
    })
}));
