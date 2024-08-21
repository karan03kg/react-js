import React from 'react'
import { useEffect } from 'react'

const navbar = (props) => {
  useEffect(() => {
    alert("Hey i will run on every render")
  },)

  useEffect(() => {
    alert("Hey welcome to my page, This is first render")
  },[])
  
  useEffect(() => {
    alert("color was changed");
  }, [props.cnt])

  useEffect(() => {
    alert("Hey welcome to my page")
  
    return () => {
      alert("componts are unmounted")
    }
  }, [])
  
  
  return (
    <div>the color of navbar is {props.color}</div>
  )
}

export default navbar