import React from 'react';
import GoogleMapReact from 'google-map-react';
// import MapMarkers from './MapMarkers';
import MyGreatPlace from './Marker.js';
// import PropTypes from 'prop-types';
import { request } from '../helpers/index';

let coords = [
  {lat: 47.73307912, long: -122.34715996},
  {lat: 47.61359969, long: -122.3017157},
  {lat: 47.61274253, long: -122.34080801},
  {lat: 47.52078359, long: -122.35876888},
  {lat: 47.63108142, long: -122.3274716},
  {lat: 47.54351607, long: -122.3345859},
  {lat: 47.63631984, long: -122.32574221},
  {lat: 47.61769425, long: -122.3335196},
  {lat: 47.62902532, long: -122.33174325},
  {lat: 47.61570566, long: -122.33147541},
  {lat: 47.61504364, long: -122.33235497},
  {lat: 47.63088912, long: -122.32820777},
  {lat: 47.63782125, long: -122.3660894},
  {lat: 47.61226545, long: -122.28954314},
  {lat: 47.66203113, long: -122.37412195},
  {lat: 47.60943195, long: -122.33937818},
  {lat: 47.67058288, long: -122.31333693},
  {lat: 47.60401104, long: -122.33150676},
  {lat: 47.62296392, long: -122.3388542},
  {lat: 47.62384901, long: -122.35575951}
]

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
    request(`/`)
    // .then(projects => {
      // console.log(projects)
    // })
  }

  render() {
    let markers = coords.map((marker, i)=> <MyGreatPlace key={i.toString()} lat={marker.lat} lng={marker.long} text={i.toString()} />)
    return (
      <div style={{ height: '92vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={47.6062}
            lng={-122.3321}
            text={'SeattleSeattleSeattleSeattleSeattleSeattleSeattleSeattle'}
          /> */}
          {markers}
          <MyGreatPlace lat={47.955413} lng={-122.337844} text={'A'} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default MainMap;
