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
    gsap.set("#project02", {scrollTrigger: {
        trigger: '#project02',
        start: 'top bottom-=10%',
        end: 'bottom center-=10%',
        toggleClass: 'active',
        markers: true
    }});

}

window.addEventListener('load', function(){
    init();
});
