
var cssPath = "";
if (visualViewport.width < 1000) {
    cssPath = "styles/mobile.css";
} else {
    cssPath = "styles/desktop.css";
}
window.onload = ()=>{}

    var fileref = document.createElement("link");

    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("href", cssPath);

    document.getElementsByTagName("head")[0].appendChild(fileref);

// }
