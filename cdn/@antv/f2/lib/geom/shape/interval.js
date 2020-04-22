"use strict";

var Util = require('../../util/common');

var Shape = require('./shape');

var Vector2 = require('../../graphic/util/vector2');

var Global = require('../../global');

function getRectPoints(cfg) {
  var x = cfg.x,
      y = cfg.y,
      y0 = cfg.y0,
      size = cfg.size;
  var ymin = y0;
  var ymax = y;

  if (Util.isArray(y)) {
    ymax = y[1];
    ymin = y[0];
  }

  var xmin;
  var xmax;

  if (Util.isArray(x)) {
    xmin = x[0];
    xmax = x[1];
  } else {
    xmin = x - size / 2;
    xmax = x + size / 2;
  }

  return [{
    x: xmin,
    y: ymin
  }, {
    x: xmin,
    y: ymax
  }, {
    x: xmax,
    y: ymax
  }, {
    x: xmax,
    y: ymin
  }];
}

function getRectRange(points) {
  var xValues = [];
  var yValues = [];

  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    xValues.push(point.x);
    yValues.push(point.y);
  }

  var xMin = Math.min.apply(null, xValues);
  var yMin = Math.min.apply(null, yValues);
  var xMax = Math.max.apply(null, xValues);
  var yMax = Math.max.apply(null, yValues);
  return {
    x: xMin,
    y: yMin,
    width: xMax - xMin,
    height: yMax - yMin
  };
}

function getMiddlePoint(a, b) {
  var x = (a.x - b.x) / 2 + b.x;
  var y = (a.y - b.y) / 2 + b.y;
  return {
    x: x,
    y: y
  };
}

var Interval = Shape.registerFactory('interval', {
  defaultShapeType: 'rect',
  getDefaultPoints: function getDefaultPoints(cfg) {
    return getRectPoints(cfg);
  }
});
Shape.registerShape('interval', 'rect', {
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      fill: cfg.color
    }, Global.shape.interval, cfg.style);

    if (cfg.isInCircle) {
      var newPoints = points.slice(0);

      if (this._coord.transposed) {
        newPoints = [points[0], points[3], points[2], points[1]];
      }

      var _cfg$center = cfg.center,
          x = _cfg$center.x,
          y = _cfg$center.y;
      var v = [1, 0];
      var v0 = [newPoints[0].x - x, newPoints[0].y - y];
      var v1 = [newPoints[1].x - x, newPoints[1].y - y];
      var v2 = [newPoints[2].x - x, newPoints[2].y - y];
      var startAngle = Vector2.angleTo(v, v1);
      var endAngle = Vector2.angleTo(v, v2);
      var r0 = Vector2.length(v0);
      var r = Vector2.length(v1);

      if (startAngle >= 1.5 * Math.PI) {
        startAngle = startAngle - 2 * Math.PI;
      }

      if (endAngle >= 1.5 * Math.PI) {
        endAngle = endAngle - 2 * Math.PI;
      }

      return container.addShape('Sector', {
        className: 'interval',
        attrs: Util.mix({
          x: x,
          y: y,
          r: r,
          r0: r0,
          startAngle: startAngle,
          endAngle: endAngle
        }, style)
      });
    }

    var rectCfg = getRectRange(points);
    return container.addShape('rect', {
      className: 'interval',
      attrs: Util.mix(rectCfg, style)
    });
  }
}); // 金字塔 和 漏斗图

['pyramid', 'funnel'].forEach(function (shapeType) {
  Shape.registerShape('interval', shapeType, {
    getPoints: function getPoints(cfg) {
      cfg.size = cfg.size * 2; // 漏斗图的 size 是柱状图的两倍

      return getRectPoints(cfg);
    },
    draw: function draw(cfg, container) {
      var points = this.parsePoints(cfg.points);
      var nextPoints = this.parsePoints(cfg.nextPoints);
      var polygonPoints = null;

      if (nextPoints) {
        polygonPoints = [points[0], points[1], nextPoints[1], nextPoints[0]];
      } else {
        polygonPoints = [points[0], points[1]]; // pyramid 顶部是三角形，所以取中心点就好了，funnel顶部是长方形

        if (shapeType === 'pyramid') {
          polygonPoints.push(getMiddlePoint(points[2], points[3]));
        } else {
          polygonPoints.push(points[2], points[3]);
        }
      }

      var attrs = Util.mix({
        fill: cfg.color,
        points: polygonPoints
      }, Global.shape.interval, cfg.style);
      return container.addShape('polygon', {
        className: 'interval',
        attrs: attrs
      });
    }
  });
});
module.exports = Interval;