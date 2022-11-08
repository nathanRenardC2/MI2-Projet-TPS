// Création d'une classe menu
// Paramètres : nom, lien

class Menu{
    constructor(nom, lien, className){
        this.nom = nom;
        this.lien = lien;
        this.class = className;
    }
}

// Instanciation des objets Menu

// Accueil 
var menu1 = new Menu("Accueil", "accueil.html", "");

// Espace personnel
var menu2 = new Menu("Espace perso", "perso.html", "sous-navigation");

// Destinations
var menu3 = new Menu("Destinations", "destinations.html", "");

// Voyage audio
var menu4 = new Menu("Voyage Audio", "voyage_virtuel_audio.html", "");

// Voyage video
var menu5 = new Menu("Voyage Video", "voyage_virtuel_video.html", "");

// Contact
var menu6 = new Menu("Contact", "contact.html", "");

// Mettre tous ces menus dans un tableau
var menus = [menu1, menu2, menu3, menu4, menu5, menu6];

// Ajout des menus dans le HTML pour chaque menu du tableau
var menusHTML = document.getElementById("menus");
for (var i = 0; i < menus.length; i++) { // Ajout des menus dans le HTML pour chaque menu du tableau
    var menu = menus[i];
    menusHTML.innerHTML += `
        <li class="${menu.class}"><a href="${menu.lien}" class="hover-underline-animation ${(document.location.href.includes(menu.lien)) ? "active" : ""}">${menu.nom}</a></li>
    `;
}

// Instanciations des sous-menus à l'aide de la classe Menu

var sousMenu1 = new Menu("Connexion", "#", "");
var sousMenu2 = new Menu("Messagerie", "#","");
var sousMenu3 = new Menu("Historique", "#", "");
var sousMenu4 = new Menu("Mes informations", "#", "sous-sous-navigation");

// Mettre tous ces sous-menus dans un tableau
var sousMenus = [sousMenu1, sousMenu2, sousMenu3, sousMenu4];

// Ajout des sous-menus dans le HTML pour chaque sous-menu du tableau
var sousMenusHTML = document.getElementsByClassName("sous-navigation");
var NewUl = document.createElement("ul");
sousMenusHTML[0].appendChild(NewUl);
for (var i = 0; i < sousMenus.length; i++) { // Ajout des sous-menus dans le HTML pour chaque sous-menu du tableau
    var sousMenu = sousMenus[i];
    NewUl.innerHTML += `
        <li class="${sousMenu.class}"><a href="${sousMenu.lien}" class="hover-underline-animation">${sousMenu.nom}</a></li>
    `;
}

// Instanciations des sous-sous-menus à l'aide de la classe Menu
var sousSousMenu1 = new Menu("Nom & Prénom", "#");
var sousSousMenu2 = new Menu("Numéro de téléphone", "#");
var sousSousMenu3 = new Menu("Email", "#");

// Mettre tous ces sous-sous-menus dans un tableau
var sousSousMenus = [sousSousMenu1, sousSousMenu2, sousSousMenu3];
var sousSousMenusHTML = document.getElementsByClassName("sous-sous-navigation");
var NewOl = document.createElement("ol");
sousSousMenusHTML[0].appendChild(NewOl);
for (var i = 0; i < sousSousMenus.length; i++) { // Ajout des sous-sous-menus dans le HTML pour chaque sous-sous-menu du tableau
    var sousSousMenu = sousSousMenus[i];
    NewOl.innerHTML += `
        <li><a href="${sousSousMenu.lien}">${sousSousMenu.nom}</a></li>
    `;
}



