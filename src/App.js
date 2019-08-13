import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import JobTable from './components/JobTable';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      filterText: ''
    }
  }

  componentDidMount() {
    let url = "http://localhost:3000/mock/test.json";

    fetch(url)
          .then(resp => resp.json())
          .then(data => {
            this.setState({
              jobs: data,  
            })
          })
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  render() {
    return (
      <div>

        <SearchBar onFilterTextChange={this.handleFilterTextChange.bind(this)} filterText = {this.state.filterText}/>
        <JobTable jobs={this.state.jobs} filterText={this.state.filterText}/>
      </div>
    );
  }
}

export default App;
