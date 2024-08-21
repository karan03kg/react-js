import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-600 text-white py-2'>
        <div className="logo mx-10 text-3xl">iTask</div>
        <ul className='flex gap-8 mr-10 text-xl'>
            <li className='cursor-pointer hover:font-bold transition-all duration-300'>Home</li>
            <li className='cursor-pointer hover:font-bold  duration-500'>Your Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar