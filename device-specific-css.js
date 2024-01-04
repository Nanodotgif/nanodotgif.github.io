
var cssPath = "";
if (visualViewport.width < 600) {
    cssPath = "styles/mobile.css";
} else {
    cssPath = "styles/desktop.css";
}
window.onload = ()=>{}

    var fileref = document.createElement("link");

    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", cssPath);

    document.getElementsByTagName("head")[0].appendChild(fileref);

// }