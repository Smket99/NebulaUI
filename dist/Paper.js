function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default function Paper(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    style: {
      color: props.color || "white",
      borderRadius: '10px',
      margin: '1em',
      background: props.background || "white",
      padding: '1em',
      boxShadow: '0 4px 8px 0 #00000056',
      display: 'flex'
    }
  }), props.children);
}