//1. selector (condicion)
//2. informacion (click)/fetch
// nombre
// imagen
// tipo
// altura 
// peso


/*const pokeBulbasaur = document.getElementById('pokemon-select').bulbasaur
const pokeCharmander = document.getElementById('pokemon-select').charmander
const pokeSquirtle = document.getElementById('pokemon-select').squirtle
const getPokemon = document.getElementById('get-pokemon')*/




/*creo que hay que usar o onchange en html o un eventlistener con change
parece mas facil con onchange.
const seleccionValor = document.querySelector('#pokemon-select');
seleccionValor.addEventListener('change', => {
})*/

function showSelected (){
    //para obtener el valor
    let cod = document.getElementById('pokemon-select').value;
    //alert(cod);
    //para obtener el texto
    let combo = document.getElementById('pokemon-select');
    let selected = combo.options[combo.selectedIndex].text;
    //alert(selected);
    console.log(showSelected);
}


