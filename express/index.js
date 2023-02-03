const express = require('express')
const app = express()
const pokemon = require('./pokedex.json')


//filter pokemon by selected type
function getPokemonByType(pokemon, type) {
  
  return  pokemon.filter((el) => 
    el.type.includes(type))
}


app.get('/', (req, res) => {
  res.send(`let's catch some pokemon!`)
})

app.get('/grass', (req, res) => {
  
  const grass = getPokemonByType(pokemon, "Grass")
  res.send(grass)
})

app.listen(3000, () => {
  console.log(`listening....`)
})