import React, { useState } from 'react';
import type { Trick } from '../../types';
import CardFrame from './CardFrame';

interface Props {
  trick: Trick;
  index: number;
}

const QuantCard: React.FC<Props> = ({ trick, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isVocab = trick.section === 'Vocab' || trick.section === 'VARC';
  const label1 = isVocab ? 'Meaning' : 'What it is';
  const label2 = isVocab ? 'Pronunciation' : 'Where to Use';
  const label3 = isVocab ? 'Origin & Memory' : 'The Logic';
  const label4 = isVocab ? 'Usage' : 'The Formula';
  const label5 = isVocab ? 'Example & Swap Test' : 'Example';
  
  const icon1 = trick.icon1 || (isVocab ? '🔍' : '🎯');
  const icon2 = trick.icon2 || (isVocab ? '🗣️' : '🧠');
  const icon3 = trick.icon3 || (isVocab ? '🏛️' : '📐');
  const icon4 = trick.icon4 || (isVocab ? '✏️' : '∑');
  const icon5 = trick.icon5 || (isVocab ? '💡' : '📝');

  return (
    <div 
      className={`card ${trick.section.toLowerCase()}-card ${isFlipped ? 'is-flipped' : ''}`} 
      data-section={trick.section} 
      data-title={trick.title}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <CardFrame />
          <div className="card-suit suit-top-left red">
            <span>{index + 1}</span>
            <span className="suit-icon">Q</span>
          </div>
          <div className="card-suit suit-bottom-right red">
            <span>{index + 1}</span>
            <span className="suit-icon">Q</span>
          </div>

          <div className="card-breadcrumb card-module">{trick.module}</div>
          <div className="card-breadcrumb card-topic-bottom">{trick.topic}</div>
          
          {trick.tags && trick.tags.length > 0 && (
            <div className="card-tags">
              {trick.tags.map(tag => (
                <span key={tag} className="tag-pill"><span className="tag-dot"></span>{tag}</span>
              ))}
            </div>
          )}
          
          <h2>{trick.title}</h2>
          
            <span className="tap-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              Click to flip
            </span>
        </div>

        <div className="card-back">
          <h3>Trick Breakdown</h3>
          
          {trick.whatItIs && (
            <div className="info-section">
              <span className="info-label">{icon1} {label1}</span>
              <div className="info-content">{trick.whatItIs}</div>
            </div>
          )}
          
          {trick.whereToUse && (
            <div className="info-section">
              <span className="info-label">{icon2} {label2}</span>
              <div className="info-content">{trick.whereToUse}</div>
            </div>
          )}
          
          {trick.logic && (
            <div className="info-section">
              <span className="info-label">{icon3} {label3}</span>
              <div className="info-content" dangerouslySetInnerHTML={{ __html: trick.logic }}></div>
            </div>
          )}
          
          {trick.formula && (
            <div className="info-section">
              <span className="info-label">{icon4} {label4}</span>
              <div className="info-content formula-box" dangerouslySetInnerHTML={{ __html: trick.formula }}></div>
            </div>
          )}
          
          {trick.example && (
            <div className="info-section">
              <span className="info-label">{icon5} {label5}</span>
              <div className="info-content example-box" dangerouslySetInnerHTML={{ __html: trick.example }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuantCard;
