import React from 'react'
import {TOGGLE_TODO, ADD_TODO, EDIT_TODO} from '../actions'
import * as _ from 'lodash'

export function todoApp(state = [], action){
  switch(action.type){
    case 'TOGGLE_TODO':
     return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            marked: !todo.marked
          })
        }
        return todo
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
    case 'EDIT_TODO':
    return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            text: action.text
          })
        }
        return todo
      })
    case 'DELETE_TODO':
    let todos = [];
    state.map((todo) => {
      if(todo.id !== action.id){
        todos.push(todo) ;
      }
      })
    return _.clone(todos);
    default:
     return _.clone(state);
  }
  }

