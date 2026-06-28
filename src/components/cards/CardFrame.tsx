import React from 'react';

const CardFrame: React.FC = () => {
  return (
    <div className="card-frame-container" style={{ position: 'absolute', inset: 0, zIndex: 0, borderRadius: '16px', overflow: 'hidden' }}>
      <svg 
        viewBox="0 0 400 560" 
        preserveAspectRatio="xMidYMid slice" 
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <pattern id="diamondPattern" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0,12 L24,12 M12,0 L12,24" stroke="rgba(255,255,255,0.025)" strokeWidth="1.5"/>
          </pattern>
          
          <linearGradient id="theme-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--text-main)"/>
            <stop offset="50%" stopColor="var(--text-muted)"/>
            <stop offset="100%" stopColor="var(--text-main)"/>
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>



        <g filter="url(#glow)">
          {/* Main Outer Border with Inward Curved Corners */}
          <path d="
            M 15 50 
            A 35 35 0 0 1 50 15
            L 350 15
            A 35 35 0 0 1 385 50
            L 385 510
            A 35 35 0 0 1 350 545
            L 50 545
            A 35 35 0 0 1 15 510
            Z
          " fill="none" stroke="url(#theme-gradient)" strokeWidth="2" opacity="0.85" />

          {/* Double inner line with precise physical cutouts for text */}
          <path d="
            M 110 538
            L 53 538
            A 31 31 0 0 1 22 507
            L 22 53 
            A 31 31 0 0 1 53 22
            L 130 22
            
            M 270 22
            L 347 22
            A 31 31 0 0 1 378 53
            L 378 507
            A 31 31 0 0 1 347 538
            L 290 538
          " fill="none" stroke="url(#theme-gradient)" strokeWidth="1" opacity="0.6" />

          {/* Decorative diamond accents on borders */}
          <polygon points="200,40 204,45 200,50 196,45" fill="url(#theme-gradient)" />
          <polygon points="200,510 204,515 200,520 196,515" fill="url(#theme-gradient)" />
        </g>
      </svg>
    </div>
  );
};

export default CardFrame;
