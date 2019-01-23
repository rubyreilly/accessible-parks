import React, { Component } from 'react';

class ResultCard extends Component{
  render(){
    const name = this.props.parkObj.name
    const location = this.props.parkObj.location
    const parkType = this.props.parkObj.type
    return(
      <div>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>{parkType}</p>
      </div>
    )
  }
}


export default ResultCard
