(function() {
    var bar = document.getElementById('progressBar');
    var counter = document.getElementById('progressCounter');
    var container = document.getElementById('progressBarContainer');
    var main = document.getElementById('main');
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        setTimeout(() => {
            container.classList.add('hidden');
            main.classList.add('visible');
        }, 900);
      }
      else {
        width++;
        bar.style.width = width + "%";
        counter.innerHTML = width + "%";
      }
    }
})()
;(function() {
    if (window.screen.width <= 775) {
        var links = document.querySelectorAll('.disable-small');
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            link.addEventListener("click", function(e) {
                e.preventDefault();
            }, false);
        }
    }
})()