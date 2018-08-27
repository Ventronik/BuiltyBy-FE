import React from 'react';
import GoogleMapReact from 'google-map-react';
// import MapMarkers from './MapMarkers';
import MyGreatPlace from './Marker.js';
// import PropTypes from 'prop-types';
import { request } from '../helpers/index';

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
    this.getProjectsData()
  }

  getProjectsData = () =>{
    request('/new')
    .then(projects => {
      this.setState({projects: projects.data})
      console.log(this.state.projects)
    })
  }

  render() {
    let markers = this.state.projects.map((marker, i)=> <MyGreatPlace key={i.toString()} lat={marker.latitude} lng={marker.longitude} text={i.toString()} />)
    return (
      <div style={{ height: '92vh', width: '100%' }}>
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

export default MainMap;
