import React, { useState, useRef } from 'react';
import './CountdownTimer.css'; // Import the CSS file
import Logo from '../assets/logo.png'

const Timer = () => {
  const [seconds, setSeconds] = useState(0); // State to track the timer value
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running
  const intervalRef = useRef(null); //Ref to hold interval id

  // Function to start the timer
  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };
  
  return (
    <div className="timer-container">
      <div className="timer-display">
        <img src={Logo} alt="logo-image" id='logo'/><br />
        {seconds}s
      </div>
      <button onClick={startTimer}
        className= 'start-button'
        disabled={isRunning}
      > Start Timer</button>
      <button
        onClick={stopTimer}
        className= 'stop-button'
        disabled={!isRunning}
      > Stop Timer</button>
    </div>
  );
};

export default Timer;
