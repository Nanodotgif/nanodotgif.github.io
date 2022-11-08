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
    if (localStorage.getItem("name") === "dagen" || localStorage.getItem("name") === "Dagen")
    {
        alert("I love you, Dagen!!")
        myHeading.textContent = `> hi,  ${myName}!!!♥`;
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
    slides.changeImage();
    slides.startSlidehshow();
}

const imageList = [
    "images/slides/slide-1.jpg",
    "images/slides/slide-2.jpg",
    "images/slides/slide-3.jpg",
    "images/slides/slide-4.jpg",
    "images/slides/slide-5.jpg"
];

var slides = new Slideshow(imageList, 4000, image);
slides.startSlidehshow();

