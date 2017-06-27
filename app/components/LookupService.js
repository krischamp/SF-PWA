/*
 *  LOOKUP SERVICE component
 *  input form for lookup service
 */

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
// import ReactRouter          from 'react-router-dom';

import api from '../tools/api';


class LookupService extends Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      termSearched: ''
    };

    this.handleSubmitTermSearched = this.handleSubmitTermSearched.bind(this);
    this.handleUpdateTermSearched = this.handleUpdateTermSearched.bind(this);
  }
  // we get the string to search
  handleSubmitTermSearched() {
    console.log("this.state.termSearch =  " + this.state.termSearched)
    api.getTermSearched(this.state.termSearched)
      .then( function(res) {
        console.log(res.data.results)
      })
    // this.props.onSubmitTermSearched(this.state.termSearched)
    // this.setState( () => {
    //   return {
    //     termSearched: ''
    //   }
    // })
  }
  // update the string searched on input
  handleUpdateTermSearched(e) {
    const wTerm = e.target.value;
    console.log("wTerm : ", e.target.value);
    this.setState( () => {
      return {
        termSearched: wTerm
      }
    });
  }

  render() {
    console.log("props : ", this.props)
    return (
      <div className='search-container'
           style={{ flexDirection: this.props.direction }}
      >
        <input
          className='form-control'
          onChange={ this.handleUpdateTermSearched }
          placeholder= 'enter your search ...'
          type='text'
          value={ this.state.termSearched }
        />
        <button
          type='button'
          style={{ margin: 10 }}
          className= 'btn btn-success'
          onClick={ this.handleSubmitTermSearched }
        >
          Get it !!!
        </button>
      </div>
    )
  }
}

// default props & PropTypes definition
LookupService.defaultProps = {
  direction: 'column'
}

LookupService.propTypes = {
  direction: PropTypes.string
}

module.exports = LookupService;
