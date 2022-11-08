let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What should I call you?");
    if (!myName) {
      setUserName();
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

myButton.onclick = ()=> {
    setUserName();
}

// Changes the showcase image every 4000 ms
const image = document.querySelector("img");

image.onclick = ()=> {
    changeImage();
}

setInterval(changeImage, 4000);
function changeImage() {
    const currentSrc = image.getAttribute("src");
    if (currentSrc === "images/Cyber-Corn-Woman.jpg") {
        image.style.opacity = 0;
        setTimeout(()=> {
            image.setAttribute("src", "images/Caught-In-4K.jpg");
            image.style.opacity = 1;
        }, 500);
    } 
    else {
        image.style.opacity = 0;
        setTimeout(()=> {
            image.setAttribute("src", "images/Cyber-Corn-Woman.jpg");
            image.style.opacity = 1;
        }, 500);
            
    }
}

