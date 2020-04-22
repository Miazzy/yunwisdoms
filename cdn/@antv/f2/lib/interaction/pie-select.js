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

var PieSelect = /*#__PURE__*/function (_Interaction) {
  (0, _inheritsLoose2["default"])(PieSelect, _Interaction);

  var _super = _createSuper(PieSelect);

  var _proto = PieSelect.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var defaultCfg = _Interaction.prototype.getDefaultCfg.call(this);

    defaultCfg = Util.mix({}, defaultCfg, {
      startEvent: 'tap',
      processEvent: null,
      animate: false,
      offset: 1,
      appendRadius: 8,
      style: {
        fillOpacity: 0.5
      },
      cancelable: true,
      defaultSelected: null // set the default selected shape

    });

    if (Util.isWx || Util.isMy) {
      // 小程序
      defaultCfg.startEvent = 'touchstart';
      defaultCfg.endEvent = 'touchend';
    }

    return defaultCfg;
  };

  function PieSelect(cfg, chart) {
    var _this;

    _this = _Interaction.call(this, cfg, chart) || this;
    var self = (0, _assertThisInitialized2["default"])(_this);
    chart.registerPlugins({
      clearInner: function clearInner() {
        self.halo && self.halo.remove(true);
        self.selected = false;
        self.selectedShape = null;
        self.lastShape = null;
        self.halo = null;
        self.defaultSelected = null;
      }
    });
    var defaultSelected = self.defaultSelected;

    if (Util.isObject(defaultSelected)) {
      var selectedShape = self._getSelectedShapeByData(defaultSelected);

      selectedShape && self._selectedShape(selectedShape);

      _this.canvas.draw();
    }

    return _this;
  }

  _proto._getSelectedShapeByData = function _getSelectedShapeByData(data) {
    var selectedShape = null;
    var chart = this.chart;
    var geom = chart.get('geoms')[0];
    var container = geom.get('container');
    var children = container.get('children');
    Util.each(children, function (child) {
      if (child.get('isShape') && child.get('className') === geom.get('type')) {
        // get geometry's shape
        var shapeData = child.get('origin')._origin;

        if (Util.isObjectValueEqual(shapeData, data)) {
          selectedShape = child;
          return false;
        }
      }
    });
    return selectedShape;
  };

  _proto._selectedShape = function _selectedShape(selectedShape) {
    var offset = this.offset,
        style = this.style,
        appendRadius = this.appendRadius,
        chart = this.chart;
    this.lastShape = selectedShape;
    var _selectedShape$_attrs = selectedShape._attrs.attrs,
        x = _selectedShape$_attrs.x,
        y = _selectedShape$_attrs.y,
        startAngle = _selectedShape$_attrs.startAngle,
        endAngle = _selectedShape$_attrs.endAngle,
        r = _selectedShape$_attrs.r,
        fill = _selectedShape$_attrs.fill;
    var frontPlot = chart.get('frontPlot');
    var halo = frontPlot.addShape('sector', {
      attrs: Util.mix({
        x: x,
        y: y,
        r: r + offset + appendRadius,
        r0: r + offset,
        fill: fill,
        startAngle: startAngle,
        endAngle: endAngle
      }, style)
    });
    this.halo = halo;
    var animate = this.animate;

    if (animate) {
      if (animate === true) {
        animate = {
          duration: 300
        };
      }

      halo.attr('r', r + offset);
      halo.animate().to(Util.mix({
        attrs: {
          r: r + offset + appendRadius
        }
      }, animate));
    }
  };

  _proto.start = function start(ev) {
    var chart = this.chart;

    if (ev.type === 'tap') {
      ev.clientX = ev.center.x;
      ev.clientY = ev.center.y;
    }

    var _Util$createEvent = Util.createEvent(ev, chart),
        x = _Util$createEvent.x,
        y = _Util$createEvent.y;

    var records = chart.getSnapRecords({
      x: x,
      y: y
    });

    if (!records.length) {
      this.selected = false;
      this.selectedShape = null;
      return;
    }

    var data = records[0]._origin;

    var selectedShape = this._getSelectedShapeByData(data);

    var lastShape = this.lastShape;
    this.selectedShape = selectedShape;
    this.selected = true;

    if (selectedShape === lastShape) {
      if (!this.cancelable) {
        return;
      }

      this.halo && this.halo.remove(true);
      this.lastShape = null;
      this.selected = false;
    } else {
      this.halo && this.halo.remove(true);

      this._selectedShape(selectedShape);
    }

    this.canvas.draw();
  };

  _proto.end = function end(ev) {
    var selectedShape = this.selectedShape;

    if (selectedShape && !selectedShape.get('destroyed')) {
      ev.data = selectedShape.get('origin')._origin;
      ev.shapeInfo = selectedShape.get('origin');
      ev.shape = selectedShape;
      ev.selected = !!this.selected;
    }
  };

  return PieSelect;
}(Interaction);

Chart.registerInteraction('pie-select', PieSelect);
module.exports = PieSelect;