import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Exibe o botão se rolar mais de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '3em',
        height: '3em',
        padding: '0.8em',
        borderRadius: '100%',
        border: '1px solid #2596be',
        background: '#2596be',
        cursor: 'pointer',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="m 12.437913,1.3276768 a 2.6266927,2.6266927 0 0 0 -0.617287,0.024049 2.6266927,2.6266927 0 0 0 -1.447014,0.7375366 l -0.02204,0.022045 a 2.6266926,2.6266926 0 0 0 0,3.7157412 l 3.547391,3.5473917 H 2.6274739 A 2.6266927,2.6266927 0 0 0 0,11.999911 2.6266927,2.6266927 0 0 0 2.6274739,14.625381 H 13.898956 l -3.54739,3.54739 a 2.6266926,2.6266926 0 0 0 0,3.715741 l 0.02204,0.02204 a 2.6266928,2.6266928 0 0 0 3.715741,0 L 24,11.999911 14.089353,2.0892634 a 2.6266927,2.6266927 0 0 0 -1.65144,-0.7615866 z"
          fill="#ffffff"
          transform="rotate(-90 12 12)"
        />
      </svg>
    </button>
  );
};

export default BackToTop;