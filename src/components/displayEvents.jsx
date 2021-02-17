import React from 'react';
import { Link } from 'react-router-dom';
function displayEvents(props) {
  // To shorten the date text I need to make it a new string
  let date = new String(props.value.date);
  return (
    <Link className={`event-${props.value.id}`} to={`/buy?ticket-id=${props.value.id}`}>
      <div className="event-container">
        <aside className="event-date-box">
          <h3 className="event-date">{date.length >= 3 ? date.substr(0, 6) : ''}</h3>
        </aside>
        <div className="event-info-box">
          <h2 className="event-title">{props.value.title}</h2>
          <h4 className="event-location">{props.value.location}</h4>
          <div className="event-time-and-price-box">
            <h3 className="event-time">{props.value.from} - {props.value.to}</h3>
            <h3 className="event-price">{props.value.price}sek</h3>
          </div>
        </div>
      </div>
    </Link >
  );
}

export default displayEvents;