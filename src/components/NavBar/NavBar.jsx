import React from 'react'
import "./NavBar.css"
function NavBar(props){
  return(
    <div style={{background:props.background}} className={props.className+" nebula-navbar"}>
      {props.children}
    </div>
  )
}
export{
  NavBar
}
