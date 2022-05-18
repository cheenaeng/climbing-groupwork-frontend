import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { loadTripsAction, TripContext } from '../tripsActions.js';

const BACKEND_URL = 'http://localhost:3004';
axios.defaults.withCredentials = true;

function AllTripsDisplay() {
  const [tripDisplay, setTrips] = useState([]);
  const { states, dispatch } = useContext(TripContext);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/trips`).then((result) => {
      console.log(result.data);
      setTrips(result.data.trips);
      dispatch(loadTripsAction(result.data.trips));
    })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {tripDisplay.map((trip, index) => (
        <div>
          <span>
            {index + 1}
            {' '}
          </span>
          <span>
            {trip.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default AllTripsDisplay;
