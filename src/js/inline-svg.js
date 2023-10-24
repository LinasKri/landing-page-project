document.addEventListener('DOMContentLoaded', function () {
  const svgContainers = document.querySelectorAll('.svg-container');
  svgContainers.forEach((container) => {
    const svgURL = container.getAttribute('data-svg-src');
    fetch(svgURL)
      .then((response) => response.text())
      .then((data) => {
        container.innerHTML = data;
      });
  });
});
