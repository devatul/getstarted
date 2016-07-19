import React from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'
import { toggleTodo, addTodo, editTodo, deleteTodo } from '../actions'
import {TodoList} from './TodoList'
import {AddTodo} from './AddTodo'


class Todo extends React.Component {
 constructor(props) {
     super(props); 
     this.marktodo = this.marktodo.bind(this);
     this.addTodo = this.addTodo.bind(this);
     this.txtEdit = this.txtEdit.bind(this);
     this.deleteRow = this.deleteRow.bind(this);
    }
  marktodo(id){
    this.props.onTodoClick(id);
    }
  addTodo(text){
    this.props.onAddTodo(text);
  }  
  txtEdit(txt,id){
    this.props.onTextEdit(txt,id);
    }
   deleteRow(id){
    this.props.onDeleteRow(id);
    } 
 render() {
   return (
     <div className="app row-fluid">
     <h2>Todo App</h2>
     <TodoList todos={this.props.todos} marktodo={this.marktodo} txtEdit={this.txtEdit} deleteRow={this.deleteRow} ></TodoList>
     <AddTodo addTodo={this.addTodo} ></AddTodo>
     </div>
   );
 }
}


const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onAddTodo: (text) => {
      dispatch(addTodo(text))
    },
    onTextEdit: (text, id) => {
      dispatch(editTodo(text, id))
    },
    onDeleteRow: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const Apptodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default Apptodo
