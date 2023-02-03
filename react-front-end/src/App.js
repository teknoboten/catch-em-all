import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ types, setTypes ] = useState([])

  useEffect(() => {
      axios.get('http://localhost:9000', { mode: 'no-cors'  })
      .then((res) => setTypes(res.data))
  }, [])


  return (
    <div>
      <h1>Here is a list of Pokemon Types</h1>
      {types.map((p) => (
        <span key={p}> {p} </span>
      ))}

    </div>
  );
}

export default App;
