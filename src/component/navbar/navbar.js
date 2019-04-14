import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';



 class Navbar extends Component {
  render() {
    return (

     <div className="header">
       <a href="https://www.facebook.com/?ref=logo"className="Logo">
       <div class="container"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png">
        </img>      
      </a>  
      <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png" className="searchbutton"></img>
      <div class="nav1">
      
        <ul>
          <li className="Button">
          <Button href="http://www.facebook.com" bsStyle="primary" >John Doe</Button>
          </li>
          <li>
          <Button href="#" bsStyle="primary">Home</Button>
          </li>
          <li>
          <Button href="" bsStyle="primary">Create</Button>
          </li>
        </ul>
        <div class="hero-image">
        <img src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="avatar" class="avatar"/>
      <div class="hero-text">
      <h1></h1>
    <p>It's simple until you make it complicated.</p>
    <div className="Buttonshero">
    <Button href="#" bsStyle="primary">About</Button>
    <Button href="#" bsStyle="primary">Friends</Button>
    <Button href="#" bsStyle="primary">Photos</Button>
    <Button href="#" bsStyle="primary">More</Button>
    </div>
    </div>

      </div>

      </div> 
      </div>
  
    );
  }


  
}

export default Navbar

