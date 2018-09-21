import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DataSideBarCard from './DataSideBarCard';

class MapDataSideBar extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      projects: []
    }
  }
  render() {
    let cards= [];
    this.props.mapMarkers ? cards = this.props.mapMarkers.map((marker, i)=> <DataSideBarCard key={i.toString()} markers={marker}/>) : null;
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
