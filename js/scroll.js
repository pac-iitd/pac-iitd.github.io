var scrollValue = 3 * window.screen.height / 4;
var prevScrollpos = document.getElementsByTagName("main")[0].scrollTop;

document.getElementsByTagName("main")[0].onscroll = function() {
    var currentScrollPos = document.getElementsByTagName("main")[0].scrollTop;
    // document.querySelectorAll('.curiosity')[0].style.left = currentScrollPos/5 + "vh";
    if (currentScrollPos <= 500) {
        document.querySelectorAll('.curiosity')[0].style.transform = "translateX(" + (currentScrollPos/10).toString() + "vh)";
        document.querySelectorAll('.curiosity')[0].style.transitionDuration = "5s";
    }
    document.getElementsByTagName("nav")[0].setAttribute("style", "background-color: rgba(0, 0, 0, " + Math.pow((currentScrollPos) / scrollValue, 2) + ");");
    if (prevScrollpos >= currentScrollPos) {
        document.getElementsByTagName("nav")[0].style.transitionDuration = "0.5s";
        document.getElementsByTagName("nav")[0].style.top = "0";
    } else {
        if (currentScrollPos > scrollValue) {
            document.getElementsByTagName("nav")[0].style.transform = "translateY(-20vh)";
            document.getElementsByTagName("nav")[0].style.transitionDuration = "1s";
        }
    }
    prevScrollpos = currentScrollPos;
};
