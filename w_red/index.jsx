require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware, compose} from 'redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import {todoApp} from './reducers/todoApp'
import {Apptodo, EditTodo, AddTodo } from './components/index'
import thunk from 'redux-thunk';
import * as _ from 'lodash';

/*let initialstate = {todos : [
              {text: 'abc' , marked: true, id: 1},
              {text: 'xyz' , marked : false, id: 2}
           ]};

      let store = createStore(todoApp,initialstate, compose(
	  applyMiddleware(thunk), 
      window.devToolsExtension ? window.devToolsExtension() : f => f
      )
);

store.subscribe(()=>{
	console.log('state changed');
	console.log(store.getState().toJS());
});

*/
//let store = createStore(todoApp)
let initialstate = [
              {text: 'abc' , marked: true, id: 1},
              {text: 'xyz' , marked : false, id: 2}
           ];

      let store = createStore(todoApp,initialstate, compose(
	  applyMiddleware(thunk), 
      window.devToolsExtension ? window.devToolsExtension() : f => f
      )
);
store.subscribe(()=>{
	console.log('state changed');
	console.log(store.getState());
});

class App extends React.Component {
  constructor(props){
  	super(props);
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

render(
  <Provider store={store}>
  <Router>
  <Route path="/" component={App} >
  	<IndexRoute component={Apptodo} />
 	<Route path="edit/:id/:txt" component={EditTodo} />
 	<Route path="add" component={AddTodo} />
  </Route>
  </Router>
  </Provider>,
  document.getElementById('myApp')
)