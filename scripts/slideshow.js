export class Slideshow {
    constructor(images,delay,transitionTime, img) {
        this.images = images;
        this.delay = delay;
        this.img = img;
        this.transitionTime = transitionTime;
        this.index = 0;
        this.slideshowTimer;
        this.img.setAttribute("src", this.images[this.index]);
    }


    startSlidehshow() {
        //var slideshowTimer = setInterval(changeImage, this.delay);
        this.slideshowTimer = setInterval(this.nextSlide.bind(this), this.delay)
    }

    pauseSlideshow() {
        clearInterval(this.slideshowTimer);
    }

    nextSlide() {
        this.index += 1;
        if (this.index === this.images.length) {
            this.index = 0;
        }
        this.img.style.opacity = 0;
        setTimeout(()=> {
            this.img.setAttribute("src", this.images[this.index]);
            this.img.style.opacity = 1;
        }, this.transitionTime);
    }
    previousSlide() {
        this.index -= 1;
        if (this.index === -1) {
            this.index = this.images.length - 1;
        }
        this.img.style.opacity = 0;
        setTimeout(()=> {
            this.img.setAttribute("src", this.images[this.index]);
            this.img.style.opacity = 1;
        }, this.transitionTime);
    }
}