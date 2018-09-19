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
import MyGreatPlace from './Marker.js';
import MapNav from './MapNav.js';

class Map extends React.Component{
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
      <div style={{ height: 'calc(100vh - 138px)', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0' }}
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
  designReviewMarkers
}, dispatch)

const mapStateToProps = ( { mapMarkers } ) => {
  return { mapMarkers }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
