import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import anime from 'animejs/lib/anime.es.js';

gsap.registerPlugin(ScrollTrigger);

let specialOne = document.getElementById('spec_1');
let specialTwo = document.getElementById('spec_2');
let specialThree = document.getElementById('spec_3');

let specialElements = [specialOne, specialTwo, specialThree];

let specialTitle1 = document.getElementById('spec_1_title');
let specialTitle2 = document.getElementById('spec_2_title');
let specialTitle3 = document.getElementById('spec_3_title');

let info1 = document.getElementById('info-1');
let info2 = document.getElementById('info-2');
let info3 = document.getElementById('info-3');

let info1img = document.getElementById('info-1-img');
let info2img = document.getElementById('info-2-img');
let info3img = document.getElementById('info-3-img');

let infoFood1 = document.getElementById('info-special-1');
let infoFood2 = document.getElementById('info-special-2');
let infoFood3 = document.getElementById('info-special-3');

specialTitle1.addEventListener('mouseenter', () => {
    specialOne.style.transform = 'scale(1.2)';
    specialOne.style.transitionDuration = '0.5s';
    specialOne.style.filter = 'blur(3px)';
    specialOne.style.boxShadow = 'inset 0 0 110px #000';
    specialTitle1.style.opacity = '1';
});
specialTitle2.addEventListener('mouseenter', () => {
    specialTwo.style.transform = 'scale(1.2)';
    specialTwo.style.transitionDuration = '0.5s';
    specialTwo.style.filter = 'blur(3px)';
    specialTwo.style.boxShadow = 'inset 0 0 110px #000';
    specialTitle2.style.opacity = '1';
});
specialTitle3.addEventListener('mouseenter', () => {
    specialThree.style.transform = 'scale(1.2)';
    specialThree.style.transitionDuration = '0.5s';
    specialThree.style.filter = 'blur(3px)';
    specialThree.style.boxShadow = 'inset 0 0 110px #000';
    specialTitle3.style.opacity = '1';
});

specialTitle1.addEventListener('mouseleave', () => {
    specialOne.style.transform = 'scale(1)';
    specialOne.style.transitionDuration = '0.5s';
    specialOne.style.filter = 'blur(0px)';
    specialOne.style.boxShadow = 'inset 0 0 0px #000';
    specialTitle1.style.opacity = '0';
});
specialTitle2.addEventListener('mouseleave', () => {
    specialTwo.style.transform = 'scale(1)';
    specialTwo.style.transitionDuration = '0.5s';
    specialTwo.style.filter = 'blur(0px)';
    specialTwo.style.boxShadow = 'inset 0 0 0px #000';
    specialTitle2.style.opacity = '0';
});
specialTitle3.addEventListener('mouseleave', () => {
    specialThree.style.transform = 'scale(1)';
    specialThree.style.transitionDuration = '0.5s';
    specialThree.style.filter = 'blur(0px)';
    specialThree.style.boxShadow = 'inset 0 0 0px #000';
    specialTitle3.style.opacity = '0';
});

info1img.addEventListener('mouseenter', () => {
    infoFood1.style.background = 'transparent';
    infoFood1.style.opacity = '1';
    infoFood1.style.transitionDelay = '0.5';
    info1.style.transform = 'scale(3.5)';
});
info1img.addEventListener('mouseleave', () => {
    infoFood1.style.background = 'transparent';
    infoFood1.style.opacity = '0';
    infoFood1.style.transitionDelay = '0s';
    info1.style.transform = 'scale(0)';
});

info2img.addEventListener('mouseenter', () => {
    infoFood2.style.background = 'transparent';
    infoFood2.style.opacity = '1';
    infoFood2.style.transitionDelay = '0.5';
    info2.style.transform = 'scale(3.5)';
});
info2img.addEventListener('mouseleave', () => {
    infoFood2.style.background = 'transparent';
    infoFood2.style.opacity = '0';
    infoFood2.style.transitionDelay = '0s';
    info2.style.transform = 'scale(0)';
});

info3img.addEventListener('mouseenter', () => {
    infoFood3.style.background = 'transparent';
    infoFood3.style.opacity = '1';
    infoFood3.style.transitionDelay = '0.5';
    info3.style.transform = 'scale(3.5)';
});
info3img.addEventListener('mouseleave', () => {
    infoFood3.style.background = 'transparent';
    infoFood3.style.opacity = '0';
    infoFood3.style.transitionDelay = '0s';
    info3.style.transform = 'scale(0)';
});


(function returnthisshit() {
    let myNodeList = document.querySelectorAll('.menu-item');
    for (let i = 0; i < 40; i++) {
        myNodeList[i].addEventListener('mouseenter', () => {
            myNodeList[i].style.color = 'red';
            myNodeList[i].style.cursor = 'pointer';
        });
        myNodeList[i].addEventListener('mouseleave', () => {
            myNodeList[i].style.color = 'rgb(46, 46, 46)';
            myNodeList[i].style.cursor = 'pointer';
        });
    }
})();


let bookTitle = document.getElementById('form');
let bookForm = document.getElementById('booking-form');
let bookButton = document.getElementById('booking-button');
let bookButton2 = document.getElementById('booking-button2');
let submitButton = document.getElementById('sbmbtn');
let exitButton = document.getElementById('exit-btn');
let bookArea = document.getElementById('booking-buttonArea');


bookButton.addEventListener('click', () => {
    bookForm.style.boxShadow = '20px 20px 60px #adb3b6, -20px -20px 60px #ebf2f6';
    bookForm.style.pointerEvents = 'all';
    bookForm.style.transitionDelay = '0.4s';

    submitButton.style.opacity = '1';
    submitButton.style.pointerEvents = 'all';
    submitButton.style.transitionDelay = '1.1s';

    exitButton.style.opacity = '1';
    exitButton.style.pointerEvents = 'all';
    exitButton.style.transitionDelay = '1.1s';

    bookTitle.style.opacity = '1';
    bookTitle.style.transitionDelay = '1.1s';

    bookButton.style.opacity = '0';
    bookButton.style.transitionDelay = '0s';
    bookButton.style.pointerEvents = 'none';
    bookButton.style.zIndex = '-1';

    bookButton2.style.opacity = '0';
    bookButton2.style.transitionDelay = '0s';
    bookButton2.style.zIndex = '-1';
    bookButton2.style.pointerEvents = 'none';
    bookButton2.style.pointerEvents = 'none';

    bookArea.style.pointerEvents = 'none';
});
exitButton.addEventListener('click', () => {
    bookForm.style.boxShadow = '0px 0px 0px #fff, 0px 0px 0px #fff';
    bookForm.style.pointerEvents = 'none';
    bookForm.style.transitionDelay = '0.4s';

    submitButton.style.opacity = '0';
    submitButton.style.pointerEvents = 'none';
    submitButton.style.transitionDelay = '0s';

    exitButton.style.opacity = '0';
    exitButton.style.pointerEvents = 'none';
    exitButton.style.transitionDelay = '0.1s';

    bookTitle.style.transitionDelay = '0.1s';
    bookTitle.style.opacity = '0';

    bookButton.style.opacity = '1';
    bookButton.style.transitionDelay = '1.1s';
    bookButton.style.pointerEvents = 'all';
    bookButton.style.zIndex = '3';

    bookButton2.style.opacity = '1';
    bookButton2.style.zIndex = '2';
    bookButton2.style.transitionDelay = '1s';
    bookButton2.style.pointerEvents = 'all';
    bookButton2.style.pointerEvents = 'all';

    bookArea.style.pointerEvents = 'all';
});
