const express = require('express')
const app = express()
const cors = require("cors");

const pokemon = require('./pokedex.json')
const { getTypes, getPokemonByType } = require('./helpers')

app.use(cors());

app.get('/', (req, res) => {
  res.json(getTypes(pokemon))
})

app.get('/grass', (req, res) => {
  
  const grass = getPokemonByType(pokemon, "Grass")
  res.send(grass)
})

app.listen(9000, () => {
  console.log(`listening....`)
})