import { useEffect, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import VocabCard from './cards/VocabCard';
import QuantCard from './cards/QuantCard';
import { motion } from 'framer-motion';
import type { Trick } from '../types';

interface QuizSession {
  timestamp: string;
  total: number;
  rememberedCount: number;
  forgottenCount: number;
  remembered: Trick[];
  forgotten: Trick[];
  section: string;
}

const Analytics = () => {
  const { setActiveView } = useAppStore();
  const [history, setHistory] = useState<QuizSession[]>([]);

  const loadHistory = () => {
    try {
      const saved = localStorage.getItem('quantTricksAnalytics');
      if (saved) {
        setHistory(JSON.parse(saved));
      } else {
        setHistory([]);
      }
    } catch(e) {
      setHistory([]);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear your study analytics history? This cannot be undone.")) {
      localStorage.removeItem('quantTricksAnalytics');
      loadHistory();
    }
  };

  if (history.length === 0) {
    return (
      <div className="analytics-view" id="analytics-view" style={{ display: 'flex' }}>
        <div className="analytics-header">
            <span className="analytics-title">Study Analytics</span>
        </div>
        <div className="analytics-card" style={{ alignItems: 'center', padding: '3rem', textAlign: 'center' }}>
            <span style={{ fontSize: '3rem' }}>📊</span>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", marginTop: '1rem' }}>No Quiz History Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem', maxWidth: '320px' }}>
              Complete your first Study Quiz session to generate performance analytics!
            </p>
            <button className="study-btn primary-btn" style={{ marginTop: '1.5rem' }} onClick={() => setActiveView('quiz')}>
                Start First Quiz
            </button>
        </div>
      </div>
    );
  }

  const lastSession = history[history.length - 1];
  const masteryRate = Math.round((lastSession.rememberedCount / Math.max(lastSession.total, 1)) * 100);

  // Calculate Tag Strength
  const tagStats: Record<string, { total: number, remembered: number }> = {};
  history.forEach(session => {
      session.remembered.forEach(trick => {
          if (trick.tags) {
              trick.tags.forEach(tag => {
                  if (!tagStats[tag]) tagStats[tag] = { total: 0, remembered: 0 };
                  tagStats[tag].total++;
                  tagStats[tag].remembered++;
              });
          }
      });
      session.forgotten.forEach(trick => {
          if (trick.tags) {
              trick.tags.forEach(tag => {
                  if (!tagStats[tag]) tagStats[tag] = { total: 0, remembered: 0 };
                  tagStats[tag].total++;
              });
          }
      });
  });

  const sortedTags = Object.entries(tagStats)
      .filter(([_, stat]) => stat.total >= 2) // only show tags encountered at least twice
      .sort((a, b) => {
          const rateA = a[1].remembered / a[1].total;
          const rateB = b[1].remembered / b[1].total;
          return rateB - rateA;
      })
      .slice(0, 6);

  return (
    <div className="analytics-view" id="analytics-view" style={{ display: 'flex' }}>
      <div className="analytics-header">
          <span className="analytics-title">Study Dashboard</span>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <span className="analytics-stat-label">Last Session Score</span>
          <div className="analytics-stat-value">{masteryRate}%</div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Remembered {lastSession.rememberedCount} of {lastSession.total} cards in {lastSession.section}
          </span>
        </div>

        <div className="analytics-card">
          <span className="analytics-stat-label">Total Quizzes</span>
          <div className="analytics-stat-value">{history.length}</div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Completed study quiz runs saved in history
          </span>
        </div>

        <div className="analytics-card" style={{ gridColumn: 'span 1' }}>
          <span className="analytics-stat-label">Cumulative Tag Strength</span>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {sortedTags.length === 0 ? (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Not enough data yet. Keep studying!</span>
            ) : (
              sortedTags.map(([tag, stat]) => {
                const rate = Math.round((stat.remembered / stat.total) * 100);
                return (
                  <div key={tag} className="tag-strength-item">
                    <div className="tag-strength-header">
                        <span className="tag-strength-name">{tag}</span>
                        <span className="tag-strength-pct">{rate}%</span>
                    </div>
                    <div className="tag-strength-bar-bg">
                        <motion.div 
                          className="tag-strength-bar-fill" 
                          initial={{ width: 0 }}
                          animate={{ width: `${rate}%` }}
                          transition={{ duration: 1 }}
                        ></motion.div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {lastSession.forgotten.length > 0 && (
        <div className="analytics-review-section">
          <h3 style={{ marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>Forgotten Cards Review Deck</h3>
          <div className="analytics-review-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {lastSession.forgotten.map((trick, i) => (
              <div key={`review-${i}`} style={{ pointerEvents: 'none' }}>
                {trick.section === 'Vocab' ? (
                  <VocabCard trick={trick} index={i} />
                ) : (
                  <QuantCard trick={trick} index={i} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <button className="study-btn" style={{ background: 'transparent', border: '1px solid rgba(255,100,100,0.3)', color: '#ff6b6b' }} onClick={clearHistory}>
              Reset Analytics History
          </button>
      </div>
    </div>
  );
};

export default Analytics;
