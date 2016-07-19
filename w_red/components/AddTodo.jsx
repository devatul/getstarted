import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addTodo } from '../actions'
import {classNames} from 'classnames';


export class TodoAdd extends React.Component {
    constructor(props){
         super(props);
         this.state = {
          todo : ''
         };
         this.addTodo = this.addTodo.bind(this);
    }
    onBack(){
        this.props.router.push('/');
    }
    addTodo(evt){
      evt.preventDefault();
      if(this.state.todo.length===0){
      alert("Please enter the Todo label.");
      this.refs.todo.className = classNames('form-control',{
      'has-error': this.state.todo.length===0
      });
      }else{
      this.props.onAddTodo(this.state.todo);
      this.onBack(); 
      }
      this.setState({
        todo: ''
      })
    }
  render(){
    return (
      <form onSubmit={this.addTodo} className="todoForm">
        <div className="form-group" >
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



function mapStateToProps(state){
 return {
         todos : state,    
        }
}

const mapDispatchToProps = (dispatch) => {   //es6 way
     return {
            onAddTodo: (text) => {
            dispatch(addTodo(text))
            }
     }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAdd)

const RouterAdd = withRouter(AddTodo);

export default RouterAdd