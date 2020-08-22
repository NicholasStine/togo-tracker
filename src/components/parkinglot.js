// Module Imports
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { layoutGenerator } from 'react-break';

// Component Imports
import ParkingSpace from './parkingspace';

// Layout Parameters for responsive layout changes at breakpoints
const layout = layoutGenerator({
    mobile: 0,
    desktop: 800
  });
const OnMobile = layout.is('mobile');
const OnDesktop = layout.is('desktop');

// Component Class
export default class GridComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

<div>
<OnMobile>
    <Container fluid>
        <Row>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace></ParkingSpace>
            </Col>
        </Row>
    </Container>
</OnMobile>
<OnDesktop>
<Container fluid>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col>
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col>
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col>
            <ParkingSpace></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col>  
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col> </Col>
        <Col> </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col>  
            <ParkingSpace></ParkingSpace>
        </Col>
        <Col> </Col>
        <Col> </Col>
    </Row>
</Container>
</OnDesktop>
</div>

        )
    }
}