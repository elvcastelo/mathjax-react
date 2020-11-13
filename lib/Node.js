"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MathJaxContext = require("./MathJaxContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Node = /*#__PURE__*/function (_React$Component) {
  _inherits(Node, _React$Component);

  var _super = _createSuper(Node);

  function Node(props) {
    var _this;

    _classCallCheck(this, Node);

    _this = _super.call(this, props);
    _this.contentRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(Node, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.typeset();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var update = prevProps.content !== this.props.content;
      this.typeset(update);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.typesetClear();
    }
  }, {
    key: "checkForMathJax",
    value: function checkForMathJax() {
      var value = this.context;

      if (!value.MathJax) {
        throw Error('Ocorreu um erro ao carregar o MathJax. MathJax não está definido');
      }
    }
  }, {
    key: "typesetClear",
    value: function typesetClear() {
      var current = this.contentRef.current;
      var value = this.context;
      value.MathJax.typesetClear([current]);
    }
  }, {
    key: "typeset",
    value: function typeset(forceUpdate) {
      var current = this.contentRef.current;
      var value = this.context;
      this.checkForMathJax();

      if (forceUpdate) {
        this.typesetClear([current]);
      }

      value.MathJax.typesetPromise([current]);
    }
  }, {
    key: "formatContent",
    value: function formatContent(content) {
      var contentSplits = content.split('\n');
      return /*#__PURE__*/_react["default"].createElement("p", null, contentSplits.map(function (split) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, split, /*#__PURE__*/_react["default"].createElement("br", null));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          formatContent = _this$props.formatContent;
      var contentComponent;

      if (!formatContent) {
        contentComponent = this.formatContent(content);
      } else {
        contentComponent = formatContent(content);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mathjax-component",
        ref: this.contentRef
      }, contentComponent);
    }
  }]);

  return Node;
}(_react["default"].Component);

Node.propTypes = {
  content: _propTypes["default"].string,
  formatContent: _propTypes["default"].func
};
Node.contextType = _MathJaxContext.MathJaxContext;
var _default = Node;
exports["default"] = _default;