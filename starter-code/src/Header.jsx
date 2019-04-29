import React, { Component } from 'react'
import Nav from "./Nav"
import Main from './Main'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Main></Main>
      </div>
    )
  }
}
