import React, { Component } from 'react';

class NameSearchBar extends Component {

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
    <div onClick={(e) => this.props.performNameSearch(e, this.state.query)}>
    <input type="text" placeholder="search by name" name="query" onChange={(e) => this.changeHandler(e)} value={this.state.query}/>
    <button>search</button>
    </div>
    )
  }
}



export default NameSearchBar
