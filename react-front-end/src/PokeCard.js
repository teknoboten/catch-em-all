import { useState } from 'react'
import { getThumbs } from './helpers.js'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import { ExpandMore, ExpandLess } from '@styled-icons/material'
import Grow from '@mui/material/Grow'

export default function PokeCard({ pokemon }) {
  const [expanded, setExpanded] = useState(false)

  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <Card elevation={2}>
      <CardHeader title={pokeName.id} />

      <CardContent
        sx={{ display: 'flex', alignItems: 'center', bgcolor: 'yellow' }}
      >
        <Typography variant="h4">{pokeName.english}</Typography>
        <CardMedia
          component="img"
          image={getThumbs(pokemon.id)}
          sx={{ width: !expanded ? '50%' : '90%' }}
          alt={pokeName.english}
        />

        <Button size="small" variant="outline" onClick={toggleExpanded}>
          {!expanded ? <ExpandLess /> : <ExpandMore />}
        </Button>

        <Collapse in={expanded}>
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
        </Collapse>
      </CardContent>
    </Card>
  )
}

{
  /* <Grow
in={expanded}
style={{ transformOrigin: '0 0 0' }}
{...(expanded ? { timeout: 1000 } : {})}
>
<CardMedia
  component="img"
  image={getThumbs(pokemon.id)}
  alt={pokeName.english}
/>
</Grow> */
}
