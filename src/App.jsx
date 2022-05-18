import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AllTripsDisplay from './Pages/AllTripsDisplay.jsx';
import CreateTrip from './Pages/CreateTrip.jsx';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTripsDisplay />}> </Route>
        <Route path="/createTrip" element={<CreateTrip />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
