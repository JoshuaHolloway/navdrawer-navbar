import { useState, useEffect, useRef } from 'react';

import { Burger, Drawer, Button, Group, ScrollArea } from '@mantine/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logo from './Elevate_web_logo_2.png';
import './App.scss';

gsap.registerPlugin(ScrollTrigger);

// ========================================================

export default function App() {
  // ------------------------------------------------------

  // -Hamburger / Drawer
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  // ------------------------------------------------------

  const box_ref = useRef(null);
  const scroll_area_ref = useRef(null);

  // ------------------------------------------------------

  useEffect(() => {
    // const el = img_ref.current;
    const box = box_ref.current;
    const scroll_area = scroll_area_ref.current;
    console.log('scroll_area: ', scroll_area);

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: scroll_area,
        trigger: box,
        start: 'bottom 100px',
        end: 'bottom top',
        scrub: 1,
        markers: true,
      },
    });
    // tl.to(box, {
    //   opacity: 1,
    //   backgroundColor: 'rgba(20,22,24,1)',
    // });
    tl.to(box, { xPercent: 350 });
  }, []);

  // ------------------------------------------------------

  return (
    <>
      body
      <ScrollArea
        viewportRef={scroll_area_ref}
        className='scroll_area'
        style={{
          height: '90%',
          background: 'lightblue',
          // overflowY: 'scroll',
          position: 'relative',
        }}
      >
        scroll_area
        <div
          className='content'
          style={{ height: '200vh', background: 'orange' }}
        >
          content
          <div
            ref={box_ref}
            className='box'
            style={{ height: '100px', width: '100px', background: 'black' }}
          ></div>
        </div>
      </ScrollArea>
    </>
  );

  // ------------------------------------------------------
}

// ========================================================
