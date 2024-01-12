var i = 0;
(function typeWriter() {
    var txt = "Barna";
    var speed = 200;
    if (i < txt.length) {
        document.getElementsByClassName('text')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
})();

function modeSwitch() {
    document.body.classList.toggle('lightMode')
}