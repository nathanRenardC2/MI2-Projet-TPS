///////// JSON

//// JSON DES PAGES

// Page d'accueil

let accueil = [
    {
      "element": "section",
      "children": [
        {
            "element": "h2",
            "text": "Description générale"
        },
        {
            "element": "p",
            "text" : "Notre agence de voyage vous propose des voyages dans le monde entier. Vous pouvez réserver un voyage en ligne ou nous contacter par téléphone ou par mail."
        },
      ],
    },
    {
      "element": "section",
      "children": [
        {
            "element": "h2",
            "text": "Infos pratiques"
        },
        {
            "element": "p",
            "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos. Eveniet et eius obcaecati recusandae, voluptas dolores cum neque totam, beatae facilis doloremque minus ut iusto odit quos nisi alias. Dolores eius laudantium vitae omnis natus ipsa nulla distinctio dolorum ea repellendus vero tempora, voluptas, cumque delectus quas nam repudiandae harum debitis officia magni quibusdam, rerum quia eum? Maiores, necessitatibus? Sed veniam ullam nihil amet velit facere mollitia voluptates incidunt earum ratione fugit autem, officia nostrum. Molestiae, enim debitis, ipsum alias magni reiciendis qui quo dolorum, exercitationem nam ea incidunt. Doloribus repellendus, provident, sit commodi nisi asperiores harum dicta quam iusto in dignissimos voluptatem hic id at nam, corporis ipsum obcaecati odit! Eius ab cumque inventore? Ipsa praesentium magni totam.Adipisci, ad. Ullam unde dignissimos obcaecati quibusdam repellat cumque mollitia, quidem ab officiis sed iste illum quod libero similique reiciendis blanditiis minus. Aliquam eos ea eligendi totam blanditiis quae perferendis?"
        },
      ],
    }
];

// Page des destinations

let destinations = [
  {
    "id": generateId(),
    "img" : "../Assets/madrid.jpg",
    "title" : "Madrid",
    "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos. Eveniet et eius obcaecati recusandae, voluptas dolores cum neque totam, beatae facilis doloremque minus ut iusto odit quos nisi alias. Dolores eius laudantium vitae omnis natus ipsa nulla distinctio dolorum ea repellendus vero tempora, voluptas, cumque delectus quas nam repudiandae harum debitis officia magni quibusdam, rerum quia eum?",
    "price" : "1000"
  },
  {
    "id": generateId(),
    "img" : "../Assets/paris.jpg",
    "title" : "Paris",
    "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos. Eveniet et eius obcaecati recusandae, voluptas dolores cum neque totam, beatae facilis doloremque minus ut iusto odit quos nisi alias. Dolores eius laudantium vitae omnis natus ipsa nulla distinctio dolorum ea repellendus vero tempora, voluptas, cumque delectus quas nam repudiandae harum debitis officia magni quibusdam, rerum quia eum?",
    "price" : "800"
  },
  {
    "id": generateId(),
    "img" : "../Assets/berlin.jpg",
    "title" : "Berlin",
    "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quos. Eveniet et eius obcaecati recusandae, voluptas dolores cum neque totam, beatae facilis doloremque minus ut iusto odit quos nisi alias. Dolores eius laudantium vitae omnis natus ipsa nulla distinctio dolorum ea repellendus vero tempora, voluptas, cumque delectus quas nam repudiandae harum debitis officia magni quibusdam, rerum quia eum?",
    "price" : "200"
  },

]


let destinations_form = [
  {
    "label" : {
      "text" : "Ville destination",
      "for" : "ville_destination",
    },
    "input" : {
      "type" : "text",
      "id" : "ville_destination",
      "name" : "ville_destination",
      "required" : true,
    }
  },
  {
    "label" : {
      "text" : "Image",
      "for" : "image_destination",
    },
    "input" : {
      "type" : "file",
      "id" : "image_destination",
      "name" : "image_destination",
      "required" : false,
    }
  },
  {
    "label" : {
      "text" : "Prix",
      "for" : "prix",
    },
    "input" : {
      "type" : "number",
      "id" : "prix_destination",
      "name" : "prix_destination",
      "required" : true,
    }
  },
]

// Page de voyage virtuel audio
// On récupère que les données qui vont changer entre les cards
// Les audios restent les mêmes pour chaque card, seul le nom change
let voyage_audio = [
    {
      "name": "voyage_audio1",
    },
    {
      "name": "voyage_audio2",
    },
    {
      "name": "voyage_audio3",
    },
  ];

