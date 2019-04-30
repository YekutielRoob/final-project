import React, { Component } from 'react';
import './App.css';
import Navbar from "./component/navbar/navbar.js"
import Searchbar from './component/navbar/searchbar';
import Sidebar from './component/navbar/Sidebar';
import PostPage from './PostPage';

import Counter from './component/Counter';






class App extends Component {
  render() {
    return (
      <div className="App">
       

       
         <Navbar />   
         <Searchbar/>
         <Sidebar/>
         <PostPage />
     
      </div>
    );
  }
}

export default App;