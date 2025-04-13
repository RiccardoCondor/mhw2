//

let ricerca;
function Focus(event){
    const testo = event.currentTarget;
    ricerca = testo.value;
    testo.value = '';
}
function Blur(event){
    const testo = event.currentTarget;
    testo.value = ricerca;
}
const domanda = document.querySelectorAll('input');
for(let item of domanda){
item.addEventListener('focus', Focus);
item.addEventListener('blur', Blur);
}

//
function sopramouse(event) {
    event.currentTarget.src = event.currentTarget.dataset.nuova;
    
}

function fuorimouse(event) {
    event.currentTarget.src = event.currentTarget.dataset.iniziale;
    
}

const copertine = document.querySelectorAll('.gioco .copertina img');

for (let i = 0; i < copertine.length; i++) {
    const img = copertine[i];
    img.dataset.iniziale = img.src;
    console.log(img.dataset.iniziale);
    const parti = img.src.split('.jpg');
    img.dataset.nuova = parti[0] + '-hover.jpg';
    console.log(img.dataset.nuova);
    copertine[i].addEventListener('mouseenter', sopramouse);
    copertine[i].addEventListener('mouseleave', fuorimouse);
}

//

const barraricerca = document.getElementById('barra-ricerca');
const menulinks = document.querySelector('#menu-basso .links');

function aperturaricerca(e){
  e.preventDefault();
  menulinks.style.display = 'none';
  barraricerca.classList.add('attivo');

}
const searchBtn = document.querySelector('#search-button a');
searchBtn.addEventListener('click',aperturaricerca);

function chiusuraricerca(){
    barraricerca.classList.remove('attivo');
    menulinks.style.display = 'flex';
}
const searchClose = document.getElementById('chiudere-ricerca');
searchClose.addEventListener('click',chiusuraricerca);

//