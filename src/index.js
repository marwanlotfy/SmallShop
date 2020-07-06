import App from './App'
import React from 'react'
import './polyfill'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom'
const root = document.getElementById('root')
ReactDom.render(React.createElement(App),root)
