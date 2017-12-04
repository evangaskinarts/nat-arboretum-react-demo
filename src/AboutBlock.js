import React, { Component } from 'react';
import './App.css';
import './una-sass/aux.css';



class AboutBlock extends Component {
  render() {
    return (
        <div className="pageBlock about">
          <h1>About The Arboretum</h1>
          <p>The U.S. National Arboretum enhances the economic, environmental, and aesthetic value of ornamental and landscape plants through long-term, multi-disciplinary research, conservation of genetic resources, and interpretative gardens and exhibits.</p>
          <a className="moreButton">Learn More</a>
        </div>
    );
  }
}

export default AboutBlock;
