import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HeadLinks, Events, Photos } from './Data';


ReactDOM.render(<App links={HeadLinks} events={Events} photos={Photos}/>, document.getElementById('root'));
registerServiceWorker();



window.onscroll = function() {



if (window.pageYOffset > 50) {
    document.querySelector('#header').classList.add('header-scrolled');
} else {
    document.querySelector('#header').classList.remove('header-scrolled');
};

}