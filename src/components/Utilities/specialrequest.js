import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

export default class SpecialRequest extends Component {
    constructor(props){
        super(props);

        this.onChangeRequest = this.onChangeRequest.bind(this);
        this.addRequest = this.addRequest.bind(this);

        this.state = {
            name: '',
            spot: '',
            time: '',
            request: '',
            request_list: []
        }
    }

    componentDidMount(){
        this.setState({
            request_list: [...this.props.savedList]
        })
        console.log("Special Request Mounted")
    }

    componentWillUnmount(){ 
        this.props.onCallback(this.state.request_list)
    }

    addRequest(){
        const currentRequest = this.state.request;
        this.setState({
            request_list: [...this.state.request_list, currentRequest]
        });
    }

    onChangeRequest(e){
        this.setState({
            request: e.target.value
        });
    }

    render() {
        return(
    <Card style={{width: "300px", height: "300px"}}>
        <CardBody>
            <CardTitle><b>Special Request</b></CardTitle>
            <input onChange={this.onChangeRequest}></input>
            <button onClick={this.addRequest}>Save</button>
            <ul className="req-list">
                {this.state.request_list.map(req => {return <li>{req}</li>})}
            </ul>
        </CardBody>
    </Card>
        )
    }
}