(function () {
  var labels = document.querySelectorAll(".roadmap-year-label");

  for (var i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function () {
      if (this.parentElement) {
        this.parentElement.classList.toggle("collapsed");
      }
    });
  }
})();
