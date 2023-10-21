import { useState, useEffect } from 'react';
import {nikelogo} from '../assets/images'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Nike logo or any other custom content */}
      <img src={nikelogo} alt="Nike Logo"/>
    </div>
  );
};

export default CustomCursor;
