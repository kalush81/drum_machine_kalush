import React, { Component } from 'react';
import classes from './Drum.module.css';

export default class RecBtn extends Component {
    render() {
        return (
    <button className={classes.RecBtn} onClick={this.props.clicked}>{`${this.props.isRec ? 'stop':'start recording'}`}</button>
        )
    }
}
