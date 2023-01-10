// ---------------------------- LOAD SCREEN -----------------------
window.addEventListener("load", function() {
    const load = document.querySelector(".load")

    setTimeout( function(){
        load.style.display = "none"
    }, 3000);

})


//------------------------------ MENU ------------------------------------

const iconMenu = document.querySelector("#color");
const div = document.querySelector("#div");
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

    if (div.className == "icon_menu") {
        div.className = "change-color";
    } else { 
        div.className = "icon_menu";
    }
});

cerrarHome.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (div.className == "change-color") {
        div.className = "icon_menu";
    }
})

cerrarExperience.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (div.className == "change-color") {
        div.className = "icon_menu";
    }
})

cerrarPortafolio.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (div.className == "change-color") {
        div.className = "icon_menu";
    }
})

cerrarContacto.addEventListener('click', function () {
    if (menu.className == "menu_show") {
        menu.className = "menu_nav";
    } 

    if (div.className == "change-color") {
        div.className = "icon_menu";
    }
})

