import React from 'react';

const EventItem = ({ event }) => {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventItem;
