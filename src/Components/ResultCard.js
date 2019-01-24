import React, { Component } from 'react';

class ResultCard extends Component{
  render(){
    const name = this.props.parkObj.name
    const location = this.props.parkObj.location
    const parkType = this.props.parkObj.type
    return(
      <div className= 'yellow ui segment'>
      <h4>{name}</h4>
      <p>{location}</p>
      <p>{parkType}</p>
      </div>
    )
  }
}


export default ResultCard
