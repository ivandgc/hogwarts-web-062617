import React from 'react'

const Hog = props => {
  let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

  let hogImgSource = "hog-imgs/" + props.hogInfo.name.replace(/\s+/g, '_').toLowerCase() + ".jpg"
  let selectedInfo = <img src={hogImgSource} alt="" onClick={()=> props.handleClick(props.hogInfo.name)} />

  if(props.showInfo.includes(props.hogInfo.name)){
    selectedInfo = <div onClick={()=> props.handleClick(props.hogInfo.name)}>
      <p>{props.hogInfo.specialty}</p>
      <p>{props.hogInfo[weight]}</p>
      <p>{props.hogInfo['highest medal achieved']}</p>
    </div>
  }

  return(
    <div className="ui four wide column pigTile">
      <h1>{props.hogInfo.name}</h1>
      {selectedInfo}
      <button onClick={()=> props.handleDisplay(props.hogInfo.name)}>HIDE ME!</button>
    </div>
  )
}

export default Hog
