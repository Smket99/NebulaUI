import React from 'react'
import "./Button.css"
function Button(props){
  const [bgColor,setBgColor]=React.useState(props.background || "dodgerblue")
  React.useEffect(()=>{
    if(props.disabled===true)
    {
      setBgColor("gray")
    }
    else {
      setBgColor(props.background)
    }
  },[props])
  if(props.type==="filled")
  {
    return(
    <button {...props} className={props.className+" nebula-button filled"}>{props.children}</button>
    )
  }
  else if(props.type==="outlined"){
    return(
      <button {...props} className={props.className+" nebula-button outlined"}>{props.children}</button>
    )
  }
  return(
    <button {...props} className="nebula-button">{props.children}</button>
  )
}
export{
  Button
}
