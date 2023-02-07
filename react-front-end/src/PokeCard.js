import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function PokeCard({ pokemon }) {
  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  return (
    <Card sx={{ textAlign: 'left' }}>
      <CardContent>
        <Typography variant="h4" sx={{ my: 2, textAlign: 'left' }}>
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
