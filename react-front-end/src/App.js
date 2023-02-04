import { useState, useEffect } from 'react'
import axios from 'axios'

import Picker from './Picker'

function App() {
  const [ types, setTypes ] = useState([])

  useEffect(() => {
      axios.get('http://localhost:9000')
      .then((res) => setTypes(res.data))
  }, [])


  return (
    <div>
      <h1>Here is a list of Pokemon Types</h1>
      {/* {types.map((p) => (
        <span key={p}> {p} </span>
      ))} */}

      <Picker types={types} />

    </div>
  );
}

export default App;
