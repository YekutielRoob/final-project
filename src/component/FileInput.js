import React, { Component } from 'react';
import {fetchUsers, createUser, deleteUser} from "../UsersService";



class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${
          this.fileInput.current.files[0].name
        }`
      );
    }
  
    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  export default FileInput;
  