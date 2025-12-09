'use strict';

const headerContainer = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header--mobile .header__nav');

// Header Brightness
const handleHover = function (opacity, e) {
  const target = e.target.closest('.nav__list');

  if (!target) return;

  const btns = headerContainer.querySelectorAll('img,.nav__list,button');

  btns.forEach((el) => {
    if (el !== target) el.style.opacity = opacity;
  });
};

headerContainer.addEventListener('mouseover', handleHover.bind(this, 0.5));
headerContainer.addEventListener('mouseout', handleHover.bind(this, 1));

// Handling Hamburger Animation
hamburger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('rotate');
  headerNav.classList.toggle('header__nav--hidden');
});
