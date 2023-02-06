const express = require('express')
const app = express()
const cors = require('cors')

const pokemon = require('./public/pokedex.json')
const { getTypes, getPokemonByType } = require('./helpers')

app.use(cors())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json(getTypes(pokemon))
  // res.json(pokemon)
})

app.get('/grass', (req, res) => {
  const grass = getPokemonByType(pokemon, 'Grass')

  console.log(grass.splice(0, 3))

  res.send(grass)
})

app.listen(9000, () => {
  console.log(`listening....`)
})
