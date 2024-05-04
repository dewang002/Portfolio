console.log(
  "This is a personal website , any kind of stealing will be Deprecated"
);
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
// });

const counting = document.querySelector(".counter");
const hi = document.querySelector(".hi");
const main = document.querySelector("main");
const bar = document.querySelectorAll(".bar");
const skillimg = document.querySelector(".htmllogo");
const body = document.querySelector("body");
function loader() {
  let count = 0;
 
  let loading = setInterval(function () {
    count++;
    if (count == 100) {
      
      let tl = gsap.timeline();
      tl.to(counting, {
        scale: 0,
        duration: 0.2,
        delay: 1,
      });
      tl.to(hi, {
        scale: 0,
        duration: 0.5,
      });
document.querySelector("body").classList.add('showAll');
      clearInterval(loading);
      document.body.style.overflow = 'auto';
    }else{
      document.querySelector("body").classList.add('hideAll');
      document.body.style.overflow = 'hidden';
    }
   
    counting.innerHTML = `${count}`;
  }, 34);
}
// loader()

function loader2() {
  var tl = gsap.timeline();
  tl.to(bar, {
    y: "-100%",
    ease: "power1.inOut",
    duration: 1.2,
    delay: 5,
    stagger: 0.1,
    zIndex:1
  });
  tl.to(counting, {
    delay: 5,
  
  });
 
}
// loader2()

function content() {
  gsap.from(main, {
    y:"100%",
    ease: "power4.inOut",
    duration: 3,
    delay: 5,
    stagger: 0.1,
  });
}
// content();
