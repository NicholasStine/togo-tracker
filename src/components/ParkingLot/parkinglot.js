// Module Imports
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { layoutGenerator } from 'react-break';

// Component Imports
import ParkingSpace from './parkingspace';
 
// Layout Parameters for responsive layout changes at breakpoints
const layout = layoutGenerator({
    mobile_vertical: 0,
    mobile_horizontal: 635,
    desktop: 800
  });
const OnMobileVertical = layout.is('mobile_vertical');
const OnMobileHorizontal = layout.is('mobile_horizontal');
const OnDesktop = layout.is('desktop');

// Component Class
export default class GridComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

<div>
<OnMobileVertical>
    <Container>
        <Row>
            <Col>
                <ParkingSpace spot='1'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='2'></ParkingSpace> 
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='3'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='4'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='5'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='6'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='7'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='8'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='9'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='10'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='11'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='12'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='13'></ParkingSpace>
            </Col>           
        </Row>
        <p style={{height: "1px"}}></p>
    </Container>
</OnMobileVertical>

<OnMobileHorizontal>
<Container fluid>
        <Row>
            <Col>
                <ParkingSpace spot='1'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='2'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='3'></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='4'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='5'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='6'></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='7'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='8'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='9'></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='10'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='11'></ParkingSpace>
            </Col>
            <Col>
                <ParkingSpace spot='12'></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
        <Row>
            <Col>
                <ParkingSpace spot='13'></ParkingSpace>
            </Col>
        </Row>
        <p style={{height: "1px"}}></p>
    </Container>
</OnMobileHorizontal>

<OnDesktop>
<Container fluid>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace spot='8'></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace spot='4'></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace spot='7'></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace spot='3'></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace spot='6'></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace spot='2'></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col> </Col>
        <Col> </Col>
        <Col> 
            <ParkingSpace spot='5'></ParkingSpace>
        </Col>
        <Col> 
            <ParkingSpace spot='1'></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col>
            <ParkingSpace spot='11'></ParkingSpace>
        </Col>
        <Col>
            <ParkingSpace spot='10'></ParkingSpace>
        </Col>
        <Col>
            <ParkingSpace spot='9'></ParkingSpace>
        </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col>  
            <ParkingSpace spot='12'></ParkingSpace>
        </Col>
        <Col> </Col>
        <Col> </Col>
    </Row>
    <p style={{height: "1px"}}></p>
    <Row>
        <Col>  
            <ParkingSpace spot='13'></ParkingSpace>
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