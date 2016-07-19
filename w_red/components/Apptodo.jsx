import React from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'
import { toggleTodo, addTodo, deleteTodo } from '../actions'
import {TodoList} from './TodoList'
import {AddTodo} from './AddTodo'
import { withRouter } from 'react-router'


class Todo extends React.Component {
 constructor(props) {
     super(props); 
     this.marktodo = this.marktodo.bind(this);
     this.addTodo = this.addTodo.bind(this);
     this.addNew = this.addNew.bind(this);
     this.txtEdit = this.txtEdit.bind(this);
     this.deleteRow = this.deleteRow.bind(this);
    }
  marktodo(id){
    this.props.onTodoClick(id);
    }
  addTodo(text){
    this.props.onAddTodo(text);
  }  
  addNew(){
    this.props.router.push('/add');
  } 
  txtEdit(txt, id){
    this.props.router.push('/edit/'+id+'/'+txt);
    }
   deleteRow(id){
    this.props.onDeleteRow(id);
    } 
 render() {
   return (
     <div className="app row-fluid">
     <h2>Todo App</h2>
     <TodoList todos={this.props.todos} marktodo={this.marktodo} txtEdit={this.txtEdit} deleteRow={this.deleteRow} ></TodoList>

     <button type="button" className="btn btn-default" onClick={this.addNew} >AddNew+</button>
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
    onDeleteRow: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

const Apptodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

const rotTodo = withRouter(Apptodo);

export default rotTodo
