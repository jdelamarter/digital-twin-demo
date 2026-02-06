import { motion } from 'framer-motion';
import RotatingShoe from './RotatingShoe';
import './Screen3DigitalTwin.css';

const Screen3DigitalTwin = () => {
  return (
    <motion.div
      className="screen3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background fade in first */}
      <motion.div
        className="screen3-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="screen3-content">
        {/* Verified Digital Twin Badge */}
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
        
        {/* Title */}
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
        
        {/* Rotating Shoe - fades in second */}
        <motion.div
          className="shoe-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <RotatingShoe />
        </motion.div>
        
        {/* Rotation Icon */}
        <motion.div
          className="rotation-icon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4C10.268 4 4 10.268 4 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 32C25.732 32 32 25.732 32 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 14L4 18L8 18" fill="white"/>
            <path d="M30 22L32 18L28 18" fill="white"/>
          </svg>
        </motion.div>
        
        {/* Description Text */}
        <motion.div
          className="description-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <img 
            src="/assets/logos/MetaHorizon Logo_White.png" 
            alt="Meta Horizon" 
            className="meta-horizon-logo"
          />
          In-game jump boost
          <br />
          Wearable now in Nike World
        </motion.div>
        
        {/* Frosted Glass Button */}
        <motion.button
          className="claim-button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          Claim in Meta Horizon
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Screen3DigitalTwin;
