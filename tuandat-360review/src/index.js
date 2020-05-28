import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore.js'

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// import i18n (needs to be bundled ;)) 
import './i18n';

import GlobalLoading from './GlobalLoading/index.js'


const app = (
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <GlobalLoading />
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
