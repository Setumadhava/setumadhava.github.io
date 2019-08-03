document.getElementById("ppmenuicon").onclick = function() {
    document.getElementById("ppmenuicon").style.opacity = 0;
    document.getElementById("ppmenuicon").style.zIndex = -2;
    document.getElementById("ppmobilemenuwrapper").style.opacity = 1;
    document.getElementById("ppmobilemenuwrapper").style.zIndex = 2;
}
document.getElementById('ppmenuxicon').onclick = function() {

    document.getElementById("ppmobilemenuwrapper").style.opacity = 0;
    document.getElementById("ppmobilemenuwrapper").style.zIndex = -2;
    setTimeout(function() {
        document.getElementById("ppmenuicon").style.opacity = 1;
        document.getElementById("ppmenuicon").style.zIndex = 2;
    }, 150);

}
