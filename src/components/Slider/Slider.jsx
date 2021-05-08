import "./Slider.css"
import React from 'react'
function Slider(props){
  return (
    <div>
      <input {...props} style={{webkitSliderThumbBackground:'red'}} type="range" className={props.className+" nebula-slider"} />
    </div>
  )
}
function Test(){
  const [value,setValue]=React.useState(10)
  return (
    <div style={{flexDirection:'column',width:'100%',display:'flex',alignItems:'center',background:'black',justifyContent:'center',height:'100vh'}}>
      <Slider steps={10} defaultValue={10} onChange={(e)=>setValue(e.target.value)} min="1" max="100"/>
      <h1 style={{color:'white'}}>
        Value: {value}
      </h1>
    </div>
  )
}
export{
  Slider
}
