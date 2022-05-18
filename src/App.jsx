import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import AllTripsDisplay from './Pages/AllTripsDisplay.jsx';
import CreateTrip from './Pages/CreateTrip.jsx';
import { TripProvider } from './tripsActions.js';

function App() {
  return (
    <TripProvider>
      <Router>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/createTrip"> Create Trip</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AllTripsDisplay />}> </Route>
          <Route path="/createTrip" element={<CreateTrip />}> </Route>
        </Routes>
      </Router>
    </TripProvider>
  );
}

export default App;
