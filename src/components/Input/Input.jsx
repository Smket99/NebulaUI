import "./Input.css"
function Input(props){
  return (
    <div style={{width:'200px',margin:'0.5em',position:'relative',overflow:'hidden'}}>
      <input {...props} placeholder={props.placeholder} type="text" className="nebula-input"/>
      <div style={{background:props.borderColor}} className="bottom-border-focused"/>
      <div className="bottom-border"/>
    </div>
  )
}
function Test(){
  return (
    <div style={{flexDirection:'column',width:'100%',display:'flex',alignItems:'center',background:'black',justifyContent:'center',height:'100vh'}}>
      <Input  borderColor="linear-gradient(to right,#FF416C,#2BFF4B)" placeholder="Hello...."/>
      <Input  borderColor="linear-gradient(to right,#FF416C,#4B2BFF)" placeholder="Hello...."/>
      <Input  borderColor="linear-gradient(to right,#FF416C,#FF4B2B)" placeholder="Hello...."/>
    </div>
  )
}
export {
  Input
}
