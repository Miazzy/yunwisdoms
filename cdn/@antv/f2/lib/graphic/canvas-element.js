"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _emit = _interopRequireDefault(require("./event/emit"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CanvasElement = /*#__PURE__*/function (_EventEmit) {
  (0, _inheritsLoose2["default"])(CanvasElement, _EventEmit);

  var _super = _createSuper(CanvasElement);

  function CanvasElement(ctx) {
    var _this;

    _this = _EventEmit.call(this) || this;
    _this.context = ctx; // canvas实际的宽高 (width/height) * pixelRatio

    _this.width = 0;
    _this.height = 0;
    _this.style = {};
    _this.currentStyle = {}; // 用来标识是CanvasElement实例

    _this.isCanvasElement = true;
    return _this;
  }

  var _proto = CanvasElement.prototype;

  _proto.getContext = function getContext()
  /* type */
  {
    return this.context;
  };

  _proto.getBoundingClientRect = function getBoundingClientRect() {
    var width = this.width;
    var height = this.height; // 默认都处理成可视窗口的顶部位置

    return {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    };
  };

  _proto.addEventListener = function addEventListener(type, listener) {
    this.on(type, listener);
  };

  _proto.removeEventListener = function removeEventListener(type, listener) {
    this.off(type, listener);
  };

  _proto.dispatchEvent = function dispatchEvent(type, e) {
    this.emit(type, e);
  };

  return CanvasElement;
}(_emit["default"]);

function supportEventListener(canvas) {
  if (!canvas) {
    return false;
  } // 非 HTMLCanvasElement


  if (canvas.nodeType !== 1 || !canvas.nodeName || canvas.nodeName.toLowerCase() !== 'canvas') {
    return false;
  } // 微信小程序canvas.getContext('2d')时也是CanvasRenderingContext2D
  // 也会有ctx.canvas, 而且nodeType也是1，所以还要在看下是否支持addEventListener


  var support = false;

  try {
    canvas.addEventListener('eventTest', function () {
      support = true;
    });
    canvas.dispatchEvent(new Event('eventTest'));
  } catch (error) {
    support = false;
  }

  return support;
}

var _default = {
  create: function create(ctx) {
    if (!ctx) {
      return null;
    }

    if (supportEventListener(ctx.canvas)) {
      return ctx.canvas;
    }

    return new CanvasElement(ctx);
  }
};
exports["default"] = _default;