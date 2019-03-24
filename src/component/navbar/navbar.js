import React, { Component } from 'react';
import { Logo } from './logo';

 class Navbar extends Component {
  render() {
    return (
     <div>
     <h1 className="header">
       <a href="https://www.facebook.com/?ref=logo"className="Logo">
       
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png">
        </img>      
      </a>  
      <img src="https://img.icons8.com/ios-glyphs/30/000000/search.png" className="searchbutton"></img>
      </h1>       
       </div>
    );
  }
}

export default Navbar

