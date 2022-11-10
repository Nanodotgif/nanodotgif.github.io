import { Slideshow } from "./slideshow.js";
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What should I call you?");
    if (!myName) {
        myHeading.textContent = `> hi,  ${localStorage.getItem("name")}`;
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `> hi,  ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `> welcome back, ${storedName}`;
}

document.getElementById("userButton").onclick = ()=> {
    setUserName();
}

// Changes the showcase image every 4000 ms
const image = document.querySelector("img");

image.onclick = ()=> {
    slides.pauseSlideshow();
    slides.nextSlide();
    slides.startSlidehshow();
}

const imageList = [
    "images/slides/slide-1.jpg",
    "images/slides/slide-2.jpg",
    "images/slides/slide-3.jpg",
    "images/slides/slide-4.jpg",
    "images/slides/slide-5.jpg"
];

var slides = new Slideshow(imageList, 5000, 200, image);
slides.startSlidehshow();


const forwardButton = document.getElementById("forwardButton");
const backwardButton = document.getElementById("backwardButton");

forwardButton.onclick = ()=> {
    slides.pauseSlideshow();
    slides.nextSlide();
    slides.startSlidehshow();
}
backwardButton.onclick = ()=> {
    slides.startSlidehshow()
    slides.previousSlide();
    slides.pauseSlideshow()
}

const validTargets = ["p", "h1", "h2"];
let text = document.querySelectorAll(validTargets);
text.forEach(element => {
    console.log(element.innerText);
    if (!element.classList.contains("noCarrot")) {
        element.innerText = "> " + element.innerText;
    }
});