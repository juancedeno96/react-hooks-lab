import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Pokemon from './Components/Pokemon'

function App() {
  const [list, setList] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res=>{
      setList(res.data.results)
    })
  })

  return (
    <div className="App">
      {list.map((pokemon, i)=>{
        return <Pokemon key={i} name={pokemon.name}/>
      })}
    </div>
  );
}

export default App;
