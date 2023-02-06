import Card from '@mui/material/Card'

export default function PokeCard({ pokemon }) {
  const names = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  return (
    <div>
      <h1>{names.english}</h1>
      <p>{types}</p>
      <p>{Speed}</p>
    </div>
  )
}
