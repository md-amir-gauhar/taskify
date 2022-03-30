import { useContext, createContext, useReducer } from 'react'
import reducer, { initialState } from '../reducer/TodoReducer'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (todo) => {
    const updatedTodo = state.todos.concat(todo)
    dispatch({
      type: "ADD_TODO",
      payload: updatedTodo,
    })
    return updatedTodo;
  }

  const deleteTodo = (todo) => {
    const updatedTodo = state.todos.filter(t => t.id !== todo.id)
    dispatch({
      type: "DELETE_TODO",
      payload: updatedTodo,
    })
  }

  const editTodo = (todo) => {
    const updatedTodo = state.todos.map(t => t.id === todo.id ? { ...t, title: todo.title, description: todo.description, createdAt: todo.createdAt } : t)
    console.log(updatedTodo);

    dispatch({
      type: "EDIT_TODO",
      payload: updatedTodo
    })
  }

  const value = {
    todos: state.todos,
    addTodo,
    deleteTodo,
    editTodo
  }
  return (

    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>

  )
}

const useTodo = () => useContext(TodoContext)

export { useTodo, TodoProvider }