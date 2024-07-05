import React, { Component } from 'react';
import './CountdownTimer.css'; // Import the CSS file
import Logo from '../assets/logo.png'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    //Initialize the state to manage timer and its running status
    this.state = {
      seconds: 0, //tracks the current timer value
      isRunning: false, // Indicates whether the timer is currently running
      resetClicked: false,
    };

    // Variable to hold the interval ID for the timer
    this.intervalId = null;
  }

  // Function to start the timer
  startTimer = () => {
    if (!this.state.isRunning) {
        // Start an interval that increments the timer every second
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1,
        }));
      }, 1000);
      // Update state to indicate timer is now running
      this.setState({ isRunning: true, resetClicked: false});
    }
  };

  // Function to stop the timer
  stopTimer = () => {
    if (this.state.isRunning) {
        //Clear the interval to stop the timer
      clearInterval(this.intervalId);
      this.setState({ isRunning: false, resetClicked: true });
    }
  };

  //Function to reset the timer
  resetTimer = () => {
    clearInterval(this.intervalId);
    this.setState({seconds: 0, isRunning: false, resetClicked: false});
  }

  render() {
    const { seconds, isRunning, resetClicked } = this.state;
    return (
      <div className="timer-container">
        <div className="timer-display">
            <img src={Logo} alt="logo-image" id='logo'/><br />
            {seconds}s
        </div>
        <button onClick={this.startTimer} disabled={isRunning} className= 'start-button'>
          Start Timer
        </button>
        <button onClick={this.stopTimer} disabled={!isRunning} className= 'stop-button'>
          Stop Timer
        </button>
        <button onClick={this.resetTimer} className= 'reset-button' disabled={!resetClicked} >
          Reset Timer
        </button>
      
      </div>
    );
  }
}

export default CountdownTimer;
