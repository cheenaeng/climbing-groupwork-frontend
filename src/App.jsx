import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import AllTripsDisplay from './Pages/AllTripsDisplay.jsx';
import CreateTrip from './Pages/CreateTrip.jsx';

function App() {
  return (
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
  );
}

export default App;
