import { useState } from 'react'
import { getThumbs, setColorByType } from './helpers.js'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'

export default function PokeCard({ pokemon, color }) {
  const [expanded, setExpanded] = useState(false)

  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      elevation={1}
      onClick={toggleExpanded}
      sx={{
        '&:hover': {
          boxShadow: 9,
        },
      }}
    >
      <CardHeader title={pokeName.id} />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia
          component="img"
          image={getThumbs(pokemon.id)}
          sx={{ width: !expanded ? '40%' : '90%' }}
          alt={pokeName.english}
        />
        <Typography variant={expanded ? 'h4' : 'h5'} sx={{ my: 2 }}>
          {pokeName.english}
        </Typography>

        <Button
          variant="text"
          sx={{
            mb: 0,
            color: 'rgba(238, 238, 238, 0)',
            '&:hover': {
              color: 'rgba(238, 238, 238, 1)',
            },
          }}
        >
          {!expanded ? (
            <span className="material-icons">expand_more</span>
          ) : (
            <span className="material-icons">expand_less</span>
          )}
        </Button>

        <Collapse in={expanded}>
          <Box sx={{ my: 3, textAlign: 'left' }}>
            <Typography variant="h6"> 💪 {HP} </Typography>
            <Typography variant="h6"> 🔪 {Attack} </Typography>
            <Typography variant="h6"> 🛡️ {Defense} </Typography>
            <Typography variant="h6"> 🏎️ {Speed} </Typography>
          </Box>
        </Collapse>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box>
            {types.map((t) => {
              return (
                <Typography
                  variant="caption"
                  component="span"
                  key={t}
                  sx={{
                    backgroundColor: setColorByType(t),
                    padding: 0.5,
                    marginRight: 0.5,
                  }}
                >
                  {t}{' '}
                </Typography>
              )
            })}
          </Box>

          <Typography
            variant="caption"
            component="span"
            sx={{
              textAlign: 'center',
              height: '25px',
              width: '25px',
              borderRadius: '50%',
              color: 'white',
              backgroundColor: '#424242',
            }}
          >
            {pokemon.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
