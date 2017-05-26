/*
 *  APP component (main-container)
 *  contains navBar & home-container
 */

import React, { Component }                  from 'react';
// import ReactRouter, { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='main-container'>
          <h1>Hello SF PWA</h1>
      </div>
    )
  }
}

module.exports = App;
