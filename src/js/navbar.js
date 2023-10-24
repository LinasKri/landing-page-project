document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarContent = document.getElementById('navbarContent');

  navbarToggler.addEventListener('click', function () {
    if (navbarContent.classList.contains('navbar__content--collapsed')) {
      navbarContent.classList.remove('navbar__content--collapsed');
      navbarContent.classList.add('navbar__content--expanded');
    } else {
      navbarContent.classList.add('navbar__content--collapsed');
      navbarContent.classList.remove('navbar__content--expanded');
    }
  });
});
