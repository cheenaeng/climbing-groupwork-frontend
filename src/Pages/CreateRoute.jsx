import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BACKEND_URL = 'http://localhost:3004';
axios.defaults.withCredentials = true;

function CreateRoute(tripId, setRouteList) {
  const [tempRouteName, setRouteName] = useState('');
  const [tempDifficulty, setDifficulty] = useState(1);
  const handleRouteNameChange = (e) => {
    setRouteName(e.target.value);
  };

  const tripDatabaseId = Number(tripId) + 1;

  const recordRoute = () => {
    const routeData = {
      routeName: tempRouteName,
      difficulty: tempDifficulty,
      tripId: tripDatabaseId,
    };
    axios.post(`${BACKEND_URL}/createRoute`, routeData)
      .then((response) => {
        console.log(response.data);
        setRouteList((prev) => [...prev, response.data.newRoute]);
      });
    setRouteName('');
    setDifficulty(1);
  };

  // eslint-disable-next-line max-len
  const difficulties = [1, 2, 3, 4, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, '5.10', 5.11, 5.12, 5.13, 5.14, 5.15];
  const difficultiesOptions = difficulties.map((x) => (<option value={x} key={x}>{x}</option>));

  return (

    <>
      <TextField id="outlined-basic" label="Choose Route Name" variant="outlined" type="text" name="tripName" onChange={handleRouteNameChange} value={tempRouteName} />
      <br />
      <div>
        Difficulty:
        <select onChange={(e) => setDifficulty(e.target.value)} value={tempDifficulty}>
          {difficultiesOptions}
        </select>
      </div>
      <div>
        <Button variant="contained" type="submit" className="button-submit" size="small" onClick={recordRoute}>Enter</Button>
      </div>

    </>
  );
}

export default CreateRoute;
