import Grid from '@mui/material/Grid'
import PokeCard from './PokeCard'
// import { setColorByType } from './helpers'

export default function PokeDex({ pokemon, type }) {
  return (
    <Grid container spacing={4} sx={{ marginTop: '5vh' }}>
      {pokemon.map((p, index) => {
        return (
          <Grid item sm={12} md={4} lg={3} key={index}>
            <PokeCard pokemon={p} />
          </Grid>
        )
      })}
    </Grid>
  )
}
