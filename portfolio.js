function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }

}

// SHADOW ON NAVIGATION BAR WHILE SCROLLING

window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// TYPING EFFECT

var typingEffect = new Typed(".typedText", {
    strings: ["Web Designer", "Web Developer"],
    loop: true,
    typeSpeed: 100,
    backSpped: 80,
    backDelay: 2000
})

// SCROLL REVEAL

const scrl = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
scrl.reveal('.featured-text-card', {})
scrl.reveal('.featured-name', { delay: 100 })
scrl.reveal('.featured-text-info', { delay: 200 })
scrl.reveal('.featured-text-btn', { delay: 200 })
scrl.reveal('.social_icons', { delay: 200 })
scrl.reveal('.featured-image', { delay: 300 })

scrl.reveal('.project-box',{interval: 200})
scrl.reveal('.top-header',{})



const scrleft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
scrleft.reveal('.about-info', { delay: 100 })
scrleft.reveal('.contact-info', { delay: 100 })



const scrlrt = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
scrlrt.reveal('.skills-box', { delay: 100 })
scrlrt.reveal('.form-control', { delay: 100 })