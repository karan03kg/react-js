import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Manager/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
