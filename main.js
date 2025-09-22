const menuButton = document.getElementById("menu");
const menuBar = document.getElementById("menu-bar");
const menuContainer = document.getElementById("menu-container");
const topBar = document.getElementById("top-bar");
const hamburgerIcon = document.getElementById("menu").childNodes[1];
const themeSwitcher = document.getElementById("theme-switcher");

menuOpened = false;
isLightMode= false;

menuButton.onclick = ()=> {
    toggleMenu()
};

menuContainer.onclick = ()=> {
    toggleMenu();
}

themeSwitcher.onclick = () => {
    toggleTheme();
}



function toggleMenu() {
    if (menuOpened === false) {
        menuOpened = !menuOpened;
        menuContainer.style.display = "block";
        setTimeout(() => {
            menuContainer.style.backgroundColor = "var(--shadow-color)";
            menuBar.style.transform = "translate(0%)";
            hamburgerIcon.style.transform = "rotate(90deg)" 
        }, 0.01);
    } else {
        menuOpened = !menuOpened;
        setTimeout(() => menuContainer.style.display = "none", 300);
        menuContainer.style.backgroundColor = "transparent";
        menuBar.style.transform = "translate(-100%)";
        hamburgerIcon.style.transform = "rotate(0deg)" 
    }
}

function toggleTheme() {
    if (isLightMode) {
        themeSwitcher.innerHTML = "&#9790";
        document.documentElement.style.setProperty("--background-color", "#242333");
        document.documentElement.style.setProperty("--text-color", "#FFFFFF");
        document.documentElement.style.setProperty("--accent-color", "#01B0D3");
        document.documentElement.style.setProperty("--shadow-color", "#01B0D33D");
    } else {
        themeSwitcher.innerHTML = "&#9728";
        document.documentElement.style.setProperty("--background-color", "#f7f7f7");
        document.documentElement.style.setProperty("--text-color", "#242333");
        document.documentElement.style.setProperty("--accent-color", "#389db1");
        document.documentElement.style.setProperty("--shadow-color", "#00667a3d");
    }
    isLightMode = !isLightMode;
}

document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.title');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            title.classList.add('shrink');
        } else {
            title.classList.remove('shrink');
        }
    });
});