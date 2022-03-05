gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    scroller: '.container',
    trigger: '.box',
    start: 'center bottom',
    end: 'center top',
    scrub: true,
    markers: true,
  },
});
tl.to('.box', { yPercent: 350, duration: 1 });
tl.to('.box', { rotation: 360, duration: 3 });
tl.to('.box', { xPercent: 350, duration: 1 });
