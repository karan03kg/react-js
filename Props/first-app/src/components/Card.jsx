import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://media.licdn.com/dms/image/D4D12AQH7i6BGFzniPg/article-cover_image-shrink_720_1280/0/1706701287717?e=2147483647&v=beta&t=Rxcx4KlI0t3JKcZVcGxpkHDNZMFBrR1qq6MTqUrIwu8" alt="" width={220} style={{borderRadius : "50%", border:"2px solid red"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card