
const pokemon = require('./pokedex.json')

function getPokemonByType(pokemon, type) {
  
  return  pokemon.filter((el) => 
    el.type.includes(type))
}


console.log(getPokemonByType(pokemon, "Grass"))
