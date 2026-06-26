import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TopNav = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const controls = useAnimation();
  
  // Initialize theme from body attribute if it exists
  useEffect(() => {
    const isLight = document.body.getAttribute('data-color-scheme') === 'light';
    setIsLightMode(isLight);
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isLightMode;
    setIsLightMode(newTheme);
    
    if (newTheme) {
      document.body.setAttribute('data-color-scheme', 'light');
      document.body.classList.add('light-mode');
    } else {
      document.body.setAttribute('data-color-scheme', 'dark');
      document.body.classList.remove('light-mode');
    }
    
    // Coin flip animation matching exactly the original easing and arc
    await controls.start({
      rotateY: newTheme ? 180 : 0,
      y: [0, -18, -25, -12, 4, 0],
      scale: [1, 1.08, 1.12, 1.08, 1.18, 1],
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1]
      }
    });
  };

  // Glass Slider Logic
  const [glassPercent, setGlassPercent] = useState(0.5);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateGlassEffect = (percent: number) => {
    setGlassPercent(percent);
    
    const isLight = document.body.classList.contains('light-mode');
    
    const blurRadius = percent * 45;
    const saturateVal = 100 + percent * 120;
    
    const glassOpacity = isLight ? 0.15 + percent * 0.70 : 0.35 + percent * 0.45;
    const cardOpacity = isLight ? 0.05 + percent * 0.80 : 0.01 + percent * 0.17;
    const borderOpacity = isLight ? 0.04 + percent * 0.12 : 0.03 + percent * 0.22;
    
    const glassBg = isLight ? `rgba(255, 255, 255, ${glassOpacity})` : `rgba(15, 15, 22, ${glassOpacity})`;
    const cardBg = `rgba(255, 255, 255, ${cardOpacity})`;
    const cardBorder = isLight ? `rgba(0, 0, 0, ${borderOpacity})` : `rgba(255, 255, 255, ${borderOpacity})`;
    
    document.documentElement.style.setProperty('--glass-blur', `blur(${blurRadius}px) saturate(${saturateVal}%)`);
    document.documentElement.style.setProperty('--glass-bg', glassBg);
    document.documentElement.style.setProperty('--card-bg', cardBg);
    document.documentElement.style.setProperty('--card-border', cardBorder);
  };

  useEffect(() => {
    // Re-apply opacity if theme changes
    updateGlassEffect(glassPercent);
  }, [isLightMode]);

  const handlePointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    
    const rect = track.getBoundingClientRect();
    const handlePointerMove = (moveEvent: PointerEvent) => {
      let percent = (moveEvent.clientX - rect.left) / rect.width;
      percent = Math.max(0, Math.min(1, percent));
      updateGlassEffect(percent);
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    
    // Trigger initial click
    let percent = (e.clientX - rect.left) / rect.width;
    percent = Math.max(0, Math.min(1, percent));
    updateGlassEffect(percent);
  };

  let glassLabel = 'Balanced';
  if (glassPercent < 0.1) glassLabel = 'Crystal Clear';
  else if (glassPercent < 0.3) glassLabel = 'Subtle';
  else if (glassPercent > 0.9) glassLabel = 'Max Frost';
  else if (glassPercent > 0.7) glassLabel = 'Heavy Frost';

  return (
    <div className="top-nav">
      <div className="glass-slider-container" title="Adjust Glass Blur & Opacity Smoothly">
        <span className="glass-slider-icon">🔮</span>
        <div className="glass-slider-track-wrapper">
          <span className="glass-slider-label">Clear</span>
          <div 
            className="glass-slider-track" 
            ref={trackRef} 
            onPointerDown={handlePointerDown}
            style={{ cursor: 'pointer', touchAction: 'none' }}
          >
            <div 
              className="glass-slider-handle" 
              style={{ left: `${glassPercent * 100}%`, pointerEvents: 'none' }}
            ></div>
          </div>
          <span className="glass-slider-label">Frosted</span>
        </div>
        <div className="glass-slider-value">{glassLabel}</div>
      </div>

      <div className="theme-toggle" onClick={toggleTheme} title="Toggle Light/Dark Mode" style={{ perspective: '800px', cursor: 'pointer' }}>
        <motion.div 
          className="toggle-inner"
          animate={controls}
          initial={{ rotateY: 0, y: 0, scale: 1 }}
          style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
        >
          <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', backfaceVisibility: 'hidden', inset: 0, margin: 'auto' }}>
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', backfaceVisibility: 'hidden', inset: 0, margin: 'auto' }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default TopNav;
