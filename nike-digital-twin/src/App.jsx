import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Screen1Verifying from './components/Screen1Verifying';
import Screen2Verified from './components/Screen2Verified';
import Screen3DigitalTwin from './components/Screen3DigitalTwin';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  useEffect(() => {
    // Screen 1 displays for 4 seconds
    const timer1 = setTimeout(() => {
      setCurrentScreen(2);
    }, 4000);

    // Screen 2 displays for 3 seconds (at 4s mark, transitions to 3 at 7s mark)
    const timer2 = setTimeout(() => {
      setCurrentScreen(3);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Change body background color based on current screen
  useEffect(() => {
    if (currentScreen === 3) {
      document.body.style.backgroundColor = '#080121';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
    }
  }, [currentScreen]);

  return (
    <div className="app">
      {/* Persistent Nike Logo for screens 1 and 2 */}
      <AnimatePresence>
        {currentScreen <= 2 && (
          <motion.img
            key="nike-logo"
            src="/logo/Logo_NIKE.svg"
            alt="Nike"
            className="persistent-nike-logo"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {currentScreen === 1 && <Screen1Verifying key="screen1" />}
        {currentScreen === 2 && <Screen2Verified key="screen2" />}
        {currentScreen === 3 && <Screen3DigitalTwin key="screen3" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
