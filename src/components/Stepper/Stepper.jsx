import React from 'react'
import {Button} from '../Button/Button'
function Stepper(props){
  const [stepNo,setStep]=React.useState(0)
  const steps=props.steps || ["step1","step2","step3","Step4"]
  return (
    <div style={{background:'#f7f7f7',padding:'1em'}}>
      <div style={{display:'flex',alignItems:'center'}}>
        {
          steps.map((step,index)=>{
            if(index===steps.length-1)
            {
              return(
                <div style={{transition:'0.4s all 0.1s ease-in-out',width:'2vw',height:'2vw',margin:'5px',background:stepNo>=index?(props.background || "mediumturquoise"):"#ccc",borderRadius:'50%'}}></div>

              )
            }
            return(
              <>
              <div style={{transition:'0.5s all 0.4s ease-in-out',width:'2vw',height:'2vw',margin:'5px',background:stepNo>=index?(props.background || "mediumturquoise"):"#ccc",borderRadius:'50%'}}></div>
              <div style={{background:"#ccc",width:'200px',height:'2px'}}>
                <div style={{transition:'all 0.4s ease-in',background:(props.background || "mediumturquoise"),width:stepNo>index?'100%':'0%',height:'2px'}}></div>
              </div>
              </>
            )
          })
        }
        </div>
        <Button style={{background:"linear-gradient(#2193b0,#6dd5ed)"}}   disabled={stepNo===0} onClick={()=>setStep(stepNo-1)}>Back</Button>
        <Button style={{background:"linear-gradient(#2193b0,#6dd5ed)"}}  disabled={stepNo===steps.length-1} onClick={()=>setStep(stepNo+1)}>Next</Button>

      </div>
    )
  }
  export{
    Stepper
  }
