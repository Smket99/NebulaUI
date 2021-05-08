import React from 'react'
import {ResponsiveDrawer} from './Drawer/ResponsiveDrawer'
import {NavBar} from './NavBar/NavBar'
import {Button} from './Button/Button'
import {NavLink,Route,BrowserRouter as Router} from 'react-router-dom'
import Photoviewer from './Photoviewer/Photoviewer'
import {Accordian} from './Accordian/Accordian'
import {Input} from './Input/Input'
import {Grid} from './Grid/Grid'
import {Slider} from './Slider/Slider'
import {Stepper} from './Stepper/Stepper'
import "./List.css"
import OTP from './OTP/OTP'
function List(props){
  return(
    <div className="nebula-list">
      {props.children}
    </div>
  )
}
function ListItem(props){
  return(
    <NavLink to={props.to} className="nebula-list-item">
      {props.children}
    </NavLink>
  )
}
function StepperComp(){
  return(
    <Stepper/>
  )
}
function InputComp(){
  return(
    <div>
      <Input placeholder="Input..." borderColor="lime" />
      <Input placeholder="Input..." borderColor="linear-gradient(red,magenta)" />
    </div>
  )
}
function GridComp(){
  const [value,setValue]=React.useState(100)
  return(
    <div style={{transition:'all 1s ease',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',background:'#6798ed'}}>
      <div style={{width:'20%',margin:'1em'}}>
      <Slider steps={10} defaultValue={100} onChange={(e)=>setValue(e.target.value)} min="20" max="100"/>
      <h1 style={{color:'white'}}>
        Width: {value}
      </h1>
      </div>
    <div style={{transition:'all 1s ease',margin:'1em',padding:'1em',background:'gray',width:`calc(${value}% - 4em)`}}>
      <Grid style={{gridTemplateColumns:value<50?value<35?'repeat(1, 1fr)':'repeat(2, 1fr)':'repeat(3, 1fr)'}}>
        <Grid style={{color:'#212121'}} item>Grid item 1</Grid>
        <Grid style={{color:'#212121'}} item>Grid item 2</Grid>
        <Grid style={{color:'#212121'}} item>Grid item 3</Grid>
        <Grid style={{color:'#212121'}} item>Grid item 4</Grid>
        <Grid style={{color:'#212121'}} item>Grid item 5</Grid>
        <Grid style={{color:'#212121'}} item>Grid item 6</Grid>
      </Grid>
      </div>


    </div>
  )
}
function ButtonComp(){
  return(
    <div>
      <Button style={{color:'#fff'}}>Button</Button>
      <Button type="outlined" >Button</Button>
      <Button type="filled" style={{background:'crimson',color:'white'}}>Button</Button>

    </div>
  )
}
function Otpfunction(){
  const [otp,setOtp]=React.useState([])
  return (
    <div style={{color:'white',width:'calc(100% - 2em)',display:'flex',flexDirection:'column',padding:'1em',alignItems:'center',background:'#00bf8f',justifyContent:'center'}}>
      <OTP OTPValue={otp=>setOtp(otp)}  length={6}/>
      <h1>OTP:{otp.join("")}</h1>
    </div>
  )
}
function AccordianFun(){
  return(
    <div style={{width:'50%',margin:'1em'}}>
      <Accordian background="black" header="This is Accordian">
        Lorem Ipsum
      </Accordian>
      <Accordian headerColor="orange"   background="slateblue" header="You can Change this color">
        Again.........Lorem Ipsum :[
        </Accordian>
        <Accordian contentColor="lime" background="linear-gradient(#EB5757,#000000)" header="Add a Gradient">
          Yes you can change this color too, gross xD
        </Accordian>
      </div>
    )
  }
  export default function Test(){
    const tiles=[
      "https://images.unsplash.com/photo-1620365602462-40d8f2cdd84c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1620353540061-38ac5848aaef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=952&q=80",
      "https://images.unsplash.com/photo-1620376644568-73e5a6139269?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80",
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80 "
    ]
    const [openDrawer,setOpenDrawer]=React.useState(false)
    var routes=[
      {
        path:"Photo-viewer",
        component:<Photoviewer tiles={tiles}/>
    },
    {
      path:"OTP",
      component:<Otpfunction/>
  },
  {
    path:'Accordian',
    component:<AccordianFun/>
},
{
  path:'Button',
  component:<ButtonComp/>
},
{
  path:'Input',
  component:<InputComp/>
},
{
  path:"Grid",
  component:<GridComp/>
},
{
  path:'Stepper',
  component:<StepperComp/>
}
];
return (
  <Router>
    <Route path="/">
      <div style={{color:'white',width:'100%',display:'flex',height:'100vh'}}>
        <ResponsiveDrawer background="#000" openDrawer={openDrawer}>
          <List>
            {
              routes.map((item)=>
              <ListItem to={"/"+item.path}>
                {item.path}
              </ListItem>
            )
          }

        </List>
      </ResponsiveDrawer>
      <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
        <NavBar>
          <Button onClick={()=>setOpenDrawer(!openDrawer)}>open</Button>
        </NavBar>
        <main style={{background:'#212121',height:'calc(100vh - 75px)',maxHeight:'calc(100vh - 75px)',overflowY:'auto'}}>
          {
            routes.map((route)=>
            <Route path={"/"+route.path}>
              {route.component}
            </Route>
          )
        }
      </main>
    </div>
  </div>
</Route>
</Router>

)
}
