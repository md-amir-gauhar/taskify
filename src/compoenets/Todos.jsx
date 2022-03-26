import React, { useState } from 'react'

// import Todo from './Todo'

import '../styles/Todos.css'
import Todo from './Todo'

const Todos = () => {
  return (
    <div className='todos-container'>
      <div className="container-header flex justify-between align-center">
        <h2>To-Do List</h2>
        <button>+</button>
      </div>
      <div className="todo-container">
        <Todo />
      </div>
    </div>
  )
}

export default Todos