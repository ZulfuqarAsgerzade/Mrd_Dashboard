console.log("Hello World!");

let subMenu = document.getElementsByClassName('dashboard_submenu')[0];

let subMenuBtn = document.getElementById('subMenuBtn');
console.log(subMenuBtn);

subMenuBtn.onclick = function() { 
    subMenu.classList.toggle("submenu_close");
}; 
