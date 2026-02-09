import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RotatingShoe from './RotatingShoe';
import './Screen3DigitalTwin.css';

const Screen3DigitalTwin = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 to match current layout
  const [dragOffset, setDragOffset] = useState(0); // Track real-time drag offset

  const boostCards = [
    '/boost-cards/card-1.png',
    '/boost-cards/card-2.png',
    '/boost-cards/card-3.png',
    '/boost-cards/card-4.png',
    '/boost-cards/card-5.png',
  ];

  const openMetaHorizonApp = () => {
    // Detect device type
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isMobile = isIOS || isAndroid;

    if (isMobile) {
      // Try Universal Link first (Meta's web URL that may auto-open app if installed)
      const universalLink = 'https://www.meta.com/experiences/horizon-worlds/';
      
      // Try opening universal link
      window.location.href = universalLink;
      
      // If universal link doesn't work, redirect to app store after delay
      const redirectTimeout = setTimeout(() => {
        if (isIOS) {
          // iOS App Store
          window.location.href = 'https://apps.apple.com/app/meta-horizon-worlds/id1622015883';
        } else if (isAndroid) {
          // Google Play Store
          window.location.href = 'https://play.google.com/store/apps/details?id=com.meta.horizon.worlds';
        }
      }, 2500);
      
      // Clear timeout if page loses focus (indicates something opened)
      const handleBlur = () => {
        clearTimeout(redirectTimeout);
        window.removeEventListener('blur', handleBlur);
      };
      
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(redirectTimeout);
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        }
      };
      
      window.addEventListener('blur', handleBlur);
      document.addEventListener('visibilitychange', handleVisibilityChange);
    } else {
      // Desktop: open Meta Horizon Worlds website in new tab
      window.open('https://www.meta.com/experiences/horizon-worlds/', '_blank');
    }
  };

  const handleButtonClick = () => {
    if (!isExpanded) {
      // First tap: expand the card to show carousel
      setIsExpanded(true);
    } else {
      // Second tap: open Meta Horizon app
      openMetaHorizonApp();
    }
  };

  const handleDrag = (event, info) => {
    // Update drag offset in real-time as user drags
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (event, info) => {
    // Card dimensions for calculations
    const fullCardWidth = 157;
    const gap = 12;
    const spacing = (fullCardWidth / 2) + gap + ((fullCardWidth * 0.77) / 2);
    
    // Calculate which card is closest to center based on drag offset
    const offsetInCards = -info.offset.x / spacing;
    const targetIndex = Math.round(currentIndex + offsetInCards);
    
    // Clamp to valid range
    const newIndex = Math.max(0, Math.min(boostCards.length - 1, targetIndex));
    
    // Update index and reset drag offset
    setCurrentIndex(newIndex);
    setDragOffset(0);
  };

  return (
    <motion.div
      className="screen3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="screen3-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <motion.div 
                className="boost-cards-row"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
              >
                {boostCards.map((card, index) => {
                  // Card dimensions
                  const fullCardWidth = 157;
                  const gap = 12;
                  const spacing = (fullCardWidth / 2) + gap + ((fullCardWidth * 0.77) / 2);
                  
                  // Calculate position with drag offset
                  const basePosition = index - currentIndex;
                  const dragOffsetInCards = dragOffset / spacing;
                  const position = basePosition + dragOffsetInCards;
                  
                  // Calculate distance from center for smooth interpolation
                  const distanceFromCenter = Math.abs(position);
                  const isVisible = distanceFromCenter <= 2;
                  
                  // Smooth scale interpolation: 1.0 at center, 0.77 at distance 1+
                  const scale = Math.max(0.77, 1 - (distanceFromCenter * 0.23));
                  
                  // Smooth opacity interpolation: 1.0 at center, 0.2 at distance 1+
                  const targetOpacity = Math.max(0.2, 1 - (distanceFromCenter * 0.8));
                  
                  return (
                    <motion.div
                      key={index}
                      className="boost-card"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        marginLeft: `-${fullCardWidth / 2}px`,
                      }}
                      animate={{
                        x: position * spacing,
                        scale: scale,
                        opacity: isVisible ? targetOpacity : 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
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
