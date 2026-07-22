// Shared behavior for every page: opens/closes the dropdown
// menu and closes it if you click outside the menu.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var panel = document.querySelector('.nav-panel');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    toggle.classList.toggle('is-open');
    panel.classList.toggle('is-open');
  });

  document.addEventListener('click', function (e) {
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove('is-open');
      panel.classList.remove('is-open');
    }
  });
});
