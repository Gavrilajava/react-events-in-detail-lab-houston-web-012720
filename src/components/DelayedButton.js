// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

  delayedLog = (e) => {
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e),this.props.delay)
  }

  render() {
    return(
      <button onClick= {this.delayedLog}></button>
    )
  }
}