
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
    markers: false,
    start: "top 15%",
    end: "top 0",
    scrub: 3
  }
})
tl.to("#page-1 .title-container>h1:first-child", {
  x: -200,
  filter: "blur(5px)",
  opacity: 0.15
}, "page-1-anim")
tl.to("#page-1 .title-container>h1:last-child", {
  x: 200,
  filter: "blur(5px)",
  opacity: 0.15
}, "page-1-anim")

tl.to("#page-1 video", {
  width: "90%",
}, "page-1-anim")


gsap.to("main", {
  backgroundColor: "#FFFCFF",
  color: "#0f0d0d",
  scrollTrigger: {
    trigger: "#page-1 video",
    scroller: "main",
    markers: false,
    start: "bottom 40%",
    end: "top 0%",
    scrub: 0.3
  }
}, "page-2-anim")


gsap.to("#page-2 .container-solutions .row .col:first-child img", {
  height: "108%",
  objectPosition: "bottom",
  scrollTrigger: {
    trigger: "#page-2 .container-solutions .row .col:first-child img",
    scroller: "main",
    markers: false,
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1
  }
}, "page-2-anim")






// manter hover pagina 2
var btnsPage2 = document.querySelectorAll("#page-2 .container-solutions .row .col:last-child");
var imgsPage2 = document.querySelectorAll("#page-2 .container-solutions .row .col:first-child");


btnsPage2.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    imgsPage2.forEach((item) => {
    item.classList.remove("active");
    })
    imgsPage2[index].classList.add("active");
  })
});
// manter hover pagina 2

