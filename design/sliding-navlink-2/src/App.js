import { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '120px',
          width: '100px',
          background: 'white',
          overflow: 'hidden',
        }}
      >
        <div
          ref={(el) => (links.current[0] = el)}
          style={{
            position: 'absolute',
            height: '100px',
            width: '100px',
            background: 'black',
            top: '120px',
          }}
        ></div>
      </div>

      <div
        style={{
          position: 'relative',
          height: '120px',
          width: '100px',
          background: 'rgba(255, 255, 0, 0.5)',
          // overflow: 'hidden',
        }}
      >
        <div
          ref={(el) => (links.current[1] = el)}
          style={{
            position: 'absolute',
            height: '100px',
            width: '100px',
            background: 'blue',
            top: '120px',
          }}
        ></div>
      </div>

      <button onClick={handler} style={{ position: 'absolute', top: 50 }}>
        Click!
      </button>
    </div>
  );

  // ------------------------------------------------------
}

// ========================================================
