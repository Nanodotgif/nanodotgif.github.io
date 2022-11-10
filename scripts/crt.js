function typeWriter(el, text) {
    document.getElementById("cursor").removeAttribute("id");
    el.setAttribute("id", "cursor");
    const textArray = text.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
    setTimeout(() => {
        el.innerHTML += letter;
    }, 95 * i));
    

}
let typewriterTargets = document.querySelectorAll(".typewriter");
typewriterTargets[0].setAttribute("id","cursor");
window.onload = ()=> {typeWriter(typewriterTargets[0], "Hello, I'm Josh.");}
setTimeout(() => {
    typeWriter(typewriterTargets[1], "What's your name?");
}, 2000);




// Filter Toggle Button
const toggleFilter = document.getElementById("toggleFilter");
const filter = document.getElementById("filter");
const wrapper = document.getElementById("mainWrapper");
var filterEnabled = true;

toggleFilter.onclick = ()=> {
    if (filterEnabled) {
        filter.style.display = "none";
        wrapper.style.animation = "";
        filterEnabled = false;
    } else {
        filter.style.display = "initial";
        wrapper.style.animation = "textShadow 30s infinite";
        filterEnabled = true;
    }
}