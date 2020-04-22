"use strict";

var Util = require('../util/common');

var MatrixUtil = require('../graphic/util/matrix');

var Vector2 = require('../graphic/util/vector2');

var defaultMatrix = [1, 0, 0, 1, 0, 0];

var Base = /*#__PURE__*/function () {
  var _proto = Base.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {};

  function Base(cfg) {
    this._initDefaultCfg();

    Util.mix(this, cfg);
    var start;
    var end;

    if (this.plot) {
      start = this.plot.bl;
      end = this.plot.tr;
      this.start = start;
      this.end = end;
    } else {
      start = this.start;
      end = this.end;
    }

    this.init(start, end);
  }

  _proto._scale = function _scale(s1, s2) {
    var matrix = this.matrix;
    var center = this.center;
    MatrixUtil.translate(matrix, matrix, [center.x, center.y]);
    MatrixUtil.scale(matrix, matrix, [s1, s2]);
    MatrixUtil.translate(matrix, matrix, [-center.x, -center.y]);
  };

  _proto.init = function init(start, end) {
    this.matrix = [].concat(defaultMatrix); // 设置中心点

    this.center = {
      x: (end.x - start.x) / 2 + start.x,
      y: (end.y - start.y) / 2 + start.y
    };

    if (this.scale) {
      this._scale(this.scale[0], this.scale[1]);
    }
  };

  _proto.convertPoint = function convertPoint(point) {
    var _this$_convertPoint = this._convertPoint(point),
        x = _this$_convertPoint.x,
        y = _this$_convertPoint.y;

    var vector = [x, y];
    Vector2.transformMat2d(vector, vector, this.matrix);
    return {
      x: vector[0],
      y: vector[1]
    };
  };

  _proto.invertPoint = function invertPoint(point) {
    return this._invertPoint(point);
  };

  _proto._convertPoint = function _convertPoint(point) {
    return point;
  };

  _proto._invertPoint = function _invertPoint(point) {
    return point;
  };

  _proto.reset = function reset(plot) {
    this.plot = plot;
    var bl = plot.bl,
        tr = plot.tr;
    this.start = bl;
    this.end = tr;
    this.init(bl, tr);
  };

  return Base;
}();

module.exports = Base;