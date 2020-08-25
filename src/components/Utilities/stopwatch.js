import React, { Component } from 'react';

export default class Stopwatch extends Component {
    constructor(props){
        super(props);

        this.Increment = this.Increment.bind(this);
        this.ClearTimer = this.ClearTimer.bind(this);
        this.StartTimer = this.StartTimer.bind(this);
;
        this.state = {
            minutes: 0,
            seconds: 0
        };
    }

    componentDidMount(){
        this.StartTimer()
    }

    componentWillUnmount(){
        this.ClearTimer();
    }

    Increment(){
        const nextMin = this.state.minutes + 1;
        const nextSec = this.state.seconds + 1;
        if(nextSec < 60){
            this.setState({
                seconds: nextSec
            })
        } else{
            this.setState({
                minutes: nextMin,
                seconds: 0
            })
        }
        this.props.onCallback(this.state.minutes);
    }

    StartTimer(){
        this.timer = setInterval(() => {this.Increment()}, 1000);
    }

    ClearTimer(){
        clearInterval(this.timer);
    }

    render(){
        
        if(this.state.seconds < 10){
        return(<b>{this.state.minutes}:0{this.state.seconds}</b>)
        } else{
            return(<b>{this.state.minutes}:{this.state.seconds}</b>)
        }
    }
}