import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import components
import App from './components/App';
import reducers from './reducers';

// import styles
import './assets/styles/core.css';
import './assets/styles/style.css';
import './assets/styles/icon-font.min.css';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App layout="LayoutOne" />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);