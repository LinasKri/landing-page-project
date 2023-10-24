document.addEventListener('DOMContentLoaded', function () {
  let accordionButtons = document.querySelectorAll('.faqs__button');

  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      let content = this.parentNode.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btn.classList.remove('active');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.classList.add('active');
      }
    });
  });
});
