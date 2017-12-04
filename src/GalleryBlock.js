import React, { Component } from 'react';
import './App.css';
import './una-sass/aux.css';



class GalleryBlock extends Component {
  render() {
    return (
        <div className="pageBlock photos">
          <h1>Photo Gallery</h1>
          <div className="photosList">
          {
            this.props.photos.map((photo) => {
                return (
                    <div className="photo" style={{backgroundImage: `url(${photo})`}}></div>
                );
            })
          }
          </div>
          <a className="moreButton">See Full Gallery</a>
        </div>
    );
  }
}

export default GalleryBlock;
