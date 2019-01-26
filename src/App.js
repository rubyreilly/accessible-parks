import React, { Component } from 'react';
import './App.css';
import NameSearchBar from './Components/NameSearchBar'
import TypeSearchBar from './Components/TypeSearchBar'
import ResultsContainer from './Components/ResultsContainer'
// import MapContainer from './Components/MapContainer'


class App extends Component {
  state = {
    parksData: [],
    parksToRender: []
  }

  componentDidMount(){
    this.getParksData()
  }

  getParksData(){
    return fetch(`https://data.cityofnewyork.us/resource/4xyq-5bdm.json`)
    .then(res=>res.json())
    .then(data=> this.setState({
      parksData: data,
      parksToRender: data
    }))
  }

  performNameSearch=(e, query)=>{
    e.preventDefault()
    let foundParks = []
    if (this.state.parksData.length > 0){
      foundParks = this.state.parksData.filter((parkObj)=>{
        return parkObj.name.toLowerCase().includes(query)
      })
    }
    this.setState({parksToRender: foundParks})
  }

  performTypeSearch=(e, query)=>{
    e.preventDefault()
    let foundParks = []
    if (this.state.parksData.length > 0){
      foundParks = this.state.parksData.filter((parkObj)=>{
        return parkObj.type === query
      })
    }
    this.setState({parksToRender: foundParks})
  }

  render() {

    return (
      <div className="App" id='home'>
      <div className='left-column'>LEFT</div>
        <div className='middle-column'>
        <h2 class="green inverted ui center aligned icon block header">
        <i class="tree icon"></i>
          Parks For All
        </h2>
        <NameSearchBar performNameSearch={this.performNameSearch}/>
        <TypeSearchBar performTypeSearch={this.performTypeSearch}/>
        <ResultsContainer parksData={this.state.parksToRender}/>
        </div>
        <div className='right-column'>RIGHT</div>

      </div>
    );
  }
}

export default App;
