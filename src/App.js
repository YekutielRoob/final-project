import React, { Component } from 'react';
import './App.css';
import Navbar from "./component/navbar/navbar.js"
import Searchbar from './component/navbar/searchbar';
import sidebar from './component/navbar/Sidebar';
import Sidebar from './component/navbar/Sidebar';



class App extends Component {
  render() {
    return (
      <div className="App">
       
         <Navbar />
         <Searchbar/>
        <Sidebar/>
         
      </div>
    );
  }
}

export default App;