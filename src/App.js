// import Reactotron from 'reactotron-react-js';
import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import MainMap from './components/MainMap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TopNav />
        <MainMap />
      </div>
    );
  }
}

export default App;
