// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {



  
  render(){
    return(
      <button onClick = {(e) => this.props.onReceiveCoordinates([e.screenX, e.screenY])}>CoordinatesButton</button>
    )
  }
}