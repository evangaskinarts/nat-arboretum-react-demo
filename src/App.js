import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './una-sass/aux.css';
import Header from './Header';
import Footer from './Footer';
import HomeHero from './HomeHero';
import TimeBlock from './TimeBlock';
import AboutBlock from './AboutBlock';
import GalleryBlock from './GalleryBlock';
import EventsBlock from './EventsBlock';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="orange"></div>
        <div className="purpSlate"></div>
        <Header links={this.props.links}/>
        <HomeHero />
        <section className="firstSec">
        <TimeBlock />
        </section>
        <section className="content-block-section">
        <AboutBlock />
        <GalleryBlock photos={this.props.photos}/>
        <EventsBlock events={this.props.events}/>
        </section>
        <section class="footerSec">
        <Footer links={this.props.links}/>
        </section>
      </div>
    );
  }
}

export default App;
