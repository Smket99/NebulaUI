import React from 'react'
import "./ResponsiveDrawer.css"
import Button from "../Button/Button"
function ResponsiveDrawer(props){
  return(
      <div style={{transition:'0.3s ease-in-out',background:props.background,width:props.openDrawer?'22vw':'0vw',height:'100%'}}>
          {props.children}
      </div>
  )
}
function Drawer(props){
  return(
      <div style={{zIndex:'500',display:'flex',transition:'0.3s ease-in-out',background:'orange',width:'20vw',height:'100%',
        transform:props.openDrawer?"translateX(0%)":props.location==="right"?"translateX(20vw)":"translateX(-20vw)",position:'fixed',
        right:props.location==="right"?'0%':"auto",
        left:props.location==="left"?'0%':"auto"
      }}>
          {props.children}
      </div>
  )
}

export{
  Drawer,
  ResponsiveDrawer
}
