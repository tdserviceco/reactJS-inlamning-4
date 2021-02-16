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
  return (
    <section className="ticket-layout">
      <div class="ticket-container">
        <h1 className="confirmation">Thanks for the order</h1>
        <div class="ticket-content">
          <div className="what">
            <span>what</span>
            <h4>{event.title}</h4>
          </div>
          <div className="where">
            <span>where</span>
            <h4>{event.title}</h4>
          </div>
          <div className="time-and-date">
            <div class="date">
              {event.date}
            </div>
            <div className="from">
              {event.from}
            </div>
            <div className="to">
              {event.to}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tickets;