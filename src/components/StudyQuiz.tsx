import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import VocabCard from './cards/VocabCard';
import QuantCard from './cards/QuantCard';
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

const QuizCard = ({ 
  trick, 
  index, 
  isTop, 
  onSwipe 
}: { 
  trick: Trick; 
  index: number; 
  isTop: boolean; 
  onSwipe: (remembered: boolean) => void 
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const dragControls = useAnimation();

  const handleDragEnd = async (_event: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      await dragControls.start({ x: 500, opacity: 0, transition: { duration: 0.3 } });
      onSwipe(true);
    } else if (info.offset.x < -threshold) {
      await dragControls.start({ x: -500, opacity: 0, transition: { duration: 0.3 } });
      onSwipe(false);
    } else {
      dragControls.start({ x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } });
    }
  };

  // Allow clicking the side slots to trigger a swipe
  useEffect(() => {
    // Entrance animation
    dragControls.start({ scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } });
  }, [dragControls]);

  return (
    <motion.div
      className="card in-pile"
      style={{
        x,
        rotate,
        opacity,
        position: 'absolute',
        zIndex: isTop ? 10 : 1,
        pointerEvents: isTop ? 'auto' : 'none',
        display: 'block'
      }}
      animate={dragControls}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={isTop ? { scale: 0.98 } : {}}
      initial={{ scale: 0.95, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {trick.section === 'Vocab' ? (
        <VocabCard trick={trick} index={index} />
      ) : (
        <QuantCard trick={trick} index={index} />
      )}
    </motion.div>
  );
};

const StudyQuiz = () => {
  const { tricks, activeSection, setActiveView } = useAppStore();
  const [quizQueue, setQuizQueue] = useState<Trick[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ remembered: Trick[], forgotten: Trick[] }>({ remembered: [], forgotten: [] });

  useEffect(() => {
    // Generate quiz queue when mounted
    const sectionTricks = tricks.filter(t => activeSection === 'all' || t.section.toLowerCase() === activeSection.toLowerCase());
    const shuffled = [...sectionTricks].sort(() => 0.5 - Math.random());
    setQuizQueue(shuffled.slice(0, 15));
  }, [tricks, activeSection]);

  const handleSwipe = (remembered: boolean) => {
    const trick = quizQueue[currentIndex];
    setResults(prev => ({
      remembered: remembered ? [...prev.remembered, trick] : prev.remembered,
      forgotten: !remembered ? [...prev.forgotten, trick] : prev.forgotten
    }));
    setCurrentIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (quizQueue.length > 0 && currentIndex >= quizQueue.length) {
      // Save to local storage
      const session: QuizSession = {
        timestamp: new Date().toLocaleString(),
        total: quizQueue.length,
        rememberedCount: results.remembered.length,
        forgottenCount: results.forgotten.length,
        remembered: results.remembered,
        forgotten: results.forgotten,
        section: activeSection
      };

      try {
        const saved = localStorage.getItem('quantTricksAnalytics');
        let history = [];
        if (saved) history = JSON.parse(saved);
        if (!Array.isArray(history)) history = [];
        history.push(session);
        localStorage.setItem('quantTricksAnalytics', JSON.stringify(history));
      } catch(e) {}

      // Switch to analytics after a small delay
      setTimeout(() => setActiveView('analytics'), 600);
    }
  }, [currentIndex, quizQueue.length, results, activeSection, setActiveView]);

  if (quizQueue.length === 0) {
    return (
      <div className="quiz-view" id="quiz-view" style={{ display: 'flex' }}>
         <div style={{ textAlign: 'center', width: '100%', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Not enough cards to generate a quiz.</p>
        </div>
      </div>
    );
  }

  const percentComplete = Math.round((currentIndex / quizQueue.length) * 100);

  return (
    <div className="quiz-view" id="quiz-view" style={{ display: 'flex' }}>
      <div className="quiz-progress-container">
        <div className="quiz-progress-text">
            <span id="quiz-progress-label">Card {Math.min(currentIndex + 1, quizQueue.length)} of {quizQueue.length}</span>
            <span id="quiz-progress-percent">{percentComplete}% Complete</span>
        </div>
        <div className="quiz-progress-bar-track">
            <motion.div 
              className="quiz-progress-bar-fill" 
              id="quiz-progress-bar" 
              initial={{ width: 0 }}
              animate={{ width: `${percentComplete}%` }}
              transition={{ duration: 0.3 }}
            ></motion.div>
        </div>
      </div>

      <div className="quiz-board" id="quiz-board">
        <div className="quiz-slot left" onClick={() => {
            if (currentIndex < quizQueue.length) handleSwipe(false);
        }}>
          <div className="quiz-slot-content">I Forgot</div>
        </div>
        
        <div className="quiz-slot right" onClick={() => {
            if (currentIndex < quizQueue.length) handleSwipe(true);
        }}>
          <div className="quiz-slot-content">I Remember</div>
        </div>

        {quizQueue.map((trick, index) => {
          if (index < currentIndex) return null; // Already swiped
          if (index > currentIndex + 2) return null; // Only render top 3 for performance
          
          return (
            <QuizCard 
              key={`${trick.title}-${index}`}
              trick={trick}
              index={index}
              isTop={index === currentIndex}
              onSwipe={handleSwipe}
            />
          );
        }).reverse()}
      </div>
    </div>
  );
};

export default StudyQuiz;
