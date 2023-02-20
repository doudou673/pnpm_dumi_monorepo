import React from 'react';
import { Add } from '@wode673/utils';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var Foo = function Foo(props) {
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsxs("h4", {
      children: [props.title, "changeset"]
    }), /*#__PURE__*/_jsx("p", {
      children: Add(1, 2)
    })]
  });
};
export default Foo;