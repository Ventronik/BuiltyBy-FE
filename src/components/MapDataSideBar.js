import React from 'react';
import { connect } from 'react-redux';
import DataSideBarCard from './DataSideBarCard';

class MapDataSideBar extends React.Component{
  // constructor(props){
    // super(props)
    // this.state = {
  // }

  render() {
    let cards= this.props.mapMarkers ? this.props.mapMarkers.map((marker, i)=> {
      return <DataSideBarCard key={i.toString()} keyData={i+1} markers={marker} activePermit={this.props.activePermit} setSelectedPermit={this.props.setSelectedPermit}/>
    }) : null;
    return (
      <div className="col-4 scroll">
        {cards}
      </div>
    )
  }
}

const mapStateToProps = ( { mapMarkers } ) => {
  return { mapMarkers }
}

export default connect(mapStateToProps)(MapDataSideBar);
