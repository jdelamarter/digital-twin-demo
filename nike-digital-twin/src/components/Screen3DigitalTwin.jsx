import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RotatingShoe from './RotatingShoe';
import './Screen3DigitalTwin.css';

const Screen3DigitalTwin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 to match current layout

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

  const handleDragEnd = (event, info) => {
    const threshold = 50; // Minimum drag distance to trigger a swipe
    
    if (info.offset.x < -threshold && currentIndex < boostCards.length - 1) {
      // Swiped left, go to next card
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      // Swiped right, go to previous card
      setCurrentIndex(currentIndex - 1);
    }
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
          initial={{ opacity: 0, y: 20, left: 0, right: 0 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            height: isExpanded ? '660px' : 'max(385px, calc(env(safe-area-inset-bottom) + 365px))',
            left: 0,
            right: 0,
          }}
          transition={{ 
            duration: isExpanded ? 0.3 : 0.6, 
            delay: isExpanded ? 0 : 1.8,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div
          className="description-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: isExpanded ? -275 : 0,  // Move up to maintain distance from top of card
          }}
          transition={{ 
            duration: isExpanded ? 0.3 : 0.6, 
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
                  transition={{ duration: 0.2 }}
                >
                  Wearable now in Nike World
                </motion.span>
              ) : (
                <motion.span
                  key="boost"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
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
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div 
                className="boost-cards-row"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
              >
                {boostCards.map((card, index) => {
                  const position = index - currentIndex;
                  const isCenter = position === 0;
                  const isVisible = Math.abs(position) <= 1;
                  
                  // Calculate scale and opacity based on position
                  const scale = isCenter ? 1 : 0.77; // 151/196 ≈ 0.77
                  const opacity = isCenter ? 1 : 0.2;
                  
                  // Card dimensions - based on height 196px, width appears to be ~157px
                  const fullCardWidth = 157; // Actual rendered card width
                  const gap = 12; // Gap between card edges
                  
                  // Spacing calculation:
                  // Distance from center of center card to center of adjacent card
                  // = (fullCardWidth / 2) + gap + (fullCardWidth * 0.77 / 2)
                  const spacing = (fullCardWidth / 2) + gap + ((fullCardWidth * 0.77) / 2);
                  
                  return (
                    <motion.div
                      key={index}
                      className="boost-card"
                      animate={{
                        scale,
                        opacity: isVisible ? opacity : 0,
                        x: position * spacing,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut'
                      }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        marginLeft: `-${fullCardWidth / 2}px`,
                      }}
                    >
                      <img src={card} alt={`Boost card ${index + 1}`} />
                    </motion.div>
                  );
                })}
              </motion.div>
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
              transition={{ duration: 0.2, delay: 0.1 }}
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
