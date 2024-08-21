import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [finished, setfinished] = useState(false)

  const save = ((params)=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  })

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if(todostring){
      let t = JSON.parse(localStorage.getItem("todos"))
      settodos(t);
    }
  }, [])
  

  const handlechange = (e)=>{
    settodo(e.target.value)
  }

  const handleadd = ()=>{
    settodos([...todos, {id :uuidv4(),todo,isComleted:false}])
    settodo("")
    console.log(todos);
    save();
  }

  const handlecheckbox = (e)=>{
    let id = e.target.name;
    let index = todos.findIndex((item)=>{
      return item.id === id;
    })
    console.log(index)

    let newtodo = [...todos];
    newtodo[index].isComleted = !newtodo[index].isComleted;
    settodos(newtodo);

    save();
  }

  const handledelete = (id)=>{
    // fetch("",{method:"DE"})
    console.log(id);
    let newtodo = todos.filter((item)=>{
      return item.id!==id;
    })
    settodos(newtodo);
    save();
  }

  const handleedit = (id)=>{
    console.log(id);
    let newtodo = todos.filter((item)=>{
      return item.id === id;
    })
    console.log(newtodo)
    settodo(newtodo[0].todo);

    let newtodos = todos.filter((item)=>{
      return item.id!==id;
    })
    settodos(newtodos);
    save();
  }

  const togglefinish = ()=>{
    setfinished(!finished);
  }

  return (
    <>
    <Navbar/>
      <div className="container border-2 border-black absolute top-28 w-96 right-1/3 rounded-xl bg-slate-300">
        <div className="addtodo">
          <h2 className='text-lg font-bold px-3'>Add a Todo</h2>
          <input  className='ml-10 my-4 h-10 w-1/2 p-3' type="text"  value={todo} onChange={handlechange} />
          <button className='ml-5 border-2 border-black w-20 h-10 rounded-xl hover:bg-red-600 bg-green-800 text-white font-bold' onClick={handleadd} disabled = {todo.length<=3} >Add</button>
        </div>
        <input className='ml-3' type="checkbox" checked={finished} name="" id="" onChange={togglefinish}/>  Show Finished
        <h2 className='text-lg font-bold px-2'>Your Todos</h2>
        <div className="todos">
          {todos.length ==0 && <div className='ml-10'>Empty...</div>}
          {todos.map((props) => {
            return (!finished || props.isComleted) && <div key={props.id} className="todo flex gap-8 space-x-5 my-3 ml-5">
              <div className='flex gap-3 '>
                <input type="checkbox" checked={props.isComleted} name={props.id} id="" onChange={handlecheckbox} />
                <div className={`${props.isComleted ? "line-through" : ""} w-48 overflow-scroll`}>{props.todo}</div>
              </div>
              <div className="flex absolute right-3">
                <button onClick={()=>{handleedit(props.id)}} className='mr-3 border-2 border-black bg-slate-500 w-14 hover:bg-slate-600 text-white'>Edit</button>
                <button onClick={()=>{handledelete(props.id)}} className='border-2 border-black bg-slate-500 w-14 hover:bg-slate-600 text-white'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
