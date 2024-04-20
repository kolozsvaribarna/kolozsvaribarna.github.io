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