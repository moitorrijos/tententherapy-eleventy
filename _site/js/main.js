window.addEventListener('load', () => {
  quicklink.listen();
  const menuToggle = document.querySelector(".menu-toggle")
  const menu = document.querySelector("ul.mainmenu")
  menuToggle.addEventListener('click', function(event){
    const { target } = event;
    if ( target.nodeName === 'SPAN' ) {
        target.offsetParent.classList.toggle('open');
    } else {
        target.classList.toggle('open');
    }
    menu.classList.toggle('visible-menu');
})
});