import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

import '../styles/Todo.css'


const Todo = ({ id, title, description, time }) => {

  return (
    <div className='todo flex align-center justify-between' key={id}>
      <Link to={`/todo/${id}`}><h3>{title}</h3></Link>
      <div className="action-container flex align-center">
        <FaRegEdit />
        <AiFillDelete />
      </div>
    </div>
  )
}

export default Todo