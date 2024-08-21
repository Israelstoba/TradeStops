// const menuBtn = getElementById("menu-btn")
const menuBtn = document.querySelector('.menu-btn');
const exitBtn = document.querySelector('.exit-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
  navList.style.right = '0';
});
exitBtn.addEventListener('click', () => {
  navList.style.right = '-70%';
});
