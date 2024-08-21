import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cnt'>{count}
      <button className='btn' onClick={()=>{setCount(count+1)}}>Update count</button>
      </div>
    </>
  )
}

export default App
