window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let i = 0;
(function typeWriter() {
    let txt = "barna";
    let speed = 280;
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })

});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));