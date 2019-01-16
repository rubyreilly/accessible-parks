import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar'
import ResultsContainer from './Components/ResultsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Parks For All
        </h1>
        <SearchBar/>
        <ResultsContainer/>
      </div>
    );
  }
}

export default App;
