// FONCTIONS DE GESTION DES DESTINATIONS
function removeDestination(button){
    button.parentNode.parentNode.remove();
}


function addDestination(pays, nom, image, description, prix){
    return(
    `
    <tr>
        <td>
            <figure>
                    <img src="${image}" alt="image_${pays}_${nom}">
                    <figcaption>${nom}</figcaption>
            </figure>
        </td>              
        <td>${description}</td>
        <td>${prix} €</td>
        <td><button>découvrir</button></td>
        <td><a href="#debut">début</a></td>
        <td><button onClick="modifyDestination(this, document.getElementById("formulaire_ajout"), pays, nom, image, description, prix)"><a href="#  formulaire_ajout">Modifier</a></button></td>
        <td><button onClick="removeDestination(this)">X</button></td>
    </tr>
    `);

}


// Création d'une classe Destination
// Paramètres : pays, nom, image, description, prix
//

class Destination{
    constructor(pays, nom, image, description, prix){
        this.pays = pays;
        this.nom = nom;
        this.image = image;
        this.description = description;
        this.prix = prix;
    }
}

var destinations = [];

function deleteDestination(button){
    button.parentNode.parentNode.remove();
}

// Récupération du main container afin d'ajouter un formulaire de saisie de destination
var mainContainerHtml = document.getElementsByClassName("main_container");

mainContainerHtml[0].innerHTML += `
    <form method="POST" action="destination.html" id="formulaire_ajout">
        <ul>
            <li>
                <label for="pays_destination"><span>Pays destination <span class="required-star">*</span></span></label>
                <input type="text" id="pays_destination" name="pays_destination" required>
            </li>
            <li>
                <label for="ville_destination"><span>Ville destination <span class="required-star">*</span></span></label>
                <input type="text" id="ville_destination" name="ville_destination" required>
            </li>
            <li>
                <label for="image_destination"><span>Image<span class="required-star">*</span></span></label>
                <input type="file" id="image_destination" name="image_destination" required>
            </li>
            <li>
                <label for="description"><span>Description</span></label>
                <textarea id="description" name="description_destination" rows="4" cols="50"></textarea>
            </li>
            <li>
                <label for="prix"><span>Prix <span class="required-star">*</span></span></label>
                <input type="number" step="0.01" id="prix" name="prix_destination" required>
            </li>
            <li>
                <input type="submit">
            </li>
        </ul>
    </form>
`;

// Listener sur le formulaire d'ajout de destination
var my_form = document.getElementById("formulaire_ajout");

var contentFile = null;

// Gestion de l'ajout d'une image
var image = document.getElementById("image_destination");
image.addEventListener('change', function() {
     
    // récupére uniquement le premier fichier qui et dans le champs de formulaire
    // certains champs accepte plusieurs fichier c'est pour cela que
    //  `input.files` et un tableau
    const file = image.files[0];
     
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

// Gestion de l'envoi du formulaire
my_form.addEventListener("submit", function(e){
    e.preventDefault();
    var pays = document.getElementById("pays_destination").value;
    var ville = document.getElementById("ville_destination").value;
    var description = document.getElementById("description").value;
    var prix = document.getElementById("prix").value;
    var destination = new Destination(pays, ville, image, description, prix);
    destinations.push(destination);
    var destinationHTML = document.getElementById("destinations");
    var destination 
    destinationHTML.innerHTML += addDestination(destination.pays, destination.nom, destination.image.src, destination.description, destination.prix);
    // On vide le formulaire
    document.getElementById("formulaire_ajout").reset();
    }
);


// Instanciation des objets Destination

// France, Paris
var destination1 = new Destination("France", "Paris", "paris.jpg", "Paris, la ville lumière", 1000);

// Espagne, Madrid
var destination2 = new Destination("Espagne", "Madrid", "madrid.jpg", "Madrid, la ville espagnole", 1200);

// Italie, Rome
var destination3 = new Destination("Italie", "Rome", "rome.jpg", "Rome, la ville italienne", 1500);

// Allemagne, Berlin
var destination4 = new Destination("Allemagne", "Berlin", "berlin.jpg", "Berlin, la ville allemande", 1300);

// Mettre toutes ces destinations dans un tableau
destinations.push(destination1);
destinations.push(destination2);
destinations.push(destination3);
destinations.push(destination4);

var destinationHTML = document.getElementById("destinations");
for (var i = 0; i < destinations.length; i++) { // Ajout des destinations dans le HTML pour chaque destination du tableau
    var destination = destinations[i];
    destinationHTML.innerHTML += addDestination(destination.pays, destination.nom, "../Assets/" + destination.image, destination.description, destination.prix);
}

