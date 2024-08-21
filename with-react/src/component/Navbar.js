import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
      <ul>
        <li>Hello</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default navbar