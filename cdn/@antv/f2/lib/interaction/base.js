"use strict";

require("./register");

/**
 * The parent class of interaction
 * @author sima.zhang1990@gmail.com
 */
var Util = require('../util/common');

var Hammer;

if (!Util.isWx && !Util.isMy) {
  Hammer = require('hammerjs');
}

var TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend'];

var Interaction = /*#__PURE__*/function () {
  var _proto = Interaction.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      startEvent: TOUCH_EVENTS[0],
      processEvent: TOUCH_EVENTS[1],
      endEvent: TOUCH_EVENTS[2],
      resetEvent: null
    };
  };

  // override
  _proto.start = function start() {} // override
  ;

  _proto.process = function process() {} // override
  ;

  _proto.end = function end() {} // override
  ;

  _proto.reset = function reset() {};

  function Interaction(cfg, chart) {
    var _this = this;

    this._start = function (ev) {
      _this.preStart && _this.preStart(ev);

      _this.start(ev);

      _this.onStart && _this.onStart(ev);
    };

    this._process = function (ev) {
      _this.preProcess && _this.preProcess(ev);

      _this.process(ev);

      _this.onProcess && _this.onProcess(ev);
    };

    this._end = function (ev) {
      _this.preEnd && _this.preEnd(ev);

      _this.end(ev);

      _this.onEnd && _this.onEnd(ev);
    };

    this._reset = function (ev) {
      _this.preReset && _this.preReset(ev);

      _this.reset(ev);

      _this.onReset && _this.onReset(ev);
    };

    var defaultCfg = this.getDefaultCfg();
    Util.deepMix(this, defaultCfg, cfg);
    this.chart = chart;
    this.canvas = chart.get('canvas');
    this.el = chart.get('canvas').get('el');

    this._bindEvents();
  }

  _proto._bindEvents = function _bindEvents() {
    this._clearEvents(); // clear events


    var startEvent = this.startEvent,
        processEvent = this.processEvent,
        endEvent = this.endEvent,
        resetEvent = this.resetEvent,
        el = this.el;

    if (Hammer) {
      this.hammer = new Hammer(el);
    }

    this._bindEvent(startEvent, this._start);

    this._bindEvent(processEvent, this._process);

    this._bindEvent(endEvent, this._end);

    this._bindEvent(resetEvent, this._reset);
  };

  _proto._clearEvents = function _clearEvents() {
    var startEvent = this.startEvent,
        processEvent = this.processEvent,
        endEvent = this.endEvent,
        resetEvent = this.resetEvent;

    if (this.hammer) {
      this.hammer.destroy();
      this.hammer = null;
    }

    this._clearTouchEvent(startEvent, this._start);

    this._clearTouchEvent(processEvent, this._process);

    this._clearTouchEvent(endEvent, this._end);

    this._clearTouchEvent(resetEvent, this._reset);
  };

  _proto._bindEvent = function _bindEvent(eventName, method) {
    var el = this.el;

    if (eventName) {
      if (TOUCH_EVENTS.indexOf(eventName) !== -1) {
        Util.addEventListener(el, eventName, method);
      } else if (this.hammer) {
        this.hammer.on(eventName, method);
      }
    }
  };

  _proto._clearTouchEvent = function _clearTouchEvent(eventName, method) {
    var el = this.el;

    if (eventName && TOUCH_EVENTS.indexOf(eventName) !== -1) {
      Util.removeEventListener(el, eventName, method);
    }
  };

  _proto.destroy = function destroy() {
    this._clearEvents();
  };

  return Interaction;
}();

module.exports = Interaction;