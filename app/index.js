/*
 *  index.js
 *  point d'entrée dans l'application
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
require('./index.css');

// affichage component App
ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
