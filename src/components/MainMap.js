import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { designReviewMarkers,
          landUseMarkers,
          buildingMarkers,
          electricalPermitsMarkers,
          tradeMarkers,
          companyMarkers
        } from '../actions'
// import MapMarkers from './MapMarkers';
import MyGreatPlace from './Marker.js';
import MapNav from './MapNav.js';
// import PropTypes from 'prop-types';
// import { request } from '../helpers/index';

class MainMap extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      projects: []
    }
  }

  static defaultProps = {
    center: {
      lat: 47.60,
      lng: -122.33
    },
    zoom: 11
  }

  componentDidMount(){
    this.props.designReviewMarkers()
  }

  render() {
    let markers = [];
    this.props.mapMarkers ? markers = this.props.mapMarkers.map((marker, i)=> <MyGreatPlace key={i.toString()} lat={marker.latitude} lng={marker.longitude} text={i.toString()} />) : null
    return (
      <div style={{ height: '92vh', width: '100%' }}>
        <MapNav
          landUseMarkers={this.props.landUseMarkers}
          buildingMarkers={this.props.buildingMarkers}
          electricalPermitsMarkers={this.props.electricalPermitsMarkers}
          tradeMarkers={this.props.tradeMarkers}
          companyMarkers={this.props.companyMarkers}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: '***REMOVED***' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {markers}

        </GoogleMapReact>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  designReviewMarkers,
  landUseMarkers,
  buildingMarkers,
  electricalPermitsMarkers,
  tradeMarkers,
  companyMarkers
}, dispatch)

const mapStateToProps = ( { mapMarkers } ) => {
  return { mapMarkers }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMap);
