"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = require('../util/common');

var Interaction = require('./base');

var Chart = require('../chart/chart');

var FilterPlugin = require('../plugin/filter');

var MoveMixin = require('./mixin/move'); // const PressTooltipMixin = require('./mixin/press-tooltip');


var UpdateScaleMixin = require('./mixin/update-scale');

var Pan = /*#__PURE__*/function (_Interaction) {
  (0, _inheritsLoose2["default"])(Pan, _Interaction);

  var _super = _createSuper(Pan);

  var _proto = Pan.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var defaultCfg = _Interaction.prototype.getDefaultCfg.call(this);

    defaultCfg = Util.mix({}, defaultCfg, {
      startEvent: 'panstart',
      processEvent: 'panmove',
      endEvent: 'panend',
      resetEvent: 'touchend',
      mode: 'x',
      panThreshold: 10,
      // Minimal pan distance required before recognizing
      pressThreshold: 9,
      // Minimal movement that is allowed while pressing
      pressTime: 251,
      // Minimal press time in ms
      currentDeltaX: null,
      currentDeltaY: null,
      limitRange: {},
      _timestamp: 0,
      lastPoint: null,
      _panCumulativeDelta: 0,
      speed: 5
    });

    if (Util.isWx || Util.isMy) {
      // 小程序
      defaultCfg.startEvent = 'touchstart';
      defaultCfg.processEvent = 'touchmove';
      defaultCfg.endEvent = 'touchend';
    }

    return defaultCfg;
  };

  function Pan(cfg, chart) {
    var _this;

    _this = _Interaction.call(this, cfg, chart) || this;
    var self = (0, _assertThisInitialized2["default"])(_this);
    var hammer = self.hammer,
        panThreshold = self.panThreshold;

    if (hammer) {
      hammer.get('pan').set({
        threshold: panThreshold
      }); // 为了兼容hammer的pan 和 tooltips里的press, 后面去hammerjs的时候需要去掉

      chart.get('canvas').on('pan', function () {});
    }

    chart.registerPlugins([FilterPlugin, {
      changeData: function changeData() {
        self.limitRange = {};
      },
      clear: function clear() {
        self.limitRange = {};
      }
    }]);
    Util.mix((0, _assertThisInitialized2["default"])(_this), UpdateScaleMixin, MoveMixin);
    return _this;
  }

  _proto.start = function start(e) {
    if (this.pressed) return;
    this.currentDeltaX = 0;
    this.currentDeltaY = 0;

    if (e.type === 'touchstart' || e.type === 'touchStart') {
      this.lastPoint = e.touches[0];
    }

    this._handleMove(e);
  };

  _proto.process = function process(e) {
    if (this.pressed) return;

    this._handleMove(e);
  };

  _proto.end = function end() {
    if (this.pressed) return;
    this.currentDeltaX = null;
    this.currentDeltaY = null;
    this.lastPoint = null;
    this._panCumulativeDelta = 0;
  };

  return Pan;
}(Interaction);

Chart.registerInteraction('pan', Pan);
module.exports = Pan;