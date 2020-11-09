"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MathJaxContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MathJaxContext = /*#__PURE__*/_react["default"].createContext({
  script: "",
  mathjax: undefined,
  loaded: false
});

exports.MathJaxContext = MathJaxContext;