// Page de voyage virtuel vidéo
// On récupère que les données qui vont changer entre les cards
// Les vidéos restent les mêmes pour chaque card, seul le nom change
let voyage_video = [
    {
      "name": "voyage_video1",
    },
    {
      "name": "voyage_video2",
    },
    {
      "name": "voyage_video3",
    },
  ];

// Page de contact
// On récupère que les données qui vont changer entre les lignes
let contact = [
  {
    "label" : {
      "text" : "Nom",
      "for" : "name",
    },
    "input" : {
      "type" : "text",
      "id" : "name",
      "name" : "user_name",
      "required" : true,
    }
  },
  {
    "label" : {
      "text" : "Prénom",
      "for" : "surname",
    },
    "input" : {
      "type" : "text",
      "id" : "surname",
      "name" : "user_surname",
      "required" : true,
    }
  },
  {
    "label" : {
      "text" : "Email",
      "for" : "mail",
    },
    "input" : {
      "type" : "mail",
      "id" : "mail",
      "name" : "user_email",
      "required" : true,
    }
  },
  {
    "label" : {
      "text" : "Téléphone",
      "for" : "tel",
    },
    "input" : {
      "type" : "tel",
      "id" : "tel",
      "name" : "user_tel",
      "required" : true,
    }
  },
]


//// JSON DU MENUS

let menu = [
    {
      "name": "Accueil",
      "onclick" : "pageAccueil()",
    },
    {
      "name": "Espace perso",
      "children": [
        {
          "name": "Connexion",
        },
        {
          "name": "Messagerie",
        },
        {
          "name": "Historique",
        },
        {
          "name" : "Mes informations",
          "children" : [
            {
              "name" : "Nom & Prénom",
            },
            {
              "name" : "Numéro de téléphone",
            },
            {
              "name" : "Email",
            },
          ]
        }
      ]
    },
    {
      "name": "Destinations",
      "onclick" : "pageDestinations()"
    },
    {
      "name": "Voyage audio",
      "onclick" : "pageVoyageAudio()"
    },
    {
      "name": "Voyage vidéo",
      "onclick" : "pageVoyageVideo()"
    },
    {
      "name": "Contact",
      "onclick" : "pageContact()"
    },
];

//// GESTION DU MENU

let menus = document.getElementById("menus");

// On boucle sur le JSON pour créer les menus
for(let i = 0; i < menu.length; i++){
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", "#");
  a.setAttribute("onclick", menu[i].onclick);
  a.classList.add("hover-underline-animation");
  a.innerHTML = menu[i].name;
  li.appendChild(a);
  // Si le menu a des enfants, on crée un sous-menu
  if(menu[i].children){
    let ul = document.createElement("ul");
    // On boucle sur les enfants
    for(let j = 0; j < menu[i].children.length; j++){
      let li2 = document.createElement("li");
      let a2 = document.createElement("a");
      a2.setAttribute("href", "#");
      a2.classList.add("hover-underline-animation");
      a2.innerHTML = menu[i].children[j].name;
      li2.appendChild(a2);
      ul.appendChild(li2);
      // Si l'enfant a des enfants, on crée un sous-sous-menu
      if(menu[i].children[j].children){
        let ol = document.createElement("ol");
        li2.classList.add("sous-navigation");
        // On boucle sur les enfants
        for(let k = 0; k < menu[i].children[j].children.length; k++){
          let li3 = document.createElement("li");
          let a3 = document.createElement("a");
          a3.setAttribute("href", "#");
          a3.innerHTML = menu[i].children[j].children[k].name;
          li3.appendChild(a3);
          ol.appendChild(li3);
        }
        li2.appendChild(ol);
      }
    }
    li.appendChild(ul);
  }
  menus.appendChild(li);
}

/**
 * Retire la classe active de tous les liens du menu
 * @param void
 * @return void
 */
function removeActive(){
  let a = document.querySelectorAll("li a");
  for(let i = 0; i < a.length; i++){
    a[i].classList.remove("active");
  }
}

/**
 * Ajoute la classe active au bouton du menu ayant le string passé en paramètre
 * @param void
 * @return void
 */
function addActive(string){
  let a = document.querySelectorAll("li a");
  // On retire la class active de tous les liens
  removeActive();
  for(let i = 0; i < a.length; i++){
    if(a[i].innerHTML == string){
      a[i].classList.add("active");
    }
  }
  
}

