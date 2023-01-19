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
 
 
// Command Line
var inputRequested = false;
var currentCallback;
var userName = "";
const inputField = document.getElementById("userInput");
inputField.addEventListener("keydown", (key)=> {
    if (key.key === "Enter" && !inputRequested) {
        addToFeed(inputField.value, 'c');
        parseCommand(inputField.value);
        inputField.value = "";
    } else if (key.key === "Enter" && inputRequested) {
        addToFeed(inputField.value, 'c');
        currentCallback(inputField.value);
        inputField.value = "";
        inputRequested = false;
    }
});
 
 
const commandFeed = document.getElementById("commandFeed");
function addToFeed(command, type) {
    var b = "";
    if (type === 'c') {b = ">"};
    commandFeed.innerText += "\r\n" + b + command;
}
 
async function requestInput(callback) {
    inputRequested = true;
    currentCallback = callback;
}
 
function parseCommand(input) {
    if(inputRequested) {return};
    let args = input.split(" ");
    let command = args[0];
    args.shift();
    let argsPassed = !(args.length == 0);
    console.log(argsPassed);
    switch (command.toLowerCase()) {
        case "test":
            addToFeed("Test!!!");
            break;
 
        case "cls":
            commandFeed.innerText = "";
            break;
 
        case "help":
            addToFeed("Have some help!\r\nCOMMANDS:\r\ncls: clear screen\r\nsetname: set your name\r\nsignout: sign out.");
            break;
 
        case "setname":
            if (argsPassed) {
                userName = args[0];
                addToFeed(`Your name is ${userName}!`);
            } else {
                addToFeed("What would you like your name to be?");
                requestInput((name) => {
                    userName = name;
                    addToFeed(`Your name is ${userName}!`);
                });
            }
            break;

        case "nav":
            if (argsPassed) {
                document.location.href=args[0]+".html";
            } else {
                addToFeed("Which page would you like to navigate to?");
                requestInput((page) => {
                    document.location.href = page+".html";
                })
            }
            break;
 
        case "signout":
            addToFeed("Are you sure you want to sign out? (Y/N)");
            requestInput((answer) => {
                if (answer.toLowerCase() === "y") {addToFeed("Signed out.")} else {addToFeed("Action cancelled.")};
                userName = "";
            });
            break;
 
        case "whoami":
            if (userName != "") {addToFeed(userName)} else {addToFeed("No user logged in.")};
            break;
 
        default:
            addToFeed(`Command '${command}' not recognized.`);
            break;
    }
}