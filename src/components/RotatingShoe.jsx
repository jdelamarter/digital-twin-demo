import { useState, useEffect, useRef } from 'react';
import './RotatingShoe.css';

const RotatingShoe = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);
  const totalFrames = 140;
  
  // Preload all images
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
  
  // Animate rotation - smooth and faster animation
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const fps = 25; // 140 frames / 25fps = 5.6 seconds per rotation - smooth and faster
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, 1000 / fps);
    
    return () => clearInterval(interval);
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