//// GESTION DES PAGES

// Récupération du main_container du DOM afin de pouvoir y ajouter les éléments
let main_container = document.getElementsByClassName("main_container")[0];

// On affiche la page d'accueil lorsque le dom a finit de charger
window.addEventListener("DOMContentLoaded", pageAccueil);

/**
 * Supprime le contenu de la page
 * @param void
 * @return void
 */
function clearPage(){
    while(main_container.firstChild){
        main_container.removeChild(main_container.firstChild);
    }
}

/**
 * Affiche la page d'accueil
 * @param void
 * @return void
 */
function pageAccueil(){
  // On supprime le contenu de la page
  clearPage();

  addActive("Accueil");

  // On boucle sur le JSON pour créer la page
  accueil.forEach(function(data){
    let section = document.createElement(data.element);
    if(data.children){
      data.children.forEach(function(child){
        let child_element = document.createElement(child.element);
        child_element.innerHTML = child.text;
        section.appendChild(child_element);
      });
    }
    main_container.appendChild(section);
  });
}

/**
 * Affiche la page des destinations
 * @param void
 * @return void
 */
function pageDestinations(){
  // On supprime le contenu de la page
  clearPage();

  // On ajoute la classe active sur le lien de la page d'accueil
  addActive("Destinations");



  // Création du tableau, du thead en dure ( car celui-ci n'est pas dynamique ) et du boutton pour ajouter une destination 
  let section = document.createElement("section");
  section.setAttribute("id", "debut");
  let button_add = document.createElement("button");
  button_add.setAttribute("onclick", "formOpenDestination()");
  button_add.innerHTML = "Ajouter une destination";
  button_add.setAttribute("id", "ajouter_button");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  let th = document.createElement("th");
  th.innerHTML = "Destinations";
  tr.appendChild(th);

  let th2 = document.createElement("th");
  th2.innerHTML = "Offres";
  tr.appendChild(th2);

  let th3 = document.createElement("th");
  th3.innerHTML = "Prix";
  tr.appendChild(th3);

  let th4 = document.createElement("th");
  th4.innerHTML = "";
  tr.appendChild(th4);

  let th5 = document.createElement("th");
  th5.innerHTML = "Début";
  tr.appendChild(th5);

  let th6 = document.createElement("th");
  th6.innerHTML = "Modifier";
  tr.appendChild(th6);

  let th7 = document.createElement("th");
  th7.innerHTML = "Supprimer";
  tr.appendChild(th7);

  thead.appendChild(tr);

  // Création du tbody
  let tbody = document.createElement("tbody");
  tbody.setAttribute("id", "tbody_destinations");


  // On boucle sur le JSON
  destinations.forEach(function(data){
    let tr = document.createElement("tr");
    let id_tr = "destination_" + data["id"];
    tr.setAttribute("id", id_tr);

    let td = document.createElement("td");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.setAttribute("src", data.img);
    img.setAttribute("alt", "photo destination");
    figure.appendChild(img);
    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = data.title;
    figure.appendChild(figcaption);
    td.appendChild(figure);

    let td2 = document.createElement("td");
    td2.innerHTML = data.text;

    let td3 = document.createElement("td");
    td3.innerHTML = data.price + " €";

    let td4 = document.createElement("td");
    let button_decouvrir = document.createElement("button");
    button_decouvrir.innerHTML = "découvrir";
    td4.appendChild(button_decouvrir);

    let td5 = document.createElement("td");
    let a = document.createElement("a");
    a.setAttribute("href", "#debut");
    a.innerHTML = "debut";
    td5.appendChild(a);

    let td6 = document.createElement("td");
    let button_modifier = document.createElement("button");
    button_modifier.setAttribute("onclick", "formOpenDestination('" + data["id"] + "')");
    button_modifier.innerHTML = "modifier";
    td6.appendChild(button_modifier);

    let td7 = document.createElement("td");
    let button_supp = document.createElement("button");
    button_supp.innerHTML = "X";
    td7.appendChild(button_supp);

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tbody.appendChild(tr);

    // Lorsque tous les éléments sont ajoutés au tbody, on peut créer les événements de clic aux boutons
    button_supp.setAttribute("onclick", "removeDestination(" + id_tr + ")");
  
});

  table.appendChild(thead);
  table.appendChild(tbody);
  section.appendChild(table);
  section.appendChild(button_add);
  main_container.appendChild(section);

}


