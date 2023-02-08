import { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalStyles from '@mui/material/GlobalStyles'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PokeDex from './PokeDex'
import { getColor } from './helpers'

export default function Picker({ types }) {
  const [picked, setPicked] = useState('')
  const [pokemon, setPokemon] = useState([''])
  const [color, setColor] = useState('#f5f5f5')

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api?type=${picked}`)
      .then((res) => setPokemon(res.data))
      .then(() => setColor(getColor(picked)))
  }, [picked])

  const handleChange = (event) => {
    setPicked(event.target.value)
  }

  return (
    <Box>
      <GlobalStyles styles={{ body: { backgroundColor: color } }} />
      <FormControl fullWidth>
        <Select value={picked} onChange={handleChange}>
          {types.map((p) => (
            <MenuItem key={p} value={p}>
              {' '}
              {p}{' '}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {picked && <PokeDex pokemon={pokemon} />}
    </Box>
  )
}
