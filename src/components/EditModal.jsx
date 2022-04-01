import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTodo } from '../context/TodoContext'
import { useModal } from '../context/modal-context'
import '../styles/Modal.css'

const EditModal = ({ title, description, time, id, tags, createdAt }) => {

  // console.log({ title, description, time, id, tags });
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editTags, setEditTags] = useState("")
  const [editTime, setEditTime] = useState("")
  const { setIsEditModalOpen } = useModal()
  const { editTodo } = useTodo()

  useEffect(() => {
    setEditDescription(description)
    setEditTime(time)
    setEditTags(tags)
    setEditTitle(title)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    const todo = {
      id: id,
      title: editTitle,
      description: editDescription,
      tags: editTags,
      time: editTime,
      createdAt
    }

    console.log(todo);

    editTodo(todo)
    setEditTitle("")
    setEditDescription("")
    setEditTime("")
    setEditTags("")
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
            required
          />
          <textarea
            cols="30"
            rows="15"
            placeholder='Add Description'
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            required
          >
          </textarea>
          <input
            type="text"
            placeholder='Add Tags'
            value={editTags}
            onChange={(e) => setEditTags(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder='Enter time (in minutes)'
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
            required
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