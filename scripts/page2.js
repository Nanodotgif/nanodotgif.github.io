import { Slideshow } from "./slideshow.js";
const imageList = [
    "images/slides/slide-1.jpg",
    "images/slides/slide-2.jpg",
    "images/slides/slide-3.jpg",
    "images/slides/slide-4.jpg",
    "images/slides/slide-5.jpg"
];


const image = document.getElementById("slideshowImage")
var slides = new Slideshow(imageList, 50, 0, image);
slides.startSlidehshow();