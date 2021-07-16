import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import React from 'react'

import { Provider } from 'react-redux';
import { globalStore } from './store';

// import i18n (needs to be bundled ;))
import './i18n';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={globalStore}>
    <BrowserRouter>
      <React.Suspense fallback="...wait">
        <App /> 
      </React.Suspense>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();