require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware, compose} from 'redux'
import {todoApp} from './reducers/todoApp'
import Apptodo from './components/Apptodo'
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



render(
  <Provider store={store}>
   <Apptodo />
  </Provider>,
  document.getElementById('myApp')
)