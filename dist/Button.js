import React from 'react';
export default function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      background: props.background || "black",
      color: props.color || "white",
      border: 'none',
      outline: 'none'
    }
  }, props.children);
}