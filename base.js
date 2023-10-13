'use strict';

var mobile_nav_button = document.getElementById('mobile-nav-button');
var mobile_nav = document.getElementById('mobile-nav');
var mobile_nav_exit = document.getElementById('mobile-nav-exit');

function activateMobileNav() {
  mobile_nav.style.display = 'block';
  setTimeout(() => {
    mobile_nav.className = 'mobile-nav-menu active';
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  mobile_nav.className = 'mobile-nav-menu';
  setTimeout(() => {
    mobile_nav.style.display = 'none';
  }, 200);
  document.body.style.overflow = 'auto';
}

mobile_nav_button.addEventListener('click', activateMobileNav);
mobile_nav_exit.addEventListener('click', closeMobileNav);
