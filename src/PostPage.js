import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import  Button from 'react-bootstrap/Button';

class PostPage extends Component {
 render() {
   return(
<div>

        <Modal.Dialog>   
            <a className="model">
            <Modal.Header>
                <Modal.Title>Create Post</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>what's on your mind?</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Save changes</Button>
                <Button variant="primary">Save changes</Button>
                <Button variant="primary">Save changes</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        >
        </a>
        </Modal.Dialog>; 
        </div>
    )
  }
};

export default PostPage