import React from 'react'
import { useModal } from '../context/modal-context'

import Todo from './Todo'

import '../styles/Todos.css'

const Todos = () => {
  const { setIsOpen } = useModal()
  return (
    <div className='todos-container'>
      <div className="container-header flex justify-between align-center">
        <h2>To-Do List</h2>
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>
      <div className="todo-container">
        <Todo />
      </div>
    </div>
  )
}

export default Todos