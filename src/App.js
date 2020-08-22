import React from 'react';
import './App.css';

import ParkingSpace from "./components/parkingspace";
import ParkingLot from './components/parkinglot';

function App() {
  return ( 
    <div>
      <h1> Olive Garden Togo - Tracker </h1>
      <ParkingLot />
    </div>
  );
}

export default App;
