import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Benifit} from "./Components/Benifit"
import {Faq} from "./Components/Faq"
import {Health} from "./Components/Health"
import {Appdownload} from "./Components/Appdownload"
import {Finddoctors} from "./Components/Finddoctors"
import {Routes,Route} from "react-router-dom"
// import {Footerwrapper} from "./Components/Footerwrapper"
function App() {
  const [count, setCount] = useState(0)
  return (
<div className="App">  
<Benifit/>
<Faq/>
<Health/>
<Appdownload/>
<Routes>

<Route path='/find' element= {<Finddoctors/>}></Route>

</Routes>
</div>
  )
}

export default App
