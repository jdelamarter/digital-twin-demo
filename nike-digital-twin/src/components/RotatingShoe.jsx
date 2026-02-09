import { useState, useEffect, useRef } from 'react';
import './RotatingShoe.css';

const RotatingShoe = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const totalFrames = 140;
  
  useEffect(() => {
    let loadedCount = 0;
    const images = [];
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(4, '0');
      img.src = `/shoe-frames/${frameNumber}.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
      
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);
  
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const fps = 32; // 32 frames per second
    const frameDuration = 1000 / fps; // milliseconds per frame
    
    const animate = (timestamp) => {
      if (lastFrameTimeRef.current === 0) {
        lastFrameTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - lastFrameTimeRef.current;
      
      if (elapsed >= frameDuration) {
        setCurrentFrame((prev) => (prev + 1) % totalFrames);
        lastFrameTimeRef.current = timestamp - (elapsed % frameDuration);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastFrameTimeRef.current = 0;
    };
  }, [imagesLoaded]);
  
  const frameNumber = String(currentFrame + 1).padStart(4, '0');
  
  return (
    <div className="rotating-shoe">
      {imagesLoaded ? (
        <img
          src={`/shoe-frames/${frameNumber}.png`}
          alt="Nike Dunk High x AMBUSH"
          className="shoe-image"
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default RotatingShoe;
