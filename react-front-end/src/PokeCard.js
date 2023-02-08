import { useState } from 'react'
import { getThumbs } from './helpers.js'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'

export default function PokeCard({ pokemon }) {
  const [expanded, setExpanded] = useState(false)

  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      elevation={2}
      onClick={toggleExpanded}
      sx={{
        '&:hover': {
          border: '1px inset rgba(200, 120, 123, 0.1)',
        },
      }}
    >
      <CardHeader title={pokeName.id} />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          image={getThumbs(pokemon.id)}
          sx={{ width: !expanded ? '40%' : '90%' }}
          alt={pokeName.english}
        />
        <Typography variant={expanded ? 'h3' : 'h4'} sx={{ mb: 1 }}>
          {pokeName.english}
        </Typography>

        <Collapse in={expanded}>
          <Box sx={{ my: 3, display: 'flex' }}>
            <Typography variant="subtitle2"> 🆔 {pokemon.id} </Typography>
            <Typography variant="subtitle2"> 💪 {HP} </Typography>
            <Typography variant="subtitle2"> 🔪 {Attack} </Typography>
            <Typography variant="subtitle2"> 🛡️ {Defense} </Typography>
            <Typography variant="subtitle2"> 🏎️ {Speed} </Typography>
          </Box>

          <Box>
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
        </Collapse>
        <Button variant="text" size="small" sx={{ mb: 0 }}>
          {!expanded ? (
            <span class="material-icons">expand_more</span>
          ) : (
            <span class="material-icons">expand_less</span>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
