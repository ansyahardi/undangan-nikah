gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
// gsap.from(".buka, #buka", {x: 300, duration: 1, opacity: 0});
var cssRule = CSSRulePlugin.getRule(".open::before");

gsap.to(".buka, #buka", {
  scrollTrigger: {
    trigger: ".bismillah",
    start: "top 90%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
  scale: 1.5,
  opacity: 0,
});

gsap.to(cssRule, {
  // duration: 2,
  scrollTrigger: {
    trigger: ".bismillah",
    start: "top 90%",
    end: "top 70%",
    scrub: 1,
    // markers: true,
  },
  cssRule: {
    y: -300,
    opacity: 0
  }
});

gsap.to(".scroll i", {
  y: 30,
  opacity: 0,
  duration: 1.5,
  repeat: -1,
  scale: 2
});

gsap.to("#df", {
  scale: 0.5,
  repeat: -1,
  yoyo: true,
  duration: 2
});

