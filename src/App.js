import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''

    }
  }

  changeDeadLine() {

    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <h3 className="App-title">Countdown to {this.state.deadline}</h3>
        <div className="Clock-days">14 days</div>
        <div className="Clock-hours">30 hours</div>
        <div className="Clock-minutes">15 minutes</div>
        <div className="Clock-seconds">20 seconds</div>

        <div className="App-input">
          <input className="App-input-style" placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}/>
          <br/>
          <button onClick={() => this.changeDeadLine()}>Submint</button>
        </div>

      </div>
    );
  }
}

export default App;
