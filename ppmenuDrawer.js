document.getElementById("ppmenuicon").onclick = function() {
    document.getElementById("ppmenuicondiv").style.opacity = 0;
    document.getElementById("ppmenuicondiv").style.zIndex = -2;
    document.getElementById("ppmobilemenuwrapper").style.opacity = 1;
    document.getElementById("ppmobilemenuwrapper").style.zIndex = 2;
}

document.getElementById("ppmenuxicon").onclick = function() {

    document.getElementById("ppmobilemenuwrapper").style.opacity = 0;
    document.getElementById("ppmobilemenuwrapper").style.zIndex = -2;
    setTimeout(function() {
        document.getElementById("ppmenuicondiv").style.opacity = 1;
        document.getElementById("ppmenuicondiv").style.zIndex = 2;
    }, 150);
}

document.getElementById("projectbody").onclick = function() {

    document.getElementById("ppmobilemenuwrapper").style.opacity = 0;
    document.getElementById("ppmobilemenuwrapper").style.zIndex = -2;
    setTimeout(function() {
        document.getElementById("ppmenuicondiv").style.opacity = 1;
        document.getElementById("ppmenuicondiv").style.zIndex = 2;
    }, 150);
}
