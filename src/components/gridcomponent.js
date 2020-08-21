import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


import ParkingSpace from './parkingspace';

export default class GridComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        
          return (
            <Container>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> 
                        <ParkingSpace></ParkingSpace>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <ParkingSpace></ParkingSpace>
                    </Col>
                    <Col>
                        <ParkingSpace></ParkingSpace>
                    </Col>
                    <Col>
                        <ParkingSpace></ParkingSpace>
                    </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                </Row>
                <Row>
                    <Col>  
                        <ParkingSpace></ParkingSpace>
                    </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                </Row>
                <Row>
                    <Col>  
                        <ParkingSpace></ParkingSpace>
                    </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                    <Col> </Col>
                </Row>
            </Container>
          )
    }
}