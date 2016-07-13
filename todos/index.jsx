require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import {map} from 'lodash';
import {TodoAdd} from './todo/add';


export class ToMember extends React.Component {
constructor(props) {
    super(props);
    this.state={text: this.props.todo.text}
    this.marktodo = this.marktodo.bind(this);
    this.edit = this.edit.bind(this);
    this.edited = this.edited.bind(this);

  }
marktodo(id){
    this.props.marktodo(id);
}
edit(){
    this.refs.edit.className=("show");
}
edited(){
    let txt=this.refs.txtbx.value;
    this.props.txtEdit(txt,this.props.todo.id);
    this.refs.edit.className=("hide");
}

  render() {
  
             let badge = <span className="badge">complete</span>;
            let editbtn  = <button  onClick={this.edit} className="badge">edit</button>;

            if(!this.props.todo.marked){
                badge = '';
            }
    return (
    <li key={this.props.todo.id} className="list-group-item">   
                    
                  <input onClick={ () => this.marktodo(this.props.todo.id) } checked={this.props.todo.marked} type="checkbox" />  {this.props.todo.text}
               
                  {editbtn}
                  {badge}
                  <div ref="edit" className="hidden">
                  <input type="text" className="" value={this.state.text} onChange={()=>{this.setstate({text:this.refs.txtbx.value})}} ref="txtbx"/>  <input type="button" className="btn btn-primary btn-sm" value="edited" ref="edited" onClick={this.edited} />
                    </div>
                  </li>
      
    );
  }
}


export class TodoList extends React.Component {
 constructor(props) {
    super(props);
    this.marktodo = this.marktodo.bind(this);
    this.txtEdit = this.txtEdit.bind(this);
  }
    marktodo(id){
    this.props.marktodo(id);
    }
    txtEdit(txt,id){
    this.props.txtEdit(txt,id);
    }
    render() {
        let todos=[];
        this.props.todos.map( (todo) => {
            todos.push(<ToMember todo={todo} key={todo.id} txtEdit={this.txtEdit} marktodo={this.marktodo}></ToMember>);
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
         this.txtEdit = this.txtEdit.bind(this);

    }    
    txtEdit(txt,id){
        let todos = this.state.todos;
        todos = todos.map( (todo) => {
            if(todo.id == id){
                todo.text = txt;
            }
            return todo;
        });
        this.setState({todos: todos});
    }
    marktodo(mtodo){
        let todos = this.state.todos;
        todos = todos.map( (todo) => {
            if(todo.id == mtodo){
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
            <TodoList marktodo={this.marktodo} txtEdit={this.txtEdit} todos={this.state.todos}></TodoList>   
            <TodoAdd addTodo={this.addTodo} ></TodoAdd>
            </div>
        );
    }
}

ReactDOM.render(<Todo/>, document.querySelector("#myApp"));