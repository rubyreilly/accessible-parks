import React from 'react';
import ResultCard from './ResultCard';


const ResultsContainer = (props)=>{

  const generateResultCards=()=>{
    if (props.parksData.length > 0){
      return props.parksData.map((parkObj) =>{
        return (<ResultCard parkObj={parkObj}/>)
      })
    }else{
      return null
    }
  }

    return(
      <div className='results'>
      {generateResultCards()}
      </div>
    )

}

export default ResultsContainer
