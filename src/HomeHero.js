import React, { Component } from 'react';
import './una-sass/aux.css';
import heroImg from './images/bgShaded.jpg';


class HomeHero extends Component {
  render() {
    return (
      <div>
      <img className="leadImg" src="http://valholl-prd.wowair.com/mediaold/us-magazine/1680px/Washington-National-Arboretum-Capitol-Columns-Thingstock.jpg"/>
        <section className="homeHero">
        <h1>The United <br /> States National Arboretum</h1>
          <div className="heroImg" style={{backgroundImage: `url(${heroImg})`}}>
            
          </div>
        </section>
      </div>
    );
  }
}

export default HomeHero;
