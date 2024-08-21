import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [Todos, setTodos] = useState([
    {title:"I am first todo",
      desc:"This is first description"
    },

    {title:"I am second todo",
      desc:"This is second description"
    },

    {title:"I am third todo",
      desc:"This is third description"
    },

  ])

  const Todo = ({prop})=>{
    return (<>
    <div className="todo">{prop.title}</div>
    <div className="todo">{prop.desc}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button>I am true</button>:<button>I am not true</button>}
        {/* {showbtn && <button>I am visible</button>} */}

        {Todos.map(todo=>{
          return <Todo prop={todo} />
        })}

        {/* <Todo title = "hello" desc = "this is desc"/> */}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
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
