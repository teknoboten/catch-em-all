import Grid from '@mui/material/Grid'

import PokeCard from './PokeCard'

export default function PokeDex({ pokemon }) {
  return (
    <Grid container alignItems="space-between" sx={{ marginTop: '5vh' }}>
      {pokemon.map((p, index) => {
        return (
          <Grid item xs={4} key={index}>
            <PokeCard pokemon={p} />
          </Grid>
        )
      })}
    </Grid>
  )
}
