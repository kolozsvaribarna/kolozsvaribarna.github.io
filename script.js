var i = 0;
var txt = "Barna";
var speed = 200;

(function typeWriter() {
    if (i < txt.length) {
        document.getElementsByClassName('text')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})();

function modeswitch() {
    b = document.body;
    b.classList.toggle('light-mode')
}