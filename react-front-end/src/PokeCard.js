import { getThumbs } from './helpers.js'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'

export default function PokeCard({ pokemon }) {
  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  return (
    <Card elevation={2} sx={{ textAlign: 'left', padding: 1.5 }}>
      <CardContent>
        <CardMedia
          component="img"
          image={getThumbs(pokemon.id)}
          alt={pokeName.english}
          sx={{ width: '60%', mx: 'auto' }}
        />

        <Typography variant="h4" sx={{ mb: 2, mt: 4, textAlign: 'left' }}>
          {pokeName.english}
        </Typography>

        <Typography variant="subtitle2"> 🆔 ID: {pokemon.id} </Typography>
        <Typography variant="subtitle2"> 💪 HP: {HP} </Typography>
        <Typography variant="subtitle2"> 🔪 Attack: {Attack} </Typography>
        <Typography variant="subtitle2"> 🛡️ Defense: {Defense} </Typography>
        <Typography variant="subtitle2"> 🏎️ Speed: {Speed} </Typography>

        <Box sx={{ marginTop: 4 }}>
          {types.map((t) => {
            return (
              <Typography
                variant="subtitle2"
                component="span"
                key={t}
                sx={{
                  backgroundColor: '#b2ebf2',
                  padding: 0.5,
                  marginX: 0.5,
                }}
              >
                {t}{' '}
              </Typography>
            )
          })}
        </Box>
      </CardContent>
    </Card>
  )
}
