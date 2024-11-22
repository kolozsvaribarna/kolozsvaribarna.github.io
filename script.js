(function() {
  if (window.screen.width <= 775) {
    var links = document.querySelectorAll('.disable-small');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.addEventListener("click", function(e) {
          e.preventDefault();
      }, false);
    }
  }
})();

(function() {
  const colorButton = document.getElementById('color-switch');
  const root = document.querySelector(':root');
  colorButton.addEventListener('click', root.classList.add('dark-mode'));
})();

function toggleColorMode() {
  document.querySelector(':root').classList.toggle('dark-mode');
}