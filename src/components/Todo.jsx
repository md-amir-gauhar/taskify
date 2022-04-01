import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { useTodo } from '../context/TodoContext'
import { useModal } from '../context/modal-context'
import EditModal from './EditModal'

import '../styles/Todo.css'

const Todo = ({ id, title, description, time, tags, createdAt }) => {

  console.log({ id, title, description, time, tags, createdAt });
  const { deleteTodo } = useTodo()
  const { isEditModalOpen, setIsEditModalOpen } = useModal()

  const clickHandler = () => {
    const todo = { id, title };
    deleteTodo(todo)
  }

  const tag = tags.split(",")

  return (
    <div className='todo flex flex-col' key={id}>
      <div className='flex align-center justify-between'>
        <Link to={`/todo/${id}`}><h3>{title}</h3></Link>
        <div className="action-container flex align-center">
          <FaRegEdit onClick={() => setIsEditModalOpen(true)} />
          <AiFillDelete onClick={clickHandler} />
        </div>
      </div>
      <div className="tags flex align-center">
        {tag.map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
      </div>

      {isEditModalOpen && <EditModal id={id} title={title} description={description} time={time} tags={tags} createdAt={createdAt} />}
    </div>
  )
}

export default Todo