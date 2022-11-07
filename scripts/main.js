
const image = document.querySelector("img");

image.onclick = ()=> {
    const currentSrc = image.getAttribute("src");
    if (currentSrc === "images/Cyber-Corn-Woman.jpg") {
        image.setAttribute("src", "images/Caught-In-4K.jpg");
    } else {
        image.setAttribute("src", "images/Cyber-Corn-Woman.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What should I call you?");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `> hi, youre ${myName}`;
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

