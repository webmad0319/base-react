import React, { Component } from 'react'

export default class Feature extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img}/>
        <h3>{this.props.detail}</h3>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
