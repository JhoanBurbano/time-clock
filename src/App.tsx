import React from 'react';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Time Clock</h1>
      <div className="clock-container">
        <AnalogClock />
        <DigitalClock />
      </div>
    </div>
  );
};

export default App;
