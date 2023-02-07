import { useState, useEffect } from 'react'
import axios from 'axios'
import { yellow } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Picker from './Picker'

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[800],
    },
  },
})

function App() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000').then((res) => setTypes(res.data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" align="center" sx={{ my: 5 }}>
        Catch Em All!
      </Typography>

      <Picker types={types} />
    </ThemeProvider>
  )
}

export default App
