import React from 'react'
import "./Photoviewer.css"
import {Grid} from '../Grid/Grid.jsx'
const App = (props) => {
  const [showModal,setShowModal]=React.useState(false);
  const nebulaPhotoviewer={
    display:'flex',
    background:props.backgroundColor||'#000000d0',
    height:'100vh',
    width:'100%',
    left:0,
    justifyContent:'space-between',
    alignItems:'center',
    transform:showModal?"scale(1)":"scale(0)",
    transition:'0.3s ease-in-out',
    position:'fixed',
    top:0,
    zIndex:100
  }
  const tiles=props.tiles;
  const [currImage,setCurrImg]=React.useState(0);
  return (
    <Grid style={{maxHeight:'100%',overflowY:'auto'}}>
      {
        !tiles.length?null:<>
        {
          tiles.map((tile,id)=>
          <Grid item>
            <img style={{width:'100%',boxShadow:props.elevate?'0 4px 8px 0 #21212190,0 6px 20px 0 #21212190':'none'}} className="nebula-tiles" onClick={()=>{setCurrImg(id);setShowModal(true)}} src={tile} />
          </Grid>
        )
      }
      </>
  }

  <div style={nebulaPhotoviewer}>
    <button  className="btn" onClick={()=>setShowModal(false)} style={{background:'transparent',color:'white',fontSize:'125%',position:'absolute',right:'1%',top:'1%'}}>X</button>
    <button  onClick={()=>setCurrImg(currImage-1)} disabled={currImage===0}  style={{fontSize:'120%',borderRadius:'50%',height:'40px',width:'40px',margin:'0.5em'}} className="btn nebula-button">{"<"}</button>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
      {
        !tiles.length?null:<>
        {
          tiles.map((tile,id)=>
          <img style={{boxShadow:'0 4px 8px 0 #21212190,0 6px 20px 0 #21212190',height:'80%',transition:`opacity ${props.transitionDuration}s ease-in-out`,position:'absolute',opacity:currImage===id?1:0}} src={tile}/>
        )
      }
      </>
  }
</div>
<button  onClick={()=>setCurrImg(currImage+1)} disabled={currImage===tiles.length-1} style={{fontSize:'120%',borderRadius:'50%',height:'40px',width:'40px',margin:'0.5em'}} className="btn nebula-button">{">"}</button>
</div>
</Grid>
)
}

export default App
