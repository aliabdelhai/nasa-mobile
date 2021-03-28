import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import { NasaStore }  from './components/stores/NasaStore'

let nasaStore = new NasaStore()
const store = {nasaStore}


ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
