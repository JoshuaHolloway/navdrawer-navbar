import { useState, useEffect, useRef } from 'react';

import { Drawer, ScrollArea, Transition } from '@mantine/core';

import Hamburger from './Hamburger';
import Logo from './Logo';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.scss';

gsap.registerPlugin(ScrollTrigger);

// ========================================================

export default function App() {
  // ------------------------------------------------------

  // -Hamburger / Drawer
  const [navlink_anim, setNavlinkAnim] = useState(false);
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  // ------------------------------------------------------

  const header_ref = useRef(null);
  const scroll_area_ref = useRef(null);
  const tl_ref = useRef(null);

  // ------------------------------------------------------

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // ------------------------------------------------------

  useEffect(() => {
    const header = header_ref.current;
    const scroll_area = scroll_area_ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: scroll_area,
        trigger: header,
        start: 'bottom 100px',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
      },
    });
    tl.to(header, {
      backgroundColor: 'rgba(20,22,24,1)',
    });
    // tl.to(el, { xPercent: 350 });
  }, []);

  // ------------------------------------------------------

  useEffect(() => {
    setTimeout(() => {
      if (mounted && opened === true) {
        handler();
      }
    }, 200);
  }, [opened]);

  // ------------------------------------------------------

  // const scaleY = {
  //   in: { opacity: 1, transform: 'scaleY(1)' },
  //   out: { opacity: 0, transform: 'scaleY(0)' },
  //   common: { transformOrigin: 'top' },
  //   transitionProperty: 'transform, opacity',
  // };

  // ------------------------------------------------------

  const links_ref = useRef([]); // links.current[n]
  const tl_links_ref = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count: ', count);
  }, [count]);

  // ------------------------------------------------------

  const links = [
    { title: 'page 1', route: '/page-1' },
    { title: 'page 2', route: '/page-2' },
    { title: 'page 3', route: '/page-3' },
    { title: 'page 4', route: '/page-4' },
  ];

  // ------------------------------------------------------

  const handler = () => {
    if (count === 0) {
      tl_links_ref.current = gsap.timeline().to(links_ref.current, {
        y: '-50px', // gsap transition === height of $link_h
        ease: 'Back.easeOut',
        stagger: 0.1,
      });
    } else {
      tl_links_ref.current.reverse();
    }
    setCount((prev) => (prev + 1) % 2);
  };

  // ------------------------------------------------------

  return (
    <main className='page'>
      <ScrollArea viewportRef={scroll_area_ref} style={{ height: '100%' }}>
        <header
          ref={header_ref}
          style={{
            position: 'fixed',
            width: '100%',
            height: '100px',
            background: 'rgba(20,22,24,0)',
            display: 'relative',
          }}
        >
          <Logo />
          <Hamburger onClick={() => setOpened((o) => !o)} />
        </header>

        <div style={{ width: '100vw', height: '200vh' }}>
          <div
            className='App'
            style={{ height: '200vh', background: 'gray' }}
          ></div>
        </div>
      </ScrollArea>

      <Drawer
        opened={opened}
        onClose={() => {
          handler();
          setTimeout(() => {
            setOpened(false);
          }, 1000);
        }}
        title=''
        padding='xl'
        size='xl'
        // transition={scaleY}
      >
        <div className='container'>
          {links.map((link, idx) => {
            return (
              <div key={link.title} className='overflow-hidden'>
                <a
                  href={link.route}
                  className='link'
                  ref={(el) => (links_ref.current[idx] = el)}
                >
                  {link.title}
                </a>
              </div>
            );
          })}
        </div>
      </Drawer>
    </main>
  );

  // ------------------------------------------------------
}

// ========================================================
