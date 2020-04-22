"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = require('../../util/common');

var GuideBase = require('./base');

var _require = require('../../graphic/shape'),
    Rect = _require.Rect;

var RegionFilter = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(RegionFilter, _GuideBase);

  var _super = _createSuper(RegionFilter);

  function RegionFilter() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = RegionFilter.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'regionFilter';
    this.start = [];
    this.end = [];
    this.color = null;
    this.style = null;
  };

  _proto.render = function render(coord) {
    var start = this.parsePoint(coord, this.start);
    var end = this.parsePoint(coord, this.end);

    if (!start || !end) {
      return;
    }

    var clip = new Rect({
      attrs: {
        x: Math.min(start.x, end.x),
        y: Math.min(start.y, end.y),
        width: Math.abs(end.x - start.x),
        height: Math.abs(end.y - start.y)
      }
    }); // 新建剪切区域

    this.clip = clip;
    var chart = this.chart;
    var color = this.color;
    var style = this.style || {};
    var regionElements = [];
    var geoms = chart.get('geoms');
    geoms.map(function (geom) {
      var geomContainer = geom.get('container');
      var children = geomContainer.get('children');
      var group = geomContainer.addGroup({
        zIndex: 10,
        className: 'guide-region-filter'
      });
      children.map(function (c) {
        if (c.get('isShape')) {
          var type = c.get('type');
          var attrs = Util.mix({}, c.get('attrs'), style);

          if (color && (attrs.fill || attrs.fillStyle)) {
            attrs.fill = attrs.fillStyle = color;
          }

          if (color && (attrs.stroke || attrs.strokeStyle)) {
            attrs.stroke = attrs.strokeStyle = color;
          }

          var cfg = {
            attrs: attrs
          };

          if (type === 'custom' || type === 'Custom') {
            // custom 类型的 shape 会自定义绘制 path 的逻辑
            cfg.createPath = c.get('createPath');
            cfg.calculateBox = c.get('calculateBox');
          }

          group.addShape(type, cfg);
        }

        return c;
      });
      group.attr('clip', clip);
      geomContainer.sort();
      regionElements.push(group);
      return geom;
    });
    this.element = regionElements;
  };

  _proto.remove = function remove() {
    var element = this.element;
    Util.each(element, function (group) {
      group && group.remove(true);
    });
    this.clip && this.clip.remove(true);
  };

  return RegionFilter;
}(GuideBase);

GuideBase.RegionFilter = RegionFilter;
module.exports = RegionFilter;