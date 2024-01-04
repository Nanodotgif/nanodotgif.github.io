const menuButton = document.getElementById("menu");
const menuBar = document.getElementById("menu-bar");
const menuContainer = document.getElementById("menu-container");
const topBar = document.getElementById("top-bar");
const hamburgerIcon = document.getElementById("menu").childNodes[0];

menuOpened = false;

menuButton.onclick = ()=> {
    toggleMenu()
};

menuContainer.onclick = ()=> {
    toggleMenu();
}

function toggleMenu() {
    if (menuOpened === false) {
        menuContainer.style.display = "block";
        setTimeout(() => {
            menuContainer.style.backgroundColor = "var(--shadow-color)";
            menuBar.style.transform = "translate(0%)";
            hamburgerIcon.style.transform = "rotate(90deg)" 
        }, 0.01);
    } else {
        setTimeout(() => menuContainer.style.display = "none", 300);
        menuContainer.style.backgroundColor = "transparent";
        menuBar.style.transform = "translate(-100%)";
        hamburgerIcon.style.transform = "rotate(0deg)" 
    }
    menuOpened = !menuOpened;
}