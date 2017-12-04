import React, { Component } from 'react';
import './App.css';
import './una-sass/aux.css';



class EventsBlock extends Component {
  render() {
    return (
        <div className="pageBlock events">
          <h1>Upcoming Events</h1>
          <div className="eventsList">
          {
            this.props.events.map((event) => {
                return (
                    <div className="event">
                    <h4>{event.title}</h4>
                    <p>{event.date} {event.time}</p>
                    </div>
                );
            })
          }
          </div>
          <a className="moreButton">See All Events</a>
        </div>
    );
  }
}

export default EventsBlock;
