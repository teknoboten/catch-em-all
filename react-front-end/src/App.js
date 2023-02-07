import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Picker from './Picker'

function App() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000').then((res) => setTypes(res.data))
  }, [])

  return (
    <Container>
      <Typography variant="h1" align="center" sx={{ my: 5 }}>
        Catch Em All!
      </Typography>
      <Picker types={types} />
    </Container>
  )
}

export default App
