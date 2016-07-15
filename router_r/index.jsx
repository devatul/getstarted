require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import {map} from 'lodash';

export class App extends React.Component{


  render(){
  	
    return(
      <div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
      
      {this.props.children}
      
      </div>
      )
  }
}


const About = React.createClass({
	render(){
		return(
			<h4>This is About Us page</h4>
		)
	}
})

const Contact = React.createClass({
	render(){
		return(
			<h4>This is Contact Us page</h4>
		)
	}
})


export class Services extends React.Component{
	constructor( props ){
		super( props );
		this.state = {
			'services' : [
				{ id : 1, service : "Car", Location:"Varanasi", tag:"Till what you had done is in a single page application."},
 				{ id : 2, service : "Marketing", Location:"Noida", tag:"Till what you had done is in a single page application."},
 				{ id : 3, service : "Vending", Location:"Mumbai", tag:"Till what you had done is in a single page application."},
 				{ id : 4, service : "transportation", Location:"Delhi", tag:"Till what you had done is in a single page application."}
 			]
 	    }
	}
	render(){
		let svr = this.state.services.map(function( srr ){
			return (
				<div key={srr.id}>
					<Link to={`/services/link/${srr.id}/${ srr.service }/${srr.Location}/${ srr.tag }`}> {srr.id} - { srr.service } -{srr.Location}</Link>
				</div>
			)
		})

		return(
			<div>
				<h4>services</h4>
				{svr}
			</div>

		)
	}
}
const Details = React.createClass({
	render(){
		return(
			<h3>{ this.props.params.id }-{ this.props.params.svr }-{ this.props.params.loc }-{ this.props.params.tag }</h3>
		)
	}
})
ReactDOM.render((
	<Router>
		<Route path="/" component={App} >
		
			<Route path="about" component={About} />
      		<Route path="contact" component={Contact} />	

      		<Route path="services">
      			<IndexRoute component={Services} />
  				<Route path="link/:id/:svr/:loc/:tag" component={Details} />
  			</Route>
		</Route>
  </Router>
), document.querySelector("#myApp"))