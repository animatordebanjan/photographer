/*==================================================
        DEBANJAN PHOTOGRAPHY PORTFOLIO
                SCRIPT.JS PART 1
==================================================*/


/*==================================
        PRE LOADER
==================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "1s";

});


/*==================================
        CUSTOM CURSOR
==================================*/

const cursor = document.querySelector(".cursor");

const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";

    cursor2.style.top = e.clientY + "px";

});


/*==================================
        SCROLL PROGRESS BAR
==================================*/

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progressBar");

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*==================================
        BACK TO TOP BUTTON
==================================*/

const backToTop =

document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backToTop.style.display = "block";

    }

    else{

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================
        SMOOTH NAVIGATION
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==================================
        MOBILE MENU
==================================*/

const menuBtn =

document.querySelector(".menu-btn");

const navLinks =

document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});


/*==================================
        SIMPLE FADE-IN ON SCROLL
==================================*/

const fadeElements = document.querySelectorAll(

".stat-box,.model-card,.gallery-item,.info-box"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.2

}

);

fadeElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="1s";

observer.observe(el);

});


/*==================================================
        SCRIPT.JS PART 2
        GALLERY FILTER + LIGHTBOX
==================================================*/

/*==================================
        GALLERY FILTER
==================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter = button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}

else{

if(item.classList.contains(filter)){

item.style.display="block";

}

else{

item.style.display="none";

}

}

});

});

});


/*==================================
        LIGHTBOX
==================================*/

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

const images = document.querySelectorAll(
".gallery-item img, .idol-layout img, .lehenga-section img, .models-section img, .street-section img"
);

let currentImage = 0;


/*==================================
        OPEN LIGHTBOX
==================================*/

function openLightbox(index){

currentImage=index;

lightbox.style.display="flex";

lightboxImage.src=images[currentImage].src;

}


/*==================================
        IMAGE CLICK
==================================*/

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

openLightbox(index);

});

});


/*==================================
        CLOSE
==================================*/

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});


/*==================================
        CLICK OUTSIDE IMAGE
==================================*/

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});


/*==================================
        NEXT IMAGE
==================================*/

nextBtn.addEventListener("click",()=>{

currentImage++;

if(currentImage>=images.length){

currentImage=0;

}

lightboxImage.src=images[currentImage].src;

});


/*==================================
        PREVIOUS IMAGE
==================================*/

prevBtn.addEventListener("click",()=>{

currentImage--;

if(currentImage<0){

currentImage=images.length-1;

}

lightboxImage.src=images[currentImage].src;

});


/*==================================
        KEYBOARD SUPPORT
==================================*/

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display!=="flex") return;

if(e.key==="Escape"){

lightbox.style.display="none";

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});


/*==================================
        HOVER EFFECT
==================================*/

galleryItems.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-8px)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0px)";

});

});


/*==================================================
        SCRIPT.JS PART 3
==================================================*/


/*==================================
        ANIMATED COUNTERS
==================================*/

const counters = document.querySelectorAll(".stat-box h2");

const speed = 80;

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = parseInt(counter.innerText);

let count = 0;

const updateCounter = ()=>{

const increment = Math.ceil(target / speed);

count += increment;

if(count >= target){

counter.innerText = target + "+";

}

else{

counter.innerText = count + "+";

requestAnimationFrame(updateCounter);

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

},{threshold:0.6});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==================================
        NAVBAR SCROLL EFFECT
==================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 100){

header.style.background = "rgba(0,0,0,.92)";

header.style.padding = "0px";

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

}

else{

header.style.background = "rgba(0,0,0,.35)";

header.style.boxShadow = "none";

}

});


/*==================================
        SCROLL REVEAL
==================================*/

const revealElements = document.querySelectorAll(

"section,.gallery-item,.model-card,.stat-box,.info-box"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0px)";

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition="all .9s ease";

revealObserver.observe(el);

});


/*==================================
        ACTIVE NAVIGATION
==================================*/

const sections = document.querySelectorAll("section");

