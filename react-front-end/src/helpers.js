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

const colors = {
  Grass: '#4caf50',
  Fire: '#ff5722',
  Water: '#0277bd',
  Bug: '#cddc39',
  Normal: '#0d47a1',
  Poison: '#76ff03',
  Electric: '#ffff00',
  Ground: '#8d6e63',
  Fairy: '#f48fb1',
  Fighting: '#d50000',
  Psychic: '#512da8',
  Rock: '#616161',
  Ghost: '#bdbdbd',
  Ice: '#bbdefb',
  Dragon: '#7e57c2',
  Dark: '#1a237e',
  Steel: '#607d8b',
  Flying: '#00e5ff',
}

const setColorByType = (t) => {
  return colors[t]
}

module.exports = { getThumbs, setColorByType }
