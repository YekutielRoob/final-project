import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


 class Navbar extends Component {
  render() {
    return (

     <div className="header">
       <a href="https://www.facebook.com/?ref=logo"className="Logo">
       
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png">
        </img>      
      </a>  
      <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Search-icon.png" className="searchbutton"></img>
      <div class="nav1">
        <ul>
          <li className="Button">
          <Button href="http://www.facebook.com" bsStyle="primary">Home</Button>
          </li>
          <li>
          <Button href="#" bsStyle="primary">Initial</Button>
          </li>
          <li>
          <Button href="" bsStyle="primary">Create</Button>
          </li>
        </ul>
      
    
        


  
  
 


  
  


 

      </div> 
      </div>
      

    



    );
  }
}

export default Navbar

