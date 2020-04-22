"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Geom = require('./base');

var Util = require('../util/common');

var SizeMixin = require('./mixin/size');

require('./shape/schema');

var Schema = /*#__PURE__*/function (_Geom) {
  (0, _inheritsLoose2["default"])(Schema, _Geom);

  var _super = _createSuper(Schema);

  var _proto = Schema.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);

    cfg.type = 'schema';
    cfg.shapeType = 'schema';
    cfg.generatePoints = true;
    return cfg;
  };

  function Schema(cfg) {
    var _this;

    _this = _Geom.call(this, cfg) || this;
    Util.mix((0, _assertThisInitialized2["default"])(_this), SizeMixin);
    return _this;
  }

  _proto.init = function init() {
    _Geom.prototype.init.call(this); // 绑定事件


    this.initEvent();
  };

  _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
    var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);

    cfg.size = this.getNormalizedSize(obj);
    return cfg;
  };

  _proto.clearInner = function clearInner() {
    _Geom.prototype.clearInner.call(this);

    this.set('defaultSize', null);
  };

  return Schema;
}(Geom);

Geom.Schema = Schema;
module.exports = Schema;