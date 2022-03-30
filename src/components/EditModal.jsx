import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTodo } from '../context/TodoContext'
import { useModal } from '../context/modal-context'
import '../styles/Modal.css'

const EditModal = ({ title, description, time, id }) => {
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editTime, setEditTime] = useState("")
  const { setIsEditModalOpen } = useModal()
  const { editTodo } = useTodo()

  useEffect(() => {
    setEditDescription(description)
    setEditTime(time)
    setEditTitle(title)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    const todo = {
      id: id,
      title: editTitle,
      description: editDescription,
      createdAt: Date.now(),
      time: +editTime,
    }

    editTodo(todo)
    setEditTitle("")
    setEditDescription("")
    setEditTime("")
    setIsEditModalOpen(false)
  }
  return (
    <div className='modal-container flex align-center justify-center'>
      <div className="modal">
        <form className='flex align-center justify-center flex-col' onSubmit={submitHandler}>
          <input
            type="text"
            placeholder='Add Title'
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="15"
            placeholder='Add Description'
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}>

          </textarea>
          <input
            type="number"
            placeholder='Enter time (in minutes)'
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
          />

          <div className="form-buttons flex align-center justify-around">
            <button onClick={() => setIsEditModalOpen(false)}>
              Close
            </button>
            <button type='submit'>
              Edit
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default EditModal