import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
const App = () => {
  return (
    <>
    <div>
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
      {/* <About/>
      hello
      <Contact/> */}
    </div>
    </>
  )
}

export default App