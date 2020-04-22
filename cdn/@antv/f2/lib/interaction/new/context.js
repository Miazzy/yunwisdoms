"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _array = require("../../util/array");

var _const = require("../../chart/const");

var autoCat = require('@antv/scale/lib/auto/cat'); // 判断新老values是否相等，这里只要判断前后是否相等即可


function isValuesEqual(values, newValues) {
  if (values.length !== newValues.length) {
    return false;
  }

  var lastIndex = values.length - 1;
  return values[0] === newValues[0] && values[lastIndex] === newValues[lastIndex];
} // 不同交互之间共享的上下文


var defaultRange = [0, 1];

var Context = /*#__PURE__*/function () {
  // 最开始的原始值
  // 当前显示的范围
  // 缩放最小的点数
  // 最小的缩放比例, 默认通过minCount计算
  // minScale = 0.01;
  // 交互开始时，ticks个数，主要为了每次缩放后，更新ticks个数
  // lastTickCount;
  function Context(chart) {
    this.chart = null;
    this.values = null;
    this.range = defaultRange;
    this.startRange = defaultRange;
    this.minCount = 10;
    this.chart = chart;

    this._initEvent(chart);
  }

  var _proto = Context.prototype;

  _proto._initEvent = function _initEvent(chart) {
    var _this = this;

    // 在整体初始化后还需要设置一些初始状态
    chart.on(_const.EVENT_AFTER_INIT, function () {
      // 初始化value值
      var scale = _this.getPinchScale(); // 记录原始全量数据


      var values = [].concat(scale.values);
      _this.values = values; // 最小的缩放比例

      if (!_this.minScale) {
        _this.minScale = _this.minCount / values.length;
      } // 初始化的时候有设置range，则初始化成默认比例


      if (_this.range !== defaultRange) {
        _this.updateRange(_this.range);

        _this.updateTicks();
      }
    });
    chart.on(_const.EVENT_AFTER_DATA_CHANGE, function () {
      _this.updateRange(_this.range);
    });
  } // 缩放的主轴scale
  ;

  _proto.getPinchScale = function getPinchScale() {
    var chart = this.chart; // 默认缩放x轴

    var scale = chart.getXScale();
    return scale;
  } // 跟随轴的scale
  ;

  _proto.getFollowScale = function getFollowScale() {
    var chart = this.chart; // 默认缩放x轴

    var scales = chart.getYScales() || [];
    return scales[0];
  };

  _proto.start = function start() {
    var range = this.range;
    var scale = this.getPinchScale();
    var start = range[0],
        end = range[1]; // 记录交互起始的范围

    this.startRange = [start, end]; // 记录开始时的ticks个数

    this.lastTickCount = scale.tickCount;
  };

  _proto.doZoom = function doZoom(leftScale, rightScale, zoom) {
    var range = this.startRange,
        minScale = this.minScale;
    var start = range[0],
        end = range[1];
    var zoomOffset = 1 - zoom;
    var rangeLen = end - start;
    var rangeOffset = rangeLen * zoomOffset;
    var leftOffset = rangeOffset * leftScale;
    var rightOffset = rangeOffset * rightScale;
    var newStart = Math.max(0, start - leftOffset);
    var newEnd = Math.min(1, end + rightOffset);
    var newRange = [newStart, newEnd]; // 如果已经到了最小比例，则不能再继续再放大

    if (newEnd - newStart < minScale) {
      return;
    }

    this.updateRange(newRange);
  };

  _proto.doMove = function doMove(ratio) {
    // 不管是0， 还是其他，都不用处理
    if (!ratio) return;
    var range = this.startRange;
    var start = range[0],
        end = range[1];
    var rangeLen = end - start;
    var rangeOffset = rangeLen * ratio;
    var newStart = start - rangeOffset;
    var newEnd = end - rangeOffset; // 处理边界值

    var newRange;

    if (newStart < 0) {
      newRange = [0, rangeLen];
    } else if (newEnd > 1) {
      newRange = [1 - rangeLen, 1];
    } else {
      newRange = [newStart, newEnd];
    }

    this.updateRange(newRange);
  };

  _proto.updateRange = function updateRange(range) {
    var values = this.values; // 0， 1 的范围之间

    var start = range[0],
        end = range[1]; // start 不能小于0

    start = Math.max(0, start); // end 不能大于1

    end = Math.min(1, end); // 设置当前的范围

    this.range = [start, end];
    var len = values.length;
    var valueStart = start * len;
    var valueEnd = end * len; // 从原始数据里截取需要显示的数据

    var newValues = values.slice(valueStart, valueEnd);
    this.repaint(newValues);
  };

  _proto.repaint = function repaint(newValues) {
    var chart = this.chart;
    var scale = this.getPinchScale();
    var currentValues = scale.values,
        ticks = scale.ticks; // 如果新数组和当前显示的数组相同，则不更新

    if (isValuesEqual(currentValues, newValues)) {
      return;
    } // 更新主轴values


    this.updateScale(scale, {
      ticks: ticks,
      values: newValues
    });
    this.updateFollowScale(scale, newValues);
    chart.repaint();
  };

  _proto.updateFollowScale = function updateFollowScale(pinchScale, pinchValues) {
    var chart = this.chart;
    var followScale = this.getFollowScale();
    var pinchField = pinchScale.field,
        pinchScaleType = pinchScale.type;
    var followField = followScale.field; // 根据主轴的value值，找到所有从轴的value值

    var values = []; // 转成map，让查找性能更高

    var pinchValueMap = {};
    pinchValues.forEach(function (item) {
      pinchValueMap[item] = true;
    });
    var data = chart.get('data');
    data.forEach(function (item) {
      if (pinchScaleType === 'timeCat') {
        var value = pinchScale._toTimeStamp(item[pinchField]);

        if (pinchValueMap[value]) {
          values.push(item[followField]);
        }
      }
    });

    var _getRange = (0, _array.getRange)(values),
        min = _getRange.min,
        max = _getRange.max;

    this.updateScale(followScale, {
      min: min,
      max: max,
      nice: true
    });
  };

  _proto.updateScale = function updateScale(scale, cfg) {
    if (!scale) {
      return;
    }

    scale.change(cfg);
  } // 上一次的tick个数
  ;

  _proto.updateTicks = function updateTicks() {
    var chart = this.chart,
        lastTickCount = this.lastTickCount,
        values = this.values;
    var scale = this.getPinchScale();
    var currentValues = scale.values,
        tickCount = scale.tickCount,
        isRounding = scale.isRounding; // 根据当前数据的比例，和定义的tickCount计算应该需要多少个ticks

    var newTickCount = Math.round(tickCount * values.length / currentValues.length); // 如果个数没有变化，则不更新

    if (newTickCount === lastTickCount) {
      return;
    }

    var cat = autoCat({
      maxCount: newTickCount,
      data: values,
      isRounding: isRounding
    });
    var ticks = cat.ticks;
    this.updateScale(scale, {
      ticks: ticks,
      values: currentValues
    }); // 更新完后，需要重新绘制一次

    chart.repaint();
  };

  return Context;
}();

var _default = Context;
exports["default"] = _default;