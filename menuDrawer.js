document.getElementById("menuicon").onclick = function() {
    document.getElementById("menuicon").style.opacity = 0;
    document.getElementById("menuicon").style.zIndex = -2;
    document.getElementById("mobilemenuwrapper").style.opacity = 1;
    document.getElementById("mobilemenuwrapper").style.zIndex = 2;
}
document.getElementById('menuxicon').onclick = function() {
    console.log("hi");
    document.getElementById("mobilemenuwrapper").style.opacity = 0;
    document.getElementById("mobilemenuwrapper").style.zIndex = -2;
    setTimeout(function() {
        document.getElementById("menuicon").style.opacity = 1;
        document.getElementById("menuicon").style.zIndex = 2;
    }, 150);

}
