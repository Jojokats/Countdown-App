import React, { Component } from 'react';
import Clock from './clock';
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

        <div>
          <Clock
            deadline={this.state.deadline}
          />

        </div>

        <div className="App-input">
          <input className="App-input-style" placeholder='New Date' onChange={event => this.setState({newDeadline: event.target.value})}/>
          <br/>
          <button onClick={() => this.changeDeadLine()}>Submit</button>
        </div>

      </div>
    );
  }
}

export default App;
