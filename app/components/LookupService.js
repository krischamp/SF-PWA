/*
 *  LOOKUP SERVICE component
 *  input form for lookup service
 */

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
// import ReactRouter          from 'react-router-dom';

// import api from '../tools/api';


class LookupService extends Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmitName = this.handleSubmitName.bind(this);
  }
  // we get the string to search
  handleSubmitName() {
    this.props.onSubmitName(this.state.name)
    this.setState( () => {
      return {
        name: ''
      }
    })
  }
  // update the string searched on input
  handleUpdateName(e) {
    const wName = e.target.value;
    // console.log("wName : ", e.target.value);
    this.setState( () => {
      return {
        name: wName
      }
    });
  }

  render() {
    // console.log("props : ", this.props)
    return (
      <div className='search-container'
           style={{ flexDirection: this.props.direction }}
      >
        <input
          className='form-control'
          onChange={ this.handleUpdateName }
          placeholder= 'enter your search ...'
          type='text'
          value={ this.state.name }
        />
        <button
          type='button'
          style={{ margin: 10 }}
          className= 'btn btn-success'
          onClick={ this.handleSubmitName }
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
