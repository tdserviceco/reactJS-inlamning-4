import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  useLocation
} from "react-router-dom";
import DisplayTicket from '../components/displayTicket'
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

    <section className="ticket-section">
      <div className="ticket-container">
        <h1 className="confirmation">Thanks for the order</h1>
        <DisplayTicket event={event} />
      </div>
    </section>
  );
}

export default Tickets;