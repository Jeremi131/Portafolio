const iconMenu = document.querySelector("#color");
const menu = document.querySelector("#menu_nav");
const cerrarHome = document.querySelector("#close_home")
const cerrarExperience = document.querySelector("#close_experience")
const cerrarPortafolio = document.querySelector("#close_portafolio")
const cerrarContacto = document.querySelector("#close_contacto")



iconMenu.addEventListener('click', function () {
    if (menu.className == "menu_nav") {
        menu.className = "menu_show";
    } else {
        menu.className = "menu_nav";
    }

    if (iconMenu.className == "icon_menu") {
        iconMenu.className = "change-color";
    } else { 
        iconMenu.className = "icon_menu";
    }
});

cerrarHome.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (iconMenu.className == "change-color") {
        iconMenu.className = "icon_menu";
    }
})

cerrarExperience.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (iconMenu.className == "change-color") {
        iconMenu.className = "icon_menu";
    }
})

cerrarPortafolio.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (iconMenu.className == "change-color") {
        iconMenu.className = "icon_menu";
    }
})

cerrarContacto.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (iconMenu.className == "change-color") {
        iconMenu.className = "icon_menu";
    }
})

