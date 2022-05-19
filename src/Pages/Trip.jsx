import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TripContext } from '../tripsActions.jsx';
import CreateRoute from './CreateRoute.jsx';

const BACKEND_URL = 'http://localhost:3004';
axios.defaults.withCredentials = true;

function Trip() {
  const { tripId } = useParams();
  const { states } = useContext(TripContext);

  const { id, name } = states.trips[0][tripId];

  const [routeList, setRouteList] = useState([]);

  useEffect(() => {
    const fetchRouteList = async () => {
      const tripRouteData = await axios.post(`${BACKEND_URL}/findRoutes`, { tripId: Number(tripId) + 1 });
      setRouteList(tripRouteData.data.tripRoutes.routes);
    };
    fetchRouteList();
  }, []);

  return (
    <>
      <h1>
        Viewing Trip no.
        {' '}
        {id}
        {' '}
        for:
        {' '}
        {name}
      </h1>
      {CreateRoute(tripId, setRouteList)}
      <ul>
        {routeList.map((x) => (
          <li key={x.id}>
            {x.name}
            {' '}
            (Difficulty:
            {' '}
            {x.difficulty}
            )
          </li>
        ))}
      </ul>

    </>

  );
}

export default Trip;
