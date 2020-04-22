"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = require('../shape');

var bbox = require('../util/bbox');

var Sector = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Sector, _Shape);

  var _super = _createSuper(Sector);

  function Sector() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Sector.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'sector';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0,
      r: 0,
      r0: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: false
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        r = attrs.r,
        r0 = attrs.r0,
        anticlockwise = attrs.anticlockwise;
    context.beginPath();
    var unitX = Math.cos(startAngle);
    var unitY = Math.sin(startAngle);
    context.moveTo(unitX * r0 + x, unitY * r0 + y);
    context.lineTo(unitX * r + x, unitY * r + y); // 当扇形的角度非常小的时候，就不进行弧线的绘制；或者整个只有1个扇形时，会出现end<0的情况不绘制

    if (Math.abs(endAngle - startAngle) > 0.0001 || startAngle === 0 && endAngle < 0) {
      context.arc(x, y, r, startAngle, endAngle, anticlockwise);
      context.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);

      if (r0 !== 0) {
        context.arc(x, y, r0, endAngle, startAngle, !anticlockwise);
      }
    }

    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        r0 = attrs.r0,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    var outerBBox = bbox.getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
    var innerBBox = bbox.getBBoxFromArc(x, y, r0, startAngle, endAngle, anticlockwise);
    return {
      minX: Math.min(outerBBox.minX, innerBBox.minX),
      minY: Math.min(outerBBox.minY, innerBBox.minY),
      maxX: Math.max(outerBBox.maxX, innerBBox.maxX),
      maxY: Math.max(outerBBox.maxY, innerBBox.maxY)
    };
  };

  return Sector;
}(Shape);

Shape.Sector = Sector;
module.exports = Sector;