import React, { Component } from 'react';

import unaLogo from './images/una-logo.png';
import magGlass from './images/search.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';




class Footer extends Component {
    render() {
      return (
        <div id="footer">
            <div className="hLogo" style={{backgroundImage: `url(${unaLogo})`}}></div>
            <div id="fLinks">
            {
                this.props.links.map((link) => {
                    return (
                        <div class="linkBox">
                            <a className="hlink" href={link.url}>{link.name}</a>
                            
                        </div>

                    );
                })
            }
            </div>
            
            <p>United States National Arboretum <br/> 
            3501 New York Avenue, NE; Washington, D. C. 20002-1958<br/> 
            Tel: 202-245-2726 - Fax: 202-245-4575</p>

            <p>The U.S. National Arboretum is a division of the
            Northeast Area of the Agricultural Research Service of the U.S. Department of Agriculture
            </p>
            
        </div>
      );
    }
  }
  
  export default Footer;