document.addEventListener('DOMContentLoaded',function(){
 const menuButton = document.getElementById('button');
 const menu = document.querySelector('.menu-list');
 const closer = document.getElementById('closer');


 menuButton.addEventListener('click', function(){
  menu.classList.add('show');
 });
 closer.addEventListener('click', function(){
  menu.classList.remove('show');
 });
});