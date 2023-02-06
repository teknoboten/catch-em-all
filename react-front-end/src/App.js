import { useState, useEffect } from 'react'
import axios from 'axios'

import Picker from './Picker'

function App() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000').then((res) => setTypes(res.data))
  }, [])

  return (
    <div>
      <h1>Pick Em!</h1>

      <Picker types={types} />
    </div>
  )
}

export default App
