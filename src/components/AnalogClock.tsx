import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours * 30 + minutes / 2) % 360;
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  return (
    <div className="analog-clock">
      <div className="hand hour-hand" style={{ transform: `translateX(-50%) translateY(-100%) rotate(${hourRotation}deg)` }}></div>
      <div className="hand minute-hand" style={{ transform: `translateX(-50%) translateY(-100%) rotate(${minuteRotation}deg)` }}></div>
      <div className="hand second-hand" style={{ transform: `translateY(-100%) rotate(${secondRotation}deg)` }}></div>
    </div>
  );
};

export default AnalogClock;
