import React, { Component } from 'react';
import {
  Card, CardTitle, CardBody, Col, Row,
  Button, Container, Media, Table
} from 'reactstrap';

export default class CustomerPage extends Component {
    constructor(props){
        super();

        this.state = {
            name = '',
            spot = '',
            color = '',
        }
    }
}