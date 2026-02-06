import { motion } from 'framer-motion';
import './Screen2Verified.css';

const Screen2Verified = () => {
  return (
    <motion.div
      className="screen2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="screen2-content">
        <motion.div
          className="verified-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3,
            exit: { duration: 0.3, delay: 0 }
          }}
        >
          VERIFIED
        </motion.div>
        
        <motion.div
          className="confirmation-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            exit: { duration: 0.3, delay: 0 }
          }}
        >
          <div>Jana, your Digital Twin</div>
          <div>is ready to claim</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Screen2Verified;
