const express = require('express')
const app = express()
const cors = require('cors')

const { getTypes, getPokemonByType } = require('./helpers')
const PORT = 9000

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

app.listen(PORT, () => {
  console.log(`Let's catch some Pokemon! 😸 `)
})
