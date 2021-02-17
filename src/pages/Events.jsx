import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import DisplayEvents from '../components/displayEvents';

function Events(props) {

  const [events, updateEvents] = useState([{}]);
  const getEvents = async () => {
    return await Axios.get('http://localhost:8080/get/events');
  }

  useEffect(() => {
    document.title = 'Events'
    getEvents().then(res => {
      updateEvents(res.data)
    })
  }, [])

  return (
    <>
      <section className="events-section">
        <h2 className="title">events</h2>
        {
          events.map((index, key) => <DisplayEvents key={key} value={index} />)
        }
      </section>
    </>
  );
}

export default Events;