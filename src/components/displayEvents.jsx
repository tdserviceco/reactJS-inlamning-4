import React from 'react';
import { Link } from 'react-router-dom';
function displayEvents(props) {
  return (
    <Link className={`event-${props.value.id}`} to={`/buy?ticket-id=${props.value.id}`}>
      <div className="event-container">
        <aside className="event-date-box">
          <h3 className="event-date">{props.value.date}</h3>
        </aside>
        <div className="event-info-box">
          <h2 className="event-title">{props.value.title}</h2>
          <h4 className="event-location">{props.value.location}</h4>
          <div className="event-time-and-price-box">
            <h3 className="event-time">{props.value.time}</h3>
            <h3 className="event-price">{props.value.price}</h3>
          </div>
        </div>
      </div>
    </Link >
  );
}

export default displayEvents;