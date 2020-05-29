gsap.registerPlugin(ScrollTrigger);

function init(){
    
    // Simple tween
    gsap.to('#intro img', {opacity: 0, scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
        markers: true
    }});

}

window.addEventListener('load', function(){
    init();
});
