import React from 'react';
import ReactDOM from 'react-dom';
import './assets/rem'
import './index.css';
import App from './App';
import {Provider}from "react-redux"
import store from './store'
import axios from 'axios'
import * as serviceWorker from './serviceWorker';
axios.interceptors.request.use(config=>{
    return config;
})
axios.interceptors.response.use(({data})=>{
    return data;
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
