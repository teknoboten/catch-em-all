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

module.exports = { getThumbs }
