import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="digital-clock">
      <div className="time">
        {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </div>
    </div>
  );
};

export default DigitalClock;