const navLinks2 = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks2.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){

link.classList.add("active");

}

});

});


/*==================================
        CLOSE MOBILE MENU
==================================*/

navLinks2.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});


/*==================================
        IMAGE HOVER EFFECT
==================================*/

const allImages = document.querySelectorAll("img");

allImages.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transition=".6s";

image.style.filter="brightness(110%)";

});

image.addEventListener("mouseleave",()=>{

image.style.filter="brightness(100%)";

});

});


/*==================================
        FLOATING HERO IMAGE
==================================*/

const heroImage = document.querySelector(".hero-right img");

if(heroImage){

let direction = 1;

let translate = 0;

setInterval(()=>{

translate += direction;

heroImage.style.transform =

`translateY(${translate}px)`;

if(translate > 15){

direction = -1;

}

if(translate < -15){

direction = 1;

}

},40);

}


/*==================================
        BUTTON RIPPLE EFFECT
==================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

button.style.boxShadow="0 0 25px rgba(214,180,107,.6)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

button.style.boxShadow="none";

});

});


/*==================================================
        SCRIPT.JS PART 4
        FINAL
==================================================*/


/*==================================
        HERO PARALLAX
==================================*/

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;

    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    hero.style.backgroundPosition =
    `${50 + x/3}% ${50 + y/3}%`;

});


/*==================================
        TESTIMONIAL AUTO SLIDE
==================================*/

const testimonialSlider = document.querySelector(".testimonial-slider");

if(testimonialSlider){

let scrollAmount = 0;

setInterval(()=>{

scrollAmount += 350;

if(scrollAmount >= testimonialSlider.scrollWidth){

scrollAmount = 0;

}

testimonialSlider.scrollTo({

left:scrollAmount,

behavior:"smooth"

});

},4000);

}


/*==================================
        SIMPLE IMAGE ZOOM
==================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".8s";

img.style.transform="scale(1.08) rotate(.5deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1) rotate(0deg)";

});

});


/*==================================
        KEYBOARD SHORTCUTS
==================================*/

document.addEventListener("keydown",(e)=>{

// Home key = Top

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// End key = Bottom

if(e.key==="End"){

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

});


/*==================================
        PAGE FADE IN
==================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.transition="opacity 1s";

document.body.style.opacity="1";

},200);

});


/*==================================
        RANDOM IMAGE ANIMATION
==================================*/

const allPortfolioImages = document.querySelectorAll(

".gallery-item img,.model-card img,.instagram-grid img"

);

setInterval(()=>{

if(allPortfolioImages.length===0) return;

const random = Math.floor(Math.random()*allPortfolioImages.length);

allPortfolioImages[random].style.transform="scale(1.06)";

setTimeout(()=>{

allPortfolioImages[random].style.transform="scale(1)";

},800);

},3000);


/*==================================
        SECTION TITLE ANIMATION
==================================*/

const headings = document.querySelectorAll(".section-heading h2");

headings.forEach(title=>{

title.addEventListener("mouseenter",()=>{

title.style.letterSpacing="4px";

title.style.transition=".4s";

});

title.addEventListener("mouseleave",()=>{

title.style.letterSpacing="0px";

});

});


/*==================================
        SOCIAL ICON HOVER
==================================*/

const socials = document.querySelectorAll(".social-grid a");

socials.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-12px) scale(1.05)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) scale(1)";

});

});


/*==================================
        IMAGE LAZY EFFECT
==================================*/

const lazyImages = document.querySelectorAll("img");

const lazyObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transition="1s";

lazyObserver.unobserve(entry.target);

}

});

});

lazyImages.forEach(img=>{

img.style.opacity="0";

lazyObserver.observe(img);

});


/*==================================
        CONSOLE MESSAGE
==================================*/

console.log("%cWelcome to Debanjan Chakraborty's Portfolio",
"color:#d6b46b;font-size:18px;font-weight:bold;");

console.log("%cDesigned with HTML5 • CSS3 • JavaScript",
"color:white;font-size:14px;");


/*==================================
        END OF SCRIPT
==================================*/