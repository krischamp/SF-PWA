/*
 *  APP component (main-container)
 *  contains navBar & home-container
 */

import React, { Component } from 'react'

import LookupService        from './LookupService'


class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='navbar'>
          <h1>SF - PWA</h1>
        </div>
        <div className='home-container'>
          <h1 className='home-header'>Service LookUp (by keyword)</h1>
          <LookupService
            direction='column'
            onSubmitTermSearched=          />

        </div>
      </div>
    )
  }
}

module.exports = App;
