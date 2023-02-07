import { useState, useEffect } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import PokeDex from './PokeDex'

export default function Picker({ types }) {
  const [picked, setPicked] = useState('')
  const [pokemon, setPokemon] = useState([''])

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api?type=${picked}`)
      .then((res) => setPokemon(res.data))
  }, [picked])

  const handleChange = (event) => {
    setPicked(event.target.value)
  }

  return (
    <Box align="center" sx={{ width: '80vw', mx: 'auto' }}>
      <FormControl sx={{ width: '50vw' }}>
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
