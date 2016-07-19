import React from 'react'
import classNames from 'classnames';

export class EditForm extends React.Component {
constructor(props) {
    super(props);
    this.state={text: props.text}
    this.edited = this.edited.bind(this);
  }


edited(){
    let text=this.refs.txtbx.value;
    //alert(this.props.id);
    this.props.txtEdited(text, this.props.id);
}


  render() {
            return (
                  <li className="list-group-item" >                   
                  <div ref="edit" className="list-group-item">
                    <input type="text" className="form-control" value={this.state.text} onChange={()=>{this.setstate({text:this.refs.txtbx.value})}} ref="txtbx"/> 
                    <input type="button" className="btn btn-primary btn-sm" value="Submit" ref="edited" onClick={this.edited} />
                  </div>
                  </li>
      
             );
          }
  }
