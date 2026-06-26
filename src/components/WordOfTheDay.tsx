import { useState, useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

const WordOfTheDay = () => {
  const { tricks, activeSection } = useAppStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const wod = useMemo(() => {
    const vocabWords = tricks.filter(t => t.section === 'Vocab');
    if (vocabWords.length === 0) return null;
    
    // Deterministic calculation based on calendar days since a fixed date (Jan 1, 2026)
    const now = new Date();
    const startOfEpoch = new Date(2026, 0, 1);
    const diffInMs = now.getTime() - startOfEpoch.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    const index = Math.abs(diffInDays) % vocabWords.length;
    return vocabWords[index];
  }, [tricks]);

  if (!wod || activeSection !== 'Vocab') {
    return null;
  }

  const speakWord = (word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en-'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser.");
    }
  };

  const todayStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div id="word-of-the-day-container" style={{ width: '100%', maxWidth: '900px', marginBottom: '2.5rem', animation: 'fadeInDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
      <div className="wod-card">
        <div className="wod-header">
            <div className="wod-badge">
                <span className="wod-badge-glow"></span>
                🏆 Word of the Day
            </div>
            <div className="wod-date">{todayStr}</div>
        </div>
        <div className="wod-body">
            <div className="wod-main-info">
                <h2 className="wod-title">
                    {wod.title}
                    <button 
                      className="speaker-btn" 
                      onClick={(e) => speakWord(wod.title, e)} 
                      title="Listen to pronunciation" 
                      style={{ verticalAlign: 'middle', marginLeft: '8px' }}
                    >
                      🗣️
                    </button>
                </h2>
                <div className="wod-pronunciation">/{wod.whereToUse}/</div>
            </div>
            
            <div className="wod-definition">
                <div className="wod-label">Meaning</div>
                <div className="wod-text">{wod.whatItIs}</div>
            </div>
            
            <button 
              className="wod-expand-btn" 
              id="wod-expand-btn" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
                <span>{isExpanded ? 'Hide Details' : 'Show Details (Origin, Memory, Examples)'}</span>
                <motion.svg 
                  className="wod-chevron" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  style={{ verticalAlign: 'middle', marginLeft: '8px' }}
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  className="wod-details expanded" 
                  id="wod-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                    <div className="wod-details-inner">
                        <div className="wod-divider"></div>
                        
                        <div className="wod-detail-row">
                            <div className="wod-detail-col">
                                <div className="wod-label">Origin & Memory Anchor</div>
                                <div className="wod-text" style={{ lineHeight: 1.6 }}>{wod.logic}</div>
                            </div>
                            <div className="wod-detail-col">
                                <div className="wod-label">Synonyms / Classification</div>
                                <div className="wod-text" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div><strong>Synonyms:</strong> {wod.formula || 'N/A'}</div>
                                    <div><strong>Category:</strong> {wod.tags ? wod.tags.join(', ') : 'N/A'} ({wod.topic || 'N/A'})</div>
                                    {/* @ts-ignore */}
                                    <div><strong>Root Group:</strong> {wod.rootGroup || 'N/A'}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="wod-detail-row" style={{ marginBottom: 0 }}>
                            <div className="wod-detail-col" style={{ gridColumn: 'span 2' }}>
                                <div className="wod-label">Example & Contextual Swap Test</div>
                                <div className="wod-text example-box" style={{ background: 'rgba(255, 214, 10, 0.04)', borderLeft: '3px solid var(--accent-1)', padding: '0.85rem 1rem', borderRadius: '0 12px 12px 0', marginTop: '0.25rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    {wod.example}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
