import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Browser from './components/Browser';
import NameCard from './components/NameCard';
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {
    const tag = ['可爱',"活泼"]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <Browser/>
        <NameCard name="冯子武" phone="15889833384" age="28" job="软件工程师" isMan="true" tag={tag}/>
      </div>
       
    );
  }
}

export default App;

