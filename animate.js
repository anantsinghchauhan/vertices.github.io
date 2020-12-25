const t2 = gsap.timeline({
    scrollTrigger: {
        trigger : 'body',
        start : 'top center',

    }
});

t2.from('.a1',{
    stagger : .2,
    duration : 1,
    x : 20,
    delay : .1,
    ease : 'Power1.easeInOut',
    opacity : 0
})

.from('.box',{
    stagger : .2,
    duration : 1,
    x : -20,
    delay : .1,
    ease : 'Power1.easeInOut',
    opacity : 0
},'-=1')

.from('.btmcnt',{
    stagger : .2,
    duration : 1,
    x : -20,
    delay : .1,
    ease : 'Power1.easeInOut',
    opacity : 0
})

.from('.btmimg',{
    stagger: .3,
    width: 0,
    duration: 2,
    opacity: 0,
    ease: 'Power1.easeInOut'
})

.from('.bimg',{
    stagger: .3,
    width: 0,
    duration: 2,
    opacity: 0,
    y:20,
    ease: 'Power1.easeInOut'
})
