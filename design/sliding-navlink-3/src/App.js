import { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';

import './App.scss';

// ========================================================

export default function App() {
  // ------------------------------------------------------

  const links = useRef([]); // links.current[n]
  const tl = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count: ', count);
  }, [count]);

  // ------------------------------------------------------

  const handler = () => {
    if (count === 0) {
      tl.current = gsap.timeline().to(links.current, {
        y: '-100px',
        ease: 'Back.easeOut',
        stagger: 0.1,
      });
    } else {
      tl.current.reverse();
    }
    setCount((prev) => (prev + 1) % 2);
  };

  // ------------------------------------------------------

  return (
    <div className='container'>
      <div className='overflow-hidden'>
        <div className='link' ref={(el) => (links.current[0] = el)} />
      </div>

      <div className='overflow-hidden'>
        <div className='link' ref={(el) => (links.current[1] = el)} />
      </div>

      <button onClick={handler} style={{ position: 'absolute', top: 50 }}>
        Click
      </button>
    </div>
  );

  // ------------------------------------------------------
}

// ========================================================
