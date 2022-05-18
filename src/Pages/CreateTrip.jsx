import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3004';
axios.defaults.withCredentials = true;

function CreateTrip() {
  const [tempTripName, setTripName] = useState('');
  const handleTripNameChange = (e) => {
    setTripName(e.target.value);
  };

  const recordTrip = () => {
    const tripData = {
      tripName: tempTripName,
    };
    axios.post(`${BACKEND_URL}/createTrip`, tripData).then((response) => {
      console.log(response.data);
    });
    setTripName('');
  };
  return (
    <>
      <h1> Create a trip </h1>
      <span> Trip Name: </span>
      <input type="text" placeholder="Key in trip name" id="tripName" name="tripName" onChange={handleTripNameChange} value={tempTripName} />
      <button type="submit" onClick={recordTrip}> Enter</button>
    </>

  );
}

export default CreateTrip;
