import React from "react";
import {Button} from '../Button/Button'
import './Menu.css'
function MenuItem(item){
  return(
    <div {...item} className="nebula-list-item">
      {item.children}
    </div>
  )
}
class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleClick = () => {
    if (!this.state.showModal) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  handleOutsideClick = e => {
    if (!this.node.contains(e.target)) this.handleClick();
  };
  render() {

    return (
      <div
        ref={node => {
          this.node = node;
        }}
        style={{position:'relative',width:'auto'}}
        >
        <Button style={{background:'red'}} onClick={this.handleClick}>Open Modal</Button>
        <div style={{transform:this.state.showModal?"scale(1)":"scale(0)"}} className="nebula-menu-popup">
          <MenuItem onClick={this.handleClick}>hello</MenuItem>
          <MenuItem onClick={this.handleClick}>hello</MenuItem>
          <MenuItem onClick={this.handleClick}>hello</MenuItem>
          <MenuItem onClick={this.handleClick}>hello</MenuItem>
          <MenuItem onClick={this.handleClick}>hello</MenuItem>
        </div>
      </div>
    );
  }
}
export{
  MenuItem,
  Menu
}
