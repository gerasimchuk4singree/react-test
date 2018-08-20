import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import Article from './components/Article.js';
import './index.scss';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/article" component={Article}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);