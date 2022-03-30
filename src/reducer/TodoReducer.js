import { v4 as uuid } from 'uuid'

export const initialState = {
  todos: [
    {
      id: uuid(),
      title: "Learn Context Api",
      description: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
      createdAt: Date.now(),
      time: 40
    },
    {
      id: uuid(),
      title: "Learn Context Api",
      description: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
      createdAt: Date.now(),
      time: 40
    },
    {
      id: uuid(),
      title: "Learn Context Api",
      description: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.",
      createdAt: Date.now(),
      time: 40
    },
  ]
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
    default:
      return state
  }
}

export default reducer