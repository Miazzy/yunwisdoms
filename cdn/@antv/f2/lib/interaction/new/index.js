"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _register = _interopRequireDefault(require("../register"));

var _pan = _interopRequireDefault(require("./pan"));

var _pinch = _interopRequireDefault(require("./pinch"));

// 注册交互
_register["default"].registerInteraction('pan', _pan["default"]);

_register["default"].registerInteraction('pinch', _pinch["default"]);