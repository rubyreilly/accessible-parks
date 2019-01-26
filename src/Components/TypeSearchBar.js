import React, { Component } from 'react';

class TypeDropdown extends Component {

  state = {
    query: ''
  }

  changeHandler = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render(){
    return(
    <div>
    <select type="text" placeholder="search by type" name="query" onChange={(e) => this.changeHandler(e)} value={this.state.query}>
    <option>select type</option>
    <option>Baseball Fields</option>
    <option>Basketball Courts</option>
    <option>Bathrooms</option>
    <option>Beaches</option>
    <option>Bocce Courts</option>
    <option>Football Fields</option>
    <option>Ice Skating Rinks</option>
    <option>Nature Centers</option>
    <option>Playgrounds</option>
    <option>Pools</option>
    <option>Recreation Centers</option>
    <option>Tennis Courts</option>
    </select>
    <button onClick={(e) => this.props.performTypeSearch(e, this.state.query)}>search</button>
    </div>

    )
  }
}



export default TypeDropdown
