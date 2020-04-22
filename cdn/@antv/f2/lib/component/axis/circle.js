"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = require('../../util/common');

var Abstract = require('./abstract');

var Circle = /*#__PURE__*/function (_Abstract) {
  (0, _inheritsLoose2["default"])(Circle, _Abstract);

  var _super = _createSuper(Circle);

  function Circle() {
    return _Abstract.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Abstract.prototype._initDefaultCfg.call(this);

    this.startAngle = -Math.PI / 2; // start angle，in radian

    this.endAngle = Math.PI * 3 / 2; // end angle, in radian

    this.radius = null; // radius

    this.center = null; // center
  };

  _proto.getOffsetPoint = function getOffsetPoint(value) {
    var startAngle = this.startAngle,
        endAngle = this.endAngle;
    var angle = startAngle + (endAngle - startAngle) * value;
    return this._getCirclePoint(angle);
  };

  _proto._getCirclePoint = function _getCirclePoint(angle, radius) {
    var self = this;
    var center = self.center;
    radius = radius || self.radius;
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  };

  _proto.getTextAlignInfo = function getTextAlignInfo(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    var align;
    var baseLine = 'middle';

    if (offsetVector[0] > 0) {
      align = 'left';
    } else if (offsetVector[0] < 0) {
      align = 'right';
    } else {
      align = 'center';

      if (offsetVector[1] > 0) {
        baseLine = 'top';
      } else if (offsetVector[1] < 0) {
        baseLine = 'bottom';
      }
    }

    return {
      textAlign: align,
      textBaseline: baseLine
    };
  };

  _proto.getAxisVector = function getAxisVector(point) {
    var center = this.center;
    var factor = this.offsetFactor;
    return [(point.y - center.y) * factor, (point.x - center.x) * -1 * factor];
  };

  _proto.drawLine = function drawLine(lineCfg) {
    var center = this.center,
        radius = this.radius,
        startAngle = this.startAngle,
        endAngle = this.endAngle;
    var container = this.getContainer(lineCfg.top);
    container.addShape('arc', {
      className: 'axis-line',
      attrs: Util.mix({
        x: center.x,
        y: center.y,
        r: radius,
        startAngle: startAngle,
        endAngle: endAngle
      }, lineCfg)
    });
  };

  return Circle;
}(Abstract);

Abstract.Circle = Circle;
module.exports = Circle;