import React, { Component} from 'react';
import PropTypes from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {MarkerStyle} from './MarkerStyle.js';
import {SelectedMarkerStyle} from './SelectMarkerStyle.js';

export default class MyGreatPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMarker: false
    };
    // this.toggle = this.toggle.bind(this);
    // this.props.setSelectedPermit = this.props.setSelectedPermit.bind(this);
  }
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  permitSelector = () => {
    this.props.setSelectedPermit(parseInt(this.props.text)+1)
  }

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div>
          { !(parseInt(this.props.text) + 1 === this.props.activePermit) ?
            <div style={MarkerStyle} onClick={()=>this.permitSelector()}>{parseInt(this.props.text) + 1}</div>  :
            <div className="align-middle" style={SelectedMarkerStyle} onClick={() => this.props.setSelectedPermit(null)}>{parseInt(this.props.text) + 1}</div>
          }
      </div>
    );
  }
}
