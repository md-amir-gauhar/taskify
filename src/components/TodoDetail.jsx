import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTodo } from '../context/TodoContext'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { BiReset } from 'react-icons/bi'
import 'react-circular-progressbar/dist/styles.css';

import '../styles/TodoDetail.css';


const blue = '#5f5ff6'

const TodoDetail = () => {
  const { todos } = useTodo()

  const { Id } = useParams()

  const todoObj = todos.find(t => t.id === Id)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [time, setTime] = useState(0)

  useEffect(() => {
    const todo = todos.find(t => t.id === Id)
    const { title, description, time, createdAt } = todo
    setTitle(title)
    setDescription(description)
    setTime(time)
    setCreatedAt(createdAt)
  }, [])

  let date = JSON.stringify(new Date(createdAt)).substring(1, 11);

  return (
    <div className='todoDetail flex align-center justify-center'>
      <div className="todoDetail-container flex align-center justify-between">
        <div className="pomodoro flex flex-col align-center justify-center">

        </div>
        <div className="details flex flex-col">
          <h1 className='title'>{title}</h1>
          <p className='description'>{description}</p>
          <p className='createdAt'>Created at: {date}</p>
        </div>
      </div>
    </div>
  )
}

export default TodoDetail