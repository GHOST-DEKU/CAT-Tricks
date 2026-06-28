import React, { useState } from 'react';
import type { Trick } from '../../types';
import CardFrame from './CardFrame';

interface Props {
  trick: Trick;
  index: number;
}

const VocabCard: React.FC<Props> = ({ trick, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isVocab = trick.section.toLowerCase() === 'vocab';
  const label1 = isVocab ? 'Meaning' : 'What it is';
  const label2 = isVocab ? 'Pronunciation' : 'Where to Use';
  const label3 = isVocab ? 'Origin & Memory' : 'The Logic';
  const label5 = isVocab ? 'Example & Swap Test' : 'Example';
  
  const icon1 = trick.icon1 || (isVocab ? '🔍' : '🎯');
  const icon2 = trick.icon2 || (isVocab ? '🗣️' : '🧠');
  const icon3 = trick.icon3 || (isVocab ? '🏛️' : '📐');
  const icon5 = trick.icon5 || (isVocab ? '💡' : '📝');

  const speakWord = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(trick.title);
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
          <div className="card-suit suit-top-left black">
            <span>{index + 1}</span>
            <span className="suit-icon">V</span>
          </div>
          <div className="card-suit suit-bottom-right black">
            <span>{index + 1}</span>
            <span className="suit-icon">V</span>
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
          
          <h2>
            {trick.title}
            <button className="speaker-btn" title="Listen to pronunciation" onClick={speakWord}>🔊</button>
          </h2>
          
            <span className="tap-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              Click to flip
            </span>
        </div>

        <div className="card-back">
          <h3>Vocabulary Breakdown</h3>
          
          {trick.whatItIs && (
            <div className="info-section">
              <span className="info-label">{icon1} {label1}</span>
              <div className="info-content">{trick.whatItIs}</div>
            </div>
          )}
          
          {trick.whereToUse && (
            <div className="info-section">
              <span className="info-label">{icon2} {label2}</span>
              <div className="info-content" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{trick.whereToUse}</span>
                <button className="speaker-btn mini" title="Listen to pronunciation" onClick={speakWord}>🔊</button>
              </div>
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
              <span className="info-label">{trick.icon4 || '📚'} Synonyms</span>
              <div className="formula-box" dangerouslySetInnerHTML={{ __html: trick.formula }}></div>
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

export default VocabCard;
