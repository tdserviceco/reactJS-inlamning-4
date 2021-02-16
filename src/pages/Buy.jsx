import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Link,
  useLocation
} from "react-router-dom";
function Buy(props) {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const getEvent = async () => {
    return await Axios.get(`http://localhost:8080/get/event/${query.get('ticket-id')}`);
  }

  const [event, updateEvent] = useState([{}])

  useEffect(() => {
    getEvent().then(res => {
      updateEvent(res.data)
    });
  }, [])

  useEffect(() => {
    document.title = `Buying ticket to: ${event.title}`
  }, [getEvent()])

  return (
    <section className="buy-section">
      <div className="buy-container">
        <h3 className="score-tickets">You are about to score
          <span>some tickets to</span>
        </h3>
        <h2 className="ticket-title">
          {event.title}
        </h2>
        <h4 className="date-and-time">
          <span className="date">{event.date}</span>
          <span className="time">{event.time}</span>
        </h4>
        <h4 className="location">@ {event.location}</h4>
        <h3 className="price">{event.price}</h3>
        <Link to={`tickets?id=${query.get('ticket-id')}`} className="btn link-btn">Order</Link>
      </div>

    </section>
  );
}

export default Buy;