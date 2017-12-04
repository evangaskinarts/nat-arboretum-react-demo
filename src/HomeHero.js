import React, { Component } from 'react';
import './una-sass/aux.css';
import heroImg from './images/bgShaded.jpg';
import TimeBlock from './TimeBlock';



class HomeHero extends Component {
  render() {
    return (
      <div>
      <section className="leadHero">
        <h1 className="titleH">The United <br /> States National Arboretum</h1>
        <div className="leadImg" style={{backgroundImage: `url(${this.props.photos[4]})`}}></div>
      </section>
      
        <section className="homeHero">
          <TimeBlock />
          <div className="heroImg" style={{backgroundImage: `url(${heroImg})`}}>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeHero;
