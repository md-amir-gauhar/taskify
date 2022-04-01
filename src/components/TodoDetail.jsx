import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTodo } from '../context/TodoContext'
import Pomodoro from './Pomodoro';

import '../styles/TodoDetail.css';

const TodoDetail = () => {
  const { todos } = useTodo()
  const { Id } = useParams()
  const [currentTodo, setCurrentTodo] = useState({ ...todos.find(t => t.id === Id) })

  let date = JSON.stringify(new Date(currentTodo.createdAt)).substring(1, 11);

  return (
    <div className='todoDetail flex align-center justify-center' >
      <div className="todoDetail-container flex align-center justify-between">
        <div className="pomodoro flex flex-col align-center justify-center">
          <Pomodoro clock={currentTodo.time} />
        </div>
        <div className="details flex flex-col">
          <h1 className='title'>{currentTodo.title}</h1>
          <p className='description'>{currentTodo.description}</p>
          <p className='createdAt'>Created at: {date}</p>
        </div>
      </div>
    </div>
  )
}

export default TodoDetail