document.addEventListener('DOMContentLoaded', function(){

  const opener = document.getElementById("open");
  const closer = document.getElementById("close");
  const display = document.querySelector(".menu-list");

  opener.addEventListener('click', function(){
    display.classList.add('open-list');
  });
  closer.addEventListener('click', function(){
    display.classList.remove('open-list');
  });
});