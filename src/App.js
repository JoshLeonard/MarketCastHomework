import React,  { useState } from "react";

import logo from './logo.svg';
import './App.css';

import Interval from './components/intervalVisibility';

function App() {
  const [interval, setNewInterval] = useState(1000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Interval intervalMS={interval} >
          <p>
            This is inside an interval component
          </p>
        </Interval>
        <h2>Adjust the interval below</h2>
        <input value={interval} onChange={(e) => {
          setNewInterval(e.target.value);
          console.log(e.target);
        }}/>
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

export default App;
