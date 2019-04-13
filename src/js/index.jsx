require('../scss/main.scss');

import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom';
import thunk from "redux-thunk";

import todo from './reducers/todos';
import App from './containers/app.jsx';

const store = createStore(todo, applyMiddleware(thunk));

render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
