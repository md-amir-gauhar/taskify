import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTodo } from '../context/TodoContext'
import Pomodoro from './Pomodoro';

import '../styles/TodoDetail.css';

const TodoDetail = () => {
  const { todos } = useTodo()
  const { Id } = useParams()
  const [currentTodo] = useState({ ...todos.find(t => t.id === Id) })

  let date = JSON.stringify(new Date(currentTodo.createdAt)).substring(1, 11);
  const tag = currentTodo.tags.split(",")
  return (
    <div className='todoDetail flex align-center justify-center' >
      <div className="todoDetail-container flex align-center justify-between">
        <div className="pomodoro flex flex-col align-center justify-center">
          <Pomodoro clock={currentTodo.time} />
        </div>
        <div className="details flex flex-col">
          <h1 className='title'>{currentTodo.title}</h1>
          <p className='description'>{currentTodo.description}</p>
          <div className="tags flex align-center">
            <span>Tags: </span>
            {
              tag.map((tag, idx) => <span className='tag' key={idx}>{tag}</span>)
            }
          </div>
          <p className='createdAt'>Created at: {date}</p>
        </div>
      </div>
    </div>
  )
}

export default TodoDetail