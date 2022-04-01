import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useModal } from '../context/modal-context'
import { useTodo } from '../context/TodoContext'

import '../styles/Modal.css'

const Modal = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
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
      tags,
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
            required
          />
          <textarea
            cols="30"
            rows="15"
            placeholder='Add Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          >
          </textarea>
          <input
            type="text"
            placeholder='Add Tags(separated by a comma)'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder='Enter time (in minutes)'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
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