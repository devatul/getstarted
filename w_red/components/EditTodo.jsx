import React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { editTodo } from '../actions'
import {EditForm} from './EditForm'


class EditContainer extends React.Component {
	constructor(props) {
    	super(props);	
		this.updateTodo = this.updateTodo.bind(this);
        this.back = this.onBack.bind(this);
    }
    onBack(){
        this.props.router.push('/');
    }
    updateTodo(text, id){
        var self = this;
    	if(text.length > 0){
    		  	this.props.onEditTodo(text, id);
                self.onBack();   
    	}
        
    }
	render() {
        
		return (
			<div className="addContainer">
            <EditForm  id={this.props.id} text={this.props.text} txtEdited={this.updateTodo} currentTodo={this.props.currentTodo}></EditForm>
                
			</div>
		);
	}
}


function mapStateToProps(state, props){
 return {todos : state,
        id : props.params.id,
        text : props.params.txt
        }
}

const mapDispatchToProps = (dispatch) => {   //es6 way
     return {
     	onEditTodo: (text, id) => {
     		return dispatch(editTodo(text, id))	
     	}
     }
}

const EditTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer)

const RouterEdit = withRouter(EditTodo);

export default RouterEdit