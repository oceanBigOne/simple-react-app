import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import CheckboxSwitch from "./components/form/checkboxSwitch/CheckboxSwitch";
import  "./scss/bootstrap.scss"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CheckboxSwitch id="test"/>
          <button className="btn btn-success">BUTTON</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
