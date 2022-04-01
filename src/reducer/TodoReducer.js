import { v4 as uuid } from 'uuid'

export const initialState = {
  todos: []
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_TODO":
      console.log("ADD", payload);
      return {
        ...state,
        todos: payload
      }
    case "DELETE_TODO":
      console.log("REmove", payload);
      return {
        ...state,
        todos: payload
      }
    case "EDIT_TODO":
      return {
        ...state,
        todos: payload
      }
    default:
      return state
  }
}

export default reducer