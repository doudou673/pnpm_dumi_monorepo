import React from 'react';
import { Add } from '@lzx/utils';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Foo = function Foo(props) {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h4", {
      children: props.title
    }), /*#__PURE__*/_jsx("p", {
      children: Add(1, 2)
    })]
  });
};
export default Foo;