import React, { Component } from 'react';
import {
  Card, CardBody, Col, Row,
  Button, Container, Media
} from 'reactstrap';

export default class ParkingSpace extends Component {
    constructor(props){
        super(props)
    }

    
    render() {
        return(
            <Card style={{height: "80px", width: "200px"}}>
                <CardBody>
                    
                <Media>
                    <img width={30} height={30}/>
                    <Media body>
                        <Media heading style={{fontSize: "15px"}}>
                            Name gooz Here
                        </Media>
                    <Container fluid>
                        <Row style={{width: "120px"}}>
                            <Col>
                                <Button style={{height: "25px", width: "25px", fontSize: "11px"}}>H</Button>
                            </Col>
                            <Col>
                                <Button style={{height: "25px", width: "25px", fontSize: "11px"}}>G</Button>
                            </Col>
                        </Row>
                    </Container>
                    </Media>
                </Media>
                </CardBody>
                </Card>
        )
    }
}
