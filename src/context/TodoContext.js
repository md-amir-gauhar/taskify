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

  const value = {
    todos: state.todos,
    addTodo,
  }
  return (

    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>

  )
}

const useTodo = () => useContext(TodoContext)

export { useTodo, TodoProvider }