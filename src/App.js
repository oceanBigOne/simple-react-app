import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import CheckboxSwitch from "./components/form/checkboxSwitch/CheckboxSwitch";
import  "./scss/bootstrap.scss"

class App extends Component {

  clickTestOk(){
    fetch(process.env.REACT_APP_URL_API+"/election/create/?name=test")
        .then(function(response) {
         response.json().then(function(data) {  alert(JSON.stringify(data)) });
        })
  }

  clickTestNok(){
    fetch(process.env.REACT_APP_URL_API+"/election/create/")
        .then(function(response) {
          response.json().then(function(data) {  alert(JSON.stringify(data)) });
        })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CheckboxSwitch id="test"/>
          <button className="btn btn-success" onClick={this.clickTestOk}>BUTTON TEST WITH NAME</button>
          <button className="btn btn-danger mt-3" onClick={this.clickTestNok}>BUTTON TEST WITH NO NAME</button>
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
