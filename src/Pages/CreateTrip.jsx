import React, { useState } from 'react';
import axios from 'axios';

function CreateTrip() {
  const [tempTripName, setTripName] = useState('');
  const handleTripNameChange = (e) => {
    setTripName(e.target.value);
  };

  const recordTrip = () => {
    axios.post('/createTrip').then((response) => {
      console.log(response.data);
    });
    setTripName('');
  };
  return (
    <>
      <h1> Create a trip </h1>
      <span> Trip Name: </span>
      <input type="text" placeholder="Key in trip name" id="tripName" name="tripName" onChange={handleTripNameChange} value={tempTripName} />
      <button type="button" onClick={recordTrip}> Enter</button>
    </>

  );
}

export default CreateTrip;
