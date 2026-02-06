import { motion } from 'framer-motion';
import './Screen1Verifying.css';

const Screen1Verifying = () => {
  return (
    <motion.div
      className="screen1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="screen1-content">
        {/* Verifying Purchase Text */}
        <div className="verifying-text">VERIFYING PURCHASE</div>
        
        {/* Loading Spinner */}
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Screen1Verifying;
