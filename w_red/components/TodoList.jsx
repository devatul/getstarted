import React from 'react'
import classNames from 'classnames';

export class ToMember extends React.Component {
constructor(props) {
    super(props);
    this.state={text: this.props.todo.text}
    this.marktodo = this.marktodo.bind(this);
    this.edit = this.edit.bind(this);
    this.edited = this.edited.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
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
deleteRow(){
  let id = this.props.todo.id;
  this.props.deleteRow(id);
}

  render() {
              let badge = <span className="badge">complete</span>;
              let editbtn  = <button onClick={this.edit} className="badge">edit</button>;
              let delbtn  = <button onClick={this.deleteRow} className="badge">Delete</button>;

            if(!this.props.todo.marked){
                badge = '';
            }
            return (
                  <li className="list-group-item" style={{
                  textDecoration: this.props.todo.marked ? 'line-through' : 'none'
                  }}>    
                  <input  onClick={ () => this.marktodo(this.props.todo.id) } checked={this.props.todo.marked} type="checkbox" />  {this.props.todo.text}
                  {delbtn}
                  {editbtn}
                  {badge}
                  <div ref="edit" className="hidden">
                    <input type="text" className="" value={this.state.text} onChange={()=>{this.setstate({text:this.refs.txtbx.value})}} ref="txtbx"/> 
                    <input type="button" className="btn btn-primary btn-sm" value="edited" ref="edited" onClick={this.edited} />
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
    this.deleteRow = this.deleteRow.bind(this);
  }
    marktodo(id){
    this.props.marktodo(id);
    }

    txtEdit(txt,id){
    this.props.txtEdit(txt,id);
    }

    deleteRow(id){
    this.props.deleteRow(id);
    }
    render() {
        let todos= this.props.todos.map( (todo) => {
          return(
            <ToMember todo={todo} key={todo.id} marktodo={this.marktodo} txtEdit={this.txtEdit} deleteRow={this.deleteRow} ></ToMember>
            );
        });
        return (
            <ul className="list-group">

               {todos}
            </ul>
        );
    }
}