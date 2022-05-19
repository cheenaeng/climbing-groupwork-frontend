import React, { useContext } from 'react';
import { TripContext } from '../tripsActions.jsx';

function TripRoutes() {
  const { states } = useContext(TripContext);
  console.log(states.routes[0], 'routes');
  return (
    <>
      <span>Choose a route: </span>
      <select name="routes" id="routes">
        {states.routes[0].map((route) => (
          <option value={route.id}>
            {route.name}
          </option>

        ))}
      </select>
    </>
  );
}

export default TripRoutes;
