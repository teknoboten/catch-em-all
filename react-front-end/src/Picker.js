import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';


export default function Picker({ types }) {
    const [picked, setPicked] = useState('');

    const handleChange = (event) => {
      setPicked(event.target.value);
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
        <MenuItem key={p} value={p}> {p} </MenuItem>
      ))} 

        </Select>
      </FormControl>
    </Box>
  );
}

