import React, { Component } from 'react';
import ResultCard from './ResultCard';


class ResultsContainer extends Component{

  generateResultCards(){
    if (this.props.parksData.length > 0){
      return this.props.parksData.map((parkObj) =>{
        return (<ResultCard parkObj={parkObj}/>)
      })
    }else{
      return null
    }
  }

  render(){
    return(

      <div className='results'>
    
      {this.generateResultCards()}
      </div>
    )
  }
}

export default ResultsContainer
