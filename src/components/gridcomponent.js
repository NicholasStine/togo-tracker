import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import ParkingSpace from './parkingspace';

export default class GridComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 5, y: 0, w: 3, h: 2, static: true},
            {i: 'c', x: 10, y: 0, w: 1, h: 2, static: true}
          ];
          return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <ParkingSpace key="a"> </ParkingSpace>
                <ParkingSpace key="b"> </ParkingSpace>
                <ParkingSpace key="c"> </ParkingSpace>
            </GridLayout>
          )
    }
}