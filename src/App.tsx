import { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import TopNav from './components/TopNav';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import StudyQuiz from './components/StudyQuiz';
import Analytics from './components/Analytics';
import WordOfTheDay from './components/WordOfTheDay';

let mathJaxPromise: Promise<any> = Promise.resolve();

function App() {
  const { tricks, activeView, activeSection } = useAppStore();

  useEffect(() => {
    // Safely chain MathJax typesetting to prevent concurrent rendering crashes
    const renderMath = () => {
      setTimeout(() => {
        if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
          mathJaxPromise = mathJaxPromise.then(() => {
            return (window as any).MathJax.typesetPromise().catch((err: any) => console.log('MathJax error:', err));
          });
        }
      }, 50);
    };
    renderMath();
  }, [tricks, activeView, activeSection]);

  useEffect(() => {
    // Cursor glow effect
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        cursorGlow.style.display = 'block';
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      } else {
        cursorGlow.style.display = 'none';
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <>
      {/* Ambient Background Blobs */}
      <div className="bg-glow-blobs"></div>

      {/* Cursor Glow */}
      <div className="cursor-glow" id="cursor-glow"></div>

      <TopNav />

      <Header />

      {activeView === 'cards' && activeSection === 'Vocab' && <WordOfTheDay />}
      {activeView === 'cards' && <CardGrid />}
      {activeView === 'quiz' && <StudyQuiz />}
      {activeView === 'analytics' && <Analytics />}
    </>
  );
}

export default App;
