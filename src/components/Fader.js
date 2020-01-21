import React, { Component } from 'react';
import { Aux } from './hoc';
import classes from './Drum.module.css'

export default class Fader extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Fader} style={{left: `${this.props.posX-10}px`}}></div>    
                <p>{this.props.volumeValue}</p>
            </Aux>
        )
    }
}
