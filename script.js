
var t1 = gsap.timeline();

t1.from('.logo' ,{
    stagger: .3,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut',
    y: -20,
})

.from('.container li a' ,{
    stagger: .3,
    duration: 1,
    opacity: 0,
    ease: 'Expo.easeInOut',
    y: -10,
},'-=1')

.from('.icons i' ,{
    stagger: .3,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut',
    y: -10,
},'-=1')


.from('.img', {
    stagger: .3,
    width: 0,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut'
},'-=1')


.from('.content', {
    stagger: .3,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut',
    y: -20,
})