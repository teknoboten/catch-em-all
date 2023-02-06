import { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { Select } from '@mui/material'
import PokeDex from './PokeDex'

export default function Picker({ types }) {
  const [picked, setPicked] = useState('')
  const [pokemon, setPokemon] = useState([''])

  useEffect(() => {
    axios
      .get(`http://localhost:9000/${picked}`)
      .then((res) => setPokemon(res.data))
  }, [picked])

  const handleChange = (event) => {
    console.log('geting some pokemon details')
    setPicked(event.target.value)
  }

  return (
    <Box align="center" sx={{ width: '80vw', mx: 'auto' }}>
      <FormControl fullWidth>
        <InputLabel id="pokepicker-label">Pick One</InputLabel>
        <Select
          labelId="pokepicker-label"
          id="pokepicker"
          value={picked}
          label="picked"
          onChange={handleChange}
        >
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
