import React, { Component } from 'react';
import logo from './jk-logo.svg';
import Clock from './clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

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
        <img src={logo} className="App-logo" alt="logo" />

        <h3 className="App-title">Countdown to {this.state.deadline}</h3>

        <div>
          <Clock
            deadline={this.state.deadline}
          />

        </div>

        <div className="App-input">
          <Form inline>
            <FormControl className="App-input-style" placeholder='New Date' onChange={event => this.setState({newDeadline: event.target.value})}/>
            <br/>
            <Button bsStyle='info' onClick={() => this.changeDeadLine()}>Submit</Button>
        </Form>
        </div>

      </div>
    );
  }
}

export default App;
