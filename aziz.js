var t1 = gsap.timeline()
t1.from(".logo", 1,{
    y: 200,
    opacity:0
});
t1.from(".elmt", 1, {
    y: 300,
    stagger: 0.2,
    opacity: 0,
});
t1.from(".img1 img", 1, {
    y: 30,
    scale: 4.9,
    stagger: 0.3,
    opacity: 0,

});
t1.from(".img1 img", 2, {
    y: 200,
    
    stagger: 0.2,
    
});





const glass = document.getElementById('glass');

const tl = gsap.timeline({defaults: {ease: "power2.inOut", duration: 1.5}})

tl.from('img', { x: '-10%', opacity: 0})
  .from('.container', {opacity: 0, delay: .5, duration: 1}, "-=1.5")
  .from('.container', {x: '-20%', backdropFilter: 'blur(0px)'})
  .from('.seq', { y: -30, opacity: 0, stagger: .2, duration: .5}, "-=.5")
  .from('h1', { y: 20, clipPath: 'inset(0 0 100% 0)'}, "-=.8")