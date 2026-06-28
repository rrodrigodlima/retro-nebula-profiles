import React, { useState, useEffect } from 'react';
import './back.css'; // Importe o CSS acima

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;

  return (
    <button 
      className="aero-arrow" 
      onClick={scrollToTop} 
      style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
    >
      <svg viewBox="0 0 24 24" fill="white">
        <path
          d="m 12.437913,1.3276768 a 2.6266927,2.6266927 0 0 0 -0.617287,0.024049 2.6266927,2.6266927 0 0 0 -1.447014,0.7375366 l -0.02204,0.022045 a 2.6266926,2.6266926 0 0 0 0,3.7157412 l 3.547391,3.5473917 H 2.6274739 A 2.6266927,2.6266927 0 0 0 0,11.999911 2.6266927,2.6266927 0 0 0 2.6274739,14.625381 H 13.898956 l -3.54739,3.54739 a 2.6266926,2.6266926 0 0 0 0,3.715741 l 0.02204,0.02204 a 2.6266928,2.6266928 0 0 0 3.715741,0 L 24,11.999911 14.089353,2.0892634 a 2.6266927,2.6266927 0 0 0 -1.65144,-0.7615866 z"
          transform="rotate(-90 12 12)"
        />
      </svg>
    </button>
  );
};

export default BackToTop;