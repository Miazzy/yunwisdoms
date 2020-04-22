"use strict";

var Util = require('../util/common');

var DEFAULT_CFG = {
  label: null,
  offsetX: 0,
  offsetY: 0
};
var DEFAULT_LABEL_CFG = {
  textBaseline: 'middle',
  fill: '#808080'
}; // 2个点的中心点

function getMiddlePoint(a, b) {
  var x = (a.x - b.x) / 2 + b.x;
  var y = (a.y - b.y) / 2 + b.y;
  return {
    x: x,
    y: y
  };
} // function getLabelPoint(points, nextPoints) {
//   let start;
//   if (nextPoints && nextPoints.length) {
//     start = getMiddlePoint(points[1], nextPoints[1]);
//   } else {
//     const nextPoint = getMiddlePoint(points[2], points[3]);
//     start = getMiddlePoint(points[1], nextPoint);
//   }
//   const end = getMiddlePoint(points[1], points[2]);
//   return { start, end };
// }


var Controller = /*#__PURE__*/function () {
  function Controller(_ref) {
    var chart = _ref.chart,
        container = _ref.container;
    this.cfg = null;
    this.chart = chart;
    this.container = container;
  }

  var _proto = Controller.prototype;

  _proto.draw = function draw() {
    var chart = this.chart,
        container = this.container,
        cfg = this.cfg;
    if (!cfg) return;
    var labelCfg = Util.mix({}, DEFAULT_CFG, cfg);
    var coord = chart.get('coord');
    var geom = chart.get('geoms')[0];
    var shapes = geom.get('container').get('children');
    shapes.forEach(function (shape) {
      var origin = shape.get('origin');
      var _origin = origin._origin,
          color = origin.color,
          points = origin.points;

      if (labelCfg.label) {
        var labelAttrs = labelCfg.label(_origin, color);
        var group = container.addGroup();
        var point = coord.convertPoint(getMiddlePoint(points[1], points[2]));
        group.addShape('Text', {
          attrs: Util.mix({
            x: point.x + labelCfg.offsetX,
            y: point.y + labelCfg.offsetY
          }, labelAttrs, DEFAULT_LABEL_CFG)
        });
      }
    });
  };

  _proto.clear = function clear() {
    var container = this.container;
    container.clear();
  };

  return Controller;
}();

module.exports = {
  init: function init(chart) {
    var frontPlot = chart.get('frontPlot');
    var labelGroup = frontPlot.addGroup({
      className: 'label',
      zIndex: 0
    });
    var labelController = new Controller({
      chart: chart,
      container: labelGroup
    });
    chart.set('intervalLabelController', labelController);

    chart.intervalLabel = function (cfg) {
      labelController.cfg = cfg;
    };
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var labelController = chart.get('intervalLabelController');
    labelController.draw();
  },
  clearInner: function clearInner(chart) {
    var labelController = chart.get('intervalLabelController');
    labelController.clear();
  }
};