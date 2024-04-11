window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onscroll = function() {addSticky()};
let header = document.querySelectorAll('#title')[0];
let sticky = header.offsetTop;
function addSticky() {
if (window.scrollY + 70 > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}

let toggle = document.getElementById('toggle');
let i = 0;
(function typeWriter() {
    toggle.disabled = false;
    let txt = "barna";
    let speed = 280;
    if (i < txt.length) {
        document.getElementsByClassName('text')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        toggle.disabled = true;
    }
})();

let body = document.body;
let a = document.getElementsByTagName('a');
let title = document.getElementById('title');

toggle.addEventListener('input', (e) => {
	let isChecked = e.target.checked;
    if(isChecked) {
        body.classList.toggle('light-theme');
        title.classList.toggle('light-theme');
        for (i=0; i<a.length; i++) {
            a[i].classList.toggle('light-theme');
        }
    }
    else {
        body.classList.toggle('light-theme');
        title.classList.toggle('light-theme');
        for (i=0; i<a.length; i++) {
            a[i].classList.toggle('light-theme');
        }
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        //else {
        //    entry.target.classList.remove('show');
        //}
    })

});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));