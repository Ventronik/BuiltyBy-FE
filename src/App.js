import Reactotron from 'reactotron-react-js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import TopNav from './components/TopNav';
import MainMap from './components/MainMap'

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
