import React from 'react';

export class TodoAdd extends React.Component {
    constructor(props){
         super(props);
         this.state = {
         	todo : ''
         };
         this.addTodo = this.addTodo.bind(this);
    }
    addTodo(evt){
    	evt.preventDefault();
    	this.props.addTodo(this.state.todo);
    	this.setState({
    		todo: ''
    	})
    }
	render(){
		return (
			<form onSubmit={this.addTodo} className="todoForm">
			  <div className="form-group">
			    <label htmlFor="todo">Todo</label>
			    <input 
			            onChange={ () => {  
			            	this.setState({
			            		todo : this.refs.todo.value
			            	})
			            } }
			            value={this.state.todo}
			            ref="todo"
			            type="text" 
			            className="form-control" 
			            id="todo" 
			            placeholder="Your Todo..">
			    </input>
			  </div>
			  <button type="submit" className="btn btn-default">Submit</button>
			</form>
		)
	}
}

TodoAdd.propTypes = { addTodo: React.PropTypes.func.isRequired }; 