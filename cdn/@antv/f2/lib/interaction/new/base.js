"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _common = require("../../util/common");

var _context = _interopRequireDefault(require("./context"));

var Base = /*#__PURE__*/function () {
  var _proto = Base.prototype;

  // 交互的上下文
  _proto.getDefaultCfg = function getDefaultCfg() {
    return {};
  };

  _proto.getInteractionContext = function getInteractionContext(chart) {
    var interactionContext = chart.get('interactionContext');

    if (interactionContext) {
      return interactionContext;
    }

    interactionContext = new _context["default"](chart);
    chart.set('interactionContext', interactionContext);
    return interactionContext;
  };

  function Base(cfg, chart) {
    var _this = this;

    this.type = '';
    this.startEvent = 'touchstart';
    this.processEvent = 'touchmove';
    this.endEvent = 'touchend';
    this.resetEvent = null;
    this.context = null;

    this._start = function (ev) {
      _this.start(ev);
    };

    this._process = function (ev) {
      _this.process(ev);
    };

    this._end = function (ev) {
      _this.end(ev);
    };

    this._reset = function (ev) {
      _this.reset(ev);
    };

    (0, _common.mix)(this, this.getDefaultCfg(), cfg);
    this.context = this.getInteractionContext(chart);
    this.chart = chart; // 只处理range, 暂时先这么处理后面再看情况调整

    var range = this.range;

    if (range) {
      this.context.range = range;
    }

    this._bindEvents(chart);
  }

  _proto._bindEvents = function _bindEvents(chart) {
    var startEvent = this.startEvent,
        processEvent = this.processEvent,
        endEvent = this.endEvent,
        resetEvent = this.resetEvent;
    var canvas = chart.get('canvas'); // 统一绑定事件

    canvas.on(startEvent, this._start);
    canvas.on(processEvent, this._process);
    canvas.on(endEvent, this._end);
    canvas.on(resetEvent, this._reset);
  };

  _proto._clearEvents = function _clearEvents() {
    var chart = this.chart,
        startEvent = this.startEvent,
        processEvent = this.processEvent,
        endEvent = this.endEvent,
        resetEvent = this.resetEvent;
    var canvas = chart.get('canvas'); // 统一绑定事件

    canvas.off(startEvent, this._start);
    canvas.off(processEvent, this._process);
    canvas.off(endEvent, this._end);
    canvas.off(resetEvent, this._start);
  };

  // override
  _proto.start = function start() {} // override
  ;

  _proto.process = function process() {} // override
  ;

  _proto.end = function end() {} // override
  ;

  _proto.reset = function reset() {};

  _proto.destroy = function destroy() {
    this._clearEvents();
  };

  return Base;
}();

var _default = Base;
exports["default"] = _default;