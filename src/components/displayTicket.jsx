import React from 'react';

function displayTicket(props) {
  const newDate = () => {
    let date;
    date = new String(props.event.date)
    return date.length >= 3 ? date.substr(0, 6) : ''
  }

  return (
    <div className="ticket-content">
      <div className="what">
        <span>what</span>
        <h4>{props.event.title}</h4>
      </div>
      <div className="where">
        <span>where</span>
        <h4>{props.event.location}</h4>
      </div>
      <div className="time-and-date">
        <div className="date">
          <span>when</span>
          <h5>
            {newDate()}
          </h5>
        </div>
        <div className="from">
          <span>from</span>
          <h5>{props.event.from}</h5>
        </div>
        <div className="to">
          <span>to</span>
          <h5>
            {props.event.to}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default displayTicket;