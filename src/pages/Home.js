import React, { useState } from 'react'
import '../styles/Home.css'

const Home = () => {
  const [name, setName] = useState("Amir")
  return (
    <div className='home'>
      <h1 className="welcome">
        Welcome Back, <span className='name'>{name}</span>!
      </h1>
      <h3 className='todosleft'>You have {3} tasks for today. All the best!</h3>
    </div>
  )
}

export default Home