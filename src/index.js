import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer, []);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'TODO_ADD',
  todo: {
    id: '0',
    name: 'learn redux',
    completed: false,
  },
});

store.dispatch({
  type: 'TODO_TOGGLE',
  todo: {
    id: '0',
  },
});

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
