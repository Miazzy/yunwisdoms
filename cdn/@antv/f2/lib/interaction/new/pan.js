"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Pan = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Pan, _Base);

  var _super = _createSuper(Pan);

  function Pan() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Pan.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      type: 'pan',
      startEvent: 'panstart',
      processEvent: 'pan',
      endEvent: 'panend'
    };
  };

  _proto.start = function start() {
    var context = this.context;
    context.start();
  };

  _proto.process = function process(e) {
    var direction = e.direction,
        deltaX = e.deltaX;

    if (direction === 'up' || direction === 'down') {
      return;
    }

    e.preventDefault && e.preventDefault();
    var context = this.context;
    var chart = context.chart;
    var coord = chart.get('coord');
    var start = coord.start,
        end = coord.end;
    var coordWidth = end.x - start.x;
    var ratio = deltaX / coordWidth;
    context.doMove(ratio);
  };

  return Pan;
}(_base["default"]);

var _default = Pan;
exports["default"] = _default;