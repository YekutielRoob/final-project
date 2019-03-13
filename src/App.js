import React, { Component } from 'react';
import './App.css';
import Navbar from "./navbar"

import ReactDOM from 'react-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
       
         <Navbar />
        
      </div>
    );
  }
}

export default App;