import { useState, useEffect, useRef } from 'react';

import gsap from 'gsap';

import './App.scss';

// ========================================================

export default function App() {
  // ------------------------------------------------------

  const links_ref = useRef([]); // links.current[n]
  const tl_ref = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count: ', count);
  }, [count]);

  // ------------------------------------------------------

  const handler = () => {
    if (count === 0) {
      tl_ref.current = gsap.timeline().to(links_ref.current, {
        y: '-100px',
        ease: 'Back.easeOut',
        stagger: 0.1,
      });
    } else {
      tl_ref.current.reverse();
    }
    setCount((prev) => (prev + 1) % 2);
  };

  // ------------------------------------------------------

  const links = [
    { title: 'link 1', route: '/link-1' },
    { title: 'link 2', route: '/link-2' },
    { title: 'link 3', route: '/link-3' },
    { title: 'link 4', route: '/link-4' },
  ];

  // ------------------------------------------------------

  return (
    <div className='page'>
      <div className='drawer'>
        <div className='container'>
          {links.map((link, idx) => {
            return (
              <div className='overflow-hidden'>
                <div
                  className='link'
                  ref={(el) => (links_ref.current[idx] = el)}
                >
                  {link.title}
                </div>
              </div>
            );
          })}

          <button onClick={handler} style={{ position: 'absolute', top: 50 }}>
            Click
          </button>
        </div>
      </div>
    </div>
  );

  // ------------------------------------------------------
}

// ========================================================
