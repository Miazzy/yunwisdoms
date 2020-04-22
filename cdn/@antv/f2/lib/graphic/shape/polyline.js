"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = require('../shape');

var Smooth = require('../util/smooth');

var bbox = require('../util/bbox'); // filter the point which x or y is NaN


function _filterPoints(points) {
  var filteredPoints = [];

  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];

    if (!isNaN(point.x) && !isNaN(point.y)) {
      filteredPoints.push(point);
    }
  }

  return filteredPoints;
}

var Polyline = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Polyline, _Shape);

  var _super = _createSuper(Polyline);

  function Polyline() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polyline';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 1,
      smooth: false
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth;

    var filteredPoints = _filterPoints(points);

    context.beginPath();

    if (filteredPoints.length) {
      context.moveTo(filteredPoints[0].x, filteredPoints[0].y);

      if (smooth) {
        var constaint = [[0, 0], [1, 1]];
        var sps = Smooth.smooth(filteredPoints, false, constaint);

        for (var i = 0, n = sps.length; i < n; i++) {
          var sp = sps[i];
          context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
        }
      } else {
        var _i;

        var l;

        for (_i = 1, l = filteredPoints.length - 1; _i < l; _i++) {
          context.lineTo(filteredPoints[_i].x, filteredPoints[_i].y);
        }

        context.lineTo(filteredPoints[l].x, filteredPoints[l].y);
      }
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth,
        lineWidth = attrs.lineWidth;

    var filteredPoints = _filterPoints(points);

    if (smooth) {
      var newPoints = [];
      var constaint = [[0, 0], [1, 1]];
      var sps = Smooth.smooth(filteredPoints, false, constaint);

      for (var i = 0, n = sps.length; i < n; i++) {
        var sp = sps[i];

        if (i === 0) {
          newPoints.push([filteredPoints[0].x, filteredPoints[0].y, sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        } else {
          var lastPoint = sps[i - 1];
          newPoints.push([lastPoint[5], lastPoint[6], sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        }
      }

      return bbox.getBBoxFromBezierGroup(newPoints, lineWidth);
    }

    return bbox.getBBoxFromPoints(filteredPoints, lineWidth);
  };

  return Polyline;
}(Shape);

Shape.Polyline = Polyline;
module.exports = Polyline;