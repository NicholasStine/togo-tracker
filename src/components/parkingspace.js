import React, { Component } from 'react';
import {
  Card, CardTitle, CardBody, Col, Row,
  Button, Container, Media, Table
} from 'reactstrap';

export default class ParkingSpace extends Component {
    constructor(props){
        super(props)

        this.onHereClick = this.onHereClick.bind(this);
        this.onGoneClick = this.onGoneClick.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.RenderCard = this.RenderCard.bind(this);
        

        this.state = {
            name: '',
            spot: '',
            here: false,
            color: "#e6f7ff"
        }
    }

    onHereClick(){
        this.setState({
            here: true
        })
        console.log("Here Clicked")
        console.log(this.state.name)
    }

    onGoneClick(){
        this.setState({
            here: false,
            name: ''
        })
        console.log("Gone Clicked")
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    RenderCard() {
        const isHere = this.state.here;
        if(isHere){ return (
            <Card style={{height: "62px", width: "180px", paddingTop: "0px"}}>
                <CardBody style={{paddingTop: "0px"}}>
                    <CardTitle style={{paddingTop: "0px", paddingBottom: "0px", marginBottom: "0px"}}>
                        <tbody> 
                            <tr>
                                <th style={{tableLayout: "fixed", width:"160px"}}>
                                    <div>{this.state.name}</div>
                                </th>
                                <th>#</th>
                            </tr>
                        </tbody>
                    </CardTitle>
                    <Container fluid style={{paddingLeft: "15px"}}>
                        <Row style={{width: "210px", paddingTop: "0px", paddingBottom: "0px"}}>
                            <Col style={{paddingLeft: "0px", paddingRight: "0px"}}>
                                <Button style={{fontSize: "11px", paddingTop: "3px", paddingBottom: "3px", paddingRight: "5px", paddingLeft: "5px"}}>Special Request</Button>
                            </Col>
                            <Col style={{paddingLeft: "0px", paddingRight: "0px"}}>
                                <Button onClick={this.onGoneClick} style={{
                                    fontSize: "11px", 
                                    paddingTop: "3px", 
                                    paddingBottom: "3px", 
                                    paddingRight: "5px", 
                                    paddingLeft: "5px"}}>Gone</Button>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        )} else{ return(
            <Card style={{height: "62px", width: "180px", paddingTop: "0px"}}>
                <CardBody style={{paddingTop: "0px"}}>
                    <CardTitle style={{paddingTop: "0px", paddingBottom: "0px", marginBottom: "0px"}}>
                        <tbody> 
                            <tr>
                                <th style={{tableLayout: "fixed", width:"160px"}}>
                                    <input type="text" name="name" onChange={this.onChangeName} style={{fontSize: "8px", marginTop: "0px", marginBottom: "2px"}}></input>
                                </th>
                                <th>#</th>
                            </tr>
                        </tbody>
                    </CardTitle>
                    <Container fluid style={{paddingLeft: "15px"}}>
                        <Row style={{width: "210px", paddingTop: "0px", paddingBottom: "0px"}}>
                            <Col style={{paddingLeft: "0px", paddingRight: "0px"}}>
                                <Button onClick={this.onHereClick} style={{
                                    fontSize: "11px", 
                                    paddingTop: "3px", 
                                    paddingBottom: "3px", 
                                    paddingRight: "39px", 
                                    paddingLeft: "39px"}}>Here!</Button>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        )}
    }

    
    render() {
        return(
            <div>
                {this.RenderCard()}
            </div>
        )
    }
}
