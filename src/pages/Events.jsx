import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import DisplayEvents from '../components/displayEvents';

function Events(props) {

  const
    [events, updateEvents] = useState([{}]),
    [displayError, updateError] = useState(''),
    [errorIsTrue, updateErrorIsTrue] = useState(true),
    [loading, updateLoading] = useState(true);

  const getEvents = async () => {
    return await Axios.get('http://localhost:8080/get/events');
  }

  useEffect(() => {
    document.title = 'Events'
    getEvents().then(res => {
      updateErrorIsTrue(false)
      updateEvents(res.data)
      updateLoading(false);
    }).catch(error => {
      updateError('Please turn on the API server')
    })
  }, [])

  return (
    <>
      <section className="events-section">
        {errorIsTrue && loading &&
          <>
            <h1 className="error">{displayError}</h1>
            <div className="loader"></div>
          </>
        }
        {!errorIsTrue && loading &&
          <div className="loader"></div>
        }
        {!errorIsTrue && !loading &&
          <>
            <h2 className="title">events</h2>
            {events.map((index, key) => <DisplayEvents key={key} value={index} />)}
          </>
        }
      </section>
    </>
  );
}

export default Events;