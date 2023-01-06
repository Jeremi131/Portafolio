const iconMenu = document.querySelector("#color");
const menu = document.querySelector(".menu_nav");


iconMenu.addEventListener('click', function () {
    menu.classList.toggle("menu_show")

    if (iconMenu.className == "icon_menu") {
        iconMenu.className = "change-color";
    } else { 
        iconMenu.className = "icon_menu";
    }
});

