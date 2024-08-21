import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'
const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index:i,
    isMagical:i===14_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [number, setnumber] = useState(nums)

  // const magical = number.find((item=>item.isMagical===true));
  const magical = useMemo(() => number.find((item=>item.isMagical===true)), [number])

  return (
    <>
    
      <div>
        <span>Magical no is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)
          if(count == 10){
            setnumber(new Array(10_000_000).fill(0).map((_,i)=>{
              return {
                index:i,
                isMagical:i===9_000_000
              }
            }))
          }
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
