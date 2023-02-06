// const pokemon = require('./pokedex.json')

// function getPokemonByType(pokemon, type) {

//   return  pokemon.filter((el) =>
//     el.type.includes(type))
// }

function getPokemonByType(arr, type) {
  return arr.filter((el) => el.type.includes(type))
}

const getTypes = (arr) => {
  const types = []

  for (let p of arr) {
    if (!types.includes(p.type[0])) {
      types.push(p.type[0])
    }
  }
  return types
}

module.exports = { getTypes, getPokemonByType }
