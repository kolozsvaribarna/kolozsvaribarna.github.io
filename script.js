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

let toggle = document.getElementById('toggle');
let body = document.body;
toggle.addEventListener('input', (e) => {
	let isChecked = e.target.checked;
	if(isChecked) {
		body.classList.toggle('light-theme');
	} else {
		body.classList.toggle('light-theme');
	}
});