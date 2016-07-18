import React from 'react'
import {TOGGLE_TODO, ADD_TODO} from '../actions'
import * as _ from 'lodash'

export function todoApp(state = [], action){
  switch(action.type){
    case 'TOGGLE_TODO':
    let todos = state;  
       return todos = _.map(todos, (todo) =>{
        if(todo.id == action.id){
          todo.marked = !todo.marked;
        }
        return todo;
      })
    case 'ADD_TODO':
    return [
        ...state,
        {
          text: action.text,
          marked: false,
          id : state.length+1
        }
      ]
    default:
     return _.clone(state);
  }
  }

/*
const todo = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        marked: !state.marked
      })
    default:
      return state
  }
}
const todoApp = (state = [], action) => {
    switch (action.type) {
    case 'TOGGLE_TODO':
      return _.map(state, (t) => todo(t,action))
    default:
      return state
    }
      
}
export default todoApp
*/