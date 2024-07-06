function loco (){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

function page1Animation(){
  
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.page1',
    scroller:'.main',
    pin:true,
    // markers:true
  }
})
tl.to('.main2',{
  y:-700,
  duration:1,
  delay:-2,
},"a")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.page2',
    scroller:'.main',
    start:"top 89%",
    end:"top 20%",
    scrub:true
  }
})
tl2.to(".page1 .overlay",{
  backgroundColor : "#000"
})

}

page1Animation();

function page2Animation(){
 var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page2",
    scroller:".main",
    // markers:true,
    start:"top 70%",
    end:"top -50%"
  }
 })
 tl.from(".page2-elem h1",{
  y:"150%",
  opacity:0,
  duration:1,
  ease: "power1.inOut",
 },"a")
 .from(".page2-elem .vde video",{
  x:"-100%",
  // width:"0",
  duration:1,
  ease: "power1.inOut",
 },"a")
 .from(".page2-elem .symbol svg",{
  x:"-100%",
  // width:"0",
  duration:1,
  ease: "power1.inOut",
 },"a")
}
page2Animation();


function videoAnimation(){
  const video = document.querySelector(".page-side2 #video")

  video.addEventListener('mouseenter', function() {
    video.play();
  });

  video.addEventListener('mouseleave', function() {
    video.pause();
  });


var pageSide = document.querySelector(".page-side2");
pageSide.addEventListener("mousemove",function(){
  var tl = gsap.timeline();
  tl.to(".text1 .h5-1 span",{
    y:"-90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  tl.to(".text1 .h5-2 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:0.5
  },"a")

})

pageSide.addEventListener("mouseleave",function(){
  var tl2 = gsap.timeline();
  tl2.to(".text1 .h5-2 span",{
    y:"90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".text1 .h5-1 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:1,
    ease: "power1.inOut",
  },"a")
})
}
videoAnimation();

function page4Animation(){
  const video = document.querySelector(".page4 .page-side2 #video")

  video.addEventListener('mouseenter', function() {
    video.play();
  });

  video.addEventListener('mouseleave', function() {
    video.pause();
  });


var pageSide = document.querySelector(".page4 .page-side2");
pageSide.addEventListener("mousemove",function(){
  var tl = gsap.timeline();
  tl.to(".text1 .h5-1 span",{
    y:"-90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  tl.to(".text1 .h5-2 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:0.5
  },"a")

})

pageSide.addEventListener("mouseleave",function(){
  var tl2 = gsap.timeline();
  tl2.to(".text1 .h5-2 span",{
    y:"90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".text1 .h5-1 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:1,
    ease: "power1.inOut",
  },"a")
})
}
page4Animation();

function page5Animation(){
  const video = document.querySelector(".page5 .page-side2 #video")

  video.addEventListener('mouseenter', function() {
    video.play();
  });

  video.addEventListener('mouseleave', function() {
    video.pause();
  });


var pageSide = document.querySelector(".page5 .page-side2");
pageSide.addEventListener("mousemove",function(){
  var tl = gsap.timeline();
  tl.to(".text1 .h5-1 span",{
    y:"-90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  tl.to(".text1 .h5-2 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:0.5
  },"a")

})

pageSide.addEventListener("mouseleave",function(){
  var tl2 = gsap.timeline();
  tl2.to(".text1 .h5-2 span",{
    y:"90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".text1 .h5-1 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:1,
    ease: "power1.inOut",
  },"a")
})
}
page5Animation();

function page7Animation(){
  const video = document.querySelector(".page7 .page-side2 #video")

  video.addEventListener('mouseenter', function() {
    video.play();
  });

  video.addEventListener('mouseleave', function() {
    video.pause();
  });


var pageSide = document.querySelector(".page7 .page-side2");
pageSide.addEventListener("mousemove",function(){
  var tl = gsap.timeline();
  tl.to(".text1 .h5-1 span",{
    y:"-90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  tl.to(".text1 .h5-2 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:0.5
  },"a")

})

pageSide.addEventListener("mouseleave",function(){
  var tl2 = gsap.timeline();
  tl2.to(".text1 .h5-2 span",{
    y:"90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".text1 .h5-1 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:1,
    ease: "power1.inOut",
  },"a")
})
}
page7Animation();

function page8Animation(){
  const video = document.querySelector(".page8 .page-side2 #video")

  video.addEventListener('mouseenter', function() {
    video.play();
  });

  video.addEventListener('mouseleave', function() {
    video.pause();
  });


var pageSide = document.querySelector(".page8 .page-side2");
pageSide.addEventListener("mousemove",function(){
  var tl = gsap.timeline();
  tl.to(".text1 .h5-1 span",{
    y:"-90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  tl.to(".text1 .h5-2 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:0.5
  },"a")

})

pageSide.addEventListener("mouseleave",function(){
  var tl2 = gsap.timeline();
  tl2.to(".text1 .h5-2 span",{
    y:"90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".text1 .h5-1 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:1,
    ease: "power1.inOut",
  },"a")
})
}
page8Animation();

function page9Animation(){
  const video = document.querySelector(".page9 .page-side2 #video")

  video.addEventListener('mouseenter', function() {
    video.play();
  });

  video.addEventListener('mouseleave', function() {
    video.pause();
  });


var pageSide = document.querySelector(".page9 .page-side2");
pageSide.addEventListener("mousemove",function(){
  var tl = gsap.timeline();
  tl.to(".text1 .h5-1 span",{
    y:"-90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  tl.to(".text1 .h5-2 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:0.5
  },"a")

})

pageSide.addEventListener("mouseleave",function(){
  var tl2 = gsap.timeline();
  tl2.to(".text1 .h5-2 span",{
    y:"90%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".text1 .h5-1 span",{
    y:"0%",
    stagger:0.01,
    ease: "power1.inOut",
    duration:0.2
  },"a")
  .to(".page-side1 h1 span",{
    opacity:1,
    ease: "power1.inOut",
  },"a")
})
}
page9Animation();



function page6Animation(){
  var tl = gsap.timeline({
   scrollTrigger:{
     trigger:".page6",
     scroller:".main",
     start:"top 70%",
     end:"top -50%"
   }
  })
  tl.from(".page6-elem h1",{
   y:"150%",
   opacity:0,
   duration:1,
   ease: "power1.inOut",
  },"a")
  .from(".page6-elem .vde video",{
   x:"-100%",
   duration:1,
   ease: "power1.inOut",
  },"a")
  
 }
 page6Animation();

function footer(){
 gsap.to("nav",{
  display:"none",
  scrollTrigger:{
    trigger:".footer",
    scroller:".main",
    // markers:true,
    start:"40% 80%",
    end:"top 40%",
    scrub:true
  }
 })
}
footer()