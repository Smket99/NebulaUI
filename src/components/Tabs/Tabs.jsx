import React from 'react'
import "./Tabs.css"
function TabContent(props){
  return (
    <div style={{background:props.ContentBg}} className="tab-content">
      {props.children}
    </div>
  )
}
function Tabs(props){
  const [activeTab,setActiveTab]=React.useState(0)
  const tabName=props.tabs
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <div style={{background:props.TabsBg}} className="nebula-tabs-container">
        {
          tabName.map((tabs,id)=>
          <div key={id} onClick={()=>setActiveTab(id)} className={activeTab===id?"nebula-tabs-active nebula-tabs":"nebula-tabs"}>
            {tabs}
          </div>
        )
      }
    </div>
    <TabContent ContentBg={props.ContentBg}>
      {props.tabContent[activeTab]}
    </TabContent>
  </div>
)
}
export{
  TabContent,
  Tabs
}
