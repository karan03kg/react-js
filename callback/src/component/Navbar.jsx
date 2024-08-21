import React from 'react'
import { memo } from 'react'

const Navbar = ({title,getadjective}) => {
    console.log("navbar rendered")
    // console.log({adjective});
    return (
        <div>
        {title}
        <button onClick={()=>{getadjective()}}>Click Me</button>
    </div>
    
  )
}

export default memo(Navbar)