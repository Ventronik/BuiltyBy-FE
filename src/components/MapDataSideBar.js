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
    return (
      <div className="scroll">
        <DataSideBarCard />
        <DataSideBarCard />
        <DataSideBarCard />
        <DataSideBarCard />
      </div>
    )
  }
}

export default MapDataSideBar;
