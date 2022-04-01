import React from 'react'
import { useModal } from '../context/modal-context'
import { useTodo } from '../context/TodoContext'
import Todo from './Todo'

import '../styles/Todos.css'


const Todos = ({ searchQuery }) => {
  const { setIsOpen } = useModal()
  const { todos } = useTodo()
  console.log(todos);

  const filterTodo = (todos, searchQuery) => {
    const filteredTodos = todos.filter(todo => todo.tags.includes(searchQuery))

    return filteredTodos.length > 0 ? filteredTodos : todos
  }

  const filterTodos = filterTodo(todos, searchQuery)

  return (
    <div className='todos-container'>
      <div className="container-header flex justify-between align-center">
        <h2>To-Do List</h2>
        <button onClick={() => setIsOpen(true)}>+</button>
      </div>
      <div className="todo-container">
        {
          filterTodos && filterTodos.map(({ id, title, description, time, tags, createdAt }) => (
            <Todo key={id} id={id} title={title} description={description} time={time} tags={tags} createdAt={createdAt} />
          ))
        }
      </div>
    </div>
  )
}

export default Todos