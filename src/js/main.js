var $ = document.querySelector
var menuList = $('nav#mainMenu ul');
var menuH2 = $('nav#mainMenu h2');

// Init.
menuList.classList.remove('visibleMenu');

// Toggle.
menuH2.addEventListener('click', function () {
  menuList.classList.toggleClass('visibleMenu')
})
