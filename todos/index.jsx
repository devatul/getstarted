require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import {map} from 'lodash';
import {TodoAdd} from './todo/add';


export class TodoList extends React.Component {
    
    render() {
        var todos = this.props.todos.map( (todo) => {
            let badge = <span className="badge">complete</span>;
            if(!todo.marked){
                badge = '';
            }
            return (
               <li key={todo.id} className="list-group-item">
                  <input onClick={ () => this.props.marktodo(todo) } checked={todo.marked} type="checkbox" />  {todo.text}
                  {badge}
               </li>
            );
        });
        return (
            <ul className="list-group">
               {todos}
            </ul>
        );
    }
}

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           todos : [
              {text: 'abc' , marked: true, id: 1},
              {text: 'xyz' , marked : false, id: 2}
           ]
        }

    }    

    marktodo(mtodo){
        let todos = this.state.todos;
        todos = todos.map( (todo) => {
            if(todo.id == mtodo.id){
                todo.marked = !todo.marked;
            }
            return todo;
        });
        this.setState({todos: todos});
    }
    addTodo(labl){
    let todo=this.state.todos;
        todo.unshift({text: labl , marked: false, id : new Date().getTime()});
        this.setState({todos: todo});
    }
    render() { 
        this.marktodo = this.marktodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        return (
            <div className="app row-fluid">
            <h2>Todo App</h2>
            <TodoList marktodo={this.marktodo} todos={this.state.todos}></TodoList>   
            <TodoAdd addTodo={this.addTodo} ></TodoAdd>
            </div>
        );
    }
}

ReactDOM.render(<Todo/>, document.querySelector("#myApp"));