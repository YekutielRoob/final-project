import React, { Component } from 'react';
import logo from './Facebook.svg';
import icon from './intro-icon.jpg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        
        
      
          <img src={logo} className="App-logo" alt="logo" />
          
         
         
          <div className="intro">
          <p><img src={icon}></img>Intro</p>
          <h4>Hometown: Tel-Aviv</h4>
          <h5>Current city: Ramat-Gan</h5>
          <h6>Relationship status: Married</h6>
          </div> 
          
</div>          


    
          
    );
  }
}

export default App;
