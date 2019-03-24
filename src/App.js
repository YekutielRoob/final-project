import React, { Component } from 'react';
import './App.css';
import Navbar from "./component/navbar/navbar.js"
import Searchbar from './component/navbar/searchbar';
import  Logo from './component/navbar/logo';



class App extends Component {
  render() {
    return (
      <div className="App">
       
         <Navbar />
         <Searchbar/>
      </div>
    );
  }
}

export default App;