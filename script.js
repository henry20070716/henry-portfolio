/* ===========================
   TYPING EFFECT
=========================== */

const typing = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "C Programmer",
    "Python Learner",
    "Problem Solver",
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){
            deleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);
}

typeEffect();

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

/* ===========================
   NAVBAR SHADOW
=========================== */

window.addEventListener("scroll",()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 40){

        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }else{

        navbar.style.boxShadow="none";

    }

});

/* ===========================
   ACTIVE LINK
=========================== */

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;
        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});