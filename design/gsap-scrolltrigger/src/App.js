import { useEffect, useRef } from 'react';

// import logo from './logo.svg';
import { Button } from '@mantine/core';
import { Grid } from '@mantine/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logo from './logo.svg';
import './App.css';

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

// ========================================================

export default function App() {
  // ------------------------------------------------------

  const img_ref = useRef(null);

  useEffect(() => {
    const el = img_ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'center 500px',
        end: 'center top',
        scrub: true,
        markers: true,
      },
    });
    tl.to(el, { rotation: 360 });
    tl.to(el, { xPercent: 350 });
  }, []);

  // ------------------------------------------------------

  return (
    <>
      <div
        className='App'
        style={{ height: '100vh', background: 'darkorange' }}
      ></div>

      <div className='App'>
        <header className='App-header'>
          <img ref={img_ref} src={logo} className='App-logo' alt='logo' />
        </header>
      </div>

      <div
        className='App'
        style={{ height: '100vh', background: 'darkorchid' }}
      ></div>

      <Button>Hello world!</Button>

      <Grid>
        <Grid.Col md={6} lg={3}>
          1
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          2
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          3
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          4
        </Grid.Col>
      </Grid>
    </>
  );
}

// ========================================================
