import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

import '../styles/Todo.css'


const Todo = () => {

  return (
    <div className='todo flex align-center justify-between'>
      <Link to={"#"}><h3>My Todo 1</h3></Link>
      <div className="action-container flex align-center">
        <FaRegEdit />
        <AiFillDelete />
      </div>
    </div>
  )
}

export default Todo