import React from 'react';

export class TodoList extends React.Component {
	marktodo(todo){
		this.props.marktodo(todo);
	}
	render() {
		var todos = this.props.todos.map( (todo) => {
			let badge = <span className="badge">complete</span>;
			if(!todo.marked){
                badge = '';
			}
			return (
               <li key={todo.id} className="list-group-item">
			      <input onClick={ () => this.marktodo(todo) } checked={todo.marked} type="checkbox" />  {todo.text}
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
TodoList.propTypes = { marktodo: React.PropTypes.func.isRequired }; 
