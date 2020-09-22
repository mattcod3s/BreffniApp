/*import {TimelineMax, TweenLite, CSSPlugin, TweenMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import anime from 'animejs/lib/anime.es.js';

gsap.registerPlugin(ScrollTrigger);

let fWrap = document.getElementById('special');
let fWrapBorder = document.getElementById('title-border');
let sHeader = document.getElementById('special-header');

let specialOne = document.getElementById('special-1');
let specialTwo = document.getElementById('special-2');
let specialThree = document.getElementById('special-3');

let specialElements = [specialOne, specialTwo, specialThree];

/*
gsap.to("#logo path:nth-child(2)", {
    scrollTrigger: {
        trigger: '#special',
        start: 'top bottom' 
    },
    animationName: 'lineAnim'
});
*/

//special section fades in 
gsap.to("#special", {
    scrollTrigger: {
        trigger: '#special',
        start: 'top bottom' 
    },
    marginTop: 0,
    opacity: 1,
    duration: 0.5
});
gsap.to("#title-border", {
    scrollTrigger: {
        trigger: '#special',
        start: 'top bottom' 
    },
    left: 300,
    opacity: 1,
    duration: 0.5
});


//specials jump in
gsap.to("#special-1", {
    scrollTrigger: {
        trigger: '#special',
        start: 'top bottom' 
    },
    marginTop: 0,
    opacity: 1,
    delay: 0,
    ease: "expo.out",
    duration: 0.5
});
gsap.to("#special-2", {
    scrollTrigger: {
        trigger: '#special',
        start: 'top bottom' 
    },
    marginTop: 0,
    opacity: 1,
    delay: 0.5,
    ease: "expo.out",
    duration: 0.5
});
gsap.to("#special-3", {
    scrollTrigger: {
        trigger: '#special',
        start: 'top bottom' 
    },
    marginTop: 0,
    opacity: 1,
    delay: 1,
    ease: "expo.out",
    duration: 0.5
});

//Menu is written
gsap.to("#menu-title", {
    scrollTrigger: {
        trigger: '#whole-menu',
        start: 'top center' 
    },
    animationName: 'thenanim'
});

gsap.to("#menu-wrapper", {
    scrollTrigger: {
        trigger: '#whole-menu',
        start: 'top center' 
    },
    y: 0,
    ease: "back.out(1.7)",
    opacity: 1,
    duration: 0.75
});

// ************************************
// Make text fade in --not finished
/*
gsap.to("#menu-wrapper", {
    scrollTrigger: {
        trigger: '#whole-menu',
        start: 'top center' 
    },
    y: 0,
    ease: "back.out",
    opacity: 1,
    duration: 0.5,
    delay: 0.75
});
*/
// ************************************

window.onscroll = function () {
    if(window.scrollY > 300) {
        document.getElementById('anim').style.opacity = '0';
    }
    if(window.scrollY < 400) {
        document.getElementById('anim').style.opacity = '1';
    }
}
/*

    if(window.scrollY > 250) {
        TweenLite.to(fWrap, {marginTop: '10%', opacity: '1', duration: 0.3});
        TweenLite.to(fWrapBorder, {marginLeft: '55%', opacity: '1', duration: 0.2, delay: 0.7});
        TweenLite.to(sHeader, {opacity: 1, duration: 0.3, delay: 0.5});
        anime({
            targets: specialElements,
            translateY: 0,
            opacity: 1,
            delay: anime.stagger(100, {start: 200}),
            easing: 'easeInOutQuad'
          });
    }
    if(window.scrollY < 250) {
        TweenLite.to(fWrap, {marginTop: '1000%', opacity: '0', duration: 0.3});
        TweenLite.to(fWrapBorder, {marginLeft: '0%', opacity: '0', duration: 0.2, delay: 0.7});
        TweenLite.to(sHeader, {opacity: 0, duration: 0.3, delay: 0.5});
        anime({
            targets: specialElements,
            translateY: 300,
            opacity: 0
          });
    }
    if(window.scrollY > 1600) {
        document.getElementById('menu-title').style.animationName = 'thenanim';
        
        for(let i = 1; i < 7; i++) {
            let stock = document.getElementById('menu-sec' + i);
            TweenLite.to(stock, {opacity: 1, duration: 0.6, y: 0});
        }
        
    }
    if(window.scrollY < 900) {
        document.getElementById('menu-title').style.animationName = 'nonthenanim';

        for(let i = 1; i < 7; i++) {
            let stock = document.getElementById('menu-sec' + i);
            TweenLite.to(stock, {opacity: 0, duration: 0.6, y: 80});
        }
    }
}
var d = new Date();
var n = d.getDay();
console.log(n);

///////////////////////////////
function returnthisshit() {
    let myNodeList = document.querySelectorAll('.fa-check');
    for (let i = 0; i < 10; i++) {
        if (myNodeList[i].classList.contains('fa-active')) {
            count++;
        }
        percentageData = (count * 10);
        strokeAmount = (565.48 - (((56.5) * count) + (0.48)));
    }
    count = 0;
    circleCont.setAttribute('data-pct', percentageData);
    circleBar.setAttribute('stroke-dashoffset', strokeAmount);
}
///////////////////////////////
*/