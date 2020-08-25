// Dependency Imports
import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import {
  Card, CardTitle, CardBody, Col, Row,
  Button, Container, Media, Table
} from 'reactstrap';

// Local Imports
import SpecialRequest from '../Utilities/specialrequest.js';
import Stopwatch from '../Utilities/stopwatch.js';

// Exported Component
export default class ParkingSpace extends Component {
    constructor(props){
        super(props);

        this.listCallback = this.listCallback.bind(this);
        this.clockCallback = this.clockCallback.bind(this);
        this.onHereClick = this.onHereClick.bind(this);
        this.onGoneClick = this.onGoneClick.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.RenderCard = this.RenderCard.bind(this);
        

        this.state = {
            name: '',
            spot: this.props.spot,
            here: false,
            minute: 0,
            request_list: [],
            color: "#e6f7ff"
        }
    }

    listCallback(passed_request_list){
        this.setState({
            request_list: passed_request_list
        })
    }
    
    clockCallback(arg_minutes){
        this.setState({
            minute: arg_minutes
        })
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
            name: '',
            request_list: []
        })
        console.log("please work " + this.state.minute)
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
<Card style={{height: "62px", width: "190px", paddingTop: "0px"}}>
    <CardBody style={{paddingTop: "0px", paddingLeft: "5px"}}>
        <CardTitle style={{paddingTop: "0px", paddingBottom: "0px", marginBottom: "0px", width:"178px"}}>
            <tbody> 
                <tr>
                    <th style={{tableLayout: "fixed", width: "178px"}}>
                        <div>{this.state.name}</div>
                    </th>
                    <th>{this.state.spot}</th>
                </tr>
            </tbody>
        </CardTitle>
        <Container fluid style={{paddingLeft: "10px"}}>
            <Row style={{width: "210px", paddingTop: "3px", paddingBottom: "0px"}}>
                <Col style={{paddingLeft: "5px", paddingRight: "0px"}}>
                    <Popup modal trigger={<Button style={{
                        fontSize: "11px", 
                        paddingTop: "3px", 
                        paddingBottom: "3px", 
                        paddingRight: "5px", 
                        paddingLeft: "5px"}}>Requests</Button>}>
                            <SpecialRequest 
                                savedList={this.state.request_list} 
                                onCallback={this.listCallback}>
                            </SpecialRequest>
                    </Popup>
                </Col>
                <Col style={{paddingLeft: "10px", paddingRight: "20px"}}>
                    <Button onClick={this.onGoneClick} style={{
                        fontSize: "11px", 
                        paddingTop: "3px", 
                        paddingBottom: "3px", 
                        paddingRight: "5px", 
                        paddingLeft: "5px"}}>Gone</Button>
                </Col>
                <Col>
                    <Stopwatch onCallback={this.clockCallback} />
                </Col>
            </Row>
        </Container>
    </CardBody>
</Card>
)} else{ return(
<Card style={{height: "62px", width: "190px", paddingTop: "0px"}}>
    <CardBody style={{paddingLeft: "5px", paddingTop: "0px"}}>
        <CardTitle style={{paddingTop: "0px", paddingBottom: "0px", marginBottom: "0px", width:"178px"}}>
            <tbody> 
                <tr>
                    <th style={{tableLayout: "fixed", width:"178px"}}>
                        <input type="text" name="name" onChange={this.onChangeName} style={{
                            fontSize: "8px", 
                            marginTop: "0px", 
                            marginBottom: "2px",
                            marginLeft: "0px"}}></input>
                    </th>
                    <th>{this.state.spot}</th>
                </tr>
            </tbody>
        </CardTitle>
        <Container fluid style={{paddingLeft: "0px"}}>
            <Row style={{width: "210px", paddingTop: "0px", paddingBottom: "0px"}}>
                <Col style={{paddingRight: "0px"}}>
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
