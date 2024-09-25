console.log(document.title);


// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById('gen-1').innerHTML = "<p>Generasión 1 Pokémon</p>";

// // Cambia el color de fondo de la primera generación de Pokimon.
document.getElementsByClassName('infocard-list infocard-list-pkmn-lg')[0].style.background = 'linear-gradient(301deg, rgba(170,123,221,1) 0%, rgba(0,255,176,1) 100%)';

// Imprime por consola la URL de la página.
console.log(window.location.href);

// Imprime por consola el dominio de la página.
console.log(window.location.origin);

// Imprime todos los nodos de imagen.
console.log(document.querySelectorAll('img'));

// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
let imgs = document.querySelectorAll('img');
imgs.forEach((img)=>{ 
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

// // PREMIUM . Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

// // Buscar todos los infocards que tengan itypeflying
// document.querySelectorAll(".infocard-lg-data.text-muted .itype.flying").style.background = "red";