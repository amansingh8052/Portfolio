const bars = document.querySelector('.icons');
const a = document.querySelectorAll('.navbar a');
const dropDown = document.querySelector('.navbar');

bars.addEventListener('click', (event) => {
    event.stopPropagation();
    dropDown.classList.toggle('clicked');
    a.forEach((link) => {
        link.classList.toggle('clicked');
    });
});

a.forEach((link) => {
    link.addEventListener('click', (event) => {
        // event.stopPropagation();
        // dropDown.classList.toggle('clicked');
        a.forEach((otherLink) => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
            }
        });
        // Toggle the active class of the clicked link
        link.classList.toggle('active');
    });
});

document.addEventListener('click', () => {
    dropDown.classList.remove('clicked');
    a.forEach((link) => {
        link.classList.remove('clicked');
    });
});
const typed = new Typed('.multiple-text' , {
    strings: ['Frontend Developer','Graphic Designer','UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const circularProgressReact = document.querySelector(".circular-progress.react");
const progressValueReact = document.querySelector(".circular-progress.react .progress-value");
let progressStartValueReact = 0;
const progressEndValueReact = 70;
const speedReact = 10;
let progressReact = setInterval(() => {
    progressStartValueReact++;
    progressValueReact.textContent = `${progressStartValueReact}%`;
    circularProgressReact.style.background = `conic-gradient(#52D3D8 ${progressStartValueReact * 3.6}deg, #fff 0deg)`;
    if (progressStartValueReact == progressEndValueReact) {
        clearInterval(progressReact);
    }
}, speedReact);
// For PhotoShop
const circularProgressPs = document.querySelector(".circular-progress.photoShop");
const progressValuePs = document.querySelector(".circular-progress.photoShop .progress-value");
let progressStartValuePs = 0;
const progressEndValuePs = 60;
const speedPs = 8;
let progressPs = setInterval(() => {
    progressStartValuePs++;
    progressValuePs.textContent = `${progressStartValuePs}%`;
    circularProgressPs.style.background = `conic-gradient(#F06595 ${progressStartValuePs * 3.6}deg, #fff 0deg)`;
    if (progressStartValuePs == progressEndValuePs) {
        clearInterval(progressPs);
    }
}, speedPs);

// For Illustrator
const circularProgressAi = document.querySelector(".circular-progress.illustrator");
const progressValueAi = document.querySelector(".circular-progress.illustrator .progress-value");
let progressStartValueAi = 0;
const progressEndValueAi = 80;
const speedAi = 12;
let progressAi = setInterval(() => {
    progressStartValueAi++;
    progressValueAi.textContent = `${progressStartValueAi}%`;
    circularProgressAi.style.background = `conic-gradient(#FFD700 ${progressStartValueAi * 3.6}deg, #fff 0deg)`;
    if (progressStartValueAi == progressEndValueAi) {
        clearInterval(progressAi);
    }
}, speedAi);

// For FIGMA
const circularProgressFigma = document.querySelector(".circular-progress.figma");
const progressValueFigma = document.querySelector(".circular-progress.figma .progress-value");
let progressStartValueFigma = 0;
const progressEndValueFigma = 80;
const speedFigma = 15;
let progressFigma = setInterval(() => {
    progressStartValueFigma++;
    progressValueFigma.textContent = `${progressStartValueFigma}%`;
    circularProgressFigma.style.background = `conic-gradient(#32CD32 ${progressStartValueFigma * 3.6}deg, #fff 0deg)`;
    if (progressStartValueFigma == progressEndValueFigma) {
        clearInterval(progressFigma);
    }
}, speedFigma);


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.homeContent, .heading', { origin:'top' });
ScrollReveal().reveal('.social, .dowmloadTag', { origin:'bottom' });
ScrollReveal().reveal('.projectElement, .projects-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.skillsContent, .horizontal ,.projectCard h1', { origin:'left' });
ScrollReveal().reveal('.skillsGraph, .about-content', { origin:'right' });