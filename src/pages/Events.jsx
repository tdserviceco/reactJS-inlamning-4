import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import DisplayEvents from '../components/displayEvents';

function Events(props) {

  const
    [events, updateEvents] = useState([{}]),
    [loading, updateLoading] = useState(true);
  const getEvents = async () => {
    return await Axios.get('http://localhost:8080/get/events');
  }

  useEffect(() => {
    document.title = 'Events'
    getEvents().then(res => {
      updateEvents(res.data)
      updateLoading(false)
    })
  }, [])

  return (
    <>
      {loading &&
        <h1>LOADING...</h1>
      }
      <div className="events">
        <h2 className="title">events</h2>
        {
          events.map((index, key) => <DisplayEvents key={key} value={index} />)
        }
      </div>
    </>
  );
}

export default Events;