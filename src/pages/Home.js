import React, { useState } from 'react'
import Todos from '../components/Todos'
import { useTodo } from '../context/TodoContext'
import '../styles/Home.css'

const Home = ({ searchQuery }) => {
  const [name] = useState("Amir")
  const { todos } = useTodo()

  return (
    <div className='home'>
      <h1 className="welcome">
        Welcome Back, <span className='name'>{name}</span>!
      </h1>
      <h3 className='todosleft'>You have {todos.length} tasks for today. All the best!</h3>
      <Todos searchQuery={searchQuery} />
    </div>
  )
}

export default Home