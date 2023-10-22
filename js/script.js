
function init() {
  gsap.registerPlugin(ScrollTrigger);
  
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
init();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-1 .title-container>h1:first-child",
    scroller: "main",
    markers: true,
    start: "top 25%",
    end: "top 0",
    scrub: 3
  }
})
tl.to("#page-1 .title-container>h1:first-child", {
  x: -200,
  filter: "blur(5px)"
}, "page-1-anim")
tl.to("#page-1 .title-container>h1:last-child", {
  x: 200,
  filter: "blur(5px)"
}, "page-1-anim")

tl.to("#page-1 video", {
  width: "90%",
}, "page-1-anim")
