"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
var _exportNames = {
  isObjectValueEqual: true,
  parsePadding: true,
  directionEnabled: true,
  upperFirst: true,
  lowerFirst: true,
  isString: true,
  isNumber: true,
  isBoolean: true,
  isFunction: true,
  isDate: true,
  isArray: true,
  isNil: true,
  isObject: true,
  isPlainObject: true,
  isEqual: true,
  deepMix: true,
  mix: true,
  each: true,
  uniq: true,
  find: true,
  Array: true
};
exports.isObjectValueEqual = isObjectValueEqual;
exports.parsePadding = parsePadding;
exports.directionEnabled = directionEnabled;
exports.Array = void 0;

var _util = require("@antv/util");

exports.upperFirst = _util.upperFirst;
exports.lowerFirst = _util.lowerFirst;
exports.isString = _util.isString;
exports.isNumber = _util.isNumber;
exports.isBoolean = _util.isBoolean;
exports.isFunction = _util.isFunction;
exports.isDate = _util.isDate;
exports.isArray = _util.isArray;
exports.isNil = _util.isNil;
exports.isObject = _util.isObject;
exports.isPlainObject = _util.isPlainObject;
exports.isEqual = _util.isEqual;
exports.deepMix = _util.deepMix;
exports.mix = _util.mix;
exports.each = _util.each;
exports.uniq = _util.uniq;
exports.find = _util.find;

var ArrayUtil = _interopRequireWildcard(require("./array"));

exports.Array = ArrayUtil;

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _dom[key];
});

/**
 * @fileOverview Utility for F2
 * @author dxq613 @gmail.com
 * @author sima.zhang1990@gmail.com
 */
function isObjectValueEqual(a, b) {
  // for vue.js
  a = Object.assign({}, a);
  b = Object.assign({}, b);
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0, len = aProps.length; i < len; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

function parsePadding(padding) {
  var top;
  var right;
  var bottom;
  var left;

  if ((0, _util.isNumber)(padding) || (0, _util.isString)(padding)) {
    top = bottom = left = right = padding;
  } else if ((0, _util.isArray)(padding)) {
    top = padding[0];
    right = !(0, _util.isNil)(padding[1]) ? padding[1] : padding[0];
    bottom = !(0, _util.isNil)(padding[2]) ? padding[2] : padding[0];
    left = !(0, _util.isNil)(padding[3]) ? padding[3] : right;
  }

  return [top, right, bottom, left];
}

function directionEnabled(mode, dir) {
  if (mode === undefined) {
    return true;
  } else if (typeof mode === 'string') {
    return mode.indexOf(dir) !== -1;
  }

  return false;
}