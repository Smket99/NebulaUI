import React from 'react'
import "./Accordian.css"
function Accordian(props){
  const [expand,setExpand]=React.useState(false)
  return (
    <div style={{background:props.background,color:props.color,cursor:'pointer'}} className={expand?props.className+" nebula-accordian nebula-accordian-active":props.className+" nebula-accordian"}>
      <h3 style={{color:props.headerColor}} onClick={()=>setExpand(!expand)}>{props.header}</h3>
      <div style={{maxHeight:expand?'500px':'0',color:props.contentColor}} className="nebula-accordian-content">
        {props.children}
      </div>
    </div>
  )
}
export{
  Accordian
}
