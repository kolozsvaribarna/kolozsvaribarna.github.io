var i = 0;
var txt = "Barna";
var speed = 150;
const body = document.getElementsByTagName("body")[0];
const arrow = document.getElementsByClassName('arrow')[0];

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

body.setAttribute('class', 'stop-scrolling');
arrow.style.opacity = 0;
arrow.style.transition = "opacity 1s";

(function typeWriter() {
    if (i < txt.length) {
        document.getElementsByClassName('text')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})();

setTimeout(() => {
    arrow.style.opacity = 1; /*show arrows*/
    body.removeAttribute("class"); /*enable scrolling*/
}, speed * txt.length + 450);