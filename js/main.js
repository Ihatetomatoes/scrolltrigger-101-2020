gsap.registerPlugin(ScrollTrigger);

function init(){
    
    // Simple tween
    // gsap.to('#intro img', {opacity: 0, scrollTrigger: {
    //     trigger: '#intro',
    //     start: 'top top',
    //     end: 'bottom center',
    //     scrub: true,
    //     markers: true
    // }});

    // toggle css class
    // gsap.set("#project02", {scrollTrigger: {
    //     trigger: '#project02',
    //     start: 'top bottom-=10%',
    //     end: 'bottom center-=10%',
    //     toggleClass: 'active',
    //     markers: true
    // }});

    // simple parallax
    const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '.bcg-parallax',
            start: 'top bottom',
            scrub: true
        }
    });

    parallaxTl
        .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4)
        .from('.bcg', {duration: 2, y: '-30%'}, 0);

}

window.addEventListener('load', function(){
    init();
});
