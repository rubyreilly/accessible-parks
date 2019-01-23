import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'
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
      parksData: data
    }))
  }

  performSearch=(e, query)=>{
    e.preventDefault()
    console.log("parks", this.state.parksData)
    let foundParks = []
    if (this.state.parksData.length > 0){
      foundParks = this.state.parksData.filter((parkObj)=>{
        return parkObj.name.toLowerCase().includes(query)
      })
    }
    this.setState({parksToRender: foundParks})
  }

  render() {

    return (
      <div className="App">
        <h1>
          Parks For All
        </h1>
        <SearchBar performSearch={this.performSearch}/>
        <ResultsContainer parksData={this.state.parksToRender}/>
      </div>
    );
  }
}

export default App;
