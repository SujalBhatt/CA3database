import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = { name, date, location };
      await axios.post('http://localhost:5000/events', newEvent);
      alert('Event registered successfully');
    } catch (error) {
      console.error('Error registering event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <button type="submit">Register Event</button>
    </form>
  );
};

export default EventForm;
