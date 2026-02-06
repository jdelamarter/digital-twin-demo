import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RotatingShoe from './RotatingShoe';
import './Screen3DigitalTwin.css';

const Screen3DigitalTwin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const boostCards = [
    '/boost-cards/card-1.png',
    '/boost-cards/card-2.png',
    '/boost-cards/card-3.png',
    '/boost-cards/card-4.png',
    '/boost-cards/card-5.png',
  ];

  const handleButtonClick = () => {
    setIsExpanded(true);
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % boostCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + boostCards.length) % boostCards.length);
  };

  return (
    <motion.div
      className="screen3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="screen3-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="screen3-content">
        <motion.div
          className="verified-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="6" fill="white"/>
            <path d="M3 6L5 8L9 4" stroke="#4B2D8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Verified Digital Twin</span>
        </motion.div>
        
        <motion.h1
          className="shoe-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Nike Dunk High
          <br />
          x AMBUSH
        </motion.h1>
        
        <motion.div
          className="shoe-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <RotatingShoe />
        </motion.div>
        
        <motion.div
          className="meta-card-background"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            height: isExpanded ? 'max(520px, calc(env(safe-area-inset-bottom) + 500px))' : 'max(385px, calc(env(safe-area-inset-bottom) + 365px))',
            left: isExpanded ? 0 : 20,
            right: isExpanded ? 0 : 20,
          }}
          transition={{ 
            duration: 0.6, 
            delay: isExpanded ? 0 : 1.8,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="description-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: isExpanded ? -80 : 0,
          }}
          transition={{ 
            duration: 0.6, 
            delay: isExpanded ? 0 : 2.0,
            ease: 'easeInOut'
          }}
        >
          <motion.img 
            src="/logo/Logo_NIKE_White.png"
            alt="Nike" 
            className="nike-logo-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          />
          <div className="text-transition-wrapper">
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.span
                  key="wearable"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Wearable now in Nike World
                </motion.span>
              ) : (
                <motion.span
                  key="boost"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Choose in-game boost
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="boost-carousel-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <button className="carousel-nav prev" onClick={prevCard} aria-label="Previous card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="boost-carousel">
                <motion.div 
                  className="carousel-track"
                  animate={{ x: -currentCard * 100 + '%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {boostCards.map((card, index) => (
                    <div key={index} className="carousel-slide">
                      <img src={card} alt={`Boost card ${index + 1}`} />
                    </div>
                  ))}
                </motion.div>
              </div>

              <button className="carousel-nav next" onClick={nextCard} aria-label="Next card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          className="claim-button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          onClick={handleButtonClick}
          disabled={isExpanded}
        >
          {!isExpanded ? (
            'Choose in-game boost'
          ) : (
            <motion.div 
              className="button-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img 
                src="/logo/MetaHorizon Logo_White.png" 
                alt="Meta Horizon" 
                className="meta-logo"
              />
              Claim in Meta Horizon
            </motion.div>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Screen3DigitalTwin;
