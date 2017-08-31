import React from 'react'

const Hog = props => {

  let hogImgSource = "hog-imgs/" + props.hogInfo.name.replace(/\s+/g, '_').toLowerCase() + ".jpg"
  let selectedInfo = <img src={hogImgSource} alt="" height="200" width="200" onClick={props.handleClick} />
  if(props.showInfo){
    selectedInfo = <div onClick={props.handleClick}><p>{props.hogInfo.specialty}</p><p>{props.hogInfo['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p><p>{props.hogInfo['highest medal achieved']}</p></div>
  }

  return(
    <div className="ui eight wide column">
      <h1>{props.hogInfo.name}</h1>
      {selectedInfo}
    </div>
  )
}

export default Hog
