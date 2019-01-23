import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    query: ''
  }

  changeHandler = (e) => {
    this.setState({
      query: e.target.value
    }, ()=>console.log(this.state.query))
  }

  render(){
    return(
    <div onClick={(e) => this.props.performSearch(e, this.state.query)}>
    <input type="text" placeholder="Search" name="query" onChange={(e) => this.changeHandler(e)} value={this.state.query}/>
    <button>Search</button>
    </div>
    )
  }
}



export default SearchBar
