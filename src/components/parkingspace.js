import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class ParkingSpace extends Component {
    constructor(props){
        super(props)
    }

    
    render() {
        return(
            <Card>
                <CardBody>
                    <CardTitle>Parking Space</CardTitle>    
                    <Button>They Here</Button>
                    <Button>They Gone</Button>
                </CardBody>
                </Card>
        )
    }
}
