"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MathJaxContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MathJaxContext = /*#__PURE__*/_react["default"].createContext({
  script: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js',
  MathJax: undefined
});

exports.MathJaxContext = MathJaxContext;