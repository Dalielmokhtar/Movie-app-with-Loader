import React from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap'





class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
  
      this.state = {
        show: false,
        image:' ',
        title:'',
        description:'',
        rating:''
      };
    }
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })

    }

    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Adding Film
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adding Film</Modal.Title>
            </Modal.Header>
            <input type='text' name='image' placeholder='image' onChange={this.handleChange}/>
            <input type='text' name='title' placeholder='title' onChange={this.handleChange} />
            <input type='text' name='description' placeholder='Description' onChange={this.handleChange}/>
            <input type='text' name='rating' placeholder='rating' onChange={this.handleChange}/>
            {/* <Modal.Body>Tape your film</Modal.Body> */}
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>{this.handleClose();this.props.addMovie(this.state)}}>
                Add Film
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  
  export default Example;