/**
 * Affiche la page voyage audio
 * @param void
 * @return void
 */
function pageVoyageAudio(){
  // On supprime le contenu de la page
  clearPage();

  // On ajoute la classe active sur le lien de la page d'accueil
  addActive("Voyage audio");

  
  let section = document.createElement("section");
  // On boucle sur le JSON pour créer la page
  voyage_audio.forEach(function(data){
      let div = document.createElement("div");
      div.classList.add("card");
      let div2 = document.createElement("div");
      div2.classList.add("card_image");
      let img = document.createElement("img");
      img.setAttribute("src", "https://i.redd.it/b3esnz5ra34y.jpg");
      div2.appendChild(img);
      div.appendChild(div2);
      let audio = document.createElement("audio");
      audio.setAttribute("controls", "");
      let source = document.createElement("source");
      source.setAttribute("src", "../Assets/plane.mp3");
      source.setAttribute("type", "audio/mpeg");
      audio.appendChild(source);
      div2.appendChild(audio);
      let div3 = document.createElement("div");
      div3.classList.add("card_title");
      div3.classList.add("title-white");
      let p = document.createElement("p");
      p.innerHTML = data.name;
      div3.appendChild(p);
      div.appendChild(div3);
      section.appendChild(div);
   });
  main_container.appendChild(section);
}

/**
 * Affiche la page voyage vidéo
 * @param void
 * @return void
 */
function pageVoyageVideo(){
  // On supprime le contenu de la page
  clearPage();

  // On ajoute la classe active sur le lien de la page d'accueil
  addActive("Voyage vidéo");

  let section = document.createElement("section");
  // On boucle sur le JSON pour créer la page
  voyage_video.forEach(function(data){
    let div = document.createElement("div");
    div.classList.add("card");
    let div2 = document.createElement("div");
    div2.classList.add("card_image");
    let video = document.createElement("video");
    video.setAttribute("controls", "");
    let source = document.createElement("source");
    source.setAttribute("src", "../Assets/video.mp4");
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);
    div2.appendChild(video);
    div.appendChild(div2);
    let div3 = document.createElement("div");
    div3.classList.add("card_title");
    div3.classList.add("title-white");
    let p = document.createElement("p");
    p.innerHTML = data.name;
    div3.appendChild(p);
    div.appendChild(div3);
    section.appendChild(div);
   });
  main_container.appendChild(section);
}

/**
 * Affiche la page contact
 * @param void
 * @return void
 */
function pageContact(){
  // On supprime le contenu de la page
  clearPage();

  // On ajoute la classe active sur le lien de la page d'accueil
  addActive("Contact");

  let section = document.createElement("section");
  let div = document.createElement("div");
  div.classList.add("container");
  let form = document.createElement("form");
  let ul = document.createElement("ul");
  // On boucle sur le JSON pour créer la page
  contact.forEach(function(data){
    let li = document.createElement("li");
    if(data.label){
      let label = document.createElement("label");
      label.setAttribute("for", data.label.for);
      let span = document.createElement("span");
      span.innerHTML = data.label.text;
      label.appendChild(span);
      if(data.input.required == true){
        let span = document.createElement("span");
        span.classList.add("required-star");
        span.innerHTML = "*";
        label.appendChild(span);
      }
      li.appendChild(label);
    }
    if(data.input){
      let input = document.createElement("input");
      input.setAttribute("type", data.input.type);
      input.setAttribute("name", data.input.name);
      input.setAttribute("id", data.input.id);
      if(data.input.required == true){
        input.setAttribute("required", "");
      }
      li.appendChild(input);
    }
    ul.appendChild(li);
  });

  // On ajoute le label du textarea et le texte area message
  let liarea = document.createElement("li");
  let labelarea = document.createElement("label");
  labelarea.setAttribute("for", "msg");
  let spanarea = document.createElement("span");
  spanarea.innerHTML = "Message";
  labelarea.appendChild(spanarea);
  liarea.appendChild(labelarea);
  let textarea = document.createElement("textarea");
  textarea.setAttribute("cols", "50");
  textarea.setAttribute("rows", "4");
  liarea.appendChild(textarea);
  ul.appendChild(liarea);


  // On ajoute le bouton submit
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "submit");
  input.setAttribute("value", "Envoyer");
  li.appendChild(input);
  ul.appendChild(li);

  form.appendChild(ul);
  div.appendChild(form);
  section.appendChild(div);
  main_container.appendChild(section);

}

