import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import  Button from 'react-bootstrap/Button';

import Counter from './component/Counter';
import FileInput from './component/FileInput';



class PostPage extends Component {

  constructor() {
    super();

    this.newPostValue = '';
  }

  onSubmit(e) {
    e.preventDefault();
    fetch('/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.newPostValue,
      })
    });
  }

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
                <Form.Control as="textarea" rows="3" onChange={e => this.newPostValue = e.target.value}/>
                <Button type="submit" onClick={e => this.onSubmit(e)}>Submit</Button>
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">share</Button>
                <Counter />
            </Modal.Footer>
        >
        </a>
        </Modal.Dialog>; 
        </div>
    )
  }
};

export default PostPage