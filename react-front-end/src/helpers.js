const getThumbs = (id) => {
  if (id < 10) {
    return `http://localhost:9000/images/00${id}.png`
  }
  if (id > 9 && id < 100) {
    return `http://localhost:9000/images/0${id}.png`
  }
  if (id > 99) {
    return `http://localhost:9000/images/${id}.png`
  }
}

const types = [
  'Grass',
  'Fire',
  'Water',
  'Bug',
  'Normal',
  'Poison',
  'Electric',
  'Ground',
  'Fairy',
  'Fighting',
  'Psychic',
  'Rock',
  'Ghost',
  'Ice',
  'Dragon',
  'Dark',
  'Steel',
  'Flying',
]

const getColor = (type) => {
  console.log('new type is:', type)
  return types[0]
}

module.exports = { getThumbs, getColor }
