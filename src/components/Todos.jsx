import React from 'react'
import { useModal } from '../context/modal-context'
import { useTodo } from '../context/TodoContext'
import Todo from './Todo'

import '../styles/Todos.css'


const Todos = () => {
  const { setIsOpen } = useModal()
  const { todos } = useTodo()
  return (
    <div className='todos-container'>
      <div className="container-header flex justify-between align-center">
        <h2>To-Do List</h2>
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>
      <div className="todo-container">
        {
          todos && todos.map(({ id, title, description, time }) => (
            <Todo key={id} id={id} title={title} description={description} time={time} />
          ))
        }
      </div>
    </div>
  )
}

export default Todos