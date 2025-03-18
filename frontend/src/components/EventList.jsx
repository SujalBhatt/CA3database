import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventItem from './EventItem';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      {events.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
