window.addEventListener('load', () => {
  quicklink.listen();
  const menuToggle = document.querySelector(".menu-toggle")
  const menu = document.querySelector("ul.mainmenu")
  menuToggle.addEventListener('click', function(event) {
    const { target } = event;
    menu.classList.toggle('visible-menu');
    target.classList.toggle('open');
  })
});