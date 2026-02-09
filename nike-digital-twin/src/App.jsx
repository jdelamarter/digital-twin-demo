import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Screen1Verifying from './components/Screen1Verifying';
import Screen2Verified from './components/Screen2Verified';
import Screen3DigitalTwin from './components/Screen3DigitalTwin';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Mark initial load as complete after a brief moment
    const initialTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    // Screen 1 displays for 4 seconds
    const timer1 = setTimeout(() => {
      setCurrentScreen(2);
    }, 4000);

    // Screen 2 displays for 3 seconds (at 4s mark, transitions to 3 at 7s mark)
    const timer2 = setTimeout(() => {
      setCurrentScreen(3);
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Change body background color based on current screen
  useEffect(() => {
    // Skip on initial load to prevent flash
    if (isInitialLoad) return;

    const html = document.documentElement;
    const body = document.body;
    const root = document.getElementById('root');
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (currentScreen === 3) {
      // Change everything instantly at the same moment
      html.classList.add('dark-theme');
      body.classList.add('dark-theme');
      root.classList.add('dark-theme');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#221144');
      }
    } else {
      html.classList.remove('dark-theme');
      body.classList.remove('dark-theme');
      root.classList.remove('dark-theme');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#FFFFFF');
      }
    }
  }, [currentScreen, isInitialLoad]);

  return (
    <div className="app">
      {/* Viewport background that covers safe areas */}
      <div className={`viewport-background ${currentScreen === 3 ? 'dark' : ''}`} />
      
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
