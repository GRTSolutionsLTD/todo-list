/* Child.js */
import React from 'react'


class Child extends React.Component {
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  method() {
    window.alert('do stuff');
    document.getElementById("s").innerText="do stuff"
  }
  render() {
    return <h1 id="s">h</h1>
  }
}

export default (Child);