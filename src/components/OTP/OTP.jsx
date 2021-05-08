import React from 'react'
import "./OTP.css"
export default function OTP(props){
  const OtpRef=React.createRef()
  React.useEffect(()=>{
    OtpRef.current.focus()
  },[])
  const [otp,setOtp]=React.useState(new Array(props.length).fill(""))
  const handleChange=(e,index)=>{
    if(isNaN(e.target.value)||e.target.value==="") return false;
    setOtp([...otp.map((d,idx)=>(idx===index)?e.target.value:d)])
    props.OTPValue([...otp.map((d,idx)=>(idx===index)?e.target.value:d)])
    if(e.target.nextSibling){
      e.target.nextSibling.focus()
    }
  }
  const KeyCheck=(event,index)=>
  {
    var KeyID = event.keyCode;
    switch(KeyID)
    {
      case 8:
      event.target.value=""
      setOtp([...otp.map((d,idx)=>(idx===index)?event.target.value:d)])
      props.OTPValue([...otp.map((d,idx)=>(idx===index)?event.target.value:d)])
      if(event.target.previousSibling)
      {
        event.target.previousSibling.focus()
      }
      default:
      break;
    }
  }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',maxWidth:'200px'}}>
    {
      otp.map((data,index)=>
      <input
        ref={index===0?OtpRef:null}
        className={props.className+" nebula-otp-field"}
        onChange={(e)=>handleChange(e,index)}
        onFocus={(e)=>e.target.select()}
        onKeyDown={(e)=>KeyCheck(e,index)}
        value={data}
        key={index}
        size="1"
        maxLength="1"
        type="text"
        />
    )
  }
</div>
)
}
// export default function Test(){
  // const [otp,setOtp]=React.useState([])
  // return (
  //   <div style={{color:'white',width:'100%',display:'flex',alignItems:'center',background:'#00bf8f',justifyContent:'center',height:'100vh'}}>
  //     <OTP OTPValue={otp=>setOtp(otp)}  length={6}/>
  //     <h1>OTP:{otp.join("")}</h1>
  //   </div>
  // )
// }
