import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Karan")
  const [form, setform] = useState({name:"hello",phone:"75578"})

  const handleclick =()=>{
    alert("The button is clicked");
  }

  const handlehover =()=>{
    alert("The mouse is hover");
  }

  const handlechange =(e)=>{
    setname(e.target.value)
  }

  const handlechange2 =(e)=>{

    setform({...form,[e.target.name]:e.target.value})
    
  }


  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click Me</button>
      </div>
      <div className="hover">
        <h1 onMouseOver={handlehover}>hello</h1>
      </div>
      <input type="text" value={name} onChange={handlechange}/>

      <input type="text" name='name' value={form.name} onChange={handlechange2} />

      <input type="text" name='phone' value={form.phone} onChange={handlechange2} />
    </>
  )
}

export default App
