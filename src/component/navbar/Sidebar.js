import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'


class Sidebar extends Component {
  render() {
    return (
      <div className="listgroup">

     <div class="sidebar">
     <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home" bsStyle="primary"><i class="fa fa-fw fa-home"></i>New Feeds</Nav.Link>
  <Nav.Link eventKey="link-1"bsStyle="primary"><i class="fab fa-facebook-messenger"></i>Messenger</Nav.Link>
  <Nav.Link eventKey="link-2"bsStyle="primary"><i class="far fa-clock"></i>Watch</Nav.Link>
  <Nav.Link eventKey="link-2"bsStyle="primary"><i class="fas fa-globe-europe"></i>MarketPlace</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    
  </Nav.Link>
</Nav>;
</div>

      <ListGroup> 
      <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>
  <ListGroup.Item action variant="info">
    Light
  </ListGroup.Item>

      </ListGroup>

      </div>
    );
    }
}

export default Sidebar;

