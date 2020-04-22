"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _base = _interopRequireDefault(require("./base"));

var _common = require("../../util/common");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Pinch = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Pinch, _Base);

  var _super = _createSuper(Pinch);

  var _proto = Pinch.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      type: 'pinch',
      startEvent: 'pinchstart',
      processEvent: 'pinch',
      endEvent: 'pinchend'
    };
  };

  function Pinch(cfg, chart) {
    var _this;

    _this = _Base.call(this, cfg, chart) || this;

    var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
        context = _assertThisInitialize.context;

    (0, _common.mix)(context, cfg);
    return _this;
  }

  _proto.start = function start() {
    var context = this.context;
    context.start();
  };

  _proto.process = function process(e) {
    e.preventDefault && e.preventDefault();
    var zoom = e.zoom,
        center = e.center;
    var context = this.context;
    var chart = context.chart;
    var coord = chart.get('coord');
    var start = coord.start,
        end = coord.end;
    var coordWidth = end.x - start.x;
    var leftLen = Math.abs(center.x - start.x);
    var rightLen = Math.abs(end.x - center.x); // 计算左右缩放的比例

    var leftScale = leftLen / coordWidth;
    var rightScale = rightLen / coordWidth;
    context.doZoom(leftScale, rightScale, zoom);
  };

  _proto.end = function end() {
    // 缩放完成后再更新ticks
    var context = this.context;
    context.updateTicks();
  };

  return Pinch;
}(_base["default"]);

var _default = Pinch;
exports["default"] = _default;