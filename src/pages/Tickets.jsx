import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  useLocation
} from "react-router-dom";
function Tickets(props) {

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const getEvent = async () => {
    return await Axios.get(`http://localhost:8080/get/event/${query.get('id')}`)
  }

  const [event, updateEvent] = useState([{}]);


  useEffect(() => {
    getEvent().then(res => {
      updateEvent(res.data)
    });
  }, [])

  useEffect(() => {
    document.title = `Thanks for buying ${event.title}`
  }, [getEvent()])

  const newDate = () => {
    let date;
    date = new String(event.date)
    return date.length >= 3 ? date.substr(0, 6) : ''
  }

  return (
    
    <section className="ticket-section">
      <div className="ticket-container">
        <h1 className="confirmation">Thanks for the order</h1>
        <div className="ticket-content">
          <div className="what">
            <span>what</span>
            <h4>{event.title}</h4>
          </div>
          <div className="where">
            <span>where</span>
            <h4>{event.location}</h4>
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
              <h5>{event.from}</h5>
            </div>
            <div className="to">
              <span>to</span>
              <h5>
                {event.to}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tickets;