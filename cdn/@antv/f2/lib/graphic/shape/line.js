"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = require('../shape');

var bbox = require('../util/bbox');

var Line = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Line, _Shape);

  var _super = _createSuper(Line);

  function Line() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Line.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canStroke = true;
    this._attrs.type = 'line';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      lineWidth: 1
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2,
        lineWidth = attrs.lineWidth;
    return bbox.getBBoxFromLine(x1, y1, x2, y2, lineWidth);
  };

  return Line;
}(Shape);

Shape.Line = Line;
module.exports = Line;