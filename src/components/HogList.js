import React from 'react'
import Hog from './Hog'

const HogList = (props) => {
  return (
    <div className="ui grid container">
      {props.hogs.map( (hog, index) => {
        return( <Hog key={index}
          showInfo={props.showInfo}
          hogInfo={hog}
          handleClick={props.handleClick}
          handleDisplay={props.handleDisplay}
          />)
        })
      }
    </div>
  )
}

export default HogList
