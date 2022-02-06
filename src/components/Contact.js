import React, { Component } from "react";
import { Form,Container,Button } from "react-bootstrap";
export default class Contact extends Component {
    render() {
        return (
            <div>
               
                <div className="content">
            <Container>
            <h1>Add Contact</h1>
            <br></br>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Save
                </Button>
              </Form>
            </Container>
  
          </div>

            </div>
        );
    }
}