// FONCTIONS GERANTS LES DESTINATIONS

let form_destination_open = false;

/**
 * supprime une destination
 * @param id_destination
 * @return void
 */
function removeDestination(destination){
  // On supprime la destination du JSON
  destinations.splice(destination, 1);

  // On supprime la destination de la page
  destination.remove();
}

/**
 * Ouvre un formulaire pour ajouter une destination
 * @param void | id_destination
 * @return void
 */
function formOpenDestination(id_destination){
  if(!form_destination_open){
    // Formulaire d'ajout d'une destination
  let form_background = document.createElement("div");
  form_background.setAttribute("id", "form_background");
  let div = document.createElement("div");
  let form = document.createElement("form");
  form.setAttribute("id", "formulaire_ajout");
  let ul = document.createElement("ul");
  // On boucle sur le JSON pour créer la page
  destinations_form.forEach(function(data){
    let li = document.createElement("li");
    if(data.label){
      let label = document.createElement("label");
      label.setAttribute("for", data.label.for);
      let span = document.createElement("span");
      span.innerHTML = data.label.text;
      label.appendChild(span);
      if(data.input.required == true){
        let span = document.createElement("span");
        span.classList.add("required-star");
        span.innerHTML = "*";
        label.appendChild(span);
      }
      li.appendChild(label);
    }
    if(data.input){
      let input = document.createElement("input");
      input.setAttribute("type", data.input.type);
      input.setAttribute("name", data.input.name);
      input.setAttribute("id", data.input.id);
      if(data.input.required == true){
        input.setAttribute("required", "");
      }
      li.appendChild(input);
    }
    ul.appendChild(li);
  });

    // On ajoute le label du textarea et le texte area message
    let liarea = document.createElement("li");
    let labelarea = document.createElement("label");
    labelarea.setAttribute("for", "description");
    let spanarea = document.createElement("span");
    spanarea.innerHTML = "Description*";
    labelarea.appendChild(spanarea);
    liarea.appendChild(labelarea);
    let textarea = document.createElement("textarea");
    textarea.setAttribute("cols", "50");
    textarea.setAttribute("rows", "4");
    textarea.setAttribute("id", "description_destination");
    textarea.setAttribute("required", "");
    liarea.appendChild(textarea);
    ul.appendChild(liarea);
  
    // On ajoute le bouton submit
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "Envoyer");
    li.appendChild(input);
    ul.appendChild(li);

    // On ajoute le bouton pour fermer le formulaire
    let button_fermer = document.createElement("button");
    button_fermer.setAttribute("id", "fermer_formulaire");
    button_fermer.innerHTML = "X";
    button_fermer.setAttribute("onclick", "formCloseDestination()");

    form.appendChild(button_fermer);
    form.appendChild(ul);


    div.appendChild(form);
    form_background.appendChild(div);
    main_container.appendChild(form_background);

    // On ajoute l'écoute sur l'image
    let image = document.getElementById("image_destination");
    image.addEventListener("change", function(e){
      const file = image.files[0];
      let contentFile = null;
         
        if(file instanceof File) {
         
            // un fichier à été envoyé
            // ici utilise l'API FileReader pour lire le fichier
             
            const fileReader = new FileReader();
             
             
            // écoute la fin de la lecture du fichier
            fileReader.addEventListener('load', function() {
             
                contentFile = fileReader.result;
                image.src = contentFile;
    
            }, false);
    
            if(file){
                fileReader.readAsDataURL(file);
            }
         
        } else {
            console.log("aucun fichier n'a été envoyé");
        }
    
    });

    // Recherche de la destination à partir de l'id
    let destination = null;
    if(id_destination){
      for(let i = 0; i < destinations.length; i++){
        if(destinations[i].id == id_destination){
          destination = destinations[i];
        }
      }
    }

    // On rempli le formulaire si on est en mode modification
    if(destination){
      document.getElementById("ville_destination").value = destination.title;
      document.getElementById("image_destination").src = destination.img;
      document.getElementById("prix_destination").value = destination.price;
      document.getElementById("description_destination").value = destination.text;

      // On change le texte du bouton
      document.getElementById("formulaire_ajout").getElementsByTagName("input")[3].value = "Modifier";

      // On change l'écoute du bouton submit
      document.getElementById("formulaire_ajout").addEventListener("submit", function(e){
        e.preventDefault();
        modifyDestination(destination);
      });
    } else{
      form.addEventListener("submit", function(e){
        e.preventDefault();
        addDestination();
      });
    }

    form_destination_open = true;
  }
}

