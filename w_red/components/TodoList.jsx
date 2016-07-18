import React from 'react'

export class ToMember extends React.Component {
constructor(props) {
    super(props);
    this.marktodo = this.marktodo.bind(this);
  }

  marktodo(id){
    this.props.marktodo(id);
}

  render() {
             let badge = <span className="badge">complete</span>;
            let editbtn  = <button  className="badge">edit</button>;

            if(!this.props.todo.marked){
                badge = '';
            }
            return (
                 <li className="list-group-item">   
                    
                  <input  onClick={ () => this.marktodo(this.props.todo.id) } checked={this.props.todo.marked} type="checkbox" />  {this.props.todo.text}
               
                  {editbtn}
                  {badge}
                  
                  </li>
      
    );
  }
}


export class TodoList extends React.Component {
 constructor(props) {
    super(props);
    this.marktodo = this.marktodo.bind(this);
    console.log("asdasd");
  }
   marktodo(id){
    this.props.marktodo(id);
    }
    render() {
        let todos= this.props.todos.map( (todo) => {
          return(
            <ToMember todo={todo} key={todo.id} marktodo={this.marktodo} ></ToMember>
            );
        });
        return (
            <ul className="list-group">

               {todos}
            </ul>
        );
    }
}