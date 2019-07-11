'use strict';
console.log('reading js');

AOS.init({
  duration: 1500
});

var featured = document.querySelector('#featured');

var capstoneprev = document.querySelector('#capstoneprev');
var mapprev = document.querySelector('#mapprev');
var hdprev = document.querySelector('#hdprev');
var appprev = document.querySelector('#appprev');
var awareprev = document.querySelector('#awareprev');
var cataprev = document.querySelector('#cataprev');
var bizprev = document.querySelector('#bizprev');
var brochureprev = document.querySelector('#brochureprev');
var seagradprev = document.querySelector('#seagradprev');

var capstone = document.querySelector('#capstone');
var wrrcmap = document.querySelector('#wrrcmap');
var hd = document.querySelector('#hd');
var app = document.querySelector('#app');
var aware = document.querySelector('#aware');
var catalog = document.querySelector('#catalog');
var bizsystem = document.querySelector('#bizsystem');
var eventbrochure = document.querySelector('#eventbrochure');
var seagrad = document.querySelector('#seagrad');

var float = document.querySelector('#float');

var home = document.querySelector('#home');
var abt = document.querySelector('#abt');

var about = document.querySelector('#about');


abt.addEventListener('click', function() {
  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.display='grid';
  about.style.opacity='1';

  capstone.style.display='none';
  wrrcmap.style.display='none';
  hd.style.display='none';
  app.style.display='none';
  aware.style.display='none';
  catalog.style.display='none';
  bizsystem.style.display='none';
  eventbrochure.style.display='none';
  seagrad.style.display='none';

  abt.style.borderBottom='3px solid #f2bc99';
  home.style.borderBottom='none';
})

home.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='50%';
  featured.style.transform='translateX(-50%)';
  featured.style.opacity='1';
  about.style.display='none';

  capstone.style.display='none';
  wrrcmap.style.display='none';
  hd.style.display='none';
  app.style.display='none';
  aware.style.display='none';
  catalog.style.display='none';
  bizsystem.style.display='none';
  eventbrochure.style.display='none';
  seagrad.style.display='none';

  home.style.borderBottom='3px solid #f2bc99';
  abt.style.borderBottom='none';
})

capstoneprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  capstone.style.display='flex';
  capstone.style.opacity='1';
})

mapprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  wrrcmap.style.display='flex';
  wrrcmap.style.opacity='1';
  // wrrcmap.style.right='50%';;
})

hdprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  hd.style.display='flex';
  hd.style.opacity='1';
  // hd.style.right='50%';
})

appprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  app.style.display='flex';
  app.style.opacity='1';
  // app.style.right='50%';
})

awareprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  aware.style.display='flex';
  aware.style.opacity='1';
  // aware.style.right='50%';
})

cataprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  catalog.style.display='flex';
  catalog.style.opacity='1';
  // catalog.style.right='50%';
})

bizprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  bizsystem.style.display='flex';
  bizsystem.style.opacity='1';
  // catalog.style.right='50%';
})

brochureprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  eventbrochure.style.display='flex';
  eventbrochure.style.opacity='1';
  // catalog.style.right='50%';
})

seagradprev.addEventListener('click', function() {
  window.scrollTo(0, 0);

  featured.style.left='-90%';
  featured.style.opacity='0';
  about.style.opacity='0';
  about.style.right='-80%';

  seagrad.style.display='flex';
  seagrad.style.opacity='1';
  // catalog.style.right='50%';
})
