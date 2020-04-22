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

var MoveMixin = require('./mixin/move');

var UpdateScaleMixin = require('./mixin/update-scale');

var Swipe = /*#__PURE__*/function (_Interaction) {
  (0, _inheritsLoose2["default"])(Swipe, _Interaction);

  var _super = _createSuper(Swipe);

  var _proto = Swipe.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var defaultCfg = _Interaction.prototype.getDefaultCfg.call(this);

    defaultCfg = Util.mix({}, defaultCfg, {
      startEvent: 'touchstart',
      processEvent: 'swipe',
      endEvent: 'touchend',
      currentDeltaX: null,
      threshold: 10,
      // Minimal distance required before recognizing.
      velocity: 0.3,
      // Minimal velocity required before recognizing, unit is in px per ms.
      limitRange: {},
      _timestamp: 0,
      _panCumulativeDelta: 0,
      speed: 5
    });
    return defaultCfg;
  };

  function Swipe(cfg, chart) {
    var _this;

    _this = _Interaction.call(this, cfg, chart) || this;
    var self = (0, _assertThisInitialized2["default"])(_this);
    var hammer = self.hammer,
        threshold = self.threshold,
        velocity = self.velocity;

    if (hammer) {
      hammer.get('swipe').set({
        direction: 6,
        // only support horizontal
        threshold: threshold,
        velocity: velocity
      });
    }

    chart.registerPlugins([FilterPlugin, {
      changeData: function changeData() {
        self.limitRange = {};
      },
      clear: function clear() {
        self.limitRange = {};
      }
    }]);
    self.mode = 'x';
    Util.mix(self, UpdateScaleMixin, MoveMixin);
    return _this;
  }

  _proto.process = function process(e) {
    this.currentDeltaX = 0;

    this._handleMove(e);
  };

  _proto.end = function end() {
    this.currentDeltaX = null;
    this._panCumulativeDelta = 0;
  };

  return Swipe;
}(Interaction);

Chart.registerInteraction('swipe', Swipe);
module.exports = Swipe;