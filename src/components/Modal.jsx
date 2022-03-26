import React, { useState } from 'react'
import { useModal } from '../context/modal-context'
import '../styles/Modal.css'

const Modal = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("")
  const { setIsOpen } = useModal()
  const submitHandler = (e) => {
    e.preventDefault()
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