import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import FilterHogs from './components/FilterHogs'
import Hogs from './porkers_data'

class App extends Component {
  state = {
    displayHogs: Hogs,
    showInfo: [],
    sortBy: 'name',
    filterHogs: 'all'
  }

  handleClick = (name) => {
    let newHogList = []
    if(this.state.showInfo.includes(name) ){
      const index = this.state.showInfo.indexOf(name)
      newHogList = [...this.state.showInfo.slice(0, index), ...this.state.showInfo.slice(index+1)]
    }  else {
      newHogList =[...this.state.showInfo, name] //this.state.showInfo.concat(name)
    }
    this.setState({ showInfo: newHogList })
  }

  handleChange = (event) =>{
    this.setState({
      displayHogs: Hogs,
      sortBy: event.target.value,
      showInfo: []
    })
  }

  handleFilter = (event) => {
    this.setState({
      displayHogs: Hogs,
      filterHogs: event.target.value,
      showInfo: []
    })
  }

  handleDisplay = (name) => {
    let newHogList = this.state.displayHogs
    const index = this.state.displayHogs.findIndex(hog => hog.name === name)
    console.log("index", index, "name", name)
    console.log("new hog list before splice:", newHogList)
    newHogList.splice(index, 1)
    console.log("new hog list after splice:", newHogList)
    this.setState({ displayHogs: newHogList })
  }


  render() {
    return (
      <div className="App">
          < Nav />

          <FilterHogs hogs={this.state.displayHogs}
            handleDisplay={this.handleDisplay}
            filterHogs={this.state.filterHogs}
            handleFilter={this.handleFilter}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            sortBy={this.state.sortBy}
            showInfo={this.state.showInfo} />

      </div>
    )
  }
}

export default App;
