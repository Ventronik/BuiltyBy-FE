import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { designReviewMarkers
        } from '../actions'
import MyGreatPlace from './Marker.js';
<<<<<<< HEAD
import config from '../config';
=======
>>>>>>> c57d89c6336f32676379c45ace5840888298f61d

class Map extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      center: [47.60, -122.33],
      zoom: 11
    }
  }

  componentDidMount(){
    this.props.designReviewMarkers()
  }

  componentDidUpdate(){
    let centerData = (this.props.mapMarkers[(this.props.activePermit - 1)]);
    let center =[centerData.latitude, centerData.longitude]
    if(this.state.center[0] !== center[0] && this.state.center[1] !== center[1] ) this.setState({center: center})
  }

  render() {
    let markers = this.props.mapMarkers ?
      this.props.mapMarkers.map((marker, i)=>
          <MyGreatPlace
            key={i.toString()}
            lat={marker.latitude}
            lng={marker.longitude}
            text={i.toString()}
            activePermit={this.props.activePermit}
            setSelectedPermit={this.props.setSelectedPermit}/>)
          : null
    return (
      <div className="col-8" style={{ height: 'calc(100vh - 138px)', width: '100%' }}>
        <GoogleMapReact
<<<<<<< HEAD
          bootstrapURLKeys={{ key: config.API_KEY }}
=======
          bootstrapURLKeys={{ key: 'AIzaSyC7V5C9L6LbW9TKDKYSuYXKuXYYaORJrD0' }}
>>>>>>> c57d89c6336f32676379c45ace5840888298f61d
          center={this.state.center}
          zoom={this.state.zoom}
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
