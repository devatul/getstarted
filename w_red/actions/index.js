
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_TODO = 'ADD_TODO'

export function toggleTodo(id){
  return{
    type : TOGGLE_TODO,
    id
  }
}

export function addTodo(text){
  return{
    type : ADD_TODO,
    text
  }
}


/*
let nextTodoId = 3


export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
*/