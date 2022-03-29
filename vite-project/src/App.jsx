import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Consult} from "./Components/Consult"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
<Consult/>


    </div>
  )
}

export default App
