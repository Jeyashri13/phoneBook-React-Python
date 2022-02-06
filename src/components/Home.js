import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";

export default class Home extends Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Container>
                        <h1>View Contact</h1>
                        <br></br>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>

                        </Table>
                    </Container>
                </div>
 
            </div>
        );
    }
}