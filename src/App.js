import React from 'react';
import './App.css';

import ParkingSpace from "./components/ParkingLot/parkingspace";
import ParkingLot from './components/ParkingLot/parkinglot';

function App() {
  return ( 
    <div>
      <h1> Olive Garden Togo - Tracker </h1>
      <ParkingLot />
    </div>
  );
}

export default App;
