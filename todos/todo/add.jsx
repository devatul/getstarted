import React from 'react';
import classNames from 'classnames';

export class TodoAdd extends React.Component {
    constructor(props){
         super(props);
         this.state = {
         	todo : ''
         };
         
    }
    addTodo(evt){
    	evt.preventDefault();
    	if(this.state.todo.length===0){
    	alert("Please enter the Todo label.");
    	this.refs.todo.className = classNames('form-control',{
    	'has-error': this.state.todo.length===0
    	});
    	}else{
    	this.props.addTodo(this.state.todo);
    	}
    	this.setState({
    		todo: ''
    	})
    }
	render(){
	
	this.addTodo = this.addTodo.bind(this);
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
 TodoAdd.propTypes = { addTodo: React.PropTypes.func.isRequired}
