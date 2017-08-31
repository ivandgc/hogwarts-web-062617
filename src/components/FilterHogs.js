import React from 'react'
import SortHogs from './SortHogs'

const FilterHogs = (props) =>{
  let filteredHogs = props.hogs

  if(props.filterHogs === 'greased') {
    filteredHogs = filteredHogs.filter(hog => hog.greased)
  } else if(props.filterHogs === 'ungreased'){
    filteredHogs = filteredHogs.filter(hog => !(hog.greased))
  }

  return(
    <div>
      <select onChange={props.handleFilter} defaultValue="all">
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="ungreased">Un-greased</option>
      </select>
      <SortHogs hogs={filteredHogs}
        handleDisplay={props.handleDisplay}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
        sortBy={props.sortBy}
        showInfo={props.showInfo} />
    </div>
  )

}

export default FilterHogs
