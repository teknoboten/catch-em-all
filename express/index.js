const express = require('express')
const app = express()
const cors = require('cors')

const { getTypes, getPokemonByType } = require('./helpers')

app.use(cors())
app.use(express.static('public'))

app.get('/api/:type?', (req, res) => {
  const type = req.query.type
  const results = getPokemonByType(type)
  res.json(results)
})

app.get('/', (req, res) => {
  res.json(getTypes())
})

app.listen(9000, () => {
  console.log(`Let's catch some Pokemon! 😸 `)
})
