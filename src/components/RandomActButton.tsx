"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import cindMascot from "@/assets/cind-mascot.png";
import glitchStar from "@/assets/glitch-star.png";

/**
 * RANDOM ACT BUTTON - SENIOR PARROT EDITION
 * Design: Uiverse (Yashasewi) + Wirluro Logic
 */

const DELAYS = {
  COOLDOWN: 800,
  FLASH: 100,
  GLITCH: 1000,
  MASCOT_IN: 100,
  MASCOT_OUT: 1500,
  MASCOT_REMOVE: 2100,
  INVERT: 800,
  LONG_ACT: 3000,
} as const;

const RandomActButton: React.FC = () => {
  const [isActivating, setIsActivating] = useState<boolean>(false);
  
  // Memória para Cleanup
  const activeNodes = useRef<Set<HTMLElement>>(new Set());
  const activeTimeouts = useRef<Set<NodeJS.Timeout>>(new Set());

  const mountNode = useCallback((node: HTMLElement, duration: number) => {
    document.body.appendChild(node);
    activeNodes.current.add(node);
    const timer = setTimeout(() => {
      if (document.body.contains(node)) document.body.removeChild(node);
      activeNodes.current.delete(node);
      activeTimeouts.current.delete(timer);
    }, duration);
    activeTimeouts.current.add(timer);
  }, []);

  useEffect(() => {
    return () => {
      activeNodes.current.forEach(node => { if (document.body.contains(node)) document.body.removeChild(node); });
      activeTimeouts.current.forEach(clearTimeout);
    };
  }, []);

  const executeAction = useCallback(() => {
    const root = document.documentElement;
    const body = document.body;
    const main = document.querySelector('main') as HTMLElement || body;
    const starSrc = typeof glitchStar === 'string' ? glitchStar : (glitchStar as any).src;
    const mascotSrc = typeof cindMascot === 'string' ? cindMascot : (cindMascot as any).src;

    const actions: (() => void)[] = [
      // 1. Flash
      () => {
        const flash = document.createElement('div');
        flash.className = "fixed inset-0 bg-white z-[9999] opacity-80 pointer-events-none";
        mountNode(flash, DELAYS.FLASH);
      },
      // 2. Glitch Star
      () => {
        const star = document.createElement('img');
        star.src = starSrc;
        star.className = "fixed z-[9998] w-20 h-20 pointer-events-none animate-pulse";
        star.style.left = `${Math.random() * 80}vw`;
        star.style.top = `${Math.random() * 80}vh`;
        star.style.transform = `rotate(${Math.random() * 360}deg)`;
        mountNode(star, DELAYS.GLITCH);
      },
      // 3. Screen Shake
      () => {
        const originalT = main.style.transition;
        main.style.transition = 'transform 0.1s';
        [10, -10, 10, -10, 5, -5, 0].forEach((val, i) => {
          setTimeout(() => {
            main.style.transform = `translate(${val}px, ${val}px)`;
            if (val === 0) main.style.transition = originalT;
          }, i * 50);
        });
      },
      // 4. Barrel Roll
      () => {
        main.style.transition = 'transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        main.style.transform = 'rotateZ(360deg)';
        setTimeout(() => { main.style.transition = 'none'; main.style.transform = 'rotateZ(0deg)'; }, 1100);
      },
      // 5. Mascot Peek
      () => {
        const m = document.createElement('img');
        m.src = mascotSrc;
        m.className = "fixed bottom-0 -right-40 z-[9998] w-32 h-32 transition-all duration-500 ease-out pointer-events-none";
        document.body.appendChild(m);
        activeNodes.current.add(m);
        setTimeout(() => m.style.right = "0px", DELAYS.MASCOT_IN);
        setTimeout(() => m.style.right = "-150px", DELAYS.MASCOT_OUT);
        setTimeout(() => { if (document.body.contains(m)) document.body.removeChild(m); activeNodes.current.delete(m); }, DELAYS.MASCOT_REMOVE);
      },
      // 6. Neon Rave
      () => {
        root.style.transition = 'filter 2s linear';
        root.style.filter = 'hue-rotate(720deg) saturate(200%)';
        setTimeout(() => { root.style.transition = 'filter 0.5s ease'; root.style.filter = 'none'; }, 2000);
      },
      // 7. CRT Off
      () => {
        const crt = document.createElement('div');
        crt.className = "fixed inset-0 bg-black z-[9999] pointer-events-none transition-all duration-300 flex items-center justify-center";
        const line = document.createElement('div');
        line.className = "w-full h-[2px] bg-white opacity-0 shadow-[0_0_20px_#fff]";
        crt.appendChild(line);
        mountNode(crt, 1500);
        setTimeout(() => line.style.opacity = "1", 10);
        setTimeout(() => crt.style.background = "transparent", 400);
        setTimeout(() => { line.style.height = "100vh"; line.style.opacity = "0"; }, 600);
      },
      // 8. PSOD
      () => {
        const psod = document.createElement('div');
        psod.className = "fixed inset-0 bg-[#ff006e] z-[9999] text-white p-10 font-mono flex flex-col justify-center pointer-events-none";
        psod.innerHTML = `<h1 class="text-6xl mb-4">:(</h1><p class="text-xl">WIRLURO_SYSTEM_OVERLOAD</p>`;
        mountNode(psod, 2500);
      },
      // 9. Matrix
      () => {
        const c = document.createElement('div');
        c.className = "fixed inset-0 pointer-events-none z-[9998] flex justify-around overflow-hidden opacity-50";
        mountNode(c, 3000);
        for (let i = 0; i < 20; i++) {
          const col = document.createElement('div');
          col.className = "text-[#ff006e] font-mono text-lg animate-pulse";
          col.style.transform = `translateY(-100vh)`;
          col.style.transition = `transform ${Math.random() * 2 + 1}s linear`;
          col.innerHTML = 'ｱｲｳｴｵWIRLURO0123'.repeat(5);
          c.appendChild(col);
          setTimeout(() => col.style.transform = `translateY(100vh)`, 50);
        }
      },
      // 10. Pixel Confetti
      () => {
        const c = document.createElement('div');
        c.className = "fixed inset-0 pointer-events-none z-[9998]";
        mountNode(c, 2000);
        for (let i = 0; i < 40; i++) {
          const p = document.createElement('div');
          p.className = "absolute top-1/2 left-1/2 w-3 h-3 bg-[#ff006e]";
          p.style.transition = "all 1s ease-out";
          c.appendChild(p);
          setTimeout(() => {
            const a = Math.random() * Math.PI * 2;
            const v = 100 + Math.random() * 300;
            p.style.transform = `translate(${Math.cos(a) * v}px, ${Math.sin(a) * v}px) scale(0)`;
            p.style.opacity = "0";
          }, 10);
        }
      },
      // 11. Scrambler
      () => {
        const texts = document.querySelectorAll('.pixel-text, .digital-text') as NodeListOf<HTMLElement>;
        texts.forEach(el => {
          const old = el.innerText;
          let iter = 0;
          const int = setInterval(() => {
            el.innerText = old.split('').map((c, i) => i < iter ? c : '!<>-_'[Math.floor(Math.random() * 5)]).join('');
            if (iter >= old.length) clearInterval(int);
            iter += 1/3;
          }, 30);
        });
      },
      // 12. Spotlight
      () => {
        const o = document.createElement('div');
        o.className = "fixed inset-0 bg-black/95 z-[9997] pointer-events-none transition-all duration-500";
        o.style.clipPath = "circle(200px at 50% 50%)";
        mountNode(o, 3000);
        setTimeout(() => o.style.clipPath = "circle(150% at 50% 50%)", 1500);
      },
      // 13. Gravity Flip
      () => {
        main.style.transition = 'transform 0.5s ease-in-out';
        main.style.transform = 'rotateX(180deg)';
        setTimeout(() => main.style.transform = 'rotateX(0deg)', 2000);
      },
      // 14. VHS Loss
      () => {
        [10, -20, 15, 0].forEach((x, i) => {
          setTimeout(() => { main.style.transform = `translateX(${x}px) skewX(${x/2}deg)`; }, i * 100);
        });
      },
      // 15. Invert
      () => {
        root.style.filter = 'invert(1) hue-rotate(180deg)';
        setTimeout(() => root.style.filter = 'none', 800);
      }
    ];

    const randomFn = actions[Math.floor(Math.random() * actions.length)];
    randomFn();
  }, [mountNode, glitchStar, cindMascot]);

  const handleTrigger = useCallback(() => {
    if (isActivating) return;
    setIsActivating(true);
    executeAction();
    setTimeout(() => setIsActivating(false), DELAYS.COOLDOWN);
  }, [isActivating, executeAction]);

return (
  /* Mudamos para fixed, bottom e left.
     Adicionamos m-0 para evitar margens herdadas.
  */
  <div className="fixed bottom-8 left-8 z-[9999] m-0 p-0 pointer-events-none">
    <ParrotStyles />
    <div className="parrot-container pointer-events-auto">
      <button
        onClick={handleTrigger}
        disabled={isActivating}
        className="btn-parrot-wirluro"
      >
        {isActivating ? "EXECUTING..." : "SURPRISE!"}
        
        {[...Array(6)].map((_, i) => (
          <div key={i} className="parrot-item" />
        ))}
      </button>
    </div>
  </div>
);
};
/* No final do arquivo RandomActButton.tsx */
const ParrotStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .btn-parrot-wirluro {
      background: #121010 !important;
      color: #fff !important;
      border: 3px solid #ff006e !important;
      border-radius: 50px !important;
      padding: 0.8rem 2.2rem !important;
      font-family: "Margarine", sans-serif;
      font-size: 14px;
      outline: none;
      cursor: pointer;
      position: relative;
      transition: 0.2s ease-in-out;
      letter-spacing: 2px;
      box-shadow: 0 0 15px rgba(255, 0, 110, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-parrot-wirluro:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px rgba(255, 0, 110, 0.5);
      border-color: #fff !important;
    }

    .parrot-item {
      position: absolute;
      width: 70px;
      text-align: center;
      animation: parrot-blink 0.8s infinite;
      color: transparent;
      pointer-events: none;
      font-weight: bold;
    }

    .parrot-item:before { content: "Click Me!"; }
    .btn-parrot-wirluro:hover ~ .parrot-item:before { content: "DO IT!"; }

    /* Posições dos Papagaios */
    .parrot-item:nth-child(1) { top: -35px; left: -45px; font-size: 12px; transform: rotate(-20deg); animation-duration: 0.5s; }
    .parrot-item:nth-child(2) { right: -45px; top: -25px; font-size: 12px; transform: rotate(15deg); animation-duration: 0.3s; }
    .parrot-item:nth-child(3) { top: -65px; left: 15px; font-size: 16px; transform: rotate(10deg); animation-duration: 1s; }
    .parrot-item:nth-child(4) { top: -75px; left: 95px; font-size: 18px; transform: rotate(2deg); animation-duration: 0.7s; }
    .parrot-item:nth-child(5) { bottom: -45px; left: 110px; font-size: 14px; transform: rotate(-20deg); animation-duration: 0.8s; }
    .parrot-item:nth-child(6) { bottom: -45px; left: -10px; font-size: 12px; transform: rotate(10deg); animation-duration: 1.2s; }

    @keyframes parrot-blink {
      25%, 75% { color: transparent; }
      40%, 60% { color: #ff006e; text-shadow: 0 0 8px #ff006e; }
    }
  `}} />
);

export default RandomActButton;