require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './todo/list';
import {TodoAdd} from './todo/add';
import {map} from 'lodash';


export class Todo extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
	       todos : [
	          {text: 'abc' , marked: true, id: 1},
	          {text: 'xyz' , marked : false, id: 2}
	       ]
		}
		this.marktodo = this.marktodo.bind(this);
		this.addTodo = this.addTodo.bind(this);
    }
    addTodo(todoText){
    	let todos = this.state.todos;
    	todos.unshift({text: todoText , marked: false, id : new Date().getTime()});
    	this.setState({
    		todos: todos
    	})
     }
    marktodo(mtodo){
    	let todos = this.state.todos;
        todos = map(todos, (todo) => {
            if(todo.id == mtodo.id){
            	todo.marked = !todo.marked;
            }
            return todo;
        });
        this.setState({todos: todos});
    }
	render() {
		return (
			<div className="app row-fluid">
			<h2>Todo App</h2>
			<TodoList marktodo={this.marktodo} todos={this.state.todos}></TodoList>
			<TodoAdd addTodo={this.addTodo}></TodoAdd>
			</div>
		);
	}
}

ReactDOM.render(<Todo/>, document.querySelector("#myApp"));