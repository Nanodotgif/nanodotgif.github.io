export class Slideshow {
    constructor(images,delay,img) {
        this.images = images;
        this.delay = delay;
        this.img = img;
        this.index = 0;
        this.slideshowTimer;
        this.img.setAttribute("src", this.images[this.index]);
    }


    startSlidehshow() {
        //var slideshowTimer = setInterval(changeImage, this.delay);
        this.slideshowTimer = setInterval(this.changeImage.bind(this), this.delay)
    }

    pauseSlideshow() {
        clearInterval(this.slideshowTimer);
    }

    changeImage() {
    this.img.style.opacity = 0;
    setTimeout(()=> {
        this.img.setAttribute("src", this.images[this.index]);
        this.img.style.opacity = 1;
    }, 500);
    this.index += 1;
    if (this.index === this.images.length) {
        this.index = 0;
    }
}
}