import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TripContext } from '../tripsActions.jsx';

// const BACKEND_URL = 'http://localhost:3004';
axios.defaults.withCredentials = true;

function Trip() {
  const { tripId } = useParams();
  const { states } = useContext(TripContext);

  console.log(states);
  const { id, name } = states.trips[0][tripId];

  return (
    <h1>
      Viewing Trip no.
      {' '}
      {id}
      {' '}
      for:
      {' '}
      {name}
    </h1>
  );
}

export default Trip;
