import { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';

// ========================================================

export default function App() {
  // ------------------------------------------------------

  const link = useRef(null);
  const tl = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count: ', count);
  }, [count]);

  // ------------------------------------------------------

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        onClick={() => {
          if (count === 0) {
            tl.current = gsap.timeline().to(link.current, {
              y: '-100px',
              ease: 'Back.easeOut',
            });
          } else {
            tl.current.reverse();
          }
          setCount((prev) => (prev + 1) % 2);
        }}
        style={{
          position: 'relative',
          height: '120px',
          width: '100px',
          background: 'white',
          // overflow: 'hidden',
        }}
      >
        <div
          ref={link}
          style={{
            position: 'absolute',
            height: '100px',
            width: '100px',
            background: 'black',
            top: '120px',
          }}
        ></div>
      </div>
    </div>
  );

  // ------------------------------------------------------
}

// ========================================================
