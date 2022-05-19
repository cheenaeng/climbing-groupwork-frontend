import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import AllTripsDisplay from './Pages/AllTripsDisplay.jsx';
import CreateTrip from './Pages/CreateTrip.jsx';
import { TripProvider } from './tripsActions.jsx';

import Trip from './Pages/Trip.jsx';

function App() {
  return (
    <TripProvider>
      <Container maxWidth="sm">
        <Router>
          <Breadcrumbs aria-label="breadcrumb" className="links" m={2} alignItems="center" display="flex" justifyContent="center">
            <Link to="/"> Home</Link>
            <Link to="/createTrip"> Create Trip</Link>
          </Breadcrumbs>
          <Routes>
            <Route path="/" element={<AllTripsDisplay />}> </Route>
            <Route path="/createTrip" element={<CreateTrip />}> </Route>
            <Route path="/trips/:tripId" element={<Trip />}> </Route>
          </Routes>
        </Router>
      </Container>
    </TripProvider>
  );
}

export default App;
