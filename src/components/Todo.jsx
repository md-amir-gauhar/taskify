import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { useTodo } from '../context/TodoContext'
import { useModal } from '../context/modal-context'
import EditModal from './EditModal'

import '../styles/Todo.css'

const Todo = ({ id, title, description, time }) => {
  const { deleteTodo } = useTodo()
  const { isEditModalOpen, setIsEditModalOpen } = useModal()

  const clickHandler = () => {
    const todo = { id, title };
    deleteTodo(todo)
  }

  return (
    <div className='todo flex align-center justify-between' key={id}>
      <Link to={`/todo/${id}`}><h3>{title}</h3></Link>
      <div className="action-container flex align-center">
        <FaRegEdit onClick={() => setIsEditModalOpen(true)} />
          <AiFillDelete onClick={clickHandler} />
      </div>
      {isEditModalOpen && <EditModal id={id} title={title} description={description} time={time} />}
    </div>
  )
}

export default Todo