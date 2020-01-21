import React, { Component } from 'react'

export default class RecBtn extends Component {
    render() {
        return (
    <button onClick={this.props.clicked}>{`${this.props.isRec ? 'stop':'start'}`}</button>
        )
    }
}
