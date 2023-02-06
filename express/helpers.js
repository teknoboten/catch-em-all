const pokemon = require('./pokedex.json')

function getPokemonByType(type) {
  return pokemon.filter((el) => el.type.includes(type))
}

const getTypes = () => {
  const types = []

  for (let p of pokemon) {
    if (!types.includes(p.type[0])) {
      types.push(p.type[0])
    }
  }
  return types
}

module.exports = { getTypes, getPokemonByType }
