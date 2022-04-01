import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useModal } from '../context/modal-context'
import { useTodo } from '../context/TodoContext'

import '../styles/Modal.css'

const Modal = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("")
  const { setIsOpen } = useModal()
  const { addTodo } = useTodo()

  const submitHandler = (e) => {
    e.preventDefault()
    e.preventDefault()
    const id = uuid()
    const todo = {
      id,
      title,
      description,
      createdAt: Date.now(),
      time: +time,
    }

    addTodo(todo)
    setTitle("")
    setDescription("")
    setTime("")
    setIsOpen(false)
  }
  return (
    <div className='modal-container flex align-center justify-center'>
      <div className="modal">
        <form className='flex align-center justify-center flex-col' onSubmit={submitHandler}>
          <input
            type="text"
            placeholder='Add Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="15"
            placeholder='Add Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}>

          </textarea>
          <input
            type="number"
            placeholder='Enter time (in minutes)'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <div className="form-buttons flex align-center justify-around">
            <button onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button type='submit'>
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Modal