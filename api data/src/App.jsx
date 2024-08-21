import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [card, setcard] = useState([])
  const fetchdata = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setcard(data);
    console.log(data);
  }
  useEffect(() => {
    fetchdata()
  }, [])
  
  return (
    <>
    <Navbar/>
      <div className="container">
        {card.map((prop)=>{
          return <div key={prop.id} className="cards">
            <h1>{prop.title}</h1>
            <p>{prop.body}</p>
            <span>user id : {prop.id}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
