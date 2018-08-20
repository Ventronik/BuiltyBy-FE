import React, { Component} from 'react';
import PropTypes from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {MarkerStyle} from './MarkerStyle.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={MarkerStyle}>
          {this.props.text}
       </div>
    );
  }
}
