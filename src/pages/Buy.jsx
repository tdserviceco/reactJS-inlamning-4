import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  useHistory,
  useParams
} from "react-router-dom";
function Buy(props) {
  let { id } = useParams();
  let history = useHistory();
  const getEvent = async () => {
    return await Axios.get(`http://localhost:8080/get/event/${id}`);
  }

  const [event, updateEvent] = useState([{}])
  
  useEffect(() => {
    getEvent().then(res => {
      console.log(res)
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
        <h2 class="ticket-title">
          {event.title}
        </h2>
        <h4 className="date-and-time">
          <span className="date">{event.date}</span>
          <span className="time">{event.time}</span>
        </h4>
        <h4 className="location">@ {event.location}</h4>
        <h3 className="price">{event.price}</h3>
        <button type="button" onClick={() => history.push(`/tickets/${event.id}`)}>Order</button>
      </div>

    </section>
  );
}

export default Buy;