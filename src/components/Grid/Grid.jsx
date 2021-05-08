import React from 'react'
import './Grid.css'
function Grid(props){
  return (
    <div {...props} className={props.item?"card":"cards"}>
      {props.children}
    </div>
  )
}
export{
  Grid
}
