import React from 'react'
import Hogs from '../porkers_data'
import Hog from './Hog'

export default class HogList extends React.Component {
  state = {
    showInfo: false
  }

  handleClick = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render(){
    return (
      <div className="ui grid container">
        {Hogs.map( (hog, index) => <Hog key={index} showInfo={this.state.showInfo} hogInfo={hog} handleClick={this.handleClick}/>)}
      </div>
    )
  }
}
