import React from 'react';

const ResultCard = (props)=>{
    const name = props.parkObj.name
    const location = props.parkObj.location
    const parkType = props.parkObj.type
    return(
      <div className= 'yellow ui segment'>
      <h4>{name}</h4>
      <p>{location}</p>
      <p>{parkType}</p>
      </div>
    )
  }



export default ResultCard
