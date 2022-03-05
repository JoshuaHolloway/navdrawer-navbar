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
  const box_ref_1 = useRef(null);
  const box_ref_2 = useRef(null);

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
        const box_1 = box_ref_1.current;
        const box_2 = box_ref_2.current;

        tl_ref.current = gsap
          .timeline()
          .to(box_1, {
            y: '-100px',
          })
          .to(box_2, {
            y: '-100px',
          });
      }
    }, 200);
  }, [opened]);

  // ------------------------------------------------------

  const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  };

  // ------------------------------------------------------

  return (
    <>
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
          if (tl_ref !== null) {
            tl_ref.current.reverse();
          }
          setTimeout(() => {
            setOpened(false);
          }, 1000);
        }}
        title=''
        padding='xl'
        size='xl'
        // transition={scaleY}
      >
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            background: 'purple',
          }}
        >
          <div
            style={{
              // position: 'absolute',
              // top: '40%',
              // left: '40%',
              // transform: 'translateY(-50%) translateX(-50%)',
              height: '50%',
              width: '50%',
              background: 'green',
              // display: 'flex',
              // flexDirection: 'column',
              // justifyContent: 'space-evenly',
              // alignItems: 'center',
            }}
          >
            <div
              style={{
                overflow: 'hidden',
                position: 'relative',
                background: 'rgba(255, 0, 0, 0.5)',
                width: '100px',
              }}
            >
              <div
                ref={box_ref_1}
                className='box'
                style={{
                  zIndex: '10',
                  // position: 'absolute',
                  // top: '100px',
                  height: '100px',
                  width: '100px',
                  background: 'black',
                }}
              >
                BOX
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );

  // ------------------------------------------------------
}

// ========================================================
