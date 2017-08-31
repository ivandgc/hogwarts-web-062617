import React from 'react'
import HogList from './HogList'

const SortHogs = (props) =>{

  let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  let sortedHogs = props.hogs

  if(props.sortBy === 'name'){
    sortedHogs = props.hogs.sort((hogA, hogB) => hogA.name < hogB.name ? -1 : 1)
  }else {
    sortedHogs = props.hogs.sort((hogA, hogB) => hogA[weight] < hogB[weight] ? -1 : 1)
  }
  return(
    <div>
      <select onChange={props.handleChange} defaultValue='name'>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <HogList handleClick={props.handleClick}
        handleDisplay={props.handleDisplay}
        showInfo={props.showInfo}
        hogs={sortedHogs} />
    </div>)
}

export default SortHogs
