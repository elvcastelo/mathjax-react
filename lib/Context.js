"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _loadScript = _interopRequireDefault(require("load-script"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MathJaxContext = require("./MathJaxContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Context = /*#__PURE__*/function (_React$Component) {
  _inherits(Context, _React$Component);

  var _super = _createSuper(Context);

  function Context(props) {
    var _this;

    _classCallCheck(this, Context);

    _this = _super.call(this, props);
    _this.state = {
      script: "",
      MathJax: undefined,
      loaded: false
    };
    _this.onLoad = _this.onLoad.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Context, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.context;
      var script = this.props.script;
      var options = this.props.options;

      if (options) {
        window.MathJax = {
          tex: _objectSpread({}, options),
          startup: {
            typeset: false
          }
        };
      }

      if (!script) {
        (0, _loadScript["default"])(value.script, this.onLoad);
      } else {
        (0, _loadScript["default"])(script, this.onLoad);
      }
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var value = this.context;
      this.setState({
        script: value.script,
        loaded: true,
        MathJax: window.MathJax === undefined ? undefined : window.MathJax
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.loaded) {
        var loading = this.props.loading;

        if (!loading) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
        }

        return loading;
      }

      var children = this.props.children;
      var childrenComponent = children === undefined ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : _react["default"].Children.only(children);
      return /*#__PURE__*/_react["default"].createElement(_MathJaxContext.MathJaxContext.Provider, {
        value: {
          script: this.state.script,
          MathJax: this.state.MathJax
        }
      }, childrenComponent);
    }
  }]);

  return Context;
}(_react["default"].Component);

Context.propTypes = {
  script: _propTypes["default"].string,
  options: _propTypes["default"].shape({
    inlineMath: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].string)),
    packages: _propTypes["default"].arrayOf(_propTypes["default"].string),
    displayMath: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf(_propTypes["default"].string)),
    processEscapes: _propTypes["default"].bool,
    processEnvironments: _propTypes["default"].bool,
    processRefs: _propTypes["default"].bool,
    tags: _propTypes["default"].string,
    tagSide: _propTypes["default"].string,
    tagIndent: _propTypes["default"].string,
    useLabelIds: _propTypes["default"].bool,
    multlineWidth: _propTypes["default"].string,
    maxMacros: _propTypes["default"].number,
    maxBuffer: _propTypes["default"].number,
    formatError: _propTypes["default"].func
  }),
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),
  loading: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node])
};
Context.contextType = _MathJaxContext.MathJaxContext;
var _default = Context;
exports["default"] = _default;