import React, { Component } from 'react';
import './App.css';
import './una-sass/aux.css';



class TimeBlock extends Component {
  render() {
    return (
        <div className="pageBlock times">
          <h1>The Arboretum is <span className="ifOpen">open</span> today 8am to 5pm</h1>
          <a className="moreButton">Full Schedule Info</a>
        </div>
    );
  }
}

export default TimeBlock;
