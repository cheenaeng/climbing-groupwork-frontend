import React, { useReducer } from 'react';

export const initialState = {
  trips: [],

};

const LOAD_TRIPS = 'LOAD_TRIPS';

export function tripsReducer(state, action) {
  switch (action.type) {
    case LOAD_TRIPS:
      console.log([state]);
      return { ...state, trips: [action.payload.trips] };
    default:
      return state;
  }
}

export function loadTripsAction(trips) {
  return {
    type: LOAD_TRIPS,
    payload: {
      trips,
    },
  };
}

export const TripContext = React.createContext(null);

const { Provider } = TripContext;

export function TripProvider({ children }) {
  // create the dispatch function in one place and put in into context
  // where it will be accessible to all of the children
  const [states, dispatch] = useReducer(tripsReducer, initialState);

  // surround the children elements with
  // the context provider we created above
  return <Provider value={{ states, dispatch }}>{children}</Provider>;
}
