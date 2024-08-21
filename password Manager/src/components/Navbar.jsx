import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='bg-gray-700 flex justify-around items-center px-4 h-12 text-white'>
        <div className='logo font-bold text-2xl'>
            <span className='text-green-700'> &lt; </span>
            Pass
            <span className='text-green-700' >OP/&gt; </span>
        </div>
          <div className='flex gap-5'>
              <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
              <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
              <NavLink className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Contact Us</li></NavLink>
          </div>
    </nav>
  )
}

export default Navbar