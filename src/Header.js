import React, { Component } from 'react';

import unaLogo from './images/una-logo.png';
import magGlass from './images/search.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';
import menuBurger from './images/menuBurger.svg';




class Header extends Component {

    render() {
      return (
        <div id="header">
            <div className="hLogo" style={{backgroundImage: `url(${unaLogo})`}}></div>
            <div id="hLinks">
            <div className="menuBurger" style={{backgroundImage: `url(${menuBurger})`}}></div>
            {
                this.props.links.map((link) => {
                    return (
                        <div class="linkBox">
                            <a className="hlink" href={link.url}>{link.name}</a>
                            <div className="subLinks">
                            {
                                link.subLinks.map((subLink) => {
                                    return (
                                        <a className="sublink" href={subLink.slURL}>{subLink.name}</a>
                                    )
                                })
                            }
                            </div>
                        </div>

                    );
                })
            }
            </div>
            <div id="hSearch">
                <div className="search-icon" style={{backgroundImage: `url(${magGlass})`}}></div>
                <input type="text" placeholder="Search" />
            </div>
            <div id="social">
                <img className="socialIcon" src={facebook}/>
                <img className="socialIcon" src={twitter}/>
                <img className="socialIcon" src={instagram}/>
            </div>
        </div>
      );
    }
  }
  
  export default Header;