/**
 * Ferme le formulaire d'ajout d'une destination
 * @param void
 * @return void
 */
function formCloseDestination(){
  let form = document.getElementById("form_background");
  form.remove();

  form_destination_open = false;
}

/**
 * Ajoute une destination dans le JSON et sur la page ( function displayDestination )
 * @param void
 * @return void
 */
function addDestination(){
  
  let form = document.getElementById("formulaire_ajout");
  let ville_destination = document.getElementById("ville_destination");
  let image_destination = document.getElementById("image_destination");
  let prix_destination = document.getElementById("prix_destination");
  let description_destination = document.getElementById("description_destination");

  let destination = {
    "id": generateId(),
    "img": image_destination.src,
    "title": ville_destination.value,
    "text": description_destination.value,
    "price": prix_destination.value,
}

  // On ajoute la destination dans le JSON
  destinations.push(destination);

  console.log(destinations);

  // On ajoute la destination sur la page
  displayDestination(destination);
}

/**
 * Affiche la nouvelle destination
 * @param void
 * @return void
*/
function displayDestination(destination){
  let tbody = document.getElementById("tbody_destinations");
  let tr = document.createElement("tr");
  let id_tr = "destination_" + destination["id"];
  tr.setAttribute("id", id_tr);

  let td = document.createElement("td");
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  img.setAttribute("src", destination.img);
  img.setAttribute("alt", "photo destination");
  figure.appendChild(img);
  let figcaption = document.createElement("figcaption");
  figcaption.innerHTML = destination.title;
  figure.appendChild(figcaption);
  td.appendChild(figure);

  let td2 = document.createElement("td");
  td2.innerHTML = destination.text;

  let td3 = document.createElement("td");
  td3.innerHTML = destination.price + "€";

  let td4 = document.createElement("td");
  let button_decouvrir = document.createElement("button");
  button_decouvrir.innerHTML = "découvrir";
  td4.appendChild(button_decouvrir);

  let td5 = document.createElement("td");
  let a = document.createElement("a");
  a.setAttribute("href", "#debut");
  a.innerHTML = "debut";
  td5.appendChild(a);

  let td6 = document.createElement("td");
  let button_modifier = document.createElement("button");
  button_modifier.innerHTML = "modifier";
  button_modifier.setAttribute("onclick", "formOpenDestination('" + destination.id + "')");
  td6.appendChild(button_modifier);

  let td7 = document.createElement("td");
  let button_supp = document.createElement("button");
  button_supp.innerHTML = "X";
  td7.appendChild(button_supp);

  tr.appendChild(td);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);

  tbody.appendChild(tr);

  // Lorsque tous les éléments sont ajoutés au tbody, on peut créer les événements de clic aux boutons
  button_supp.setAttribute("onclick", "removeDestination(" + id_tr + ")");

  // On ferme le formulaire
  formCloseDestination();
}

/**
 * Modifie une destination dans le JSON et sur la page
 * @param destination
 * @return void
 */
function modifyDestination(destination){
  let form = document.getElementById("formulaire_ajout");
  let ville_destination = document.getElementById("ville_destination");
  let image_destination = document.getElementById("image_destination");
  let prix_destination = document.getElementById("prix_destination");
  let description_destination = document.getElementById("description_destination");

  // On modifie la destination dans le JSON
  destination.title = ville_destination.value;
  destination.img = image_destination.src;
  destination.text = description_destination.value;
  destination.price = prix_destination.value;

  // On modifie la destination sur la page
  let id_tr = "destination_" + destination.id;
  let tr = document.getElementById(id_tr);
  let td = tr.getElementsByTagName("td")[0];
  let figure = td.getElementsByTagName("figure")[0];
  let img = figure.getElementsByTagName("img")[0];
  img.setAttribute("src", destination.img);
  let figcaption = figure.getElementsByTagName("figcaption")[0];
  figcaption.innerHTML = destination.title;

  let td2 = tr.getElementsByTagName("td")[1];
  td2.innerHTML = destination.text;

  let td3 = tr.getElementsByTagName("td")[2];
  td3.innerHTML = destination.price + " €";

  // On ferme le formulaire
  formCloseDestination();
}


/**
 * Génrère un id unique aléatoire
 * @param void
 * @return string
 */
function generateId(){
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
}
