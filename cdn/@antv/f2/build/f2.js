(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["F2"] = factory();
	else
		root["F2"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 246);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(49);

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

var _util = __webpack_require__(20);

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

var ArrayUtil = _interopRequireWildcard(__webpack_require__(75));

exports.Array = ArrayUtil;

var _dom = __webpack_require__(62);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(50);

var assertThisInitialized = __webpack_require__(22);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return Array.isArray ? Array.isArray(value) : Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Array');
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Theme = __webpack_require__(78);

var Util = __webpack_require__(0);

var Global = {
  version: '3.6.3',
  scales: {},
  widthRatio: {
    column: 1 / 2,
    rose: 0.999999,
    multiplePie: 3 / 4
  },
  lineDash: [4, 4]
};

Global.setTheme = function (theme) {
  Util.deepMix(this, theme);
};

Global.setTheme(Theme);
module.exports = Global;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isArrayLike = function (value) {
  /**
   * isArrayLike([1, 2, 3]) => true
   * isArrayLike(document.body.children) => true
   * isArrayLike('abc') => true
   * isArrayLike(Function) => false
   */
  return value !== null && typeof value !== 'function' && isFinite(value.length);
};

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_object__ = __webpack_require__(29);



function each(elements, func) {
  if (!elements) {
    return;
  }

  var rst;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(elements)) {
    for (var i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i);

      if (rst === false) {
        break;
      }
    }
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__is_object__["a" /* default */])(elements)) {
    for (var k in elements) {
      if (elements.hasOwnProperty(k)) {
        rst = func(elements[k], k);

        if (rst === false) {
          break;
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (each);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);
/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Function');
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Element = __webpack_require__(46);

var Shape = /*#__PURE__*/function (_Element) {
  (0, _inheritsLoose2["default"])(Shape, _Element);

  var _super = _createSuper(Shape);

  function Shape() {
    return _Element.apply(this, arguments) || this;
  }

  var _proto = Shape.prototype;

  _proto._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isShape: true,
      attrs: {}
    };
  };

  _proto.getType = function getType() {
    return this._attrs.type;
  };

  _proto.drawInner = function drawInner(context) {
    var self = this;
    var attrs = self.get('attrs');
    self.createPath(context);
    var originOpacity = context.globalAlpha;

    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;

      if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        context.fill();
        context.globalAlpha = originOpacity;
      } else {
        context.fill();
      }
    }

    if (self.hasStroke()) {
      var lineWidth = attrs.lineWidth;

      if (lineWidth > 0) {
        var strokeOpacity = attrs.strokeOpacity;

        if (!Util.isNil(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = strokeOpacity;
        }

        context.stroke();
      }
    }
  };

  _proto.getBBox = function getBBox() {
    var bbox = this._attrs.bbox;

    if (!bbox) {
      bbox = this.calculateBox();

      if (bbox) {
        bbox.x = bbox.minX;
        bbox.y = bbox.minY;
        bbox.width = bbox.maxX - bbox.minX;
        bbox.height = bbox.maxY - bbox.minY;
      }

      this._attrs.bbox = bbox;
    }

    return bbox;
  };

  _proto.calculateBox = function calculateBox() {
    return null;
  };

  _proto.createPath = function createPath() {};

  return Shape;
}(Element);

module.exports = Shape;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var toString = {}.toString;

var isType = function (value, type) {
  return toString.call(value) === '[object ' + type + ']';
};

/* harmony default export */ __webpack_exports__["a"] = (isType);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);
/**
 * 判断是否数字
 * @return {Boolean} 是否数字
 */


var isNumber = function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Number');
};

/* harmony default export */ __webpack_exports__["a"] = (isNumber);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 2 Dimensional Vector
 * @module vector2
 */
module.exports = {
  /**
   * Creates a new, empty vector2
   *
   * @return {vector2} a new 2D vector
   */
  create: function create() {
    return [0, 0];
  },

  /**
   * Calculates the length of a vector2
   *
   * @param {vector2} v vector to calculate length of
   * @return {Number} length of v
   */
  length: function length(v) {
    var x = v[0];
    var y = v[1];
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Normalize a vector2
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v vector to normalize
   * @return {vector2} out
   */
  normalize: function normalize(out, v) {
    var len = this.length(v);

    if (len === 0) {
      out[0] = 0;
      out[1] = 0;
    } else {
      out[0] = v[0] / len;
      out[1] = v[1] / len;
    }

    return out;
  },

  /**
   * Adds two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  add: function add(out, v1, v2) {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
  },

  /**
   * Subtracts vector v2 from vector v1
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  sub: function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
  },

  /**
   * Scales a vector2 by a scalar number
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to scale
   * @param {Number} s amount to scale the vector by
   * @return {vector2} out
   */
  scale: function scale(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
  },

  /**
   * Calculates the dot product of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} dot product of v1 and v2
   */
  dot: function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
  },

  /**
   * Calculates the direction of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Boolean} the direction of v1 and v2
   */
  direction: function direction(v1, v2) {
    return v1[0] * v2[1] - v2[0] * v1[1];
  },

  /**
   * Calculates the angle of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} angle of v1 and v2
   */
  angle: function angle(v1, v2) {
    var theta = this.dot(v1, v2) / (this.length(v1) * this.length(v2));
    return Math.acos(theta);
  },

  /**
   * Calculates the angle of two vector2's with direction
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @param {Boolean} direction the direction of two vector2's
   * @return {Number} angle of v1 and v2
   */
  angleTo: function angleTo(v1, v2, direction) {
    var angle = this.angle(v1, v2);
    var angleLargeThanPI = this.direction(v1, v2) >= 0;

    if (direction) {
      if (angleLargeThanPI) {
        return Math.PI * 2 - angle;
      }

      return angle;
    }

    if (angleLargeThanPI) {
      return angle;
    }

    return Math.PI * 2 - angle;
  },

  /**
   * whether a vector2 is zero vector
   *
   * @param  {vector2} v vector to calculate
   * @return {Boolean}   is or not a zero vector
   */
  zero: function zero(v) {
    return v[0] === 0 && v[1] === 0;
  },

  /**
   * Calculates the euclidian distance between two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} distance between a and b
   */
  distance: function distance(v1, v2) {
    var x = v2[0] - v1[0];
    var y = v2[1] - v1[1];
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Creates a new vector2 initialized with values from an existing vector
   *
   * @param {vector2} v vector to clone
   * @return {Array} a new 2D vector
   */
  clone: function clone(v) {
    return [v[0], v[1]];
  },

  /**
   * Return the minimum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  min: function min(out, v1, v2) {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
  },

  /**
   * Return the maximum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  max: function max(out, v1, v2) {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
  },

  /**
   * Transforms the vector2 with a mat2d
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to transform
   * @param {mat2d} m matrix to transform with
   * @return {vector2} out
   */
  transformMat2d: function transformMat2d(out, v, m) {
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// isFinite,
var isNil = function (value) {
  /**
   * isNil(null) => true
   * isNil() => true
   */
  return value === null || value === undefined;
};

/* harmony default export */ __webpack_exports__["a"] = (isNil);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(44);

var isArray = __webpack_require__(34);

var each = function each(elements, func) {
  if (!elements) {
    return;
  }

  var rst = void 0;

  if (isArray(elements)) {
    for (var i = 0, len = elements.length; i < len; i++) {
      rst = func(elements[i], i);

      if (rst === false) {
        break;
      }
    }
  } else if (isObject(elements)) {
    for (var k in elements) {
      if (elements.hasOwnProperty(k)) {
        rst = func(elements[k], k);

        if (rst === false) {
          break;
        }
      }
    }
  }
};

module.exports = each;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var G = {
  Canvas: __webpack_require__(176),
  Group: __webpack_require__(67),
  Shape: __webpack_require__(10),
  Matrix: __webpack_require__(31),
  Vector2: __webpack_require__(13)
};

__webpack_require__(180);

__webpack_require__(181);

__webpack_require__(182);

__webpack_require__(183);

__webpack_require__(184);

__webpack_require__(185);

__webpack_require__(186);

__webpack_require__(187);

__webpack_require__(189);

module.exports = G;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(49);

var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var Attr = _interopRequireWildcard(__webpack_require__(161));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Base = __webpack_require__(63);

var GROUP_ATTRS = ['color', 'size', 'shape'];
var FIELD_ORIGIN = '_origin';
var FIELD_ORIGIN_Y = '_originY';

var Global = __webpack_require__(6);

var GeometryShape = __webpack_require__(19);

var Adjust = __webpack_require__(33);

function parseFields(field) {
  if (Util.isArray(field)) {
    return field;
  }

  if (Util.isString(field)) {
    return field.split('*');
  }

  return [field];
}
/**
 * The parent class for Geometry
 * @class Geom
 */


var Geom = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Geom, _Base);

  var _super = _createSuper(Geom);

  function Geom() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Geom.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * geometry type
       * @type {String}
       */
      type: null,

      /**
       * the data of geometry
       * @type {Array}
       */
      data: null,

      /**
       * the attrs of geo,etry
       * @type {Object}
       */
      attrs: {},
      scales: {},

      /**
       * group for storing the shapes
       * @type {Canvas}
       */
      container: null,

      /**
       * style options
       * @type {Object}
       */
      styleOptions: null,
      chart: null,
      shapeType: '',

      /**
       * wether to generate key points for each shape
       * @protected
       * @type {Boolean}
       */
      generatePoints: false,
      attrOptions: {},
      sortable: false,
      startOnZero: true,
      visible: true,
      connectNulls: false,
      // 是否丢弃没有值的分组。
      ignoreEmptyGroup: false
    };
  };

  _proto.init = function init() {
    var self = this;

    self._initAttrs();

    self._processData();
  };

  _proto._getGroupScales = function _getGroupScales() {
    var self = this;
    var scales = [];
    Util.each(GROUP_ATTRS, function (attrName) {
      var attr = self.getAttr(attrName);

      if (attr) {
        var attrScales = attr.scales;
        Util.each(attrScales, function (scale) {
          if (scale && scale.isCategory && scales.indexOf(scale) === -1) {
            scales.push(scale);
          }
        });
      }
    });
    return scales;
  };

  _proto._groupData = function _groupData(data) {
    var self = this;
    var colDefs = self.get('colDefs');

    var groupScales = self._getGroupScales();

    if (groupScales.length) {
      var appendConditions = {};
      var names = [];
      Util.each(groupScales, function (scale) {
        var field = scale.field;
        names.push(field);

        if (colDefs && colDefs[field] && colDefs[field].values) {
          // users have defined
          appendConditions[scale.field] = colDefs[field].values;
        }
      });
      return Util.Array.group(data, names, appendConditions);
    }

    return [data];
  };

  _proto._setAttrOptions = function _setAttrOptions(attrName, attrCfg) {
    var options = this.get('attrOptions');
    options[attrName] = attrCfg;
    var attrs = this.get('attrs'); // 说明已经初始化过了

    if (Object.keys(attrs).length) {
      this._createAttr(attrName, attrCfg);
    }
  };

  _proto._createAttrOption = function _createAttrOption(attrName, field, cfg, defaultValues) {
    var attrCfg = {};
    attrCfg.field = field;

    if (cfg) {
      if (Util.isFunction(cfg)) {
        attrCfg.callback = cfg;
      } else {
        attrCfg.values = cfg;
      }
    } else {
      attrCfg.values = defaultValues;
    }

    this._setAttrOptions(attrName, attrCfg);
  };

  _proto._createAttr = function _createAttr(type, option) {
    var self = this;
    var attrs = self.get('attrs');
    var coord = self.get('coord');
    var className = Util.upperFirst(type);
    var fields = parseFields(option.field);

    if (type === 'position') {
      option.coord = coord;
    }

    var scales = [];

    for (var i = 0, len = fields.length; i < len; i++) {
      var field = fields[i];

      var scale = self._createScale(field);

      scales.push(scale);
    }

    if (type === 'position') {
      var yScale = scales[1]; // 饼图的处理，但是还不知道为啥

      if (coord.type === 'polar' && coord.transposed && self.hasAdjust('stack')) {
        if (yScale.values.length) {
          yScale.change({
            nice: false,
            min: 0,
            max: Math.max.apply(null, yScale.values)
          });
        }
      }
    }

    option.scales = scales;
    var attr = new Attr[className](option);
    attrs[type] = attr;
    return attr;
  };

  _proto._initAttrs = function _initAttrs() {
    var self = this;
    var attrOptions = self.get('attrOptions');

    for (var type in attrOptions) {
      if (attrOptions.hasOwnProperty(type)) {
        this._createAttr(type, attrOptions[type]);
      }
    }
  };

  _proto._createScale = function _createScale(field) {
    var scales = this.get('scales');
    var scale = scales[field];

    if (!scale) {
      scale = this.get('chart').createScale(field);
      scales[field] = scale;
    }

    return scale;
  };

  _proto._processData = function _processData() {
    var self = this;
    var data = this.get('data');
    var dataArray = [];

    var groupedArray = this._groupData(data);

    if (this.get('ignoreEmptyGroup')) {
      var yScale = this.getYScale();
      groupedArray = groupedArray.filter(function (group) {
        return group.some(function (item) {
          return typeof item[yScale.field] !== 'undefined';
        });
      });
    }

    for (var i = 0, len = groupedArray.length; i < len; i++) {
      var subData = groupedArray[i];

      var tempData = self._saveOrigin(subData);

      if (this.hasAdjust('dodge')) {
        self._numberic(tempData);
      }

      dataArray.push(tempData);
    }

    if (self.get('adjust')) {
      self._adjustData(dataArray);
    }

    if (self.get('sortable')) {
      self._sort(dataArray);
    }

    self.set('dataArray', dataArray);
    return dataArray;
  };

  _proto._saveOrigin = function _saveOrigin(data) {
    var rst = [];

    for (var i = 0, len = data.length; i < len; i++) {
      var origin = data[i];
      var obj = {};

      for (var k in origin) {
        obj[k] = origin[k];
      }

      obj[FIELD_ORIGIN] = origin;
      rst.push(obj);
    }

    return rst;
  };

  _proto._numberic = function _numberic(data) {
    var positionAttr = this.getAttr('position');
    var scales = positionAttr.scales;

    for (var j = 0, len = data.length; j < len; j++) {
      var obj = data[j];
      var count = Math.min(2, scales.length);

      for (var i = 0; i < count; i++) {
        var scale = scales[i];

        if (scale.isCategory) {
          var field = scale.field;
          obj[field] = scale.translate(obj[field]);
        }
      }
    }
  };

  _proto._adjustData = function _adjustData(dataArray) {
    var self = this;
    var adjust = self.get('adjust');

    if (adjust) {
      var adjustType = Util.upperFirst(adjust.type);

      if (!Adjust[adjustType]) {
        throw new Error('not support such adjust : ' + adjust);
      }

      var xScale = self.getXScale();
      var yScale = self.getYScale();
      var cfg = Util.mix({
        xField: xScale.field,
        yField: yScale.field
      }, adjust);
      var adjustObject = new Adjust[adjustType](cfg);
      adjustObject.processAdjust(dataArray);

      if (adjustType === 'Stack') {
        self._updateStackRange(yScale.field, yScale, dataArray);
      }
    }
  };

  _proto._updateStackRange = function _updateStackRange(field, scale, dataArray) {
    var mergeArray = Util.Array.merge(dataArray);
    var min = scale.min;
    var max = scale.max;

    for (var i = 0, len = mergeArray.length; i < len; i++) {
      var obj = mergeArray[i];
      var tmpMin = Math.min.apply(null, obj[field]);
      var tmpMax = Math.max.apply(null, obj[field]);

      if (tmpMin < min) {
        min = tmpMin;
      }

      if (tmpMax > max) {
        max = tmpMax;
      }
    }

    if (min < scale.min || max > scale.max) {
      scale.change({
        min: min,
        max: max
      });
    }
  };

  _proto._sort = function _sort(mappedArray) {
    var self = this;
    var xScale = self.getXScale();
    var field = xScale.field,
        type = xScale.type;

    if (type !== 'identity' && xScale.values.length > 1) {
      Util.each(mappedArray, function (itemArr) {
        itemArr.sort(function (obj1, obj2) {
          if (type === 'timeCat') {
            return xScale._toTimeStamp(obj1[FIELD_ORIGIN][field]) - xScale._toTimeStamp(obj2[FIELD_ORIGIN][field]);
          }

          return xScale.translate(obj1[FIELD_ORIGIN][field]) - xScale.translate(obj2[FIELD_ORIGIN][field]);
        });
      });
    }

    self.set('hasSorted', true);
    self.set('dataArray', mappedArray);
  };

  _proto.paint = function paint() {
    var self = this;
    var dataArray = self.get('dataArray');
    var mappedArray = [];
    var shapeFactory = self.getShapeFactory();
    shapeFactory.setCoord(self.get('coord'));

    self._beforeMapping(dataArray);

    for (var i = 0, len = dataArray.length; i < len; i++) {
      var data = dataArray[i];

      if (data.length) {
        data = self._mapping(data);
        mappedArray.push(data);
        self.draw(data, shapeFactory);
      }
    }

    self.set('dataArray', mappedArray);
  };

  _proto.getShapeFactory = function getShapeFactory() {
    var shapeFactory = this.get('shapeFactory');

    if (!shapeFactory) {
      var shapeType = this.get('shapeType');
      shapeFactory = GeometryShape.getShapeFactory(shapeType);
      this.set('shapeFactory', shapeFactory);
    }

    return shapeFactory;
  };

  _proto._mapping = function _mapping(data) {
    var self = this;
    var attrs = self.get('attrs');
    var yField = self.getYScale().field; // 用来缓存转换的值，减少mapping耗时

    var mappedCache = {};

    for (var k in attrs) {
      if (attrs.hasOwnProperty(k)) {
        var attr = attrs[k];
        var names = attr.names;
        var scales = attr.scales;

        for (var i = 0, len = data.length; i < len; i++) {
          var record = data[i];
          record[FIELD_ORIGIN_Y] = record[yField]; // 获取视觉属性对应的value值
          // 位置的缓存命中率低，还是每次单独计算

          if (attr.type === 'position') {
            var values = self._getAttrValues(attr, record);

            for (var j = 0, _len = values.length; j < _len; j++) {
              var val = values[j];
              var name = names[j];
              record[name] = Util.isArray(val) && val.length === 1 ? val[0] : val;
            }
          } else {
            // 除了position其他都只有一项
            var _name = names[0];
            var field = scales[0].field;
            var value = record[field];
            var key = "" + _name + value;
            var _values = mappedCache[key];

            if (!_values) {
              _values = self._getAttrValues(attr, record);
              mappedCache[key] = _values;
            }

            record[_name] = _values[0];
          }
        }
      }
    }

    return data;
  };

  _proto._getAttrValues = function _getAttrValues(attr, record) {
    var scales = attr.scales;
    var params = [];

    for (var i = 0, len = scales.length; i < len; i++) {
      var scale = scales[i];
      var field = scale.field;

      if (scale.type === 'identity') {
        params.push(scale.value);
      } else {
        params.push(record[field]);
      }
    }

    var values = attr.mapping.apply(attr, params);
    return values;
  };

  _proto.getAttrValue = function getAttrValue(attrName, record) {
    var attr = this.getAttr(attrName);
    var rst = null;

    if (attr) {
      var values = this._getAttrValues(attr, record);

      rst = values[0];
    }

    return rst;
  };

  _proto._beforeMapping = function _beforeMapping(dataArray) {
    var self = this;

    if (self.get('generatePoints')) {
      self._generatePoints(dataArray);
    }
  };

  _proto.isInCircle = function isInCircle() {
    var coord = this.get('coord');
    return coord && coord.isPolar;
  };

  _proto.getCallbackCfg = function getCallbackCfg(fields, cfg, origin) {
    if (!fields) {
      return cfg;
    }

    var tmpCfg = {};
    var params = fields.map(function (field) {
      return origin[field];
    });
    Util.each(cfg, function (v, k) {
      if (Util.isFunction(v)) {
        tmpCfg[k] = v.apply(null, params);
      } else {
        tmpCfg[k] = v;
      }
    });
    return tmpCfg;
  };

  _proto.getDrawCfg = function getDrawCfg(obj) {
    var self = this;
    var isInCircle = self.isInCircle();
    var cfg = {
      origin: obj,
      x: obj.x,
      y: obj.y,
      color: obj.color,
      size: obj.size,
      shape: obj.shape,
      isInCircle: isInCircle,
      opacity: obj.opacity
    };
    var styleOptions = self.get('styleOptions');

    if (styleOptions && styleOptions.style) {
      cfg.style = self.getCallbackCfg(styleOptions.fields, styleOptions.style, obj[FIELD_ORIGIN]);
    }

    if (self.get('generatePoints')) {
      cfg.points = obj.points;
      cfg.nextPoints = obj.nextPoints;
    }

    if (isInCircle) {
      cfg.center = self.get('coord').center;
    }

    return cfg;
  };

  _proto.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    var yScale = self.getYScale();
    Util.each(data, function (obj, index) {
      if (yScale && Util.isNil(obj._origin[yScale.field])) {
        return;
      }

      obj.index = index;
      var cfg = self.getDrawCfg(obj);
      var shape = obj.shape;
      self.drawShape(shape, obj, cfg, container, shapeFactory);
    });
  };

  _proto.drawShape = function drawShape(shape, shapeData, cfg, container, shapeFactory) {
    var gShape = shapeFactory.drawShape(shape, cfg, container);

    if (gShape) {
      Util.each([].concat(gShape), function (s) {
        s.set('origin', shapeData);
      });
    }
  };

  _proto._generatePoints = function _generatePoints(dataArray) {
    var self = this;
    var shapeFactory = self.getShapeFactory();
    var shapeAttr = self.getAttr('shape');
    Util.each(dataArray, function (data) {
      for (var i = 0, len = data.length; i < len; i++) {
        var obj = data[i];
        var cfg = self.createShapePointsCfg(obj);
        var shape = shapeAttr ? self._getAttrValues(shapeAttr, obj) : null;
        var points = shapeFactory.getShapePoints(shape, cfg);
        obj.points = points;
      }
    }); // 添加nextPoints

    Util.each(dataArray, function (data, index) {
      var nextData = dataArray[index + 1];

      if (nextData) {
        data[0].nextPoints = nextData[0].points;
      }
    });
  }
  /**
   * get the info of each shape
   * @protected
   * @param  {Object} obj the data item
   * @return {Object} cfg return the result
   */
  ;

  _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
    var xScale = this.getXScale();
    var yScale = this.getYScale();

    var x = this._normalizeValues(obj[xScale.field], xScale);

    var y;

    if (yScale) {
      y = this._normalizeValues(obj[yScale.field], yScale);
    } else {
      y = obj.y ? obj.y : 0.1;
    }

    return {
      x: x,
      y: y,
      y0: yScale ? yScale.scale(this.getYMinValue()) : undefined
    };
  };

  _proto.getYMinValue = function getYMinValue() {
    var yScale = this.getYScale();
    var min = yScale.min,
        max = yScale.max;
    var value;

    if (this.get('startOnZero')) {
      if (max <= 0 && min <= 0) {
        value = max;
      } else {
        value = min >= 0 ? min : 0;
      }
    } else {
      value = min;
    }

    return value;
  };

  _proto._normalizeValues = function _normalizeValues(values, scale) {
    var rst = [];

    if (Util.isArray(values)) {
      for (var i = 0, len = values.length; i < len; i++) {
        var v = values[i];
        rst.push(scale.scale(v));
      }
    } else {
      rst = scale.scale(values);
    }

    return rst;
  };

  _proto.getAttr = function getAttr(name) {
    return this.get('attrs')[name];
  };

  _proto.getXScale = function getXScale() {
    return this.getAttr('position').scales[0];
  };

  _proto.getYScale = function getYScale() {
    return this.getAttr('position').scales[1];
  };

  _proto.hasAdjust = function hasAdjust(adjust) {
    return this.get('adjust') && this.get('adjust').type === adjust;
  };

  _proto._getSnap = function _getSnap(scale, item, arr) {
    var i = 0;
    var values;
    var yField = this.getYScale().field; // 叠加的维度

    if (this.hasAdjust('stack') && scale.field === yField) {
      values = [];
      arr.forEach(function (obj) {
        values.push(obj[FIELD_ORIGIN_Y]);
      });

      for (var len = values.length; i < len; i++) {
        if (values[0][0] > item) {
          break;
        }

        if (values[values.length - 1][1] <= item) {
          i = values.length - 1;
          break;
        }

        if (values[i][0] <= item && values[i][1] > item) {
          break;
        }
      }
    } else {
      values = scale.values;
      values.sort(function (a, b) {
        return a - b;
      });

      for (var _len2 = values.length; i < _len2; i++) {
        // 如果只有1个点直接返回第1个点
        if (_len2 <= 1) {
          break;
        } // 第1个点和第2个点之间


        if ((values[0] + values[1]) / 2 > item) {
          break;
        } // 中间的点


        if ((values[i - 1] + values[i]) / 2 <= item && (values[i + 1] + values[i]) / 2 > item) {
          break;
        } // 最后2个点


        if ((values[values.length - 2] + values[values.length - 1]) / 2 <= item) {
          i = values.length - 1;
          break;
        }
      }
    }

    var result = values[i];
    return result;
  };

  _proto.getSnapRecords = function getSnapRecords(point) {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScale = self.getYScale();
    var xfield = xScale.field;
    var dataArray = self.get('dataArray');

    if (!this.get('hasSorted')) {
      this._sort(dataArray);
    }

    var rst = [];
    var invertPoint = coord.invertPoint(point);
    var invertPointX = invertPoint.x;

    if (self.isInCircle() && !coord.transposed && invertPointX > (1 + xScale.rangeMax()) / 2) {
      invertPointX = xScale.rangeMin();
    }

    var xValue = xScale.invert(invertPointX);

    if (!xScale.isCategory) {
      xValue = self._getSnap(xScale, xValue);
    }

    var tmp = [];
    dataArray.forEach(function (data) {
      data.forEach(function (obj) {
        var originValue = Util.isNil(obj[FIELD_ORIGIN]) ? obj[xfield] : obj[FIELD_ORIGIN][xfield];

        if (self._isEqual(originValue, xValue, xScale)) {
          tmp.push(obj);
        }
      });
    }); // special for pie chart

    if (this.hasAdjust('stack') && coord.isPolar && coord.transposed) {
      if (invertPointX >= 0 && invertPointX <= 1) {
        var yValue = yScale.invert(invertPoint.y);
        yValue = self._getSnap(yScale, yValue, tmp);
        tmp.forEach(function (obj) {
          if (Util.isArray(yValue) ? obj[FIELD_ORIGIN_Y].toString() === yValue.toString() : obj[FIELD_ORIGIN_Y] === yValue) {
            rst.push(obj);
          }
        });
      }
    } else {
      rst = tmp;
    }

    return rst;
  };

  _proto._isEqual = function _isEqual(originValue, value, scale) {
    if (scale.type === 'timeCat') {
      return scale._toTimeStamp(originValue) === value;
    }

    return value === originValue;
  };

  _proto.position = function position(field) {
    this._setAttrOptions('position', {
      field: field
    });

    return this;
  };

  _proto.color = function color(field, values) {
    this._createAttrOption('color', field, values, Global.colors);

    return this;
  };

  _proto.size = function size(field, values) {
    this._createAttrOption('size', field, values, Global.sizes);

    return this;
  };

  _proto.shape = function shape(field, values) {
    var type = this.get('type');
    var shapes = Global.shapes[type] || [];

    this._createAttrOption('shape', field, values, shapes);

    return this;
  };

  _proto.style = function style(field, cfg) {
    var styleOptions = this.get('styleOptions');

    if (!styleOptions) {
      styleOptions = {};
      this.set('styleOptions', styleOptions);
    }

    if (Util.isObject(field)) {
      cfg = field;
      field = null;
    }

    var fields;

    if (field) {
      fields = parseFields(field);
    }

    styleOptions.fields = fields;
    styleOptions.style = cfg;
    return this;
  };

  _proto.adjust = function adjust(type) {
    if (Util.isString(type)) {
      type = {
        type: type
      };
    }

    this.set('adjust', type);
    return this;
  };

  _proto.animate = function animate(cfg) {
    this.set('animateCfg', cfg);
    return this;
  };

  _proto.changeData = function changeData(data) {
    this.set('data', data); // 改变数据后，情况度量，因为需要重新实例化

    this.set('scales', {});
    this.init();
  };

  _proto.clearInner = function clearInner() {
    var container = this.get('container');

    if (container) {
      container.clear(); // container.setMatrix([ 1, 0, 0, 1, 0, 0 ]);
    }
  };

  _proto.reset = function reset() {
    this.set('attrs', {});
    this.set('attrOptions', {});
    this.set('adjust', null);
    this.clearInner();
  };

  _proto.clear = function clear() {
    this.clearInner();
  };

  _proto.destroy = function destroy() {
    this.clear();

    _Base.prototype.destroy.call(this);
  };

  _proto._display = function _display(visible) {
    this.set('visible', visible);
    var container = this.get('container');
    var canvas = container.get('canvas');
    container.set('visible', visible);
    canvas.draw();
  };

  _proto.show = function show() {
    this._display(true);
  };

  _proto.hide = function hide() {
    this._display(false);
  };

  return Geom;
}(Base);

module.exports = Geom;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);

/* harmony default export */ __webpack_exports__["a"] = (function (str) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(str, 'String');
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Global = __webpack_require__(6);

var Shape = {};
var ShapeBase = {
  _coord: null,

  /**
   * draw the shape
   * @param {Object} cfg options
   * @param {Object} container container to store the shapes
   */
  draw: function draw(cfg, container) {
    if (this.drawShape) {
      this.drawShape(cfg, container);
    }
  },

  /**
   * set the coordinate instance
   * @param {Coord} coord coordinate instance
   */
  setCoord: function setCoord(coord) {
    this._coord = coord;
  },

  /**
   * convert the normalized value to the canvas position
   * @param  {point} point the point to convert
   * @return {point} point return the result
   */
  parsePoint: function parsePoint(point) {
    var coord = this._coord;

    if (coord.isPolar) {
      if (point.x === 1) point.x = 0.9999999;
      if (point.y === 1) point.y = 0.9999999;
    }

    return coord.convertPoint(point);
  },

  /**
   * convert the normalized value to the canvas position
   * @param  {points} points the array that store the points
   * @return {points} points return the result
   */
  parsePoints: function parsePoints(points) {
    if (!points) return false;
    var self = this;
    var rst = [];
    points.forEach(function (point) {
      rst.push(self.parsePoint(point));
    });
    return rst;
  }
};
var ShapeFactoryBase = {
  defaultShapeType: null,
  setCoord: function setCoord(coord) {
    this._coord = coord;
  },
  getShape: function getShape(type) {
    var self = this;

    if (Util.isArray(type)) {
      type = type[0];
    }

    var shape = self[type] || self[self.defaultShapeType];
    shape._coord = self._coord;
    return shape;
  },
  getShapePoints: function getShapePoints(type, cfg) {
    var shape = this.getShape(type);
    var fn = shape.getPoints || shape.getShapePoints || this.getDefaultPoints;
    var points = fn(cfg);
    return points;
  },
  getDefaultPoints: function getDefaultPoints()
  /* cfg */
  {
    return [];
  },
  drawShape: function drawShape(type, cfg, container) {
    var shape = this.getShape(type);

    if (!cfg.color) {
      cfg.color = Global.colors[0];
    }

    return shape.draw(cfg, container);
  }
};

Shape.registerFactory = function (factoryName, cfg) {
  var className = Util.upperFirst(factoryName);
  var geomObj = Util.mix({}, ShapeFactoryBase, cfg);
  Shape[className] = geomObj;
  geomObj.name = factoryName;
  return geomObj;
};

Shape.registerShape = function (factoryName, shapeType, cfg) {
  var className = Util.upperFirst(factoryName);
  var factory = Shape[className];
  var shapeObj = Util.mix({}, ShapeBase, cfg);
  factory[shapeType] = shapeObj;
  return shapeObj;
};

Shape.registShape = Shape.registerShape;

Shape.getShapeFactory = function (factoryName) {
  var self = this;
  factoryName = factoryName || 'point';
  var className = Util.upperFirst(factoryName);
  return self[className];
};

module.exports = Shape;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return __WEBPACK_IMPORTED_MODULE_0__contains__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return __WEBPACK_IMPORTED_MODULE_0__contains__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__difference__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return __WEBPACK_IMPORTED_MODULE_1__difference__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_2__find__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_index__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return __WEBPACK_IMPORTED_MODULE_3__find_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__first_value__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "firstValue", function() { return __WEBPACK_IMPORTED_MODULE_4__first_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flatten__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_5__flatten__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flatten_deep__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flattenDeep", function() { return __WEBPACK_IMPORTED_MODULE_6__flatten_deep__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__get_range__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return __WEBPACK_IMPORTED_MODULE_7__get_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pull__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pull", function() { return __WEBPACK_IMPORTED_MODULE_8__pull__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pull_at__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pullAt", function() { return __WEBPACK_IMPORTED_MODULE_9__pull_at__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reduce__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return __WEBPACK_IMPORTED_MODULE_10__reduce__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__remove__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_11__remove__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sort_by__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return __WEBPACK_IMPORTED_MODULE_12__sort_by__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__union__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return __WEBPACK_IMPORTED_MODULE_13__union__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__uniq__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_14__uniq__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__values_of_key__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "valuesOfKey", function() { return __WEBPACK_IMPORTED_MODULE_15__values_of_key__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__head__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return __WEBPACK_IMPORTED_MODULE_16__head__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__last__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return __WEBPACK_IMPORTED_MODULE_17__last__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__starts_with__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return __WEBPACK_IMPORTED_MODULE_18__starts_with__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ends_with__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return __WEBPACK_IMPORTED_MODULE_19__ends_with__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__filter__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_20__filter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__every__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return __WEBPACK_IMPORTED_MODULE_21__every__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__some__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return __WEBPACK_IMPORTED_MODULE_22__some__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__group__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return __WEBPACK_IMPORTED_MODULE_23__group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__group_by__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return __WEBPACK_IMPORTED_MODULE_24__group_by__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__group_to_map__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupToMap", function() { return __WEBPACK_IMPORTED_MODULE_25__group_to_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__get_wrap_behavior__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getWrapBehavior", function() { return __WEBPACK_IMPORTED_MODULE_26__get_wrap_behavior__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__wrap_behavior__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wrapBehavior", function() { return __WEBPACK_IMPORTED_MODULE_27__wrap_behavior__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__number2color__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "number2color", function() { return __WEBPACK_IMPORTED_MODULE_28__number2color__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__parse_radius__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseRadius", function() { return __WEBPACK_IMPORTED_MODULE_29__parse_radius__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__clamp__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_30__clamp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__fixed_base__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fixedBase", function() { return __WEBPACK_IMPORTED_MODULE_31__fixed_base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__is_decimal__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDecimal", function() { return __WEBPACK_IMPORTED_MODULE_32__is_decimal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__is_even__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEven", function() { return __WEBPACK_IMPORTED_MODULE_33__is_even__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__is_integer__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return __WEBPACK_IMPORTED_MODULE_34__is_integer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__is_negative__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNegative", function() { return __WEBPACK_IMPORTED_MODULE_35__is_negative__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__is_number_equal__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberEqual", function() { return __WEBPACK_IMPORTED_MODULE_36__is_number_equal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__is_odd__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isOdd", function() { return __WEBPACK_IMPORTED_MODULE_37__is_odd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__is_positive__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPositive", function() { return __WEBPACK_IMPORTED_MODULE_38__is_positive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__max_by__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return __WEBPACK_IMPORTED_MODULE_39__max_by__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__min_by__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return __WEBPACK_IMPORTED_MODULE_40__min_by__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__mod__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return __WEBPACK_IMPORTED_MODULE_41__mod__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__to_degree__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return __WEBPACK_IMPORTED_MODULE_42__to_degree__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__to_integer__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toInteger", function() { return __WEBPACK_IMPORTED_MODULE_43__to_integer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__to_radian__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return __WEBPACK_IMPORTED_MODULE_44__to_radian__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__for_in__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forIn", function() { return __WEBPACK_IMPORTED_MODULE_45__for_in__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__has__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return __WEBPACK_IMPORTED_MODULE_46__has__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__has_key__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasKey", function() { return __WEBPACK_IMPORTED_MODULE_47__has_key__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__has_value__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return __WEBPACK_IMPORTED_MODULE_48__has_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__keys__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_49__keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__is_match__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return __WEBPACK_IMPORTED_MODULE_50__is_match__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__values__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_51__values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__lower_case__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return __WEBPACK_IMPORTED_MODULE_52__lower_case__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__lower_first__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lowerFirst", function() { return __WEBPACK_IMPORTED_MODULE_53__lower_first__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__substitute__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "substitute", function() { return __WEBPACK_IMPORTED_MODULE_54__substitute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__upper_case__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return __WEBPACK_IMPORTED_MODULE_55__upper_case__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__upper_first__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "upperFirst", function() { return __WEBPACK_IMPORTED_MODULE_56__upper_first__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__get_type__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return __WEBPACK_IMPORTED_MODULE_57__get_type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__is_arguments__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return __WEBPACK_IMPORTED_MODULE_58__is_arguments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__is_array__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_59__is_array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__is_array_like__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return __WEBPACK_IMPORTED_MODULE_60__is_array_like__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__is_boolean__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_61__is_boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__is_date__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_62__is_date__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__is_error__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return __WEBPACK_IMPORTED_MODULE_63__is_error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__is_function__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_64__is_function__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__is_finite__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return __WEBPACK_IMPORTED_MODULE_65__is_finite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__is_nil__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return __WEBPACK_IMPORTED_MODULE_66__is_nil__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__is_null__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return __WEBPACK_IMPORTED_MODULE_67__is_null__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__is_number__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_68__is_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__is_object__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_69__is_object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__is_object_like__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return __WEBPACK_IMPORTED_MODULE_70__is_object_like__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__is_plain_object__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return __WEBPACK_IMPORTED_MODULE_71__is_plain_object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__is_prototype__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPrototype", function() { return __WEBPACK_IMPORTED_MODULE_72__is_prototype__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__is_reg_exp__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return __WEBPACK_IMPORTED_MODULE_73__is_reg_exp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__is_string__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_74__is_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__is_type__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return __WEBPACK_IMPORTED_MODULE_75__is_type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__is_undefined__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_76__is_undefined__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__is_element__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return __WEBPACK_IMPORTED_MODULE_77__is_element__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__request_animation_frame__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return __WEBPACK_IMPORTED_MODULE_78__request_animation_frame__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__clear_animation_frame__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clearAnimationFrame", function() { return __WEBPACK_IMPORTED_MODULE_79__clear_animation_frame__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__augment__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "augment", function() { return __WEBPACK_IMPORTED_MODULE_80__augment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__clone__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_81__clone__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__debounce__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_82__debounce__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__memoize__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return __WEBPACK_IMPORTED_MODULE_83__memoize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__deep_mix__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepMix", function() { return __WEBPACK_IMPORTED_MODULE_84__deep_mix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__each__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_85__each__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__extend__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_86__extend__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__index_of__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_87__index_of__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__is_empty__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return __WEBPACK_IMPORTED_MODULE_88__is_empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__is_equal__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return __WEBPACK_IMPORTED_MODULE_89__is_equal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__is_equal_with__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualWith", function() { return __WEBPACK_IMPORTED_MODULE_90__is_equal_with__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__map__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_91__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__map_values__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return __WEBPACK_IMPORTED_MODULE_92__map_values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__mix__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return __WEBPACK_IMPORTED_MODULE_93__mix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return __WEBPACK_IMPORTED_MODULE_93__mix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__get__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return __WEBPACK_IMPORTED_MODULE_94__get__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__set__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_95__set__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__pick__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return __WEBPACK_IMPORTED_MODULE_96__pick__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__throttle__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_97__throttle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__to_array__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return __WEBPACK_IMPORTED_MODULE_98__to_array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__to_string__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return __WEBPACK_IMPORTED_MODULE_99__to_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__unique_id__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return __WEBPACK_IMPORTED_MODULE_100__unique_id__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__noop__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_101__noop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__identity__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_102__identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__size__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return __WEBPACK_IMPORTED_MODULE_103__size__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__cache__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return __WEBPACK_IMPORTED_MODULE_104__cache__["a"]; });
// array

























 // event


 // format


 // math















 // object







 // string





 // type























 // other
























 // 不知道为什么，需要把这个 export，不然 ts 会报类型错误



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vector2 = __webpack_require__(13);

var start = Vector2.create();
var end = Vector2.create();
var extremity = Vector2.create();

function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
  var x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
  var y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
  return {
    x: x,
    y: y
  };
} // cubic helper formula at T distance


function CubicN(T, a, b, c, d) {
  var t2 = T * T;
  var t3 = t2 * T;
  return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t2 + d * t3;
}

function cubicBezierBounds(c) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  var s = {
    x: c[0],
    y: c[1]
  };
  var c1 = {
    x: c[2],
    y: c[3]
  };
  var c2 = {
    x: c[4],
    y: c[5]
  };
  var e = {
    x: c[6],
    y: c[7]
  };

  for (var t = 0; t < 100; t++) {
    var pt = getCubicBezierXYatT(s, c1, c2, e, t / 100);

    if (pt.x < minX) {
      minX = pt.x;
    }

    if (pt.x > maxX) {
      maxX = pt.x;
    }

    if (pt.y < minY) {
      minY = pt.y;
    }

    if (pt.y > maxY) {
      maxY = pt.y;
    }
  }

  return {
    minX: minX,
    minY: minY,
    maxX: maxX,
    maxY: maxY
  };
}

module.exports = {
  getBBoxFromPoints: function getBBoxFromPoints(points, lineWidth) {
    if (points.length === 0) {
      return;
    }

    var p = points[0];
    var left = p.x;
    var right = p.x;
    var top = p.y;
    var bottom = p.y;
    var len = points.length;

    for (var i = 1; i < len; i++) {
      p = points[i];
      left = Math.min(left, p.x);
      right = Math.max(right, p.x);
      top = Math.min(top, p.y);
      bottom = Math.max(bottom, p.y);
    }

    lineWidth = lineWidth / 2 || 0;
    return {
      minX: left - lineWidth,
      minY: top - lineWidth,
      maxX: right + lineWidth,
      maxY: bottom + lineWidth
    };
  },
  getBBoxFromLine: function getBBoxFromLine(x0, y0, x1, y1, lineWidth) {
    lineWidth = lineWidth / 2 || 0;
    return {
      minX: Math.min(x0, x1) - lineWidth,
      minY: Math.min(y0, y1) - lineWidth,
      maxX: Math.max(x0, x1) + lineWidth,
      maxY: Math.max(y0, y1) + lineWidth
    };
  },
  getBBoxFromArc: function getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise) {
    var diff = Math.abs(startAngle - endAngle);

    if (diff % (Math.PI * 2) < 1e-4 && diff > 1e-4) {
      // Is a circle
      return {
        minX: x - r,
        minY: y - r,
        maxX: x + r,
        maxY: y + r
      };
    }

    start[0] = Math.cos(startAngle) * r + x;
    start[1] = Math.sin(startAngle) * r + y;
    end[0] = Math.cos(endAngle) * r + x;
    end[1] = Math.sin(endAngle) * r + y;
    var min = [0, 0];
    var max = [0, 0];
    Vector2.min(min, start, end);
    Vector2.max(max, start, end); // Thresh to [0, Math.PI * 2]

    startAngle = startAngle % (Math.PI * 2);

    if (startAngle < 0) {
      startAngle = startAngle + Math.PI * 2;
    }

    endAngle = endAngle % (Math.PI * 2);

    if (endAngle < 0) {
      endAngle = endAngle + Math.PI * 2;
    }

    if (startAngle > endAngle && !anticlockwise) {
      endAngle += Math.PI * 2;
    } else if (startAngle < endAngle && anticlockwise) {
      startAngle += Math.PI * 2;
    }

    if (anticlockwise) {
      var tmp = endAngle;
      endAngle = startAngle;
      startAngle = tmp;
    }

    for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
      if (angle > startAngle) {
        extremity[0] = Math.cos(angle) * r + x;
        extremity[1] = Math.sin(angle) * r + y;
        Vector2.min(min, extremity, min);
        Vector2.max(max, extremity, max);
      }
    }

    return {
      minX: min[0],
      minY: min[1],
      maxX: max[0],
      maxY: max[1]
    };
  },
  getBBoxFromBezierGroup: function getBBoxFromBezierGroup(points, lineWidth) {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;

    for (var i = 0, len = points.length; i < len; i++) {
      var bbox = cubicBezierBounds(points[i]);

      if (bbox.minX < minX) {
        minX = bbox.minX;
      }

      if (bbox.maxX > maxX) {
        maxX = bbox.maxX;
      }

      if (bbox.minY < minY) {
        minY = bbox.minY;
      }

      if (bbox.maxY > maxY) {
        maxY = bbox.maxY;
      }
    }

    lineWidth = lineWidth / 2 || 0;
    return {
      minX: minX - lineWidth,
      minY: minY - lineWidth,
      maxX: maxX + lineWidth,
      maxY: maxY + lineWidth
    };
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var KEYWORDS_PERCENT = {
  min: 0,
  median: 0.5,
  max: 1
};

var GuideBase = /*#__PURE__*/function () {
  var _proto = GuideBase.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {};

  function GuideBase(cfg) {
    this._initDefaultCfg();

    Util.deepMix(this, cfg);
  }

  _proto._getNormalizedValue = function _getNormalizedValue(val, scale) {
    var rst;

    if (Util.isNil(KEYWORDS_PERCENT[val])) {
      rst = scale.scale(val);
    } else {
      rst = KEYWORDS_PERCENT[val];
    }

    return rst;
  };

  _proto.parsePercentPoint = function parsePercentPoint(coord, position) {
    var xPercent = parseFloat(position[0]) / 100;
    var yPercent = parseFloat(position[1]) / 100;
    var start = coord.start;
    var end = coord.end;
    var width = Math.abs(start.x - end.x);
    var height = Math.abs(start.y - end.y);
    var x = width * xPercent + Math.min(start.x, end.x);
    var y = height * yPercent + Math.min(start.y, end.y);
    return {
      x: x,
      y: y
    };
  };

  _proto.parsePoint = function parsePoint(coord, position) {
    var self = this;
    var xScale = self.xScale;
    var yScales = self.yScales;

    if (Util.isFunction(position)) {
      position = position(xScale, yScales); // position 必须是对象
    } // 如果数据格式是 ['50%', '50%'] 的格式
    // fix: 原始数据中可能会包含 'xxx5%xxx' 这样的数据，需要判断下 https://github.com/antvis/f2/issues/590


    if (Util.isString(position[0]) && position[0].indexOf('%') !== -1 && !isNaN(position[0].slice(0, -1))) {
      return this.parsePercentPoint(coord, position);
    }

    var x = self._getNormalizedValue(position[0], xScale);

    var y = self._getNormalizedValue(position[1], yScales[0]);

    var point = coord.convertPoint({
      x: x,
      y: y
    });

    if (self.limitInPlot) {
      // limit in chart plotRange
      if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
        return point;
      }

      return null;
    }

    return point;
  }
  /**
   * render the guide component
   * @param  {Coord} coord  coordinate instance
   * @param  {Canvas.Group} group the container
   */
  ;

  _proto.render = function render()
  /* coord,group */
  {};

  _proto.repaint = function repaint() {
    this.remove();
    var coord = this.coord,
        container = this.container,
        canvas = this.canvas;

    if (container && !container.isDestroyed()) {
      this.render(coord, container);
      canvas.draw();
    }
  };

  _proto.remove = function remove() {
    var element = this.element;
    element && element.remove(true);
  };

  _proto.changeVisible = function changeVisible(visible) {
    var self = this;
    self.visible = visible;
    var element = self.element;
    if (!element) return;

    if (element.set) {
      element.set('visible', visible);
    } else {
      element.style.display = visible ? '' : 'none';
    }
  };

  return GuideBase;
}();

module.exports = GuideBase;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_object_like__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_type__ = __webpack_require__(11);



var isPlainObject = function (value) {
  /**
   * isObjectLike(new Foo) => false
   * isObjectLike([1, 2, 3]) => false
   * isObjectLike({ x: 0, y: 0 }) => true
   * isObjectLike(Object.create(null)) => true
   */
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_object_like__["a" /* default */])(value) || !Object(__WEBPACK_IMPORTED_MODULE_1__is_type__["a" /* default */])(value, 'Object')) {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
};

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_nil__ = __webpack_require__(14);

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_nil__["a" /* default */])(value)) return '';
  return value.toString();
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var mix = __webpack_require__(64);

var each = __webpack_require__(15);

var isObject = __webpack_require__(44);

var isNil = __webpack_require__(35);

var Scale = /*#__PURE__*/function () {
  var _proto = Scale.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'base';
    /**
     * 格式化函数,输出文本或者tick时的格式化函数
     * @type {Function}
     */

    this.formatter = null;
    /**
     * 输出的值域
     * @type {Array}
     */

    this.range = [0, 1];
    /**
     * 度量的标记
     * @type {Array}
     */

    this.ticks = null;
    /**
     * 参与度量计算的值，可选项
     * @type {Array}
     */

    this.values = [];
  };

  function Scale(cfg) {
    this._initDefaultCfg();

    mix(this, cfg);
    this.init();
  }
  /**
   * 度量初始化
   * @protected
   */


  _proto.init = function init() {}
  /**
   * 获取该度量的ticks,返回的是多个对象，
   *   - text: tick 的文本
   *   - value: 对应的度量转换后的值
   * <code>
   *   [
   *     {text: 0,value:0}
   *     {text: 1,value:0.2}
   *     {text: 2,value:0.4}
   *     {text: 3,value:0.6}
   *     {text: 4,value:0.8}
   *     {text: 5,value:1}
   *   ]
   * </code>
   * @param {Number} count 输出tick的个数的近似值，默认是 10
   * @return {Array} 返回 ticks 数组
   */
  ;

  _proto.getTicks = function getTicks() {
    var self = this;
    var ticks = self.ticks;
    var rst = [];
    each(ticks, function (tick) {
      var obj;

      if (isObject(tick)) {
        obj = tick;
      } else {
        obj = {
          text: self.getText(tick),
          tickValue: tick,
          value: self.scale(tick)
        };
      }

      rst.push(obj);
    });
    return rst;
  }
  /**
   * 获取格式化后的文本
   * @param  {*} value 输入的数据
   * @param  {*} key 字段的 key
   * @return {String} 格式化的文本
   */
  ;

  _proto.getText = function getText(value, key) {
    var formatter = this.formatter;
    value = formatter ? formatter(value, key) : value;

    if (isNil(value) || !value.toString) {
      value = '';
    }

    return value.toString();
  }
  /**
   * 输出的值域最小值
   * @protected
   * @return {Number} 返回最小的值
   */
  ;

  _proto.rangeMin = function rangeMin() {
    return this.range[0];
  }
  /**
   * 输出的值域最大值
   * @protected
   * @return {Number} 返回最大的值
   */
  ;

  _proto.rangeMax = function rangeMax() {
    var range = this.range;
    return range[range.length - 1];
  }
  /**
   * 度量转换后的结果，翻转回输入域
   * @param  {Number} value 需要翻转的数值
   * @return {*} 度量的输入值
   */
  ;

  _proto.invert = function invert(value) {
    return value;
  }
  /**
   * 将传入的值从非数值转换成数值格式，如分类字符串、时间字符串等
   * @param  {*} value 传入的值
   * @return {Number} 转换的值
   */
  ;

  _proto.translate = function translate(value) {
    return value;
  }
  /**
   * 进行度量转换
   * @param  {*} value 输入值
   * @return {Number} 输出值，在设定的输出值域之间，默认[0,1]
   */
  ;

  _proto.scale = function scale(value) {
    return value;
  }
  /**
   * 克隆一个新的scale,拥有跟当前scale相同的输入域、输出域等
   * @return {Scale} 克隆的度量
   */
  ;

  _proto.clone = function clone() {
    var self = this;
    var constr = self.constructor;
    var cfg = {};
    each(self, function (v, k) {
      cfg[k] = self[k];
    });
    return new constr(cfg);
  }
  /**
   * 更改度量的属性信息
   * @param  {Object} info 属性信息
   * @chainable
   * @return {Scale} 返回自身的引用
   */
  ;

  _proto.change = function change(info) {
    this.ticks = null;
    mix(this, info);
    this.init();
    return this;
  };

  return Scale;
}();

module.exports = Scale;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

var isType = function isType(value, type) {
  return toString.call(value) === '[object ' + type + ']';
};

module.exports = isType;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);


var contains = function (arr, value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(arr)) {
    return false;
  }

  return arr.indexOf(value) > -1;
};

/* harmony default export */ __webpack_exports__["a"] = (contains);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  /**
   * isObject({}) => true
   * isObject([1, 2, 3]) => true
   * isObject(Function) => true
   * isObject(null) => false
   */
  var type = typeof value;
  return value !== null && type === 'object' || type === 'function';
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _const = __webpack_require__(47);

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Base = __webpack_require__(63);

var Plot = __webpack_require__(158);

var Util = __webpack_require__(0);

var Coord = __webpack_require__(159);

var Geom = __webpack_require__(17);

var ScaleController = __webpack_require__(167);

var AxisController = __webpack_require__(173);

var Global = __webpack_require__(6);

var _require = __webpack_require__(16),
    Canvas = _require.Canvas;

var Helper = __webpack_require__(37);

function compare(a, b) {
  return a - b;
}

function _isScaleExist(scales, compareScale) {
  var flag = false;
  Util.each(scales, function (scale) {
    var scaleValues = [].concat(scale.values);
    var compareScaleValues = [].concat(compareScale.values);

    if (scale.type === compareScale.type && scale.field === compareScale.field && scaleValues.sort(compare).toString() === compareScaleValues.sort(compare).toString()) {
      flag = true;
      return;
    }
  });
  return flag;
}

var Chart = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Chart, _Base);

  var _super = _createSuper(Chart);

  Chart.initPlugins = function initPlugins() {
    return {
      _plugins: [],
      _cacheId: 0,
      register: function register(plugins) {
        var p = this._plugins;
        [].concat(plugins).forEach(function (plugin) {
          if (p.indexOf(plugin) === -1) {
            p.push(plugin);
          }
        });
        this._cacheId++;
      },
      unregister: function unregister(plugins) {
        var p = this._plugins;
        [].concat(plugins).forEach(function (plugin) {
          var idx = p.indexOf(plugin);

          if (idx !== -1) {
            p.splice(idx, 1);
          }
        });
        this._cacheId++;
      },
      clear: function clear() {
        this._plugins = [];
        this._cacheId++;
      },
      count: function count() {
        return this._plugins.length;
      },
      getAll: function getAll() {
        return this._plugins;
      },
      notify: function notify(chart, hook, args) {
        var descriptors = this.descriptors(chart);
        var ilen = descriptors.length;
        var i;
        var descriptor;
        var plugin;
        var params;
        var method;

        for (i = 0; i < ilen; ++i) {
          descriptor = descriptors[i];
          plugin = descriptor.plugin;
          method = plugin[hook];

          if (typeof method === 'function') {
            params = [chart].concat(args || []);

            if (method.apply(plugin, params) === false) {
              return false;
            }
          }
        }

        return true;
      },
      descriptors: function descriptors(chart) {
        var cache = chart._plugins || (chart._plugins = {});

        if (cache.id === this._cacheId) {
          return cache.descriptors;
        }

        var plugins = [];
        var descriptors = [];

        this._plugins.concat(chart && chart.get('plugins') || []).forEach(function (plugin) {
          var idx = plugins.indexOf(plugin);

          if (idx !== -1) {
            return;
          }

          plugins.push(plugin);
          descriptors.push({
            plugin: plugin
          });
        });

        cache.descriptors = descriptors;
        cache.id = this._cacheId;
        return descriptors;
      }
    };
  };

  var _proto = Chart.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * the id of canvas
       * @type {String}
       */
      id: null,
      rendered: false,

      /**
       * padding
       * @type {Array|Number}
       */
      padding: Global.padding,

      /**
       * data
       * @type {Array}
       */
      data: null,

      /**
       * scales of chart
       * @type {Object}
       */
      scales: {},

      /**
       * @private
       * geometry instances
       * @type {Array}
       */
      geoms: [],

      /**
       * scale configuration
       * @type {Object}
       */
      colDefs: null,
      pixelRatio: Global.pixelRatio,

      /**
       * filter options
       * @type {Object}
       */
      filters: null,
      appendPadding: Global.appendPadding
    };
  };

  _proto._syncYScales = function _syncYScales() {
    var syncY = this.get('syncY');

    if (!syncY) {
      return;
    }

    var geoms = this.get('geoms');
    var syncScales = [];
    var min = [];
    var max = [];
    Util.each(geoms, function (geom) {
      var yScale = geom.getYScale();

      if (yScale.isLinear) {
        syncScales.push(yScale);
        min.push(yScale.min);
        max.push(yScale.max);
      }
    });
    min = Math.min.apply(null, min);
    max = Math.max.apply(null, max);
    Util.each(syncScales, function (scale) {
      scale.change({
        min: min
      });
      scale.change({
        max: max
      });
    });
  };

  _proto._getFieldsForLegend = function _getFieldsForLegend() {
    var fields = [];
    var geoms = this.get('geoms');
    Util.each(geoms, function (geom) {
      var attrOptions = geom.get('attrOptions');
      var attrCfg = attrOptions.color;

      if (attrCfg && attrCfg.field && Util.isString(attrCfg.field)) {
        var arr = attrCfg.field.split('*');
        Util.each(arr, function (item) {
          if (fields.indexOf(item) === -1) {
            fields.push(item);
          }
        });
      }
    });
    return fields;
  };

  _proto._getScaleData = function _getScaleData(field) {
    var data = this.get('data');
    var filteredData = this.get('filteredData');

    if (filteredData.length) {
      var legendFields = this._getFieldsForLegend();

      if (legendFields.indexOf(field) === -1) {
        data = filteredData;
      }
    }

    return data;
  } // _updateScales() {
  //   const scaleController = this.get('scaleController');
  //   scaleController.updateScales();
  //   this._adjustScale();
  // }
  ;

  _proto._adjustScale = function _adjustScale() {
    var self = this;
    var scaleController = self.get('scaleController'); // 看起来是为了让柱状图最小或最大都默认从0开始

    var geoms = this.get('geoms');

    for (var i = 0; i < geoms.length; i++) {
      var geom = geoms[i];

      if (geom.get('type') === 'interval') {
        var yScale = geom.getYScale();
        scaleController.adjustStartZero(yScale);
      }
    }
  };

  _proto._removeGeoms = function _removeGeoms() {
    var geoms = this.get('geoms');

    while (geoms.length > 0) {
      var geom = geoms.shift();
      geom.destroy();
    }
  };

  _proto._clearGeoms = function _clearGeoms() {
    var geoms = this.get('geoms');

    for (var i = 0, length = geoms.length; i < length; i++) {
      var geom = geoms[i];
      geom.clear();
    }
  };

  _proto._clearInner = function _clearInner() {
    this._clearGeoms();

    Chart.plugins.notify(this, 'clearInner');
    this.get('axisController') && this.get('axisController').clear();
  };

  _proto._initFilteredData = function _initFilteredData() {
    var filters = this.get('filters');
    var data = this.get('data') || [];

    if (filters) {
      data = data.filter(function (obj) {
        var rst = true;
        Util.each(filters, function (fn, k) {
          if (fn) {
            rst = fn(obj[k], obj);

            if (!rst) {
              return false;
            }
          }
        });
        return rst;
      });
    }

    this.set('filteredData', data);
  };

  _proto._changeGeomsData = function _changeGeomsData() {
    var geoms = this.get('geoms');
    var data = this.get('filteredData');

    for (var i = 0, length = geoms.length; i < length; i++) {
      var geom = geoms[i];
      geom.changeData(data);
    }
  };

  _proto._initGeom = function _initGeom(geom) {
    var coord = this.get('coord');
    var data = this.get('filteredData');
    var colDefs = this.get('colDefs');
    var middlePlot = this.get('middlePlot');
    geom.set('chart', this);
    geom.set('container', middlePlot.addGroup());
    geom.set('data', data);
    geom.set('coord', coord);
    geom.set('colDefs', colDefs);
    geom.init();
    this.emit(_const.EVENT_AFTER_GEOM_INIT, geom);
  };

  _proto._initGeoms = function _initGeoms() {
    var geoms = this.get('geoms');

    for (var i = 0, length = geoms.length; i < length; i++) {
      this._initGeom(geoms[i]);
    }
  };

  _proto._initCoord = function _initCoord() {
    var plot = this.get('plotRange');
    var coordCfg = Util.mix({
      type: 'cartesian'
    }, this.get('coordCfg'), {
      plot: plot
    });
    var type = coordCfg.type;
    var C = Coord[Util.upperFirst(type)];
    var coord = new C(coordCfg);
    this.set('coord', coord);
  };

  _proto._initLayout = function _initLayout() {
    var padding = this.get('_padding');

    if (!padding) {
      padding = this.get('margin') || this.get('padding');
      padding = Util.parsePadding(padding);
    }

    var top = padding[0] === 'auto' ? 0 : padding[0];
    var right = padding[1] === 'auto' ? 0 : padding[1];
    var bottom = padding[2] === 'auto' ? 0 : padding[2];
    var left = padding[3] === 'auto' ? 0 : padding[3];
    var width = this.get('width');
    var height = this.get('height');
    var start = {
      x: left,
      y: top
    };
    var end = {
      x: width - right,
      y: height - bottom
    };
    var plot = this.get('plot');

    if (plot) {
      plot.reset(start, end);
      return;
    }

    var newPlot = new Plot({
      start: start,
      end: end
    });
    this.set('plotRange', newPlot);
    this.set('plot', newPlot);
  };

  _proto._initCanvas = function _initCanvas() {
    var self = this;

    try {
      var canvas = new Canvas({
        el: self.get('el') || self.get('id'),
        context: self.get('context'),
        pixelRatio: self.get('pixelRatio'),
        width: self.get('width'),
        height: self.get('height'),
        fontFamily: Global.fontFamily
      });
      self.set('canvas', canvas);
      self.set('el', canvas.get('el'));
      self.set('width', canvas.get('width'));
      self.set('height', canvas.get('height'));
    } catch (error) {
      throw error;
    }

    Chart.plugins.notify(self, 'afterCanvasInit');
  };

  _proto._initLayers = function _initLayers() {
    var canvas = this.get('canvas');
    this.set('backPlot', canvas.addGroup());
    this.set('middlePlot', canvas.addGroup({
      zIndex: 10
    }));
    this.set('frontPlot', canvas.addGroup({
      zIndex: 20
    }));
  };

  _proto._initEvents = function _initEvents() {
    var _this2 = this;

    // 数据更新后的一些更新
    this.on(_const.EVENT_AFTER_DATA_CHANGE, function () {
      // 数据更新后，重新设置filterdata
      _this2._initFilteredData(); // 更新geoms里的数据


      _this2._changeGeomsData();

      _this2._adjustScale();
    }); // 大小变化后的一些更新

    this.on(_const.EVENT_AFTER_SIZE_CHANGE, function () {
      _this2._initLayout(); // layout变化后，坐标轴也需要做相应的变化


      var coord = _this2.get('coord');

      if (coord) {
        coord.reset(_this2.get('plot'));
      }
    });
  };

  _proto._initScaleController = function _initScaleController() {
    var scaleController = new ScaleController({
      chart: this
    }); // 让colDefs 和 scaleController.defs 用同一个对象，这样就不用考虑同步的问题

    this.set('colDefs', scaleController.defs); // 已经实例化的scales 也保持统一个对象

    this.set('scales', scaleController.scales);
    this.set('scaleController', scaleController);
  };

  _proto._clearScaleController = function _clearScaleController() {
    var scaleController = this.get('scaleController');
    scaleController.clear();
  };

  _proto._init = function _init() {
    var self = this;

    self._initCanvas();

    self._initLayout();

    self._initLayers();

    self._initEvents();

    self._initScaleController();

    self.set('axisController', new AxisController({
      frontPlot: self.get('frontPlot').addGroup({
        className: 'axisContainer'
      }),
      backPlot: self.get('backPlot').addGroup({
        className: 'axisContainer'
      }),
      chart: self
    }));
    Chart.plugins.notify(self, 'init');
  };

  function Chart(cfg) {
    var _this;

    _this = _Base.call(this, cfg) || this;
    var self = (0, _assertThisInitialized2["default"])(_this);
    Util.each(Geom, function (geomConstructor, className) {
      var methodName = Util.lowerFirst(className);

      self[methodName] = function (cfg) {
        var geom = new geomConstructor(cfg);
        self.addGeom(geom);
        return geom;
      };
    });

    self._init();

    return _this;
  }

  _proto.init = function init() {
    // 初始filterData
    this._initFilteredData(); // initialization coordinate instance


    this._initCoord();

    Chart.plugins.notify(this, 'beforeGeomInit'); // init all geometry instances

    this._initGeoms(); // 多 Y 轴的情况时，统一 Y 轴的数值范围。


    this._syncYScales(); // do some adjust for data


    this._adjustScale();

    this.emit(_const.EVENT_AFTER_INIT);
  }
  /**
   * set data and some scale configuration
   * @chainable
   * @param  {Array} data the dataset to visualize
   * @param  {Object} colDefs the configuration for scales
   * @return {Chart} return the chart instance
   */
  ;

  _proto.source = function source(data, colDefs) {
    this.set('data', data);

    if (colDefs) {
      this.scale(colDefs);
    }

    return this;
  };

  _proto.scale = function scale(field, cfg) {
    var scaleController = this.get('scaleController');
    scaleController.setFieldDef(field, cfg);
    return this;
  }
  /**
   * configure the axis
   * @chainable
   * @param  {String|Boolean} field the field name of data
   * @param  {Object} cfg configuration for axis
   * @return {Chart} return the chart instance
   */
  ;

  _proto.axis = function axis(field, cfg) {
    var axisController = this.get('axisController');

    if (!field) {
      axisController.axisCfg = null;
    } else {
      axisController.axisCfg = axisController.axisCfg || {};
      axisController.axisCfg[field] = cfg;
    }

    return this;
  }
  /**
   * configure the coordinate
   * @chainable
   * @param  {String} type set the type of coodinate
   * @param  {Object} cfg configuration for coordinate
   * @return {Chart} return the chart instance
   */
  ;

  _proto.coord = function coord(type, cfg) {
    var coordCfg;

    if (Util.isObject(type)) {
      coordCfg = type;
    } else {
      coordCfg = cfg || {};
      coordCfg.type = type || 'cartesian';
    }

    this.set('coordCfg', coordCfg);
    return this;
  };

  _proto.filter = function filter(field, condition) {
    var filters = this.get('filters') || {};
    filters[field] = condition;
    this.set('filters', filters); // 如果已经render过，则再重新触发一次change

    if (this.get('rendered')) {
      this.emit(_const.EVENT_AFTER_DATA_CHANGE, this.get('data'));
    }
  }
  /**
   * render the chart
   * @chainable
   * @return {Chart} return the chart instance
   */
  ;

  _proto.render = function render() {
    var rendered = this.get('rendered');
    var canvas = this.get('canvas');
    var geoms = this.get('geoms');

    if (!rendered) {
      this.init();
      this.set('rendered', true);
    }

    this.emit(_const.EVENT_BEFORE_RENDER);
    Chart.plugins.notify(this, 'beforeGeomDraw');

    this._renderAxis();

    var middlePlot = this.get('middlePlot');

    if (this.get('limitInPlot') && !middlePlot.attr('clip')) {
      var coord = this.get('coord');
      var clip = Helper.getClip(coord);
      clip.set('canvas', middlePlot.get('canvas'));
      middlePlot.attr('clip', clip);
    }

    for (var i = 0, length = geoms.length; i < length; i++) {
      var geom = geoms[i];
      geom.paint();
    }

    Chart.plugins.notify(this, 'afterGeomDraw');
    canvas.sort();
    this.get('frontPlot').sort();
    Chart.plugins.notify(this, 'beforeCanvasDraw');
    canvas.draw();
    this.emit(_const.EVENT_AFTER_RENDER);
    return this;
  }
  /**
   * clear the chart, include geometris and all the shapes
   * @chainable
   * @return {Chart} return the chart
   */
  ;

  _proto.clear = function clear() {
    Chart.plugins.notify(this, 'clear');

    this._clearInner();

    this._removeGeoms();

    this._clearScaleController();

    this.set('legendItems', null);
    this.set('filters', null);
    this.set('isUpdate', false);
    this.set('_padding', null);
    this.set('rendered', false);
    var canvas = this.get('canvas');
    canvas.draw();
    return this;
  };

  _proto.repaint = function repaint() {
    // 如果在没有render之前就repaint的，就直接return退出
    var rendered = this.get('rendered');

    if (!rendered) {
      return;
    }

    this.set('isUpdate', true);
    this.set('legendItems', null);
    Chart.plugins.notify(this, 'repaint');

    this._clearInner();

    this.render();
  };

  _proto.changeData = function changeData(data) {
    this.emit(_const.EVENT_BEFORE_DATA_CHANGE, data);
    this.set('data', data);
    Chart.plugins.notify(this, 'changeData');
    this.emit(_const.EVENT_AFTER_DATA_CHANGE, data);
    this.set('_padding', null);
    this.repaint();
  };

  _proto.changeSize = function changeSize(width, height) {
    if (width) {
      this.set('width', width);
    } else {
      width = this.get('width');
    }

    if (height) {
      this.set('height', height);
    } else {
      height = this.get('height');
    }

    var canvas = this.get('canvas');
    canvas.changeSize(width, height);
    this.emit(_const.EVENT_AFTER_SIZE_CHANGE, {
      width: width,
      height: height
    });
    this.repaint();
    return this;
  };

  _proto.destroy = function destroy() {
    this.clear();
    var canvas = this.get('canvas');
    canvas.destroy();
    Chart.plugins.notify(this, 'afterCanvasDestroyed');

    if (this._interactions) {
      Util.each(this._interactions, function (interaction) {
        interaction.destroy();
      });
    }

    _Base.prototype.destroy.call(this);
  }
  /**
   * calculate dataset's position on canvas
   * @param  {Object} record the dataset
   * @return {Object} return the position
   */
  ;

  _proto.getPosition = function getPosition(record) {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScale = self.getYScales()[0];
    var xField = xScale.field;
    var x = xScale.scale(record[xField]);
    var yField = yScale.field;
    var y = yScale.scale(record[yField]);
    return coord.convertPoint({
      x: x,
      y: y
    });
  }
  /**
   * get the data item of the point
   * @param  {Object} point canvas position
   * @return {Object} return the data item
   */
  ;

  _proto.getRecord = function getRecord(point) {
    var self = this;
    var coord = self.get('coord');
    var xScale = self.getXScale();
    var yScale = self.getYScales()[0];
    var invertPoint = coord.invertPoint(point);
    var record = {};
    record[xScale.field] = xScale.invert(invertPoint.x);
    record[yScale.field] = yScale.invert(invertPoint.y);
    return record;
  }
  /**
   * get the dataset of the point
   * @param  {Object} point canvas position
   * @return {Array} return the dataset
  **/
  ;

  _proto.getSnapRecords = function getSnapRecords(point) {
    var geom = this.get('geoms')[0];
    var data = [];

    if (geom) {
      // need to judge
      data = geom.getSnapRecords(point);
    }

    return data;
  }
  /**
   * creat scale instances
   * @param  {String} field field name of data
   * @return {Scale} return the scale
   */
  ;

  _proto.createScale = function createScale(field) {
    var data = this._getScaleData(field);

    var scaleController = this.get('scaleController');
    return scaleController.createScale(field, data);
  }
  /**
   * @protected
   * add geometry instance to geoms
   * @param {Geom} geom geometry instance
   */
  ;

  _proto.addGeom = function addGeom(geom) {
    var rendered = this.get('rendered');
    var geoms = this.get('geoms');
    geoms.push(geom); // 如果图表已经渲染过了，则直接初始化geom

    if (rendered) {
      this._initGeom(geom);
    }
  }
  /**
   * get the scale of x axis
   * @return {Scale} return the scale
   */
  ;

  _proto.getXScale = function getXScale() {
    var self = this;
    var geoms = self.get('geoms');
    var xScale = geoms[0].getXScale();
    return xScale;
  }
  /**
   * get the scale of y axis
   * @return {Array} return the scale
   */
  ;

  _proto.getYScales = function getYScales() {
    var geoms = this.get('geoms');
    var rst = [];
    Util.each(geoms, function (geom) {
      var yScale = geom.getYScale();

      if (rst.indexOf(yScale) === -1) {
        rst.push(yScale);
      }
    });
    return rst;
  };

  _proto.getLegendItems = function getLegendItems() {
    if (this.get('legendItems')) {
      return this.get('legendItems');
    }

    var legendItems = {};
    var scales = [];
    var geoms = this.get('geoms');
    Util.each(geoms, function (geom) {
      var colorAttr = geom.getAttr('color');

      if (colorAttr) {
        var scale = colorAttr.getScale('color'); // 只支持分类图例

        if (scale.isCategory && !_isScaleExist(scales, scale)) {
          scales.push(scale);
          var field = scale.field;
          var ticks = scale.getTicks();
          var items = [];
          Util.each(ticks, function (tick) {
            var text = tick.text;
            var name = text;
            var scaleValue = tick.value;
            var value = scale.invert(scaleValue);
            var color = colorAttr.mapping(value).join('') || Global.defaultColor;
            var marker = {
              fill: color,
              radius: 3,
              symbol: 'circle',
              stroke: '#fff'
            };
            items.push({
              name: name,
              // for display
              dataValue: value,
              // the origin value
              checked: true,
              marker: marker
            });
          });
          legendItems[field] = items;
        }
      }
    });
    this.set('legendItems', legendItems);
    return legendItems;
  } // register the plugins
  ;

  _proto.registerPlugins = function registerPlugins(plugins) {
    var self = this;
    var chartPlugins = self.get('plugins') || [];

    if (!Util.isArray(chartPlugins)) {
      chartPlugins = [chartPlugins];
    }

    [].concat(plugins).forEach(function (plugin) {
      if (chartPlugins.indexOf(plugin) === -1) {
        plugin.init && plugin.init(self); // init

        chartPlugins.push(plugin);
      }
    });
    Chart.plugins._cacheId++;
    self.set('plugins', chartPlugins);
  };

  _proto._renderAxis = function _renderAxis() {
    var axisController = this.get('axisController');
    var xScale = this.getXScale();
    var yScales = this.getYScales();
    var coord = this.get('coord');
    Chart.plugins.notify(this, 'beforeRenderAxis');
    axisController.createAxis(coord, xScale, yScales);
  };

  _proto._isAutoPadding = function _isAutoPadding() {
    if (this.get('_padding')) {
      return false;
    }

    var padding = this.get('padding');

    if (Util.isArray(padding)) {
      return padding.indexOf('auto') !== -1;
    }

    return padding === 'auto';
  };

  _proto._updateLayout = function _updateLayout(padding) {
    var width = this.get('width');
    var height = this.get('height');
    var start = {
      x: padding[3],
      y: padding[0]
    };
    var end = {
      x: width - padding[1],
      y: height - padding[2]
    };
    var plot = this.get('plot');
    var coord = this.get('coord');
    plot.reset(start, end);
    coord.reset(plot);
  };

  return Chart;
}(Base);

Chart.plugins = Chart.initPlugins();
module.exports = Chart;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = {
  multiply: function multiply(m1, m2) {
    var m11 = m1[0] * m2[0] + m1[2] * m2[1];
    var m12 = m1[1] * m2[0] + m1[3] * m2[1];
    var m21 = m1[0] * m2[2] + m1[2] * m2[3];
    var m22 = m1[1] * m2[2] + m1[3] * m2[3];
    var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
    var dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
    return [m11, m12, m21, m22, dx, dy];
  },
  scale: function scale(out, m, v) {
    out[0] = m[0] * v[0];
    out[1] = m[1] * v[0];
    out[2] = m[2] * v[1];
    out[3] = m[3] * v[1];
    out[4] = m[4];
    out[5] = m[5];
    return out;
  },
  rotate: function rotate(out, m, radian) {
    var c = Math.cos(radian);
    var s = Math.sin(radian);
    var m11 = m[0] * c + m[2] * s;
    var m12 = m[1] * c + m[3] * s;
    var m21 = m[0] * -s + m[2] * c;
    var m22 = m[1] * -s + m[3] * c;
    out[0] = m11;
    out[1] = m12;
    out[2] = m21;
    out[3] = m22;
    out[4] = m[4];
    out[5] = m[5];
    return out;
  },
  translate: function translate(out, m, v) {
    out[0] = m[0];
    out[1] = m[1];
    out[2] = m[2];
    out[3] = m[3];
    out[4] = m[4] + m[0] * v[0] + m[2] * v[1];
    out[5] = m[5] + m[1] * v[0] + m[3] * v[1];
    return out;
  },
  transform: function transform(m, actions) {
    var out = [].concat(m);

    for (var i = 0, len = actions.length; i < len; i++) {
      var action = actions[i];

      switch (action[0]) {
        case 't':
          Matrix.translate(out, out, [action[1], action[2]]);
          break;

        case 's':
          Matrix.scale(out, out, [action[1], action[2]]);
          break;

        case 'r':
          Matrix.rotate(out, out, action[1]);
          break;

        default:
          break;
      }
    }

    return out;
  }
};
module.exports = Matrix;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _util = __webpack_require__(20);

/**
 * @fileOverview the Attribute base class
 */
function toScaleString(scale, value) {
  if ((0, _util.isString)(value)) {
    return value;
  }

  return scale.invert(scale.scale(value));
}
/**
 * 所有视觉通道属性的基类
 * @class Attr
 */


var AttributeBase = /*#__PURE__*/function () {
  function AttributeBase(cfg) {
    var _this = this;

    /**
     * 属性的类型
     * @type {String}
     */
    this.type = 'base';
    /**
     * 属性的名称
     * @type {String}
     */

    this.name = null;
    /**
     * 回调函数
     * @type {Function}
     */

    this.method = null;
    /**
     * 备选的值数组
     * @type {Array}
     */

    this.values = [];
    /**
     * 属性内部的度量
     * @type {Array}
     */

    this.scales = [];
    /**
     * 是否通过线性取值, 如果未指定，则根据数值的类型判定
     * @type {Boolean}
     */

    this.linear = null;
    /**
     * 当用户设置的 callback 返回 null 时, 应该返回默认 callback 中的值
     */

    var mixedCallback = null;
    var defaultCallback = this.callback;

    if (cfg.callback) {
      var userCallback = cfg.callback;

      mixedCallback = function mixedCallback() {
        for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
          params[_key] = arguments[_key];
        }

        var ret = userCallback.apply(void 0, params);

        if ((0, _util.isNil)(ret)) {
          ret = defaultCallback.apply(_this, params);
        }

        return ret;
      };
    }

    (0, _util.mix)(this, cfg);

    if (mixedCallback) {
      (0, _util.mix)(this, {
        callback: mixedCallback
      });
    }
  } // 获取属性值，将值映射到视觉通道


  var _proto = AttributeBase.prototype;

  _proto._getAttrValue = function _getAttrValue(scale, value) {
    var values = this.values;

    if (scale.isCategory && !this.linear) {
      var index = scale.translate(value);
      return values[index % values.length];
    }

    var percent = scale.scale(value);
    return this.getLinearValue(percent);
  }
  /**
   * 如果进行线性映射，返回对应的映射值
   * @protected
   * @param  {Number} percent 百分比
   * @return {*}  颜色值、形状、大小等
   */
  ;

  _proto.getLinearValue = function getLinearValue(percent) {
    var values = this.values;
    var steps = values.length - 1;
    var step = Math.floor(steps * percent);
    var leftPercent = steps * percent - step;
    var start = values[step];
    var end = step === steps ? start : values[step + 1];
    var rstValue = start + (end - start) * leftPercent;
    return rstValue;
  }
  /**
   * 默认的回调函数
   * @param {*} value 回调函数的值
   * @type {Function}
   * @return {Array} 返回映射后的值
   */
  ;

  _proto.callback = function callback(value) {
    var self = this;
    var scale = self.scales[0];
    var rstValue = null;

    if (scale.type === 'identity') {
      rstValue = scale.value;
    } else {
      rstValue = self._getAttrValue(scale, value);
    }

    return rstValue;
  }
  /**
   * 根据度量获取属性名
   * @return {Array} dims of this Attribute
   */
  ;

  _proto.getNames = function getNames() {
    var scales = this.scales;
    var names = this.names;
    var length = Math.min(scales.length, names.length);
    var rst = [];

    for (var i = 0; i < length; i++) {
      rst.push(names[i]);
    }

    return rst;
  }
  /**
   * 根据度量获取维度名
   * @return {Array} dims of this Attribute
   */
  ;

  _proto.getFields = function getFields() {
    var scales = this.scales;
    var rst = [];
    (0, _util.each)(scales, function (scale) {
      rst.push(scale.field);
    });
    return rst;
  }
  /**
   * 根据名称获取度量
   * @param  {String} name the name of scale
   * @return {Scale} scale
   */
  ;

  _proto.getScale = function getScale(name) {
    var scales = this.scales;
    var names = this.names;
    var index = names.indexOf(name);
    return scales[index];
  }
  /**
   * 映射数据
   * @param {*} param1...paramn 多个数值
   * @return {Array} 映射的值组成的数组
   */
  ;

  _proto.mapping = function mapping() {
    var scales = this.scales;
    var callback = this.callback;

    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    var values = params;

    if (callback) {
      for (var i = 0, len = params.length; i < len; i++) {
        params[i] = this._toOriginParam(params[i], scales[i]);
      }

      values = callback.apply(this, params);
    }

    values = [].concat(values);
    return values;
  } // 原始的参数
  ;

  _proto._toOriginParam = function _toOriginParam(param, scale) {
    var rst = param;

    if (!scale.isLinear) {
      if ((0, _util.isArray)(param)) {
        rst = [];

        for (var i = 0, len = param.length; i < len; i++) {
          rst.push(toScaleString(scale, param[i]));
        }
      } else {
        rst = toScaleString(scale, param);
      }
    }

    return rst;
  };

  return AttributeBase;
}();

var _default = AttributeBase;
exports["default"] = _default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var mix = __webpack_require__(64);

var Adjust = /*#__PURE__*/function () {
  var _proto = Adjust.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.adjustNames = ['x', 'y']; // 调整的维度，默认,x,y都做调整
  };

  function Adjust(cfg) {
    this._initDefaultCfg();

    mix(this, cfg);
  }
  /**
   * @override
   */


  _proto.processAdjust = function processAdjust()
  /* dataArray */
  {};

  return Adjust;
}();

module.exports = Adjust;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(27);

var isArray = Array.isArray ? Array.isArray : function (value) {
  return isType(value, 'Array');
};
module.exports = isArray;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// isFinite,
var isNil = function isNil(value) {
  /**
   * isNil(null) => true
   * isNil() => true
   */
  return value === null || value === undefined;
};

module.exports = isNil;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 判断是否数字
 * @return {Boolean} 是否数字
 */
var isType = __webpack_require__(27);

var isNumber = function isNumber(value) {
  return isType(value, 'Number');
};

module.exports = isNumber;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getClip = getClip;
exports.isPointInPlot = isPointInPlot;

var _require = __webpack_require__(16),
    Shape = _require.Shape;

function getClip(coord) {
  var start = coord.start;
  var end = coord.end;
  var width = end.x - start.x;
  var height = Math.abs(end.y - start.y);
  var margin = 10;
  var clip;

  if (coord.isPolar) {
    var circleRadius = coord.circleRadius,
        center = coord.center,
        startAngle = coord.startAngle,
        endAngle = coord.endAngle;
    clip = new Shape.Sector({
      attrs: {
        x: center.x,
        y: center.y,
        r: circleRadius,
        r0: 0,
        startAngle: startAngle,
        endAngle: endAngle
      }
    });
  } else {
    clip = new Shape.Rect({
      attrs: {
        x: start.x,
        y: end.y - margin,
        width: width,
        height: height + 2 * margin
      }
    });
  }

  clip.isClip = true;
  return clip;
}

function isPointInPlot(point, plot) {
  var x = point.x,
      y = point.y;
  var tl = plot.tl,
      tr = plot.tr,
      br = plot.br;
  return x >= tl.x && x <= tr.x && y >= tl.y && y <= br.y;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview shape util
 * @author dxq613@gmail.com
 */
var Util = __webpack_require__(0);

var ShapeUtil = {
  splitPoints: function splitPoints(obj) {
    var points = [];
    var x = obj.x;
    var y = obj.y;
    y = Util.isArray(y) ? y : [y];
    y.forEach(function (yItem, index) {
      var point = {
        x: Util.isArray(x) ? x[index] : x,
        y: yItem
      };
      points.push(point);
    });
    return points;
  },
  splitArray: function splitArray(data, yField, connectNulls) {
    if (!data.length) return [];
    var arr = [];
    var tmp = [];
    var yValue;
    Util.each(data, function (obj) {
      yValue = obj._origin ? obj._origin[yField] : obj[yField];

      if (connectNulls) {
        if (!Util.isNil(yValue)) {
          tmp.push(obj);
        }
      } else {
        if (Util.isArray(yValue) && Util.isNil(yValue[0]) || Util.isNil(yValue)) {
          if (tmp.length) {
            arr.push(tmp);
            tmp = [];
          }
        } else {
          tmp.push(obj);
        }
      }
    });

    if (tmp.length) {
      arr.push(tmp);
    }

    return arr;
  }
};
module.exports = ShapeUtil;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array_like__ = __webpack_require__(7);



var filter = function (arr, func) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_array_like__["a" /* default */])(arr)) {
    return arr;
  }

  var result = [];
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(arr, function (value, index) {
    if (func(value, index)) {
      result.push(value);
    }
  });
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (filter);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isObjectLike = function (value) {
  /**
   * isObjectLike({}) => true
   * isObjectLike([1, 2, 3]) => true
   * isObjectLike(Function) => false
   * isObjectLike(null) => false
   */
  return typeof value === 'object' && value !== null;
};

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mix;
// FIXME: Mutable param should be forbidden in static lang.
function _mix(dist, obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
      dist[key] = obj[key];
    }
  }
}

function mix(dist, src1, src2, src3) {
  if (src1) _mix(dist, src1);
  if (src2) _mix(dist, src2);
  if (src3) _mix(dist, src3);
  return dist;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(0);

// 实现简单的事件机制
var EventEmit = /*#__PURE__*/function () {
  function EventEmit() {
    this.__events = {};
  }

  var _proto = EventEmit.prototype;

  _proto.on = function on(type, listener) {
    if (!type || !listener) {
      return;
    }

    var events = this.__events[type] || [];
    events.push(listener);
    this.__events[type] = events;
  };

  _proto.emit = function emit(type, e) {
    var _this = this;

    if ((0, _common.isObject)(type)) {
      e = type;
      type = e && e.type;
    }

    if (!type) {
      return;
    }

    var events = this.__events[type];

    if (!events || !events.length) {
      return;
    }

    events.forEach(function (listener) {
      listener.call(_this, e);
    });
  };

  _proto.off = function off(type, listener) {
    var __events = this.__events;
    var events = __events[type];

    if (!events || !events.length) {
      return;
    } // 如果没有指定方法，则删除所有项


    if (!listener) {
      delete __events[type];
      return;
    } // 删除指定的 listener


    for (var i = 0, len = events.length; i < len; i++) {
      if (events[i] === listener) {
        events.splice(i, 1);
      }
    }
  };

  return EventEmit;
}();

var _default = EventEmit;
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var MatrixUtil = __webpack_require__(31);

var Vector2 = __webpack_require__(13);

var defaultMatrix = [1, 0, 0, 1, 0, 0];

var Base = /*#__PURE__*/function () {
  var _proto = Base.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {};

  function Base(cfg) {
    this._initDefaultCfg();

    Util.mix(this, cfg);
    var start;
    var end;

    if (this.plot) {
      start = this.plot.bl;
      end = this.plot.tr;
      this.start = start;
      this.end = end;
    } else {
      start = this.start;
      end = this.end;
    }

    this.init(start, end);
  }

  _proto._scale = function _scale(s1, s2) {
    var matrix = this.matrix;
    var center = this.center;
    MatrixUtil.translate(matrix, matrix, [center.x, center.y]);
    MatrixUtil.scale(matrix, matrix, [s1, s2]);
    MatrixUtil.translate(matrix, matrix, [-center.x, -center.y]);
  };

  _proto.init = function init(start, end) {
    this.matrix = [].concat(defaultMatrix); // 设置中心点

    this.center = {
      x: (end.x - start.x) / 2 + start.x,
      y: (end.y - start.y) / 2 + start.y
    };

    if (this.scale) {
      this._scale(this.scale[0], this.scale[1]);
    }
  };

  _proto.convertPoint = function convertPoint(point) {
    var _this$_convertPoint = this._convertPoint(point),
        x = _this$_convertPoint.x,
        y = _this$_convertPoint.y;

    var vector = [x, y];
    Vector2.transformMat2d(vector, vector, this.matrix);
    return {
      x: vector[0],
      y: vector[1]
    };
  };

  _proto.invertPoint = function invertPoint(point) {
    return this._invertPoint(point);
  };

  _proto._convertPoint = function _convertPoint(point) {
    return point;
  };

  _proto._invertPoint = function _invertPoint(point) {
    return point;
  };

  _proto.reset = function reset(plot) {
    this.plot = plot;
    var bl = plot.bl,
        tr = plot.tr;
    this.start = bl;
    this.end = tr;
    this.init(bl, tr);
  };

  return Base;
}();

module.exports = Base;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isObject = function isObject(value) {
  /**
   * isObject({}) => true
   * isObject([1, 2, 3]) => true
   * isObject(Function) => true
   * isObject(null) => false
   */
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value !== null && type === 'object' || type === 'function';
};

module.exports = isObject;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Global = __webpack_require__(6);

var Vector2 = __webpack_require__(13);

var Abastract = /*#__PURE__*/function () {
  var _proto = Abastract.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    /**
     * ticks
     * @type {Array}
     */
    this.ticks = [];
    /**
     * the configuration for tickLine
     * @type {Object}
     */

    this.tickLine = {};
    /**
     * the direction of ticks, 1 means clockwise
     * @type {Number}
     */

    this.offsetFactor = 1;
    /**
     * the top container
     * @type {container}
     */

    this.frontContainer = null;
    /**
     * the back container
     * @type {[type]}
     */

    this.backContainer = null;
    /**
     * points for draw grid line
     * @type {Array}
     */

    this.gridPoints = [];
  };

  function Abastract(cfg) {
    this._initDefaultCfg();

    Util.mix(this, cfg);
    this.draw();
  }

  _proto.draw = function draw() {
    var line = this.line,
        tickLine = this.tickLine,
        label = this.label,
        grid = this.grid;
    grid && this.drawGrid(grid); // draw the grid lines

    tickLine && this.drawTicks(tickLine); // draw the tickLine

    line && this.drawLine(line); // draw axis line

    label && this.drawLabels(); // draw ticks
  };

  _proto.drawTicks = function drawTicks(tickCfg) {
    var self = this;
    var ticks = self.ticks;
    var length = tickCfg.length;
    var container = self.getContainer(tickCfg.top);
    Util.each(ticks, function (tick) {
      var start = self.getOffsetPoint(tick.value);
      var end = self.getSidePoint(start, length);
      var shape = container.addShape('line', {
        className: 'axis-tick',
        attrs: Util.mix({
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        }, tickCfg)
      });
      shape._id = self._id + '-ticks';
    });
  };

  _proto.drawLabels = function drawLabels() {
    var self = this;
    var labelOffset = self.labelOffset;
    var labels = self.labels;
    Util.each(labels, function (labelShape) {
      var container = self.getContainer(labelShape.get('top'));
      var start = self.getOffsetPoint(labelShape.get('value'));

      var _self$getSidePoint = self.getSidePoint(start, labelOffset),
          x = _self$getSidePoint.x,
          y = _self$getSidePoint.y;

      labelShape.attr(Util.mix({
        x: x,
        y: y
      }, self.getTextAlignInfo(start, labelOffset), labelShape.get('textStyle')));
      labelShape._id = self._id + '-' + labelShape.attr('text');
      container.add(labelShape);
    });
  };

  _proto.drawLine = function drawLine() {};

  _proto.drawGrid = function drawGrid(grid) {
    var self = this;
    var gridPoints = self.gridPoints,
        ticks = self.ticks;
    var gridCfg = grid;
    var count = gridPoints.length;
    Util.each(gridPoints, function (subPoints, index) {
      if (Util.isFunction(grid)) {
        var tick = ticks[index] || {};
        var executedGrid = grid(tick.text, index, count);
        gridCfg = executedGrid ? Util.mix({}, Global._defaultAxis.grid, executedGrid) : null;
      }

      if (gridCfg) {
        var type = gridCfg.type; // has two types: 'line' and 'arc'

        var points = subPoints.points;
        var container = self.getContainer(gridCfg.top);
        var shape;

        if (type === 'arc') {
          var center = self.center,
              startAngle = self.startAngle,
              endAngle = self.endAngle;
          var radius = Vector2.length([points[0].x - center.x, points[0].y - center.y]);
          shape = container.addShape('Arc', {
            className: 'axis-grid',
            attrs: Util.mix({
              x: center.x,
              y: center.y,
              startAngle: startAngle,
              endAngle: endAngle,
              r: radius
            }, gridCfg)
          });
        } else {
          shape = container.addShape('Polyline', {
            className: 'axis-grid',
            attrs: Util.mix({
              points: points
            }, gridCfg)
          });
        }

        shape._id = subPoints._id;
      }
    });
  };

  _proto.getOffsetPoint = function getOffsetPoint() {};

  _proto.getAxisVector = function getAxisVector() {};

  _proto.getOffsetVector = function getOffsetVector(point, offset) {
    var self = this;
    var axisVector = self.getAxisVector(point);
    var normal = Vector2.normalize([], axisVector);
    var factor = self.offsetFactor;
    var verticalVector = [normal[1] * -1 * factor, normal[0] * factor];
    return Vector2.scale([], verticalVector, offset);
  };

  _proto.getSidePoint = function getSidePoint(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    return {
      x: point.x + offsetVector[0],
      y: point.y + offsetVector[1]
    };
  };

  _proto.getTextAlignInfo = function getTextAlignInfo(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    var align;
    var baseLine;

    if (offsetVector[0] > 0) {
      align = 'left';
    } else if (offsetVector[0] < 0) {
      align = 'right';
    } else {
      align = 'center';
    }

    if (offsetVector[1] > 0) {
      baseLine = 'top';
    } else if (offsetVector[1] < 0) {
      baseLine = 'bottom';
    } else {
      baseLine = 'middle';
    }

    return {
      textAlign: align,
      textBaseline: baseLine
    };
  };

  _proto.getContainer = function getContainer(isTop) {
    var frontContainer = this.frontContainer,
        backContainer = this.backContainer;
    return isTop ? frontContainer : backContainer;
  };

  return Abastract;
}();

module.exports = Abastract;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var MatrixUtil = __webpack_require__(31);

var Vector2 = __webpack_require__(13);

var StyleUtil = __webpack_require__(179);

function isUnchanged(m) {
  return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0;
}

var ALIAS_ATTRS_MAP = {
  stroke: 'strokeStyle',
  fill: 'fillStyle',
  opacity: 'globalAlpha'
};
var SHAPE_ATTRS = ['fillStyle', 'font', 'globalAlpha', 'lineCap', 'lineWidth', 'lineJoin', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle', 'textAlign', 'textBaseline', 'lineDash', 'shadow' // 兼容支付宝小程序
];
var CLIP_SHAPES = ['circle', 'sector', 'polygon', 'rect', 'polyline'];

var Element = /*#__PURE__*/function () {
  var _proto = Element.prototype;

  _proto._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false
    };
  };

  function Element(cfg) {
    this._initProperties();

    Util.mix(this._attrs, cfg);
    var attrs = this._attrs.attrs;

    if (attrs) {
      this.initAttrs(attrs);
    }

    this.initTransform();
  }

  _proto.get = function get(name) {
    return this._attrs[name];
  };

  _proto.set = function set(name, value) {
    this._attrs[name] = value;
  };

  _proto.isGroup = function isGroup() {
    return this.get('isGroup');
  };

  _proto.isShape = function isShape() {
    return this.get('isShape');
  };

  _proto.initAttrs = function initAttrs(attrs) {
    this.attr(Util.mix(this.getDefaultAttrs(), attrs));
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {};
  };

  _proto._setAttr = function _setAttr(name, value) {
    var attrs = this._attrs.attrs;

    if (name === 'clip') {
      value = this._setAttrClip(value);
    } else {
      var alias = ALIAS_ATTRS_MAP[name];

      if (alias) {
        attrs[alias] = value;
      }
    }

    attrs[name] = value;
  };

  _proto._getAttr = function _getAttr(name) {
    return this._attrs.attrs[name];
  } // _afterAttrsSet() {}
  ;

  _proto._setAttrClip = function _setAttrClip(clip) {
    if (clip && CLIP_SHAPES.indexOf(clip._attrs.type) > -1) {
      if (clip.get('canvas') === null) {
        clip = Object.assign({}, clip);
      }

      clip.set('parent', this.get('parent'));
      clip.set('context', this.get('context'));
      return clip;
    }

    return null;
  };

  _proto.attr = function attr(name, value) {
    var self = this;
    if (self.get('destroyed')) return null;
    var argumentsLen = arguments.length;

    if (argumentsLen === 0) {
      return self._attrs.attrs;
    }

    if (Util.isObject(name)) {
      this._attrs.bbox = null;

      for (var k in name) {
        self._setAttr(k, name[k]);
      }

      if (self._afterAttrsSet) {
        self._afterAttrsSet();
      }

      return self;
    }

    if (argumentsLen === 2) {
      this._attrs.bbox = null;

      self._setAttr(name, value);

      if (self._afterAttrsSet) {
        self._afterAttrsSet();
      }

      return self;
    }

    return self._getAttr(name);
  };

  _proto.getParent = function getParent() {
    return this.get('parent');
  };

  _proto.draw = function draw(context) {
    if (this.get('destroyed')) {
      return;
    }

    if (this.get('visible')) {
      this.setContext(context);
      this.drawInner(context);
      this.restoreContext(context);
    }
  };

  _proto.setContext = function setContext(context) {
    var clip = this._attrs.attrs.clip;
    context.save();

    if (clip) {
      clip.resetTransform(context);
      clip.createPath(context);
      context.clip();
    }

    this.resetContext(context);
    this.resetTransform(context);
  };

  _proto.restoreContext = function restoreContext(context) {
    context.restore();
  };

  _proto.resetContext = function resetContext(context) {
    var elAttrs = this._attrs.attrs;

    if (!this._attrs.isGroup) {
      for (var k in elAttrs) {
        if (SHAPE_ATTRS.indexOf(k) > -1) {
          var v = elAttrs[k];

          if (k === 'fillStyle' || k === 'strokeStyle') {
            v = StyleUtil.parseStyle(v, this, context);
          }

          if (k === 'lineDash' && context.setLineDash && Util.isArray(v)) {
            context.setLineDash(v);
          } else {
            context[k] = v;
          }
        }
      }
    }
  };

  _proto.hasFill = function hasFill() {
    return this.get('canFill') && this._attrs.attrs.fillStyle;
  };

  _proto.hasStroke = function hasStroke() {
    return this.get('canStroke') && this._attrs.attrs.strokeStyle;
  };

  _proto.drawInner = function drawInner()
  /* context */
  {};

  _proto.show = function show() {
    this.set('visible', true);
    return this;
  };

  _proto.hide = function hide() {
    this.set('visible', false);
    return this;
  };

  _proto.isVisible = function isVisible() {
    return this.get('visible');
  };

  _proto._removeFromParent = function _removeFromParent() {
    var parent = this.get('parent');

    if (parent) {
      var children = parent.get('children');
      Util.Array.remove(children, this);
    }

    return this;
  };

  _proto.remove = function remove(destroy) {
    if (destroy) {
      this.destroy();
    } else {
      this._removeFromParent();
    }
  };

  _proto.destroy = function destroy() {
    var destroyed = this.get('destroyed');

    if (destroyed) {
      return null;
    }

    this._removeFromParent();

    this._attrs = {};
    this.set('destroyed', true);
  };

  _proto.getBBox = function getBBox() {
    return {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      width: 0,
      height: 0
    };
  };

  _proto.initTransform = function initTransform() {
    var attrs = this._attrs.attrs || {};

    if (!attrs.matrix) {
      attrs.matrix = [1, 0, 0, 1, 0, 0];
    }

    this._attrs.attrs = attrs;
  };

  _proto.getMatrix = function getMatrix() {
    return this._attrs.attrs.matrix;
  };

  _proto.setMatrix = function setMatrix(m) {
    this._attrs.attrs.matrix = [m[0], m[1], m[2], m[3], m[4], m[5]];
  };

  _proto.transform = function transform(actions) {
    var matrix = this._attrs.attrs.matrix;
    this._attrs.attrs.matrix = MatrixUtil.transform(matrix, actions);
    return this;
  };

  _proto.setTransform = function setTransform(actions) {
    this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0];
    return this.transform(actions);
  };

  _proto.translate = function translate(x, y) {
    var matrix = this._attrs.attrs.matrix;
    MatrixUtil.translate(matrix, matrix, [x, y]);
  };

  _proto.rotate = function rotate(rad) {
    var matrix = this._attrs.attrs.matrix;
    MatrixUtil.rotate(matrix, matrix, rad);
  };

  _proto.scale = function scale(sx, sy) {
    var matrix = this._attrs.attrs.matrix;
    MatrixUtil.scale(matrix, matrix, [sx, sy]);
  };

  _proto.moveTo = function moveTo(x, y) {
    var cx = this._attrs.x || 0;
    var cy = this._attrs.y || 0;
    this.translate(x - cx, y - cy);
    this.set('x', x);
    this.set('y', y);
  };

  _proto.apply = function apply(v) {
    var m = this._attrs.attrs.matrix;
    Vector2.transformMat2d(v, v, m);
    return this;
  };

  _proto.resetTransform = function resetTransform(context) {
    var mo = this._attrs.attrs.matrix;

    if (!isUnchanged(mo)) {
      context.transform(mo[0], mo[1], mo[2], mo[3], mo[4], mo[5]);
    }
  };

  _proto.isDestroyed = function isDestroyed() {
    return this.get('destroyed');
  };

  return Element;
}();

module.exports = Element;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EVENT_AFTER_GEOM_INIT = exports.EVENT_AFTER_SIZE_CHANGE = exports.EVENT_AFTER_DATA_CHANGE = exports.EVENT_BEFORE_DATA_CHANGE = exports.EVENT_AFTER_RENDER = exports.EVENT_BEFORE_RENDER = exports.EVENT_AFTER_INIT = void 0;
var EVENT_AFTER_INIT = 'afterinit';
exports.EVENT_AFTER_INIT = EVENT_AFTER_INIT;
var EVENT_BEFORE_RENDER = 'beforerender';
exports.EVENT_BEFORE_RENDER = EVENT_BEFORE_RENDER;
var EVENT_AFTER_RENDER = 'afterrender';
exports.EVENT_AFTER_RENDER = EVENT_AFTER_RENDER;
var EVENT_BEFORE_DATA_CHANGE = 'beforedatachange';
exports.EVENT_BEFORE_DATA_CHANGE = EVENT_BEFORE_DATA_CHANGE;
var EVENT_AFTER_DATA_CHANGE = 'afterdatachange';
exports.EVENT_AFTER_DATA_CHANGE = EVENT_AFTER_DATA_CHANGE;
var EVENT_AFTER_SIZE_CHANGE = '_aftersizechange';
exports.EVENT_AFTER_SIZE_CHANGE = EVENT_AFTER_SIZE_CHANGE;
var EVENT_AFTER_GEOM_INIT = '_aftergeominit';
exports.EVENT_AFTER_GEOM_INIT = EVENT_AFTER_GEOM_INIT;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(27);

var isString = function isString(str) {
  return isType(str, 'String');
};

module.exports = isString;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(50);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_nil__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(52);



function isMatch(obj, attrs) {
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys__["a" /* default */])(attrs);

  var length = _keys.length;
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_nil__["a" /* default */])(obj)) return !length;

  for (var i = 0; i < length; i += 1) {
    var key = _keys[i];

    if (attrs[key] !== obj[key] || !(key in obj)) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["a"] = (isMatch);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_function__ = __webpack_require__(9);


var keys = Object.keys ? function (obj) {
  return Object.keys(obj);
} : function (obj) {
  var result = [];
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(obj, function (value, key) {
    if (!(Object(__WEBPACK_IMPORTED_MODULE_1__is_function__["a" /* default */])(obj) && key === 'prototype')) {
      result.push(key);
    }
  });
  return result;
};
/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);

var splice = Array.prototype.splice;

var pullAt = function pullAt(arr, indexes) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(arr)) {
    return [];
  }

  var length = arr ? indexes.length : 0;
  var last = length - 1;

  while (length--) {
    var previous = void 0;
    var index = indexes[length];

    if (length === last || index !== previous) {
      previous = index;
      splice.call(arr, index, 1);
    }
  }

  return arr;
};

/* harmony default export */ __webpack_exports__["a"] = (pullAt);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each__ = __webpack_require__(8);



var uniq = function (arr) {
  var resultArr = [];
  Object(__WEBPACK_IMPORTED_MODULE_1__each__["a" /* default */])(arr, function (item) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(resultArr, item)) {
      resultArr.push(item);
    }
  });
  return resultArr;
};

/* harmony default export */ __webpack_exports__["a"] = (uniq);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_function__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_by__ = __webpack_require__(56);




var groupToMap = function (data, condition) {
  if (!condition) {
    return {
      0: data
    };
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_function__["a" /* default */])(condition)) {
    var paramsCondition_1 = Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(condition) ? condition : condition.replace(/\s+/g, '').split('*');

    condition = function (row) {
      var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序

      for (var i = 0, l = paramsCondition_1.length; i < l; i++) {
        unique += row[paramsCondition_1[i]] && row[paramsCondition_1[i]].toString();
      }

      return unique;
    };
  }

  var groups = Object(__WEBPACK_IMPORTED_MODULE_2__group_by__["a" /* default */])(data, condition);
  return groups;
};

/* harmony default export */ __webpack_exports__["a"] = (groupToMap);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_function__ = __webpack_require__(9);



var hasOwnProperty = Object.prototype.hasOwnProperty;

function groupBy(data, condition) {
  if (!condition || !Object(__WEBPACK_IMPORTED_MODULE_1__is_array__["a" /* default */])(data)) {
    return {};
  }

  var result = {}; // 兼容方法和 字符串的写法

  var predicate = Object(__WEBPACK_IMPORTED_MODULE_2__is_function__["a" /* default */])(condition) ? condition : function (item) {
    return item[condition];
  };
  var key;
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(data, function (item) {
    key = predicate(item);

    if (hasOwnProperty.call(result, key)) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  });
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (groupBy);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (obj, key) {
  return obj.hasOwnProperty(key);
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_function__ = __webpack_require__(9);

 // @ts-ignore

var values = Object.values ? function (obj) {
  return Object.values(obj);
} : function (obj) {
  var result = [];
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(obj, function (value, key) {
    if (!(Object(__WEBPACK_IMPORTED_MODULE_1__is_function__["a" /* default */])(obj) && key === 'prototype')) {
      result.push(value);
    }
  });
  return result;
};
/* harmony default export */ __webpack_exports__["a"] = (values);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var toString = {}.toString;

var getType = function (value) {
  return toString.call(value).replace(/^\[object /, '').replace(/]$/, '');
};

/* harmony default export */ __webpack_exports__["a"] = (getType);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var objectProto = Object.prototype;

var isPrototype = function (value) {
  var Ctor = value && value.constructor;
  var proto = typeof Ctor === 'function' && Ctor.prototype || objectProto;
  return value === proto;
};

/* harmony default export */ __webpack_exports__["a"] = (isPrototype);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_object_like__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array_like__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_string__ = __webpack_require__(18);




var isEqual = function (value, other) {
  if (value === other) {
    return true;
  }

  if (!value || !other) {
    return false;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__is_string__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_2__is_string__["a" /* default */])(other)) {
    return false;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_1__is_array_like__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_1__is_array_like__["a" /* default */])(other)) {
    if (value.length !== other.length) {
      return false;
    }

    var rst = true;

    for (var i = 0; i < value.length; i++) {
      rst = isEqual(value[i], other[i]);

      if (!rst) {
        break;
      }
    }

    return rst;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_object_like__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__is_object_like__["a" /* default */])(other)) {
    var valueKeys = Object.keys(value);
    var otherKeys = Object.keys(other);

    if (valueKeys.length !== otherKeys.length) {
      return false;
    }

    var rst = true;

    for (var i = 0; i < valueKeys.length; i++) {
      rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);

      if (!rst) {
        break;
      }
    }

    return rst;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["a"] = (isEqual);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isCanvasElement = isCanvasElement;
exports.getPixelRatio = getPixelRatio;
exports.getStyle = getStyle;
exports.getWidth = getWidth;
exports.getHeight = getHeight;
exports.getDomById = getDomById;
exports.getRelativePosition = getRelativePosition;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.createEvent = createEvent;
exports.measureText = measureText;
exports.isBrowser = exports.isNode = exports.isMy = exports.isWx = void 0;

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = function () {
  var supports = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        supports = true;
      }
    });
    window.addEventListener('e', null, options);
  } catch (e) {// continue regardless of error
  }

  return supports;
}(); // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287


var eventListenerOptions = supportsEventListenerOptions ? {
  passive: true
} : false;
/* global wx, my */
// weixin miniprogram

var isWx = typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function'; // ant miniprogram

exports.isWx = isWx;
var isMy = typeof my === 'object' && typeof my.getSystemInfoSync === 'function'; // in node

exports.isMy = isMy;
var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined'; // in browser

exports.isNode = isNode;
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.sessionStorage !== 'undefined';
exports.isBrowser = isBrowser;

function isCanvasElement(el) {
  if (!el || typeof el !== 'object') return false;

  if (el.nodeType === 1 && el.nodeName) {
    // HTMLCanvasElement
    return true;
  } // CanvasElement


  return !!el.isCanvasElement;
}

function getPixelRatio() {
  return window && window.devicePixelRatio || 1;
}

function getStyle(el, property) {
  return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
}

function getWidth(el) {
  var width = getStyle(el, 'width');

  if (width === 'auto') {
    width = el.offsetWidth;
  }

  return parseFloat(width);
}

function getHeight(el) {
  var height = getStyle(el, 'height');

  if (height === 'auto') {
    height = el.offsetHeight;
  }

  return parseFloat(height);
}

function getDomById(id) {
  if (!id) {
    return null;
  }

  return document.getElementById(id);
}

function getRelativePosition(point, canvas) {
  var canvasDom = canvas.get('el');
  if (!canvasDom) return point;

  var _canvasDom$getBoundin = canvasDom.getBoundingClientRect(),
      top = _canvasDom$getBoundin.top,
      right = _canvasDom$getBoundin.right,
      bottom = _canvasDom$getBoundin.bottom,
      left = _canvasDom$getBoundin.left;

  var paddingLeft = parseFloat(getStyle(canvasDom, 'padding-left'));
  var paddingTop = parseFloat(getStyle(canvasDom, 'padding-top'));
  var paddingRight = parseFloat(getStyle(canvasDom, 'padding-right'));
  var paddingBottom = parseFloat(getStyle(canvasDom, 'padding-bottom'));
  var width = right - left - paddingLeft - paddingRight;
  var height = bottom - top - paddingTop - paddingBottom;
  var pixelRatio = canvas.get('pixelRatio');
  var mouseX = (point.x - left - paddingLeft) / width * canvasDom.width / pixelRatio;
  var mouseY = (point.y - top - paddingTop) / height * canvasDom.height / pixelRatio;
  return {
    x: mouseX,
    y: mouseY
  };
}

function addEventListener(source, type, listener) {
  source.addEventListener(type, listener, eventListenerOptions);
}

function removeEventListener(source, type, listener) {
  source.removeEventListener(type, listener, eventListenerOptions);
}

function createEventObj(type, chart, x, y, nativeEvent) {
  return {
    type: type,
    chart: chart,
    "native": nativeEvent || null,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}

function createEvent(event, chart) {
  var type = event.type;
  var clientPoint; // 说明是touch相关事件

  if (event.touches) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/changedTouches
    // 这里直接拿changedTouches就可以了，不管是touchstart, touchmove, touchend changedTouches 都是有的
    // 为了以防万一，做个空判断
    var touch = event.changedTouches[0] || {}; // x, y: 相对canvas原点的位置，clientX, clientY 相对于可视窗口的位置

    var x = touch.x,
        y = touch.y,
        clientX = touch.clientX,
        clientY = touch.clientY; // 小程序环境会有x,y，这里就直接返回

    if (x && y) {
      return createEventObj(type, chart, x, y, event);
    }

    clientPoint = {
      x: clientX,
      y: clientY
    };
  } else {
    // mouse相关事件
    clientPoint = {
      x: event.clientX,
      y: event.clientY
    };
  } // 理论上应该是只有有在浏览器环境才会走到这里


  var canvas = chart.get('canvas'); // 通过clientX, clientY 计算x, y

  var point = getRelativePosition(clientPoint, canvas);
  return createEventObj(type, chart, point.x, point.y, event);
}

function measureText(text, font, ctx) {
  if (!ctx) {
    ctx = document.createElement('canvas').getContext('2d');
  }

  ctx.font = font || '12px sans-serif';
  return ctx.measureText(text);
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _emit = _interopRequireDefault(__webpack_require__(42));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Base = /*#__PURE__*/function (_Emit) {
  (0, _inheritsLoose2["default"])(Base, _Emit);

  var _super = _createSuper(Base);

  var _proto = Base.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {};
  };

  function Base(cfg) {
    var _this;

    _this = _Emit.call(this) || this;
    var attrs = {};

    var defaultCfg = _this.getDefaultCfg();

    _this._attrs = attrs;
    Util.mix(attrs, defaultCfg, cfg);
    return _this;
  }

  _proto.get = function get(name) {
    return this._attrs[name];
  };

  _proto.set = function set(name, value) {
    this._attrs[name] = value;
  };

  _proto.destroy = function destroy() {
    this._attrs = {};
    this.destroyed = true;
  };

  return Base;
}(_emit["default"]);

module.exports = Base;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

function _mix(dist, obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
      dist[key] = obj[key];
    }
  }
}

var mix = function mix(dist, src1, src2, src3) {
  if (src1) _mix(dist, src1);
  if (src2) _mix(dist, src2);
  if (src3) _mix(dist, src3);
  return dist;
};

module.exports = mix;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 计算分类的的坐标点
 * @author dxq613@gmail.com
 */
var each = __webpack_require__(15);

var MAX_COUNT = 8;
var SUB_COUNT = 4; // 控制个数不能过小

function getSimpleArray(data) {
  var arr = [];
  each(data, function (sub) {
    arr = arr.concat(sub);
  });
  return arr;
}

function getGreatestFactor(count, number) {
  var i;

  for (i = number; i > 0; i--) {
    if (count % i === 0) {
      break;
    }
  } // 如果是素数，没有可以整除的数字


  if (i === 1) {
    for (i = number; i > 0; i--) {
      if ((count - 1) % i === 0) {
        break;
      }
    }
  }

  return i;
}

module.exports = function (info) {
  var rst = {};
  var ticks = [];
  var isRounding = info.isRounding;
  var categories = getSimpleArray(info.data);
  var length = categories.length;
  var maxCount = info.maxCount || MAX_COUNT;
  var tickCount;

  if (isRounding) {
    // 取整操作
    tickCount = getGreatestFactor(length - 1, maxCount - 1) + 1; // 如果计算出来只有两个坐标点，则直接使用传入的 maxCount

    if (tickCount === 2) {
      tickCount = maxCount;
    } else if (tickCount < maxCount - SUB_COUNT) {
      tickCount = maxCount - SUB_COUNT;
    }
  } else {
    tickCount = maxCount;
  }

  if (!isRounding && length <= tickCount + tickCount / 2) {
    ticks = [].concat(categories);
  } else {
    var step = parseInt(length / (tickCount - 1), 10);
    var groups = categories.map(function (e, i) {
      return i % step === 0 ? categories.slice(i, i + step) : null;
    }).filter(function (e) {
      return e;
    });

    for (var i = 1, groupLen = groups.length; i < groupLen && (isRounding ? i * step < length - step : i < tickCount - 1); i++) {
      ticks.push(groups[i][0]);
    }

    if (categories.length) {
      ticks.unshift(categories[0]);
      var last = categories[length - 1];

      if (ticks.indexOf(last) === -1) {
        ticks.push(last);
      }
    }
  }

  rst.categories = categories;
  rst.ticks = ticks;
  return rst;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Shape = __webpack_require__(10);

var SHAPE_MAP = {};
var INDEX = '_INDEX';

function getComparer(compare) {
  return function (left, right) {
    var result = compare(left, right);
    return result === 0 ? left[INDEX] - right[INDEX] : result;
  };
}

module.exports = {
  getGroupClass: function getGroupClass() {},
  getChildren: function getChildren() {
    return this.get('children');
  },
  addShape: function addShape(type, cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var canvas = this.get('canvas');
    var shapeType = SHAPE_MAP[type];

    if (!shapeType) {
      shapeType = Util.upperFirst(type);
      SHAPE_MAP[type] = shapeType;
    }

    cfg.canvas = canvas;

    if (shapeType === 'Text' && canvas && canvas.get('fontFamily')) {
      cfg.attrs.fontFamily = cfg.attrs.fontFamily || canvas.get('fontFamily');
    }

    var shape = new Shape[shapeType](cfg);
    this.add(shape);
    return shape;
  },
  addGroup: function addGroup(cfg) {
    var canvas = this.get('canvas');
    var groupClass = this.getGroupClass();
    cfg = Util.mix({}, cfg);
    cfg.canvas = canvas;
    cfg.parent = this;
    var rst = new groupClass(cfg);
    this.add(rst);
    return rst;
  },
  contain: function contain(item) {
    var children = this.get('children');
    return children.indexOf(item) > -1;
  },
  sort: function sort() {
    var children = this.get('children');

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child[INDEX] = i;
    }

    children.sort(getComparer(function (obj1, obj2) {
      return obj1.get('zIndex') - obj2.get('zIndex');
    }));
    return this;
  },
  clear: function clear() {
    var children = this.get('children');

    while (children.length !== 0) {
      children[children.length - 1].remove(true);
    }

    return this;
  },
  add: function add(items) {
    var self = this;
    var children = self.get('children');

    if (!Util.isArray(items)) {
      items = [items];
    }

    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];
      var parent = item.get('parent');

      if (parent) {
        var descendants = parent.get('children');
        Util.Array.remove(descendants, item);
      }

      self._setEvn(item);

      children.push(item);
    }

    return self;
  },
  _setEvn: function _setEvn(item) {
    var self = this;
    item._attrs.parent = self;
    item._attrs.context = self._attrs.context;
    item._attrs.canvas = self._attrs.canvas;
    var clip = item._attrs.attrs.clip;

    if (clip) {
      clip.set('parent', self);
      clip.set('context', self.get('context'));
    }

    if (item._attrs.isGroup) {
      var children = item._attrs.children;

      for (var i = 0, len = children.length; i < len; i++) {
        item._setEvn(children[i]);
      }
    }
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Element = __webpack_require__(46);

var Container = __webpack_require__(66);

var Vector2 = __webpack_require__(13);

var Group = /*#__PURE__*/function (_Element) {
  (0, _inheritsLoose2["default"])(Group, _Element);

  var _super = _createSuper(Group);

  function Group() {
    return _Element.apply(this, arguments) || this;
  }

  var _proto = Group.prototype;

  _proto._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isGroup: true,
      children: []
    };
  };

  _proto.drawInner = function drawInner(context) {
    var children = this.get('children');

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child.draw(context);
    }

    return this;
  };

  _proto.getBBox = function getBBox() {
    var self = this;
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    var children = self.get('children');

    for (var i = 0, length = children.length; i < length; i++) {
      var child = children[i];

      if (child.get('visible')) {
        var box = child.getBBox();

        if (!box) {
          continue;
        }

        var leftTop = [box.minX, box.minY];
        var leftBottom = [box.minX, box.maxY];
        var rightTop = [box.maxX, box.minY];
        var rightBottom = [box.maxX, box.maxY];
        var matrix = child.attr('matrix');
        Vector2.transformMat2d(leftTop, leftTop, matrix);
        Vector2.transformMat2d(leftBottom, leftBottom, matrix);
        Vector2.transformMat2d(rightTop, rightTop, matrix);
        Vector2.transformMat2d(rightBottom, rightBottom, matrix);
        minX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], minX);
        maxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], maxX);
        minY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], minY);
        maxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], maxY);
      }
    }

    return {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY,
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  };

  _proto.destroy = function destroy() {
    if (this.get('destroyed')) {
      return;
    }

    this.clear();

    _Element.prototype.destroy.call(this);
  };

  return Group;
}(Element);

Util.mix(Group.prototype, Container, {
  getGroupClass: function getGroupClass() {
    return Group;
  }
});
module.exports = Group;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Shape = __webpack_require__(19);

var ShapeUtil = __webpack_require__(38);

var Global = __webpack_require__(6); // register line geom


var Line = Shape.registerFactory('line', {
  defaultShapeType: 'line'
});

function getStyle(cfg) {
  var style = {
    strokeStyle: cfg.color
  };

  if (cfg.size >= 0) {
    style.lineWidth = cfg.size;
  }

  Util.mix(style, cfg.style);
  return Util.mix({}, Global.shape.line, style);
}

function drawLines(cfg, container, style, smooth) {
  var points = cfg.points;

  if (points.length && Util.isArray(points[0].y)) {
    var topPoints = [];
    var bottomPoints = [];

    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];
      var tmp = ShapeUtil.splitPoints(point);
      bottomPoints.push(tmp[0]);
      topPoints.push(tmp[1]);
    }

    if (cfg.isInCircle) {
      topPoints.push(topPoints[0]);
      bottomPoints.push(bottomPoints[0]);
    }

    if (cfg.isStack) {
      return container.addShape('Polyline', {
        className: 'line',
        attrs: Util.mix({
          points: topPoints,
          smooth: smooth
        }, style)
      });
    }

    var topShape = container.addShape('Polyline', {
      className: 'line',
      attrs: Util.mix({
        points: topPoints,
        smooth: smooth
      }, style)
    });
    var bottomShape = container.addShape('Polyline', {
      className: 'line',
      attrs: Util.mix({
        points: bottomPoints,
        smooth: smooth
      }, style)
    });
    return [topShape, bottomShape];
  }

  if (cfg.isInCircle) {
    points.push(points[0]);
  }

  return container.addShape('Polyline', {
    className: 'line',
    attrs: Util.mix({
      points: points,
      smooth: smooth
    }, style)
  });
}

var SHAPES = ['line', 'smooth', 'dash'];
Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('line', shapeType, {
    draw: function draw(cfg, container) {
      var smooth = shapeType === 'smooth';
      var style = getStyle(cfg);

      if (shapeType === 'dash') {
        style.lineDash = Global.lineDash;
      }

      return drawLines(cfg, container, style, smooth);
    }
  });
});
module.exports = Line;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Base = __webpack_require__(26);

var catAuto = __webpack_require__(65);

var each = __webpack_require__(15);

var isNumber = __webpack_require__(36);

var isString = __webpack_require__(48);

var Category = /*#__PURE__*/function (_Base) {
  _inheritsLoose(Category, _Base);

  function Category() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Base.prototype._initDefaultCfg.call(this);

    this.type = 'cat';
    /**
     * 是否分类度量
     * @type {Boolean}
     */

    this.isCategory = true;
    this.isRounding = true; // 是否进行取整操作
  }
  /**
   * @override
   */
  ;

  _proto.init = function init() {
    var self = this;
    var values = self.values;
    var tickCount = self.tickCount;
    each(values, function (v, i) {
      values[i] = v.toString();
    });

    if (!self.ticks) {
      var ticks = values;

      if (tickCount) {
        var temp = catAuto({
          maxCount: tickCount,
          data: values,
          isRounding: self.isRounding
        });
        ticks = temp.ticks;
      }

      this.ticks = ticks;
    }
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText(value) {
    if (this.values.indexOf(value) === -1 && isNumber(value)) {
      value = this.values[Math.round(value)];
    }

    return _Base.prototype.getText.call(this, value);
  }
  /**
   * @override
   */
  ;

  _proto.translate = function translate(value) {
    var index = this.values.indexOf(value);

    if (index === -1 && isNumber(value)) {
      index = value;
    } else if (index === -1) {
      index = NaN;
    }

    return index;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var percent;

    if (isString(value) || this.values.indexOf(value) !== -1) {
      value = this.translate(value);
    }

    if (this.values.length > 1) {
      percent = value / (this.values.length - 1);
    } else {
      percent = value;
    }

    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert(value) {
    if (isString(value)) {
      // 如果已经是字符串
      return value;
    }

    var min = this.rangeMin();
    var max = this.rangeMax(); // 归一到 范围内

    if (value < min) {
      value = min;
    }

    if (value > max) {
      value = max;
    }

    var percent = (value - min) / (max - min);
    var index = Math.round(percent * (this.values.length - 1)) % this.values.length;
    index = index || 0;
    return this.values[index];
  };

  return Category;
}(Base);

Base.Cat = Category;
module.exports = Category;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  requestAnimationFrame: typeof window === 'object' && window.requestAnimationFrame ? window.requestAnimationFrame : function (fn) {
    return setTimeout(fn, 16);
  }
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview convert the line to curve
 * @author dxq613@gmail.com
 */
var Vector2 = __webpack_require__(13);

function getPoint(v) {
  return [v.x, v.y];
}

function smoothBezier(points, smooth, isLoop, constraint) {
  var cps = [];
  var prevPoint;
  var nextPoint;
  var hasConstraint = !!constraint;
  var min;
  var max;
  var point;
  var len;
  var l;
  var i;

  if (hasConstraint) {
    min = [Infinity, Infinity];
    max = [-Infinity, -Infinity];

    for (i = 0, l = points.length; i < l; i++) {
      point = getPoint(points[i]);
      Vector2.min(min, min, point);
      Vector2.max(max, max, point);
    }

    Vector2.min(min, min, constraint[0]);
    Vector2.max(max, max, constraint[1]);
  }

  for (i = 0, len = points.length; i < len; i++) {
    point = getPoint(points[i]);

    if (isLoop) {
      prevPoint = getPoint(points[i ? i - 1 : len - 1]);
      nextPoint = getPoint(points[(i + 1) % len]);
    } else {
      if (i === 0 || i === len - 1) {
        cps.push([point[0], point[1]]);
        continue;
      } else {
        prevPoint = getPoint(points[i - 1]);
        nextPoint = getPoint(points[i + 1]);
      }
    }

    var v = Vector2.sub([], nextPoint, prevPoint);
    Vector2.scale(v, v, smooth);
    var d0 = Vector2.distance(point, prevPoint);
    var d1 = Vector2.distance(point, nextPoint);
    var sum = d0 + d1;

    if (sum !== 0) {
      d0 /= sum;
      d1 /= sum;
    }

    var v1 = Vector2.scale([], v, -d0);
    var v2 = Vector2.scale([], v, d1);
    var cp0 = Vector2.add([], point, v1);
    var cp1 = Vector2.add([], point, v2);

    if (hasConstraint) {
      Vector2.max(cp0, cp0, min);
      Vector2.min(cp0, cp0, max);
      Vector2.max(cp1, cp1, min);
      Vector2.min(cp1, cp1, max);
    }

    cps.push([cp0[0], cp0[1]]);
    cps.push([cp1[0], cp1[1]]);
  }

  if (isLoop) {
    cps.push(cps.shift());
  }

  return cps;
}

function catmullRom2bezier(pointList, z, constraint) {
  var isLoop = !!z;
  var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
  var len = pointList.length;
  var d1 = [];
  var cp1;
  var cp2;
  var p;

  for (var i = 0; i < len - 1; i++) {
    cp1 = controlPointList[i * 2];
    cp2 = controlPointList[i * 2 + 1];
    p = pointList[i + 1];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }

  if (isLoop) {
    cp1 = controlPointList[len];
    cp2 = controlPointList[len + 1];
    p = pointList[0];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }

  return d1;
}

module.exports = {
  smooth: catmullRom2bezier
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Geom = __webpack_require__(17);

var ShapeUtil = __webpack_require__(38);

var Util = __webpack_require__(0);

__webpack_require__(68);

var Path = /*#__PURE__*/function (_Geom) {
  (0, _inheritsLoose2["default"])(Path, _Geom);

  var _super = _createSuper(Path);

  function Path() {
    return _Geom.apply(this, arguments) || this;
  }

  var _proto = Path.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);

    cfg.type = 'path';
    cfg.shapeType = 'line';
    return cfg;
  };

  _proto.getDrawCfg = function getDrawCfg(obj) {
    var cfg = _Geom.prototype.getDrawCfg.call(this, obj);

    cfg.isStack = this.hasAdjust('stack');
    return cfg;
  };

  _proto.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    var yScale = self.getYScale();
    var connectNulls = self.get('connectNulls');
    var splitArray = ShapeUtil.splitArray(data, yScale.field, connectNulls);
    var cfg = this.getDrawCfg(data[0]);
    cfg.origin = data;
    Util.each(splitArray, function (subData, splitedIndex) {
      cfg.splitedIndex = splitedIndex;
      cfg.points = subData;
      self.drawShape(cfg.shape, data[0], cfg, container, shapeFactory);
    });
  };

  return Path;
}(Geom);

Geom.Path = Path;
module.exports = Path;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _const = __webpack_require__(47);

/**
 * @fileOverview Utility for calculate the with ratui in x axis
 * @author sima.zhang1990@gmail.com
 * @author dxq613@gmail.com
 */
var Global = __webpack_require__(6);

var Util = __webpack_require__(0);

var SizeMixin = {
  initEvent: function initEvent() {
    var _this = this;

    var chart = this.get('chart');

    if (!chart) {
      return;
    }

    chart.on(_const.EVENT_AFTER_SIZE_CHANGE, function () {
      _this.set('_width', null);
    });
  },
  getDefalutSize: function getDefalutSize() {
    var defaultSize = this.get('defaultSize');

    if (!defaultSize) {
      var coord = this.get('coord');
      var xScale = this.getXScale();
      var dataArray = this.get('dataArray');
      var values = Util.uniq(xScale.values);
      var count = values.length;
      var range = xScale.range;
      var normalizeSize = 1 / count;
      var widthRatio = 1;

      if (coord && coord.isPolar) {
        if (coord.transposed && count > 1) {
          widthRatio = Global.widthRatio.multiplePie;
        } else {
          widthRatio = Global.widthRatio.rose;
        }
      } else {
        if (xScale.isLinear) {
          normalizeSize *= range[1] - range[0];
        }

        widthRatio = Global.widthRatio.column;
      }

      normalizeSize *= widthRatio;

      if (this.hasAdjust('dodge')) {
        normalizeSize = normalizeSize / dataArray.length;
      }

      defaultSize = normalizeSize;
      this.set('defaultSize', defaultSize);
    }

    return defaultSize;
  },
  getDimWidth: function getDimWidth(dimName) {
    var coord = this.get('coord');
    var start = coord.convertPoint({
      x: 0,
      y: 0
    });
    var end = coord.convertPoint({
      x: dimName === 'x' ? 1 : 0,
      y: dimName === 'x' ? 0 : 1
    });
    var width = 0;

    if (start && end) {
      width = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    }

    return width;
  },
  _getWidth: function _getWidth() {
    var width = this.get('_width');

    if (!width) {
      var coord = this.get('coord');

      if (coord && coord.isPolar && !coord.transposed) {
        width = (coord.endAngle - coord.startAngle) * coord.circleRadius;
      } else {
        width = this.getDimWidth('x');
      }

      this.set('_width', width);
    }

    return width;
  },
  _toNormalizedSize: function _toNormalizedSize(size) {
    var width = this._getWidth();

    return size / width;
  },
  _toCoordSize: function _toCoordSize(normalizeSize) {
    var width = this._getWidth();

    return width * normalizeSize;
  },
  getNormalizedSize: function getNormalizedSize(obj) {
    var size = this.getAttrValue('size', obj);

    if (Util.isNil(size)) {
      size = this.getDefalutSize();
    } else {
      size = this._toNormalizedSize(size);
    }

    return size;
  },
  getSize: function getSize(obj) {
    var size = this.getAttrValue('size', obj);

    if (Util.isNil(size)) {
      var normalizeSize = this.getDefalutSize();
      size = this._toCoordSize(normalizeSize);
    }

    return size;
  }
};
module.exports = SizeMixin;

/***/ }),
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.merge = merge;
exports.values = values;
exports.firstValue = firstValue;
exports.group = group;
exports.groupToMap = groupToMap;
exports.remove = remove;
exports.getRange = getRange;

var _util = __webpack_require__(20);

function merge(dataArray) {
  var rst = [];

  for (var i = 0, len = dataArray.length; i < len; i++) {
    rst = rst.concat(dataArray[i]);
  }

  return rst;
}

function values(data, name) {
  var rst = [];
  var tmpMap = {};

  for (var i = 0, len = data.length; i < len; i++) {
    var obj = data[i];
    var value = obj[name];

    if (!(0, _util.isNil)(value)) {
      if (!(0, _util.isArray)(value)) {
        if (!tmpMap[value]) {
          rst.push(value);
          tmpMap[value] = true;
        }
      } else {
        (0, _util.each)(value, function (val) {
          if (!tmpMap[val]) {
            rst.push(val);
            tmpMap[val] = true;
          }
        });
      }
    }
  }

  return rst;
}

function firstValue(data, name) {
  var rst = null;

  for (var i = 0, len = data.length; i < len; i++) {
    var obj = data[i];
    var value = obj[name];

    if (!(0, _util.isNil)(value)) {
      if ((0, _util.isArray)(value)) {
        rst = value[0];
      } else {
        rst = value;
      }

      break;
    }
  }

  return rst;
}

function groupToMap(data, fields) {
  if (!fields) {
    return {
      0: data
    };
  }

  var callback = function callback(row) {
    var unique = '_';

    for (var i = 0, l = fields.length; i < l; i++) {
      unique += row[fields[i]] && row[fields[i]].toString();
    }

    return unique;
  };

  var groups = {};

  for (var i = 0, len = data.length; i < len; i++) {
    var row = data[i];
    var key = callback(row);

    if (groups[key]) {
      groups[key].push(row);
    } else {
      groups[key] = [row];
    }
  }

  return groups;
}

function group(data, fields, appendConditions) {
  if (appendConditions === void 0) {
    appendConditions = {};
  }

  if (!fields) {
    return [data];
  }

  var groups = groupToMap(data, fields);
  var array = [];

  if (fields.length === 1 && appendConditions[fields[0]]) {
    var _values = appendConditions[fields[0]];
    (0, _util.each)(_values, function (value) {
      value = '_' + value;
      array.push(groups[value]);
    });
  } else {
    for (var i in groups) {
      array.push(groups[i]);
    }
  }

  return array;
}

function remove(arr, obj) {
  if (!arr) {
    return;
  }

  var index = arr.indexOf(obj);

  if (index !== -1) {
    arr.splice(index, 1);
  }
}

function getRange(values) {
  if (!values.length) {
    return {
      min: 0,
      max: 0
    };
  }

  var max = Math.max.apply(null, values);
  var min = Math.min.apply(null, values);
  return {
    min: min,
    max: max
  };
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * marker shapes，used for tooltip and legend
 */
var Util = __webpack_require__(0);

var _require = __webpack_require__(16),
    Shape = _require.Shape;

var SYMBOLS = {
  circle: function circle(x, y, r, ctx) {
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
  },
  square: function square(x, y, r, ctx) {
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
  }
};

var Marker = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Marker, _Shape);

  var _super = _createSuper(Marker);

  function Marker() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'marker';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        radius = attrs.radius;
    var symbol = attrs.symbol || 'circle';
    var method;

    if (Util.isFunction(symbol)) {
      method = symbol;
    } else {
      method = SYMBOLS[symbol];
    }

    context.beginPath();
    method(x, y, radius, context, this);
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        radius = attrs.radius;
    return {
      minX: x - radius,
      minY: y - radius,
      maxX: x + radius,
      maxY: y + radius
    };
  };

  return Marker;
}(Shape);

module.exports = Marker;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Core = {};

var Global = __webpack_require__(6);

Core.Global = Global;
Core.version = Global.version;
Core.Chart = __webpack_require__(30);
Core.Shape = __webpack_require__(19);
Core.G = __webpack_require__(16);
Core.Util = __webpack_require__(0);
Core.Helper = __webpack_require__(37); // Core.track = function(enable) {
//   Global.trackable = enable;
// };
// require('./track');
// 2018-12-27 关闭打点

Core.track = function () {
  return null;
};

module.exports = Core;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileOverview default theme
 * @author dxq613@gail.com
 */
var Util = __webpack_require__(0);

var color1 = '#E8E8E8'; // color of axis-line and axis-grid

var color2 = '#808080'; // color of axis label

var defaultAxis = {
  label: {
    fill: color2,
    fontSize: 10
  },
  line: {
    stroke: color1,
    lineWidth: 1
  },
  grid: {
    type: 'line',
    stroke: color1,
    lineWidth: 1,
    lineDash: [2]
  },
  tickLine: null,
  labelOffset: 7.5
};
var Theme = {
  fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
  defaultColor: '#1890FF',
  pixelRatio: 1,
  padding: 'auto',
  appendPadding: 15,
  colors: ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'],
  shapes: {
    line: ['line', 'dash'],
    point: ['circle', 'hollowCircle']
  },
  sizes: [4, 10],
  axis: {
    common: defaultAxis,
    // common axis configuration
    bottom: Util.mix({}, defaultAxis, {
      grid: null
    }),
    left: Util.mix({}, defaultAxis, {
      line: null
    }),
    right: Util.mix({}, defaultAxis, {
      line: null
    }),
    circle: Util.mix({}, defaultAxis, {
      line: null
    }),
    radius: Util.mix({}, defaultAxis, {
      labelOffset: 4
    })
  },
  shape: {
    line: {
      lineWidth: 2,
      lineJoin: 'round',
      lineCap: 'round'
    },
    point: {
      lineWidth: 0,
      size: 3
    },
    area: {
      fillOpacity: 0.1
    }
  },
  _defaultAxis: defaultAxis
};
module.exports = Theme;

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contains__ = __webpack_require__(28);


/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */

var difference = function (arr, values) {
  if (values === void 0) {
    values = [];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__filter__["a" /* default */])(arr, function (value) {
    return !Object(__WEBPACK_IMPORTED_MODULE_1__contains__["a" /* default */])(values, value);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (difference);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_function__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_match__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__is_plain_object__ = __webpack_require__(24);





function find(arr, predicate) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__is_array__["a" /* default */])(arr)) return null;

  var _predicate;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_function__["a" /* default */])(predicate)) {
    _predicate = predicate;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__is_plain_object__["a" /* default */])(predicate)) {
    _predicate = function (a) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__is_match__["a" /* default */])(a, predicate);
    };
  }

  if (_predicate) {
    for (var i = 0; i < arr.length; i += 1) {
      if (_predicate(arr[i])) {
        return arr[i];
      }
    }
  }

  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (find);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function findIndex(arr, predicate, fromIndex) {
  if (fromIndex === void 0) {
    fromIndex = 0;
  }

  for (var i = fromIndex; i < arr.length; i++) {
    if (predicate(arr[i], i)) {
      // 找到终止循环
      return i;
    }
  }

  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (findIndex);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_nil__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array__ = __webpack_require__(5);



var firstValue = function (data, name) {
  var rst = null;

  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var value = obj[name];

    if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_nil__["a" /* default */])(value)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__is_array__["a" /* default */])(value)) {
        rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
      } else {
        rst = value;
      }

      break;
    }
  }

  return rst;
};

/* harmony default export */ __webpack_exports__["a"] = (firstValue);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, [3, [4]], 5]
 */

var flatten = function (arr) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(arr)) {
    return [];
  }

  var rst = [];

  for (var i = 0; i < arr.length; i++) {
    rst = rst.concat(arr[i]);
  }

  return rst;
};

/* harmony default export */ __webpack_exports__["a"] = (flatten);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @param {Array} result The array to return.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
 */

var flattenDeep = function (arr, result) {
  if (result === void 0) {
    result = [];
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(arr)) {
    result.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], result);
    }
  }

  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (flattenDeep);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__(39);



var getRange = function (values) {
  // 存在 NaN 时，min,max 判定会出问题
  values = Object(__WEBPACK_IMPORTED_MODULE_1__filter__["a" /* default */])(values, function (v) {
    return !isNaN(v);
  });

  if (!values.length) {
    // 如果没有数值则直接返回0
    return {
      min: 0,
      max: 0
    };
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(values[0])) {
    var tmp = [];

    for (var i = 0; i < values.length; i++) {
      tmp = tmp.concat(values[i]);
    }

    values = tmp;
  }

  var max = Math.max.apply(null, values);
  var min = Math.min.apply(null, values);
  return {
    min: min,
    max: max
  };
};

/* harmony default export */ __webpack_exports__["a"] = (getRange);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var arrPrototype = Array.prototype;
var splice = arrPrototype.splice;
var indexOf = arrPrototype.indexOf;

var pull = function (arr) {
  var values = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }

  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    var fromIndex = -1;

    while ((fromIndex = indexOf.call(arr, value)) > -1) {
      splice.call(arr, fromIndex, 1);
    }
  }

  return arr;
};

/* harmony default export */ __webpack_exports__["a"] = (pull);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_plain_object__ = __webpack_require__(24);




var reduce = function (arr, fn, init) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_array__["a" /* default */])(arr) && !Object(__WEBPACK_IMPORTED_MODULE_2__is_plain_object__["a" /* default */])(arr)) {
    return arr;
  }

  var result = init;
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(arr, function (data, i) {
    result = fn(result, data, i);
  });
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (reduce);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pull_at__ = __webpack_require__(53);



var remove = function (arr, predicate) {
  /**
   * const arr = [1, 2, 3, 4]
   * const evens = remove(arr, n => n % 2 == 0)
   * console.log(arr) // => [1, 3]
   * console.log(evens) // => [2, 4]
   */
  var result = [];

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(arr)) {
    return result;
  }

  var i = -1;
  var indexes = [];
  var length = arr.length;

  while (++i < length) {
    var value = arr[i];

    if (predicate(value, i, arr)) {
      result.push(value);
      indexes.push(i);
    }
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__pull_at__["a" /* default */])(arr, indexes);
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (remove);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_string__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_function__ = __webpack_require__(9);




function sortBy(arr, key) {
  var comparer;

  if (Object(__WEBPACK_IMPORTED_MODULE_2__is_function__["a" /* default */])(key)) {
    comparer = function (a, b) {
      return key(a) - key(b);
    };
  } else {
    var keys_1 = [];

    if (Object(__WEBPACK_IMPORTED_MODULE_1__is_string__["a" /* default */])(key)) {
      keys_1.push(key);
    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(key)) {
      keys_1 = key;
    }

    comparer = function (a, b) {
      for (var i = 0; i < keys_1.length; i += 1) {
        var prop = keys_1[i];

        if (a[prop] > b[prop]) {
          return 1;
        }

        if (a[prop] < b[prop]) {
          return -1;
        }
      }

      return 0;
    };
  }

  arr.sort(comparer);
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = (sortBy);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uniq__ = __webpack_require__(54);


var union = function () {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__uniq__["a" /* default */])([].concat.apply([], sources));
};

/* harmony default export */ __webpack_exports__["a"] = (union);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_nil__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = (function (data, name) {
  var rst = [];
  var tmpMap = {};
  data.forEach(function (obj) {
    var value = obj[name];

    if (!Object(__WEBPACK_IMPORTED_MODULE_2__is_nil__["a" /* default */])(value)) {
      // flatten
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_array__["a" /* default */])(value)) {
        value = [value];
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(value, function (val) {
        // unique
        if (!tmpMap[val]) {
          rst.push(val);
          tmpMap[val] = true;
        }
      });
    }
  });
  return rst;
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = head;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);

function head(o) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(o)) {
    return o[0];
  }

  return undefined;
}

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = last;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);

function last(o) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(o)) {
    var arr = o;
    return arr[arr.length - 1];
  }

  return undefined;
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_string__ = __webpack_require__(18);



function startsWith(arr, e) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(arr) || Object(__WEBPACK_IMPORTED_MODULE_1__is_string__["a" /* default */])(arr) ? arr[0] === e : false;
}

/* harmony default export */ __webpack_exports__["a"] = (startsWith);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_string__ = __webpack_require__(18);



function endsWith(arr, e) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(arr) || Object(__WEBPACK_IMPORTED_MODULE_1__is_string__["a" /* default */])(arr) ? arr[arr.length - 1] === e : false;
}

/* harmony default export */ __webpack_exports__["a"] = (endsWith);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 只要有一个不满足条件就返回 false
 * @param arr
 * @param func
 */
var every = function (arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (!func(arr[i], i)) return false;
  }

  return true;
};

/* harmony default export */ __webpack_exports__["a"] = (every);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 只要有一个满足条件就返回 true
 * @param arr
 * @param func
 */
var some = function (arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i], i)) return true;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["a"] = (some);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_to_map__ = __webpack_require__(55);

/* harmony default export */ __webpack_exports__["a"] = (function (data, condition) {
  if (!condition) {
    // 没有条件，则自身改成数组
    return [data];
  }

  var groups = Object(__WEBPACK_IMPORTED_MODULE_0__group_to_map__["a" /* default */])(data, condition);
  var array = [];

  for (var i in groups) {
    array.push(groups[i]);
  }

  return array;
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 获取封装的事件
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function getWrapBehavior(obj, action) {
  return obj['_wrap_' + action];
}

/* harmony default export */ __webpack_exports__["a"] = (getWrapBehavior);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 封装事件，便于使用上下文this,和便于解除事件时使用
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function wrapBehavior(obj, action) {
  if (obj['_wrap_' + action]) {
    return obj['_wrap_' + action];
  }

  var method = function (e) {
    obj[action](e);
  };

  obj['_wrap_' + action] = method;
  return method;
}

/* harmony default export */ __webpack_exports__["a"] = (wrapBehavior);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var numColorCache = {};

function numberToColor(num) {
  // 增加缓存
  var color = numColorCache[num];

  if (!color) {
    var str = num.toString(16);

    for (var i = str.length; i < 6; i++) {
      str = '0' + str;
    }

    color = '#' + str;
    numColorCache[num] = color;
  }

  return color;
}

/* harmony default export */ __webpack_exports__["a"] = (numberToColor);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);


function parseRadius(radius) {
  var r1 = 0,
      r2 = 0,
      r3 = 0,
      r4 = 0;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(radius)) {
    if (radius.length === 1) {
      r1 = r2 = r3 = r4 = radius[0];
    } else if (radius.length === 2) {
      r1 = r3 = radius[0];
      r2 = r4 = radius[1];
    } else if (radius.length === 3) {
      r1 = radius[0];
      r2 = r4 = radius[1];
      r3 = radius[2];
    } else {
      r1 = radius[0];
      r2 = radius[1];
      r3 = radius[2];
      r4 = radius[3];
    }
  } else {
    r1 = r2 = r3 = r4 = radius;
  }

  return {
    r1: r1,
    r2: r2,
    r3: r3,
    r4: r4
  };
}

/* harmony default export */ __webpack_exports__["a"] = (parseRadius);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var clamp = function (a, min, max) {
  if (a < min) {
    return min;
  } else if (a > max) {
    return max;
  }

  return a;
};

/* harmony default export */ __webpack_exports__["a"] = (clamp);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var fixedBase = function (v, base) {
  var str = base.toString();
  var index = str.indexOf('.');

  if (index === -1) {
    return Math.round(v);
  }

  var length = str.substr(index + 1).length;

  if (length > 20) {
    length = 20;
  }

  return parseFloat(v.toFixed(length));
};

/* harmony default export */ __webpack_exports__["a"] = (fixedBase);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);


var isDecimal = function (num) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(num) && num % 1 !== 0;
};

/* harmony default export */ __webpack_exports__["a"] = (isDecimal);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);


var isEven = function (num) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(num) && num % 2 === 0;
};

/* harmony default export */ __webpack_exports__["a"] = (isEven);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);

var isInteger = Number.isInteger ? Number.isInteger : function (num) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(num) && num % 1 === 0;
};
/* harmony default export */ __webpack_exports__["a"] = (isInteger);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);


var isNegative = function (num) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(num) && num < 0;
};

/* harmony default export */ __webpack_exports__["a"] = (isNegative);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNumberEqual;
var PRECISION = 0.00001; // numbers less than this is considered as 0

function isNumberEqual(a, b, precision) {
  if (precision === void 0) {
    precision = PRECISION;
  }

  return Math.abs(a - b) < precision;
}
;

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);


var isOdd = function (num) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(num) && num % 2 !== 0;
};

/* harmony default export */ __webpack_exports__["a"] = (isOdd);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);


var isPositive = function (num) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(num) && num > 0;
};

/* harmony default export */ __webpack_exports__["a"] = (isPositive);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_function__ = __webpack_require__(9);



/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */

/* harmony default export */ __webpack_exports__["a"] = (function (arr, fn) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_array__["a" /* default */])(arr)) {
    return undefined;
  }

  var max = arr[0];
  var maxData;

  if (Object(__WEBPACK_IMPORTED_MODULE_2__is_function__["a" /* default */])(fn)) {
    maxData = fn(arr[0]);
  } else {
    maxData = arr[0][fn];
  }

  var data;
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(arr, function (val) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__is_function__["a" /* default */])(fn)) {
      data = fn(val);
    } else {
      data = val[fn];
    }

    if (data > maxData) {
      max = val;
      maxData = data;
    }
  });
  return max;
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_function__ = __webpack_require__(9);



/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * minBy(objects, 'n');
 * // => { 'n': 1 }
 */

/* harmony default export */ __webpack_exports__["a"] = (function (arr, fn) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_array__["a" /* default */])(arr)) {
    return undefined;
  }

  var min = arr[0];
  var minData;

  if (Object(__WEBPACK_IMPORTED_MODULE_2__is_function__["a" /* default */])(fn)) {
    minData = fn(arr[0]);
  } else {
    minData = arr[0][fn];
  }

  var data;
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(arr, function (val) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__is_function__["a" /* default */])(fn)) {
      data = fn(val);
    } else {
      data = val[fn];
    }

    if (data < minData) {
      min = val;
      minData = data;
    }
  });
  return min;
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var mod = function (n, m) {
  return (n % m + m) % m;
};

/* harmony default export */ __webpack_exports__["a"] = (mod);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DEGREE = 180 / Math.PI;

var toDegree = function (radian) {
  return DEGREE * radian;
};

/* harmony default export */ __webpack_exports__["a"] = (toDegree);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (parseInt);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var RADIAN = Math.PI / 180;

var toRadian = function (degree) {
  return RADIAN * degree;
};

/* harmony default export */ __webpack_exports__["a"] = (toRadian);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */]);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has__ = __webpack_require__(57);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__has__["a" /* default */]);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contains__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__values__ = __webpack_require__(58);


/* harmony default export */ __webpack_exports__["a"] = (function (obj, value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__contains__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__values__["a" /* default */])(obj), value);
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__to_string__ = __webpack_require__(25);


var lowerCase = function (str) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__to_string__["a" /* default */])(str).toLowerCase();
};

/* harmony default export */ __webpack_exports__["a"] = (lowerCase);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__to_string__ = __webpack_require__(25);


var lowerFirst = function (value) {
  var str = Object(__WEBPACK_IMPORTED_MODULE_0__to_string__["a" /* default */])(value);
  return str.charAt(0).toLowerCase() + str.substring(1);
};

/* harmony default export */ __webpack_exports__["a"] = (lowerFirst);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function substitute(str, o) {
  if (!str || !o) {
    return str;
  }

  return str.replace(/\\?\{([^{}]+)\}/g, function (match, name) {
    if (match.charAt(0) === '\\') {
      return match.slice(1);
    }

    return o[name] === undefined ? '' : o[name];
  });
}

/* harmony default export */ __webpack_exports__["a"] = (substitute);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__to_string__ = __webpack_require__(25);


var upperCase = function (str) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__to_string__["a" /* default */])(str).toUpperCase();
};

/* harmony default export */ __webpack_exports__["a"] = (upperCase);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__to_string__ = __webpack_require__(25);


var upperFirst = function (value) {
  var str = Object(__WEBPACK_IMPORTED_MODULE_0__to_string__["a" /* default */])(value);
  return str.charAt(0).toUpperCase() + str.substring(1);
};

/* harmony default export */ __webpack_exports__["a"] = (upperFirst);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */


var isArguments = function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Arguments');
};

/* harmony default export */ __webpack_exports__["a"] = (isArguments);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);
/**
 * 是否是布尔类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */


var isBoolean = function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Boolean');
};

/* harmony default export */ __webpack_exports__["a"] = (isBoolean);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);


var isDate = function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Date');
};

/* harmony default export */ __webpack_exports__["a"] = (isDate);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */


var isError = function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(value, 'Error');
};

/* harmony default export */ __webpack_exports__["a"] = (isError);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_number__ = __webpack_require__(12);
/**
 * 判断是否为有限数
 * @return {Boolean}
 */

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_number__["a" /* default */])(value) && isFinite(value);
});

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isNull = function (value) {
  return value === null;
};

/* harmony default export */ __webpack_exports__["a"] = (isNull);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(11);


var isRegExp = function (str) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* default */])(str, 'RegExp');
};

/* harmony default export */ __webpack_exports__["a"] = (isRegExp);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isUndefined = function (value) {
  return value === undefined;
};

/* harmony default export */ __webpack_exports__["a"] = (isUndefined);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 判断是否HTML元素
 * @return {Boolean} 是否HTML元素
 */
var isElement = function (o) {
  return o instanceof Element || o instanceof HTMLDocument;
};

/* harmony default export */ __webpack_exports__["a"] = (isElement);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requestAnimationFrame;
function requestAnimationFrame(fn) {
  var method = window.requestAnimationFrame || window.webkitRequestAnimationFrame || // @ts-ignore
  window.mozRequestAnimationFrame || // @ts-ignore
  window.msRequestAnimationFrame || function (f) {
    return setTimeout(f, 16);
  };

  return method(fn);
}
;

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelAnimationFrame;
function cancelAnimationFrame(handler) {
  var method = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || // @ts-ignore
  window.mozCancelAnimationFrame || // @ts-ignore
  window.msCancelAnimationFrame || clearTimeout;
  method(handler);
}
;

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mix__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_function__ = __webpack_require__(9);



var augment = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var c = args[0];

  for (var i = 1; i < args.length; i++) {
    var obj = args[i];

    if (Object(__WEBPACK_IMPORTED_MODULE_1__is_function__["a" /* default */])(obj)) {
      obj = obj.prototype;
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__mix__["a" /* default */])(c.prototype, obj);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (augment);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);


var clone = function (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  var rst;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(obj)) {
    rst = [];

    for (var i = 0, l = obj.length; i < l; i++) {
      if (typeof obj[i] === 'object' && obj[i] != null) {
        rst[i] = clone(obj[i]);
      } else {
        rst[i] = obj[i];
      }
    }
  } else {
    rst = {};

    for (var k in obj) {
      if (typeof obj[k] === 'object' && obj[k] != null) {
        rst[k] = clone(obj[k]);
      } else {
        rst[k] = obj[k];
      }
    }
  }

  return rst;
};

/* harmony default export */ __webpack_exports__["a"] = (clone);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function () {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (debounce);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_function__ = __webpack_require__(9);

/**
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param f
 * @param resolver
 */

/* harmony default export */ __webpack_exports__["a"] = (function (f, resolver) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_function__["a" /* default */])(f)) {
    throw new TypeError('Expected a function');
  }

  var memoized = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    } // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key


    var key = resolver ? resolver.apply(this, args) : args[0];
    var cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = f.apply(this, args); // 缓存起来

    cache.set(key, result);
    return result;
  };

  memoized.cache = new Map();
  return memoized;
});

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_plain_object__ = __webpack_require__(24);


var MAX_MIX_LEVEL = 5;

function _deepMix(dist, src, level, maxLevel) {
  level = level || 0;
  maxLevel = maxLevel || MAX_MIX_LEVEL;

  for (var key in src) {
    if (src.hasOwnProperty(key)) {
      var value = src[key];

      if (value !== null && Object(__WEBPACK_IMPORTED_MODULE_1__is_plain_object__["a" /* default */])(value)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_plain_object__["a" /* default */])(dist[key])) {
          dist[key] = {};
        }

        if (level < maxLevel) {
          _deepMix(dist[key], value, level + 1, maxLevel);
        } else {
          dist[key] = src[key];
        }
      } else if (Object(__WEBPACK_IMPORTED_MODULE_0__is_array__["a" /* default */])(value)) {
        dist[key] = [];
        dist[key] = dist[key].concat(value);
      } else if (value !== undefined) {
        dist[key] = value;
      }
    }
  }
} // todo 重写


var deepMix = function (rst) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  for (var i = 0; i < args.length; i += 1) {
    _deepMix(rst, args[i]);
  }

  return rst;
};

/* harmony default export */ __webpack_exports__["a"] = (deepMix);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mix__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_function__ = __webpack_require__(9);



var extend = function (subclass, superclass, overrides, staticOverrides) {
  // 如果只提供父类构造函数，则自动生成子类构造函数
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_function__["a" /* default */])(superclass)) {
    overrides = superclass;
    superclass = subclass;

    subclass = function () {};
  }

  var create = Object.create ? function (proto, c) {
    return Object.create(proto, {
      constructor: {
        value: c
      }
    });
  } : function (proto, c) {
    function Tmp() {}

    Tmp.prototype = proto;
    var o = new Tmp();
    o.constructor = c;
    return o;
  };
  var superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype

  subclass.prototype = Object(__WEBPACK_IMPORTED_MODULE_0__mix__["a" /* default */])(superObj, subclass.prototype); // 指定子类的prototype

  subclass.superclass = create(superclass.prototype, superclass);
  Object(__WEBPACK_IMPORTED_MODULE_0__mix__["a" /* default */])(superObj, overrides);
  Object(__WEBPACK_IMPORTED_MODULE_0__mix__["a" /* default */])(subclass, staticOverrides);
  return subclass;
};

/* harmony default export */ __webpack_exports__["a"] = (extend);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);


var indexOf = function (arr, obj) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(arr)) {
    return -1;
  }

  var m = Array.prototype.indexOf;

  if (m) {
    return m.call(arr, obj);
  }

  var index = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      index = i;
      break;
    }
  }

  return index;
};

/* harmony default export */ __webpack_exports__["a"] = (indexOf);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_nil__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array_like__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_type__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__is_prototype__ = __webpack_require__(60);




var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(value) {
  /**
   * isEmpty(null) => true
   * isEmpty() => true
   * isEmpty(true) => true
   * isEmpty(1) => true
   * isEmpty([1, 2, 3]) => false
   * isEmpty('abc') => false
   * isEmpty({ a: 1 }) => false
   */
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_nil__["a" /* default */])(value)) {
    return true;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_1__is_array_like__["a" /* default */])(value)) {
    return !value.length;
  }

  var type = Object(__WEBPACK_IMPORTED_MODULE_2__get_type__["a" /* default */])(value);

  if (type === 'Map' || type === 'Set') {
    return !value.size;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__is_prototype__["a" /* default */])(value)) {
    return !Object.keys(value).length;
  }

  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}

/* harmony default export */ __webpack_exports__["a"] = (isEmpty);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_function__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_equal__ = __webpack_require__(61);


/**
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * isEqualWith(array, other, customizer);  // => true
 */

/* harmony default export */ __webpack_exports__["a"] = (function (value, other, fn) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_function__["a" /* default */])(fn)) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__is_equal__["a" /* default */])(value, other);
  }

  return !!fn(value, other);
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array_like__ = __webpack_require__(7);



var map = function (arr, func) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__is_array_like__["a" /* default */])(arr)) {
    // @ts-ignore
    return arr;
  }

  var result = [];
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(arr, function (value, index) {
    result.push(func(value, index));
  });
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (map);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_nil__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_object__ = __webpack_require__(29);



var identity = function (v) {
  return v;
};

/* harmony default export */ __webpack_exports__["a"] = (function (object, func) {
  if (func === void 0) {
    func = identity;
  }

  var r = {};

  if (Object(__WEBPACK_IMPORTED_MODULE_1__is_object__["a" /* default */])(object) && !Object(__WEBPACK_IMPORTED_MODULE_0__is_nil__["a" /* default */])(object)) {
    Object.keys(object).forEach(function (key) {
      // @ts-ignore
      r[key] = func(object[key], key);
    });
  }

  return r;
});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_string__ = __webpack_require__(18);

/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param key
 * @param defaultValue
 */

/* harmony default export */ __webpack_exports__["a"] = (function (obj, key, defaultValue) {
  var p = 0;
  var keyArr = Object(__WEBPACK_IMPORTED_MODULE_0__is_string__["a" /* default */])(key) ? key.split('.') : key;

  while (obj && p < keyArr.length) {
    obj = obj[keyArr[p++]];
  }

  return obj === undefined || p < keyArr.length ? defaultValue : obj;
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_object__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_string__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__is_number__ = __webpack_require__(12);



/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param path
 * @param value
 */

/* harmony default export */ __webpack_exports__["a"] = (function (obj, path, value) {
  var o = obj;
  var keyArr = Object(__WEBPACK_IMPORTED_MODULE_1__is_string__["a" /* default */])(path) ? path.split('.') : path;
  keyArr.forEach(function (key, idx) {
    // 不是最后一个
    if (idx < keyArr.length - 1) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__is_object__["a" /* default */])(o[key])) {
        o[key] = Object(__WEBPACK_IMPORTED_MODULE_2__is_number__["a" /* default */])(keyArr[idx + 1]) ? [] : {};
      }

      o = o[key];
    } else {
      o[key] = value;
    }
  });
  return obj;
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__each__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_plain_object__ = __webpack_require__(24);


var hasOwnProperty = Object.prototype.hasOwnProperty;
/* harmony default export */ __webpack_exports__["a"] = (function (object, keys) {
  if (object === null || !Object(__WEBPACK_IMPORTED_MODULE_1__is_plain_object__["a" /* default */])(object)) {
    return {};
  }

  var result = {};
  Object(__WEBPACK_IMPORTED_MODULE_0__each__["a" /* default */])(keys, function (key) {
    if (hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  });
  return result;
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_array_like__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (function (value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__is_array_like__["a" /* default */])(value) ? Array.prototype.slice.call(value) : [];
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var map = {};
/* harmony default export */ __webpack_exports__["a"] = (function (prefix) {
  prefix = prefix || 'g';

  if (!map[prefix]) {
    map[prefix] = 1;
  } else {
    map[prefix] += 1;
  }

  return prefix + map[prefix];
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (v) {
  return v;
});

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = size;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_nil__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_array_like__ = __webpack_require__(7);


function size(o) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_nil__["a" /* default */])(o)) {
    return 0;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_1__is_array_like__["a" /* default */])(o)) {
    return o.length;
  }

  return Object.keys(o).length;
}

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * k-v 存储
 */
var default_1 =
/** @class */
function () {
  function default_1() {
    this.map = {};
  }

  default_1.prototype.has = function (key) {
    return this.map[key] !== undefined;
  };

  default_1.prototype.get = function (key, def) {
    var v = this.map[key];
    return v === undefined ? def : v;
  };

  default_1.prototype.set = function (key, value) {
    this.map[key] = value;
  };

  default_1.prototype.clear = function () {
    this.map = {};
  };

  default_1.prototype.delete = function (key) {
    delete this.map[key];
  };

  default_1.prototype.size = function () {
    return Object.keys(this.map).length;
  };

  return default_1;
}();

/* harmony default export */ __webpack_exports__["a"] = (default_1);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Plot = /*#__PURE__*/function () {
  function Plot(cfg) {
    Util.mix(this, cfg);

    this._init();
  }

  var _proto = Plot.prototype;

  _proto._init = function _init() {
    var self = this;
    var start = self.start;
    var end = self.end;
    var xMin = Math.min(start.x, end.x);
    var xMax = Math.max(start.x, end.x);
    var yMin = Math.min(start.y, end.y);
    var yMax = Math.max(start.y, end.y);
    this.tl = {
      x: xMin,
      y: yMin
    };
    this.tr = {
      x: xMax,
      y: yMin
    };
    this.bl = {
      x: xMin,
      y: yMax
    };
    this.br = {
      x: xMax,
      y: yMax
    };
    this.width = xMax - xMin;
    this.height = yMax - yMin;
  }
  /**
   * reset
   * @param  {Object} start start point
   * @param  {Object} end end point
   */
  ;

  _proto.reset = function reset(start, end) {
    this.start = start;
    this.end = end;

    this._init();
  }
  /**
   * check the point is in the range of plot
   * @param  {Nubmer}  x x value
   * @param  {[type]}  y y value
   * @return {Boolean} return the result
   */
  ;

  _proto.isInRange = function isInRange(x, y) {
    if (Util.isObject(x)) {
      y = x.y;
      x = x.x;
    }

    var tl = this.tl;
    var br = this.br;
    return tl.x <= x && x <= br.x && tl.y <= y && y <= br.y;
  };

  return Plot;
}();

module.exports = Plot;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Coord = __webpack_require__(43);

__webpack_require__(160);

module.exports = Coord;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Base = __webpack_require__(43);

var Cartesian = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Cartesian, _Base);

  var _super = _createSuper(Cartesian);

  function Cartesian() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Cartesian.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'cartesian';
    this.transposed = false;
    this.isRect = true;
  };

  _proto.init = function init(start, end) {
    _Base.prototype.init.call(this, start, end);

    this.x = {
      start: start.x,
      end: end.x
    };
    this.y = {
      start: start.y,
      end: end.y
    };
  };

  _proto._convertPoint = function _convertPoint(point) {
    var self = this;
    var transposed = self.transposed;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';
    var x = self.x;
    var y = self.y;
    return {
      x: x.start + (x.end - x.start) * point[xDim],
      y: y.start + (y.end - y.start) * point[yDim]
    };
  };

  _proto._invertPoint = function _invertPoint(point) {
    var self = this;
    var transposed = self.transposed;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';
    var x = self.x;
    var y = self.y;
    var rst = {};
    rst[xDim] = (point.x - x.start) / (x.end - x.start);
    rst[yDim] = (point.y - y.start) / (y.end - y.start);
    return rst;
  };

  return Cartesian;
}(Base);

Base.Cartesian = Cartesian;
Base.Rect = Cartesian;
module.exports = Cartesian;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports.Color = exports.Size = exports.Shape = exports.Position = void 0;

var _position = _interopRequireDefault(__webpack_require__(162));

exports.Position = _position["default"];

var _shape = _interopRequireDefault(__webpack_require__(163));

exports.Shape = _shape["default"];

var _size = _interopRequireDefault(__webpack_require__(164));

exports.Size = _size["default"];

var _color = _interopRequireDefault(__webpack_require__(165));

exports.Color = _color["default"];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _util = __webpack_require__(20);

var _base = _interopRequireDefault(__webpack_require__(32));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Position = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Position, _Base);

  var _super = _createSuper(Position);

  function Position(cfg) {
    var _this;

    _this = _Base.call(this, cfg) || this;
    _this.names = ['x', 'y'];
    _this.type = 'position';
    return _this;
  }

  var _proto = Position.prototype;

  _proto.mapping = function mapping(x, y) {
    var scales = this.scales;
    var coord = this.coord;
    var scaleX = scales[0];
    var scaleY = scales[1];
    var rstX;
    var rstY;
    var obj;

    if ((0, _util.isNil)(x) || (0, _util.isNil)(y)) {
      return [];
    }

    if ((0, _util.isArray)(y) && (0, _util.isArray)(x)) {
      rstX = [];
      rstY = [];

      for (var i = 0, j = 0, xLen = x.length, yLen = y.length; i < xLen && j < yLen; i++, j++) {
        obj = coord.convertPoint({
          x: scaleX.scale(x[i]),
          y: scaleY.scale(y[j])
        });
        rstX.push(obj.x);
        rstY.push(obj.y);
      }
    } else if ((0, _util.isArray)(y)) {
      x = scaleX.scale(x);
      rstY = [];
      (0, _util.each)(y, function (yVal) {
        yVal = scaleY.scale(yVal);
        obj = coord.convertPoint({
          x: x,
          y: yVal
        });

        if (rstX && rstX !== obj.x) {
          if (!(0, _util.isArray)(rstX)) {
            rstX = [rstX];
          }

          rstX.push(obj.x);
        } else {
          rstX = obj.x;
        }

        rstY.push(obj.y);
      });
    } else if ((0, _util.isArray)(x)) {
      y = scaleY.scale(y);
      rstX = [];
      (0, _util.each)(x, function (xVal) {
        xVal = scaleX.scale(xVal);
        obj = coord.convertPoint({
          x: xVal,
          y: y
        });

        if (rstY && rstY !== obj.y) {
          if (!(0, _util.isArray)(rstY)) {
            rstY = [rstY];
          }

          rstY.push(obj.y);
        } else {
          rstY = obj.y;
        }

        rstX.push(obj.x);
      });
    } else {
      x = scaleX.scale(x);
      y = scaleY.scale(y);
      var point = coord.convertPoint({
        x: x,
        y: y
      });
      rstX = point.x;
      rstY = point.y;
    }

    return [rstX, rstY];
  };

  return Position;
}(_base["default"]);

var _default = Position;
exports["default"] = _default;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(32));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Shape, _Base);

  var _super = _createSuper(Shape);

  function Shape(cfg) {
    var _this;

    _this = _Base.call(this, cfg) || this;
    _this.names = ['shape'];
    _this.type = 'shape';
    _this.gradient = null;
    return _this;
  }
  /**
   * @override
   */


  var _proto = Shape.prototype;

  _proto.getLinearValue = function getLinearValue(percent) {
    var values = this.values;
    var index = Math.round((values.length - 1) * percent);
    return values[index];
  };

  return Shape;
}(_base["default"]);

var _default = Shape;
exports["default"] = _default;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(32));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Size = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Size, _Base);

  var _super = _createSuper(Size);

  function Size(cfg) {
    var _this;

    _this = _Base.call(this, cfg) || this;
    _this.names = ['size'];
    _this.type = 'size';
    _this.gradient = null;
    return _this;
  }

  return Size;
}(_base["default"]);

var _default = Size;
exports["default"] = _default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _util = __webpack_require__(20);

var _base = _interopRequireDefault(__webpack_require__(32));

var _colorUtil = _interopRequireDefault(__webpack_require__(166));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Color = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Color, _Base);

  var _super = _createSuper(Color);

  function Color(cfg) {
    var _this;

    _this = _Base.call(this, cfg) || this;
    _this.names = ['color'];
    _this.type = 'color';
    _this.gradient = null;

    if ((0, _util.isString)(_this.values)) {
      _this.linear = true;
    }

    return _this;
  }
  /**
   * @override
   */


  var _proto = Color.prototype;

  _proto.getLinearValue = function getLinearValue(percent) {
    var gradient = this.gradient;

    if (!gradient) {
      var values = this.values;
      gradient = _colorUtil["default"].gradient(values);
      this.gradient = gradient;
    }

    return gradient(percent);
  };

  return Color;
}(_base["default"]);

var _default = Color;
exports["default"] = _default;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _util = __webpack_require__(20);

// Get the interpolation between colors
function getValue(start, end, percent, index) {
  var value = start[index] + (end[index] - start[index]) * percent;
  return value;
} // convert to hex


function arr2hex(arr) {
  return '#' + toRGBValue(arr[0]) + toRGBValue(arr[1]) + toRGBValue(arr[2]);
}

function toRGBValue(value) {
  value = Math.round(value);
  value = value.toString(16);

  if (value.length === 1) {
    value = '0' + value;
  }

  return value;
}

function calColor(colors, percent) {
  var steps = colors.length - 1;
  var step = Math.floor(steps * percent);
  var left = steps * percent - step;
  var start = colors[step];
  var end = step === steps ? start : colors[step + 1];
  var rgb = arr2hex([getValue(start, end, left, 0), getValue(start, end, left, 1), getValue(start, end, left, 2)]);
  return rgb;
}

function hex2arr(str) {
  var arr = [];
  arr.push(parseInt(str.substr(1, 2), 16));
  arr.push(parseInt(str.substr(3, 2), 16));
  arr.push(parseInt(str.substr(5, 2), 16));
  return arr;
}

var colorCache = {
  black: '#000000',
  blue: '#0000ff',
  grey: '#808080',
  green: '#008000',
  orange: '#ffa500',
  pink: '#ffc0cb',
  purple: '#800080',
  red: '#ff0000',
  white: '#ffffff',
  yellow: '#ffff00'
};
var ColorUtil = {
  /**
   * Returns a hexadecimal string representing this color in RGB space, such as #f7eaba.
   * @param  {String} color color value
   * @return {String} Returns a hexadecimal string
   */
  toHex: function toHex(color) {
    if (colorCache[color]) {
      return colorCache[color];
    }

    if (color[0] === '#') {
      if (color.length === 7) {
        return color;
      }

      var hex = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }); // hex3 to hex6

      colorCache[color] = hex;
      return hex;
    } // rgb/rgba to hex


    var rst = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    rst.shift();
    rst = arr2hex(rst);
    colorCache[color] = rst;
    return rst;
  },
  hex2arr: hex2arr,

  /**
   * handle the gradient color
   * @param  {Array} colors the colors
   * @return {String} return the color value
   */
  gradient: function gradient(colors) {
    var points = [];

    if ((0, _util.isString)(colors)) {
      colors = colors.split('-');
    }

    (0, _util.each)(colors, function (color) {
      if (color.indexOf('#') === -1) {
        color = ColorUtil.toHex(color);
      }

      points.push(hex2arr(color));
    });
    return function (percent) {
      return calColor(points, percent);
    };
  }
};
var _default = ColorUtil;
exports["default"] = _default;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Global = __webpack_require__(6);

var Scale = __webpack_require__(168);

var SCALE_TYPES_MAP = {
  linear: 'Linear',
  cat: 'Cat',
  timeCat: 'TimeCat',
  identity: 'Identity'
};

function isFullCircle(coord) {
  if (!coord.isPolar) {
    return false;
  }

  var startAngle = coord.startAngle;
  var endAngle = coord.endAngle;

  if (!Util.isNil(startAngle) && !Util.isNil(endAngle) && endAngle - startAngle < Math.PI * 2) {
    return false;
  }

  return true;
}

function clearObj(obj) {
  Object.keys(obj).forEach(function (key) {
    delete obj[key];
  });
}

var ScaleController = /*#__PURE__*/function () {
  function ScaleController(cfg) {
    // defs 列定义
    this.defs = {}; // 已经实例化的scale

    this.scales = {};
    Util.mix(this, cfg);
  }

  var _proto = ScaleController.prototype;

  _proto.setFieldDef = function setFieldDef(field, cfg) {
    var defs = this.defs;

    if (Util.isObject(field)) {
      Util.mix(defs, field);
    } else {
      defs[field] = cfg;
    } // 因为可能同时变更多个scale，所以要把所有已实例化的scale都更新下


    this.updateScales();
  };

  _proto._getDef = function _getDef(field) {
    var defs = this.defs;
    var def = null;

    if (Global.scales[field] || defs[field]) {
      def = Util.mix({}, Global.scales[field]);
      Util.each(defs[field], function (v, k) {
        if (Util.isNil(v)) {
          delete def[k];
        } else {
          def[k] = v;
        }
      });
    }

    return def;
  };

  _proto._getDefaultType = function _getDefaultType(field, data, def) {
    if (def && def.type) {
      return def.type;
    }

    var type = 'linear';
    var value = Util.Array.firstValue(data, field);

    if (Util.isArray(value)) {
      value = value[0];
    }

    if (Util.isString(value)) {
      type = 'cat';
    }

    return type;
  };

  _proto._getScaleDef = function _getScaleDef(type, field, data, def) {
    var values;

    if (def && def.values) {
      values = def.values;
    } else {
      values = Util.Array.values(data, field);
    }

    var cfg = {
      field: field,
      values: values
    };

    if (type !== 'cat' && type !== 'timeCat') {
      if (!def || !(def.min && def.max)) {
        var _Util$Array$getRange = Util.Array.getRange(values),
            min = _Util$Array$getRange.min,
            max = _Util$Array$getRange.max;

        cfg.min = min;
        cfg.max = max;
        cfg.nice = true;
      }
    } else {
      cfg.isRounding = false; // used for tickCount calculation
    }

    return cfg;
  } // 调整range，为了让图形居中
  ;

  _proto._adjustRange = function _adjustRange(type, cfg) {
    var range = cfg.range,
        values = cfg.values; // 如果是线性, 或者有自定义range都不处理

    if (type === 'linear' || range || !values) {
      return cfg;
    }

    var count = values.length; // 单只有一条数据时，在中间显示

    if (count === 1) {
      cfg.range = [0.5, 1];
    } else {
      var chart = this.chart;
      var coord = chart.get('coord');
      var widthRatio = Global.widthRatio.multiplePie;
      var offset = 0;

      if (isFullCircle(coord)) {
        if (!coord.transposed) {
          cfg.range = [0, 1 - 1 / count];
        } else {
          offset = 1 / count * widthRatio;
          cfg.range = [offset / 2, 1 - offset / 2];
        }
      } else {
        // 为了让图形居中，所以才设置range
        offset = 1 / count * 1 / 2;
        cfg.range = [offset, 1 - offset];
      }
    }

    return cfg;
  };

  _proto._getScaleCfg = function _getScaleCfg(field, data) {
    var self = this;

    var def = self._getDef(field);

    if (!data || !data.length) {
      if (def && def.type) {
        def.field = field;
        return {
          type: SCALE_TYPES_MAP[def.type],
          cfg: def
        };
      }

      return {
        type: 'Identity',
        cfg: {
          value: field,
          field: field.toString(),
          values: [field]
        }
      };
    }

    var firstObj = data[0];
    var firstValue = firstObj[field];

    if (firstValue === null) {
      firstValue = Util.Array.firstValue(data, field);
    }

    if (Util.isNumber(field) || Util.isNil(firstValue) && !def) {
      return {
        type: 'Identity',
        cfg: {
          value: field,
          field: field.toString(),
          values: [field]
        }
      };
    }

    var type = self._getDefaultType(field, data, def);

    var cfg = self._getScaleDef(type, field, data, def);

    def && Util.mix(cfg, def);
    cfg = this._adjustRange(type, cfg);
    return {
      type: SCALE_TYPES_MAP[type],
      cfg: cfg
    };
  };

  _proto.createScale = function createScale(field, data) {
    var scales = this.scales;

    var _this$_getScaleCfg = this._getScaleCfg(field, data),
        type = _this$_getScaleCfg.type,
        cfg = _this$_getScaleCfg.cfg;

    var scale = scales[field]; // 如果已经存在，且类型相等时直接返回

    if (scale && SCALE_TYPES_MAP[scale.type] === type) {
      scale.change(cfg);
      return scale;
    }

    var newScale = new Scale[type](cfg);
    scales[field] = newScale;
    return newScale;
  };

  _proto._updateScale = function _updateScale(scale) {
    var field = scale.field; // 因为每个field的数据都会不同

    var data = this.chart._getScaleData(field);

    var _this$_getScaleCfg2 = this._getScaleCfg(field, data),
        cfg = _this$_getScaleCfg2.cfg;

    scale.change(cfg);
  };

  _proto.updateScales = function updateScales() {
    var _this = this;

    var scales = this.scales; // 修改完列定义后，需要更新已经实例化的scale
    // 如果是还没有实例化的，在geom初始化的时候会被实例化，所以这里可以不用更新

    Util.each(scales, function (scale) {
      _this._updateScale(scale);
    });
  } // 调整scale从0开始
  ;

  _proto.adjustStartZero = function adjustStartZero(scale) {
    var defs = this.defs;
    var field = scale.field,
        min = scale.min,
        max = scale.max; // 如果有定义，则不处理

    if (defs[field] && defs[field].min) {
      return;
    }

    if (min > 0) {
      scale.change({
        min: 0
      });
    } else if (max < 0) {
      scale.change({
        max: 0
      });
    }
  };

  _proto.clear = function clear() {
    // this.defs = {};
    // this.scales = {};
    clearObj(this.defs);
    clearObj(this.scales);
    this.data = null;
  };

  return ScaleController;
}();

module.exports = ScaleController;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Scale = __webpack_require__(26);

__webpack_require__(169);

__webpack_require__(172);

__webpack_require__(69);

module.exports = Scale;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * @fileOverview The measurement of linear data scale function
 * @author dxq613@gmail.com
 */


var isNil = __webpack_require__(35);

var each = __webpack_require__(15);

var Base = __webpack_require__(26);

var numberAuto = __webpack_require__(170);
/**
 * 线性度量
 * @class Scale.Linear
 */


var Linear = /*#__PURE__*/function (_Base) {
  _inheritsLoose(Linear, _Base);

  function Linear() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Linear.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Base.prototype._initDefaultCfg.call(this);

    var self = this;
    self.type = 'linear';
    self.isLinear = true;
    /**
     * 是否为了用户习惯，优化min,max和ticks，如果进行优化，则会根据生成的ticks调整min,max，否则舍弃(min,max)范围之外的ticks
     * @type {Boolean}
     * @default false
     */

    self.nice = false;
    /**
     * min value of the scale
     * @type {Number}
     * @default null
     */

    self.min = null;
    /**
     * min value limitted of the scale
     * @type {Number}
     * @default null
     */

    self.minLimit = null;
    /**
     * max value of the scale
     * @type {Number}
     * @default null
     */

    self.max = null;
    /**
     * max value limitted of the scale
     * @type {Number}
     * @default null
     */

    self.maxLimit = null;
    /**
     * 自动生成标记时的个数
     * @type {Number}
     * @default null
     */

    self.tickCount = null;
    /**
     * 坐标轴点之间的间距，指的是真实数据的差值
     * @type {Number}
     * @default null
     */

    self.tickInterval = null;
    /**
     * 坐标轴点之间的最小间距，指的是真实数据的差值
     * @type {Number}
     * @default null
     */

    self.minTickInterval = null;
    /**
     * 用于计算坐标点时逼近的数组
     * @type {Array}
     */

    self.snapArray = null;
  }
  /**
   * @protected
   * @override
   */
  ;

  _proto.init = function init() {
    var self = this;

    if (!self.ticks) {
      self.min = self.translate(self.min);
      self.max = self.translate(self.max);
      self.initTicks();
    } else {
      var ticks = self.ticks;
      var firstValue = self.translate(ticks[0]);
      var lastValue = self.translate(ticks[ticks.length - 1]);

      if (isNil(self.min) || self.min > firstValue) {
        self.min = firstValue;
      }

      if (isNil(self.max) || self.max < lastValue) {
        self.max = lastValue;
      }
    }
  }
  /**
   * 计算坐标点
   * @protected
   * @return {Array} 计算完成的坐标点
   */
  ;

  _proto.calculateTicks = function calculateTicks() {
    var min = this.min,
        max = this.max,
        minLimit = this.minLimit,
        maxLimit = this.maxLimit,
        tickCount = this.tickCount,
        tickInterval = this.tickInterval,
        minTickInterval = this.minTickInterval,
        snapArray = this.snapArray;

    if (tickCount === 1) {
      throw new Error('linear scale\'tickCount should not be 1');
    }

    if (max < min) {
      throw new Error("max: " + max + " should not be less than min: " + min);
    }

    var tmp = numberAuto({
      min: min,
      max: max,
      minLimit: minLimit,
      maxLimit: maxLimit,
      minCount: tickCount,
      maxCount: tickCount,
      interval: tickInterval,
      minTickInterval: minTickInterval,
      snapArray: snapArray
    });
    return tmp.ticks;
  } // 初始化ticks
  ;

  _proto.initTicks = function initTicks() {
    var self = this;
    var calTicks = self.calculateTicks();

    if (self.nice) {
      // 如果需要优化显示的tick
      self.ticks = calTicks;
      self.min = calTicks[0];
      self.max = calTicks[calTicks.length - 1];
    } else {
      var ticks = [];
      each(calTicks, function (tick) {
        if (tick >= self.min && tick <= self.max) {
          ticks.push(tick);
        }
      }); // 如果 ticks 为空，直接输入最小值、最大值

      if (!ticks.length) {
        ticks.push(self.min);
        ticks.push(self.max);
      }

      self.ticks = ticks;
    }
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    if (isNil(value)) {
      return NaN;
    }

    var max = this.max;
    var min = this.min;

    if (max === min) {
      return 0;
    }

    var percent = (value - min) / (max - min);
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert(value) {
    var percent = (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
    return this.min + percent * (this.max - this.min);
  };

  return Linear;
}(Base);

Base.Linear = Linear;
module.exports = Linear;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 自动计算数字坐标轴
 * @author dxq613@gmail.com
 */
var isNil = __webpack_require__(35);

var isNumber = __webpack_require__(36);

var AutoUtil = __webpack_require__(171);

var MIN_COUNT = 5;
var MAX_COUNT = 7;
var SNAP_COUNT_ARRAY = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10];
var SNAP_ARRAY = [0, 1, 2, 4, 5, 10];
var EPS = 1e-12;

module.exports = function (info) {
  var min = info.min;
  var max = info.max;
  var interval = info.interval;
  var minTickInterval = info.minTickInterval;
  var ticks = [];
  var minCount = info.minCount || MIN_COUNT;
  var maxCount = info.maxCount || MAX_COUNT;
  var isFixedCount = minCount === maxCount; // 是否限定死了个数

  var minLimit = isNil(info.minLimit) ? -Infinity : info.minLimit; // 限定的最小值

  var maxLimit = isNil(info.maxLimit) ? Infinity : info.maxLimit; // 限定最大值

  var avgCount = (minCount + maxCount) / 2;
  var count = avgCount; // 用户传入的逼近数组

  var snapArray = info.snapArray ? info.snapArray : isFixedCount ? SNAP_COUNT_ARRAY : SNAP_ARRAY; // 如果限定大小范围，同时大小范围等于用户传入的范围，同时限定了个数，interval 按照个数均分

  if (min === minLimit && max === maxLimit && isFixedCount) {
    interval = (max - min) / (count - 1);
  }

  if (isNil(min)) {
    min = 0;
  }

  if (isNil(max)) {
    max = 0;
  }

  if (Math.abs(max - min) < EPS) {
    if (min === 0) {
      max = 1;
    } else {
      if (min > 0) {
        min = 0;
      } else {
        max = 0;
      }
    }

    if (max - min < 5 && !interval && max - min >= 1) {
      interval = 1;
    }
  }

  if (isNil(interval)) {
    // 计算间距
    var temp = (max - min) / (avgCount - 1);
    interval = AutoUtil.snapFactorTo(temp, snapArray, 'ceil');

    if (maxCount !== minCount) {
      count = parseInt((max - min) / interval, 10);

      if (count > maxCount) {
        count = maxCount;
      }

      if (count < minCount) {
        count = minCount;
      } // 不确定tick的个数时，使得tick偏小


      interval = AutoUtil.snapFactorTo((max - min) / (count - 1), snapArray, 'floor');
    }
  } // interval should not be less than minTickInterval


  if (isNumber(minTickInterval) && interval < minTickInterval) {
    interval = minTickInterval;
  }

  if (info.interval || maxCount !== minCount) {
    // 校正 max 和 min
    max = Math.min(AutoUtil.snapMultiple(max, interval, 'ceil'), maxLimit); // 向上逼近

    min = Math.max(AutoUtil.snapMultiple(min, interval, 'floor'), minLimit); // 向下逼近

    count = Math.round((max - min) / interval);
    min = AutoUtil.fixedBase(min, interval);
    max = AutoUtil.fixedBase(max, interval);
  } else {
    avgCount = parseInt(avgCount, 10); // 取整

    var avg = (max + min) / 2;
    var avgTick = AutoUtil.snapMultiple(avg, interval, 'ceil');
    var sideCount = Math.floor((avgCount - 2) / 2);
    var maxTick = avgTick + sideCount * interval;
    var minTick;

    if (avgCount % 2 === 0) {
      minTick = avgTick - sideCount * interval;
    } else {
      minTick = avgTick - (sideCount + 1) * interval;
    }

    var prevMaxTick = null; // 如果减去intervl, fixBase后，新的minTick没有大于之前的值，就退出，防止死循环

    while (maxTick < max && (prevMaxTick === null || maxTick > prevMaxTick)) {
      // 保证计算出来的刻度最大值 maxTick 不小于数据最大值 max
      prevMaxTick = maxTick;
      maxTick = AutoUtil.fixedBase(maxTick + interval, interval);
    }

    var prevMinTick = null; // 如果减去intervl, fixBase后，新的minTick没有小于之前的值，就退出，防止死循环

    while (minTick > min && (prevMinTick === null || minTick < prevMinTick)) {
      // 保证计算出来的刻度最小值 minTick 不小于数据最大值 min
      prevMinTick = minTick;
      minTick = AutoUtil.fixedBase(minTick - interval, interval); // 防止超常浮点数计算问题
    }

    max = maxTick;
    min = minTick;
  }

  max = Math.min(max, maxLimit);
  min = Math.max(min, minLimit);
  ticks.push(min);

  for (var i = 1; i < count; i++) {
    var tickValue = AutoUtil.fixedBase(interval * i + min, interval);

    if (tickValue < max) {
      ticks.push(tickValue);
    }
  }

  if (ticks[ticks.length - 1] < max) {
    ticks.push(max);
  }

  return {
    min: min,
    max: max,
    interval: interval,
    count: count,
    ticks: ticks
  };
};

/***/ }),
/* 171 */
/***/ (function(module, exports) {

/**
 * @fileOverview 计算方法
 * @author dxq613@gmail.com
 */
// 如果小数点后面超过 10 位浮点数时进行一下处理
var DECIMAL_LENGTH = 12; // 获取系数

function getFactor(v) {
  var factor = 1;

  if (v === Infinity || v === -Infinity) {
    throw new Error('Not support Infinity!');
  }

  if (v < 1) {
    var count = 0;

    while (v < 1) {
      factor = factor / 10;
      v = v * 10;
      count++;
    } // 浮点数计算出现问题


    if (factor.toString().length > DECIMAL_LENGTH) {
      factor = parseFloat(factor.toFixed(count));
    }
  } else {
    while (v > 10) {
      factor = factor * 10;
      v = v / 10;
    }
  }

  return factor;
} // 取小于当前值的


function arrayFloor(values, value) {
  var length = values.length;

  if (length === 0) {
    return NaN;
  }

  var pre = values[0];

  if (value < values[0]) {
    return NaN;
  }

  if (value >= values[length - 1]) {
    return values[length - 1];
  }

  for (var i = 1; i < values.length; i++) {
    if (value < values[i]) {
      break;
    }

    pre = values[i];
  }

  return pre;
} // 大于当前值的第一个


function arrayCeiling(values, value) {
  var length = values.length;

  if (length === 0) {
    return NaN;
  } // var pre = values[0];


  var rst;

  if (value > values[length - 1]) {
    return NaN;
  }

  if (value < values[0]) {
    return values[0];
  }

  for (var i = 1; i < values.length; i++) {
    if (value <= values[i]) {
      rst = values[i];
      break;
    }
  }

  return rst;
}

var Util = {
  // 获取逼近的数值
  snapFactorTo: function snapFactorTo(v, arr, snapType) {
    // 假设 v = -512,isFloor = true
    if (isNaN(v)) {
      return NaN;
    }

    var factor = 1; // 计算系数

    if (v !== 0) {
      if (v < 0) {
        factor = -1;
      }

      v = v * factor; // v = 512

      var tmpFactor = getFactor(v);
      factor = factor * tmpFactor; // factor = -100

      v = v / tmpFactor; // v = 5.12
    }

    if (snapType === 'floor') {
      v = Util.snapFloor(arr, v); // v = 5
    } else if (snapType === 'ceil') {
      v = Util.snapCeiling(arr, v); // v = 6
    } else {
      v = Util.snapTo(arr, v); // 四舍五入 5
    }

    var rst = parseFloat((v * factor).toPrecision(DECIMAL_LENGTH)); // 如果出现浮点数计算问题，需要处理一下
    // 如果出现浮点数计算问题，需要处理一下

    if (Math.abs(factor) < 1 && rst.toString().length > DECIMAL_LENGTH) {
      var decimalVal = parseInt(1 / factor);
      var symbol = factor > 0 ? 1 : -1;
      rst = v / decimalVal * symbol;
    }

    return rst;
  },
  // 获取逼近的倍数
  snapMultiple: function snapMultiple(v, base, snapType) {
    var div;

    if (snapType === 'ceil') {
      div = Math.ceil(v / base);
    } else if (snapType === 'floor') {
      div = Math.floor(v / base);
    } else {
      div = Math.round(v / base);
    }

    return div * base;
  },

  /**
   * 获取逼近的值，用于对齐数据
   * @param  {Array} values   数据集合
   * @param  {Number} value   数值
   * @return {Number} 逼近的值
   */
  snapTo: function snapTo(values, value) {
    // 这里假定values是升序排列
    var floorVal = arrayFloor(values, value);
    var ceilingVal = arrayCeiling(values, value);

    if (isNaN(floorVal) || isNaN(ceilingVal)) {
      if (values[0] >= value) {
        return values[0];
      }

      var last = values[values.length - 1];

      if (last <= value) {
        return last;
      }
    }

    if (Math.abs(value - floorVal) < Math.abs(ceilingVal - value)) {
      return floorVal;
    }

    return ceilingVal;
  },

  /**
   * 获取逼近的最小值，用于对齐数据
   * @param  {Array} values   数据集合
   * @param  {Number} value   数值
   * @return {Number} 逼近的最小值
   */
  snapFloor: function snapFloor(values, value) {
    // 这里假定values是升序排列
    return arrayFloor(values, value);
  },

  /**
   * 获取逼近的最大值，用于对齐数据
   * @param  {Array} values   数据集合
   * @param  {Number} value   数值
   * @return {Number} 逼近的最大值
   */
  snapCeiling: function snapCeiling(values, value) {
    // 这里假定values是升序排列
    return arrayCeiling(values, value);
  },
  fixedBase: function fixedBase(v, base) {
    var str = base.toString();
    var index = str.indexOf('.');
    var indexOfExp = str.indexOf('e-'); // 判断是否带小数点，1.000001 1.23e-9

    if (index < 0 && indexOfExp < 0) {
      // base为整数
      return Math.round(v);
    }

    var length = indexOfExp >= 0 ? parseInt(str.substr(indexOfExp + 2), 10) : str.substr(index + 1).length;

    if (length > 20) {
      length = 20;
    }

    return parseFloat(v.toFixed(length));
  }
};
module.exports = Util;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Base = __webpack_require__(26);

var isNumber = __webpack_require__(36);

var Identity = /*#__PURE__*/function (_Base) {
  _inheritsLoose(Identity, _Base);

  function Identity() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Identity.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Base.prototype._initDefaultCfg.call(this);

    this.isIdentity = true;
    this.type = 'identity';
    /**
     * 常量值
     * @type {*}
     */

    this.value = null;
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText() {
    return this.value.toString();
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    if (this.value !== value && isNumber(value)) {
      return value;
    }

    return this.range[0];
  }
  /**
   * @override
   */
  ;

  _proto.invert = function invert() {
    return this.value;
  };

  return Identity;
}(Base);

Base.Identity = Identity;
module.exports = Identity;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Axis = __webpack_require__(174);

var Global = __webpack_require__(6);

var _require = __webpack_require__(16),
    Shape = _require.Shape;

function formatTicks(ticks) {
  var tmp = ticks.slice(0);

  if (tmp.length > 0) {
    var first = tmp[0];
    var last = tmp[tmp.length - 1];

    if (first.value !== 0) {
      tmp.unshift({
        value: 0
      });
    }

    if (last.value !== 1) {
      tmp.push({
        value: 1
      });
    }
  }

  return tmp;
}

var AxisController = /*#__PURE__*/function () {
  function AxisController(cfg) {
    this.axisCfg = {};
    this.frontPlot = null;
    this.backPlot = null;
    this.axes = {}; // store the axes's options

    Util.mix(this, cfg);
  }

  var _proto = AxisController.prototype;

  _proto._isHide = function _isHide(field) {
    var axisCfg = this.axisCfg;
    return !axisCfg || axisCfg[field] === false;
  };

  _proto._getLinePosition = function _getLinePosition(scale, dimType, index, transposed) {
    var position = '';
    var field = scale.field;
    var axisCfg = this.axisCfg;

    if (axisCfg[field] && axisCfg[field].position) {
      position = axisCfg[field].position;
    } else if (dimType === 'x') {
      position = transposed ? 'left' : 'bottom';
    } else if (dimType === 'y') {
      position = index ? 'right' : 'left';

      if (transposed) {
        position = 'bottom';
      }
    }

    return position;
  };

  _proto._getLineCfg = function _getLineCfg(coord, dimType, position) {
    var start;
    var end;
    var factor = 1; // Mark clockwise or counterclockwise

    if (dimType === 'x') {
      start = {
        x: 0,
        y: 0
      };
      end = {
        x: 1,
        y: 0
      };
    } else {
      if (position === 'right') {
        // there will be several y axes
        start = {
          x: 1,
          y: 0
        };
        end = {
          x: 1,
          y: 1
        };
      } else {
        start = {
          x: 0,
          y: 0
        };
        end = {
          x: 0,
          y: 1
        };
        factor = -1;
      }
    }

    if (coord.transposed) {
      factor *= -1;
    }

    return {
      offsetFactor: factor,
      start: coord.convertPoint(start),
      end: coord.convertPoint(end)
    };
  };

  _proto._getCircleCfg = function _getCircleCfg(coord) {
    return {
      startAngle: coord.startAngle,
      endAngle: coord.endAngle,
      center: coord.center,
      radius: coord.circleRadius
    };
  };

  _proto._getRadiusCfg = function _getRadiusCfg(coord) {
    var transposed = coord.transposed;
    var start;
    var end;

    if (transposed) {
      start = {
        x: 0,
        y: 0
      };
      end = {
        x: 1,
        y: 0
      };
    } else {
      start = {
        x: 0,
        y: 0
      };
      end = {
        x: 0,
        y: 1
      };
    }

    return {
      offsetFactor: -1,
      start: coord.convertPoint(start),
      end: coord.convertPoint(end)
    };
  };

  _proto._getAxisCfg = function _getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg) {
    var self = this;
    var axisCfg = this.axisCfg;
    var ticks = scale.getTicks();
    var cfg = Util.deepMix({
      ticks: ticks,
      frontContainer: this.frontPlot,
      backContainer: this.backPlot
    }, defaultCfg, axisCfg[scale.field]);
    var labels = [];
    var label = cfg.label;
    var count = ticks.length;
    var maxWidth = 0;
    var maxHeight = 0;
    var labelCfg = label;
    Util.each(ticks, function (tick, index) {
      if (Util.isFunction(label)) {
        var executedLabel = label(tick.text, index, count);
        labelCfg = executedLabel ? Util.mix({}, Global._defaultAxis.label, executedLabel) : null;
      }

      if (labelCfg) {
        var textStyle = {};

        if (labelCfg.textAlign) {
          textStyle.textAlign = labelCfg.textAlign;
        }

        if (labelCfg.textBaseline) {
          textStyle.textBaseline = labelCfg.textBaseline;
        }

        var axisLabel = new Shape.Text({
          className: 'axis-label',
          attrs: Util.mix({
            x: 0,
            y: 0,
            text: tick.text,
            fontFamily: self.chart.get('canvas').get('fontFamily')
          }, labelCfg),
          value: tick.value,
          textStyle: textStyle,
          top: labelCfg.top,
          context: self.chart.get('canvas').get('context')
        });
        labels.push(axisLabel);

        var _axisLabel$getBBox = axisLabel.getBBox(),
            width = _axisLabel$getBBox.width,
            height = _axisLabel$getBBox.height;

        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
      }
    });
    cfg.labels = labels;
    cfg.maxWidth = maxWidth;
    cfg.maxHeight = maxHeight;
    return cfg;
  };

  _proto._createAxis = function _createAxis(coord, scale, verticalScale, dimType, index) {
    if (index === void 0) {
      index = '';
    }

    var self = this;
    var coordType = coord.type;
    var transposed = coord.transposed;
    var type;
    var key;
    var defaultCfg;

    if (coordType === 'cartesian' || coordType === 'rect') {
      var position = self._getLinePosition(scale, dimType, index, transposed);

      defaultCfg = Global.axis[position];
      defaultCfg.position = position;
      type = 'Line';
      key = position;
    } else {
      if (dimType === 'x' && !transposed || dimType === 'y' && transposed) {
        defaultCfg = Global.axis.circle;
        type = 'Circle';
        key = 'circle';
      } else {
        defaultCfg = Global.axis.radius;
        type = 'Line';
        key = 'radius';
      }
    }

    var cfg = self._getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg);

    cfg.type = type;
    cfg.dimType = dimType;
    cfg.verticalScale = verticalScale;
    cfg.index = index;
    this.axes[key] = cfg;
  };

  _proto.createAxis = function createAxis(coord, xScale, yScales) {
    var self = this;

    if (xScale && !self._isHide(xScale.field)) {
      self._createAxis(coord, xScale, yScales[0], 'x');
    }

    Util.each(yScales, function (yScale, index) {
      if (!self._isHide(yScale.field)) {
        self._createAxis(coord, yScale, xScale, 'y', index);
      }
    });
    var axes = this.axes;
    var chart = self.chart;

    if (chart._isAutoPadding()) {
      var userPadding = Util.parsePadding(chart.get('padding'));
      var appendPadding = Util.parsePadding(chart.get('appendPadding'));
      var legendRange = chart.get('legendRange') || {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      var padding = [userPadding[0] === 'auto' ? legendRange.top + appendPadding[0] * 2 : userPadding[0], userPadding[1] === 'auto' ? legendRange.right + appendPadding[1] : userPadding[1], userPadding[2] === 'auto' ? legendRange.bottom + appendPadding[2] : userPadding[2], userPadding[3] === 'auto' ? legendRange.left + appendPadding[3] : userPadding[3]];

      if (coord.isPolar) {
        var circleAxis = axes.circle;

        if (circleAxis) {
          var maxHeight = circleAxis.maxHeight,
              maxWidth = circleAxis.maxWidth,
              labelOffset = circleAxis.labelOffset;
          padding[0] += maxHeight + labelOffset;
          padding[1] += maxWidth + labelOffset;
          padding[2] += maxHeight + labelOffset;
          padding[3] += maxWidth + labelOffset;
        }
      } else {
        if (axes.right && userPadding[1] === 'auto') {
          var _axes$right = axes.right,
              _maxWidth = _axes$right.maxWidth,
              _labelOffset = _axes$right.labelOffset;
          padding[1] += _maxWidth + _labelOffset;
        }

        if (axes.left && userPadding[3] === 'auto') {
          var _axes$left = axes.left,
              _maxWidth2 = _axes$left.maxWidth,
              _labelOffset2 = _axes$left.labelOffset;
          padding[3] += _maxWidth2 + _labelOffset2;
        }

        if (axes.bottom && userPadding[2] === 'auto') {
          var _axes$bottom = axes.bottom,
              _maxHeight = _axes$bottom.maxHeight,
              _labelOffset3 = _axes$bottom.labelOffset;
          padding[2] += _maxHeight + _labelOffset3;
        }
      }

      chart.set('_padding', padding);

      chart._updateLayout(padding);
    }

    Util.each(axes, function (axis) {
      var type = axis.type,
          grid = axis.grid,
          verticalScale = axis.verticalScale,
          ticks = axis.ticks,
          dimType = axis.dimType,
          position = axis.position,
          index = axis.index;
      var appendCfg;

      if (coord.isPolar) {
        if (type === 'Line') {
          appendCfg = self._getRadiusCfg(coord);
        } else if (type === 'Circle') {
          appendCfg = self._getCircleCfg(coord);
        }
      } else {
        appendCfg = self._getLineCfg(coord, dimType, position);
      }

      if (grid && verticalScale) {
        var gridPoints = [];
        var verticalTicks = formatTicks(verticalScale.getTicks());
        Util.each(ticks, function (tick) {
          var subPoints = [];
          Util.each(verticalTicks, function (verticalTick) {
            var x = dimType === 'x' ? tick.value : verticalTick.value;
            var y = dimType === 'x' ? verticalTick.value : tick.value;

            if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
              var point = coord.convertPoint({
                x: x,
                y: y
              });
              subPoints.push(point);
            }
          });
          gridPoints.push({
            points: subPoints,
            _id: 'axis-' + dimType + index + '-grid-' + tick.tickValue
          });
        });
        axis.gridPoints = gridPoints;

        if (coord.isPolar) {
          axis.center = coord.center;
          axis.startAngle = coord.startAngle;
          axis.endAngle = coord.endAngle;
        }
      }

      appendCfg._id = 'axis-' + dimType;

      if (!Util.isNil(index)) {
        appendCfg._id = 'axis-' + dimType + index;
      }

      new Axis[type](Util.mix(axis, appendCfg));
    });
  };

  _proto.clear = function clear() {
    this.axes = {};
    this.frontPlot.clear();
    this.backPlot.clear();
  };

  return AxisController;
}();

module.exports = AxisController;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Abstract = __webpack_require__(45);

__webpack_require__(175);

module.exports = Abstract;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Abstract = __webpack_require__(45);

var Line = /*#__PURE__*/function (_Abstract) {
  (0, _inheritsLoose2["default"])(Line, _Abstract);

  var _super = _createSuper(Line);

  function Line() {
    return _Abstract.apply(this, arguments) || this;
  }

  var _proto = Line.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Abstract.prototype._initDefaultCfg.call(this);

    this.start = null;
    this.end = null;
  };

  _proto.getOffsetPoint = function getOffsetPoint(value) {
    var start = this.start,
        end = this.end;
    return {
      x: start.x + (end.x - start.x) * value,
      y: start.y + (end.y - start.y) * value
    };
  };

  _proto.getAxisVector = function getAxisVector() {
    var start = this.start,
        end = this.end;
    return [end.x - start.x, end.y - start.y];
  };

  _proto.drawLine = function drawLine(lineCfg) {
    var container = this.getContainer(lineCfg.top);
    var start = this.start,
        end = this.end;
    container.addShape('line', {
      className: 'axis-line',
      attrs: Util.mix({
        x1: start.x,
        y1: start.y,
        x2: end.x,
        y2: end.y
      }, lineCfg)
    });
  };

  return Line;
}(Abstract);

Abstract.Line = Line;
module.exports = Line;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _emit = _interopRequireDefault(__webpack_require__(42));

var _controller = _interopRequireDefault(__webpack_require__(177));

var _canvasElement = _interopRequireDefault(__webpack_require__(178));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Container = __webpack_require__(66);

var Group = __webpack_require__(67);

var _require = __webpack_require__(70),
    requestAnimationFrame = _require.requestAnimationFrame;

var Canvas = /*#__PURE__*/function (_EventEmit) {
  (0, _inheritsLoose2["default"])(Canvas, _EventEmit);

  var _super = _createSuper(Canvas);

  var _proto = Canvas.prototype;

  _proto.get = function get(name) {
    return this._attrs[name];
  };

  _proto.set = function set(name, value) {
    this._attrs[name] = value;
  };

  function Canvas(cfg) {
    var _this;

    _this = _EventEmit.call(this) || this;
    _this._attrs = Util.mix({
      type: 'canvas',
      children: []
    }, cfg);

    _this._initPixelRatio();

    _this._initCanvas();

    return _this;
  }

  _proto._initPixelRatio = function _initPixelRatio() {
    var pixelRatio = this.get('pixelRatio');

    if (!pixelRatio) {
      this.set('pixelRatio', Util.getPixelRatio());
    }
  };

  _proto.beforeDraw = function beforeDraw() {
    var context = this._attrs.context;
    var el = this._attrs.el;
    context && context.clearRect && context.clearRect(0, 0, el.width, el.height);
  };

  _proto._initCanvas = function _initCanvas() {
    var self = this;
    var el = self.get('el');
    var context = self.get('context');

    if (!el && !context) {
      throw new Error('Please specify the id, el or context of the chart!');
    }

    var canvas;

    if (el) {
      // DOMElement or String
      canvas = Util.isString(el) ? Util.getDomById(el) : el;
    } else {
      // 说明没有指定el
      canvas = _canvasElement["default"].create(context);
    }

    if (context && canvas && !canvas.getContext) {
      canvas.getContext = function () {
        return context;
      };
    }

    var width = self.get('width');

    if (!width) {
      width = Util.getWidth(canvas);
    }

    var height = self.get('height');

    if (!height) {
      height = Util.getHeight(canvas);
    }

    self.set('canvas', this);
    self.set('el', canvas);
    self.set('context', context || canvas.getContext('2d'));
    self.changeSize(width, height); // 初始化事件控制器

    var eventController = new _controller["default"]({
      canvas: this,
      el: canvas
    });
    self.set('eventController', eventController);
  };

  _proto.changeSize = function changeSize(width, height) {
    var pixelRatio = this.get('pixelRatio');
    var canvasDOM = this.get('el'); // HTMLCanvasElement or canvasElement
    // 浏览器环境设置style样式

    if (canvasDOM.style) {
      canvasDOM.style.width = width + 'px';
      canvasDOM.style.height = height + 'px';
    }

    if (Util.isCanvasElement(canvasDOM)) {
      canvasDOM.width = width * pixelRatio;
      canvasDOM.height = height * pixelRatio;

      if (pixelRatio !== 1) {
        var ctx = this.get('context');
        ctx.scale(pixelRatio, pixelRatio);
      }
    }

    this.set('width', width);
    this.set('height', height);
  };

  _proto.getWidth = function getWidth() {
    var pixelRatio = this.get('pixelRatio');
    var width = this.get('width');
    return width * pixelRatio;
  };

  _proto.getHeight = function getHeight() {
    var pixelRatio = this.get('pixelRatio');
    var height = this.get('height');
    return height * pixelRatio;
  };

  _proto.getPointByClient = function getPointByClient(clientX, clientY) {
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    var width = bbox.right - bbox.left;
    var height = bbox.bottom - bbox.top;
    return {
      x: (clientX - bbox.left) * (el.width / width),
      y: (clientY - bbox.top) * (el.height / height)
    };
  };

  _proto._beginDraw = function _beginDraw() {
    this._attrs.toDraw = true;
  };

  _proto._endDraw = function _endDraw() {
    this._attrs.toDraw = false;
  };

  _proto.draw = function draw() {
    var self = this;

    function drawInner() {
      self.set('animateHandler', requestAnimationFrame(function () {
        self.set('animateHandler', undefined);

        if (self.get('toDraw')) {
          drawInner();
        }
      }));
      self.beforeDraw();

      try {
        var context = self._attrs.context;
        var children = self._attrs.children;

        for (var i = 0, len = children.length; i < len; i++) {
          var child = children[i];
          child.draw(context);
        } // 支付宝，微信小程序，需要调context.draw才能完成绘制， 所以这里直接判断是否有.draw方法


        if (context.draw) {
          context.draw();
        }
      } catch (ev) {
        console.warn('error in draw canvas, detail as:');
        console.warn(ev);

        self._endDraw();
      }

      self._endDraw();
    }

    if (self.get('destroyed')) {
      return;
    }

    if (self.get('animateHandler')) {
      this._beginDraw();
    } else {
      drawInner();
    }
  };

  _proto.destroy = function destroy() {
    if (this.get('destroyed')) {
      return;
    } // 需要清理 canvas 画布内容，否则会导致 spa 应用 ios 下 canvas 白屏
    // https://stackoverflow.com/questions/52532614/total-canvas-memory-use-exceeds-the-maximum-limit-safari-12
    // https://github.com/antvis/F2/issues/630


    var el = this.get('el');
    el.width = 0;
    el.height = 0;
    this.clear();
    this._attrs = {};
    this.set('destroyed', true);
  };

  _proto.isDestroyed = function isDestroyed() {
    return this.get('destroyed');
  };

  return Canvas;
}(_emit["default"]);

Util.mix(Canvas.prototype, Container, {
  getGroupClass: function getGroupClass() {
    return Group;
  }
});
module.exports = Canvas;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _dom = __webpack_require__(62);

var _common = __webpack_require__(0);

// 计算滑动的方向
var calcDirection = function calcDirection(start, end) {
  var xDistance = end.x - start.x;
  var yDistance = end.y - start.y; // x 的距离大于y 说明是横向，否则就是纵向

  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    return xDistance > 0 ? 'right' : 'left';
  }

  return yDistance > 0 ? 'down' : 'up';
}; // 计算2点之间的距离


var calcDistance = function calcDistance(point1, point2) {
  var xDistance = Math.abs(point2.x - point1.x);
  var yDistance = Math.abs(point2.y - point1.y);
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
};

var getCenter = function getCenter(point1, point2) {
  var x = point1.x + (point2.x - point1.x) / 2;
  var y = point1.y + (point2.y - point1.y) / 2;
  return {
    x: x,
    y: y
  };
};

var convertPoints = function convertPoints(touches, canvas) {
  if (!touches) return;
  var points = [];
  var len = touches.length;

  for (var i = 0; i < len; i++) {
    var touch = touches[i]; // x, y: 相对canvas原点的位置，clientX, clientY 相对于可视窗口的位置

    var x = touch.x,
        y = touch.y,
        clientX = touch.clientX,
        clientY = touch.clientY;
    var point = void 0; // 小程序环境会有x,y

    if ((0, _common.isNumber)(x) || (0, _common.isNumber)(y)) {
      point = {
        x: x,
        y: y
      };
    } else {
      // 浏览器环境再计算下canvas的相对位置
      point = (0, _dom.getRelativePosition)({
        x: clientX,
        y: clientY
      }, canvas);
    }

    points.push(point);
  }

  return points;
};

var PRESS_DELAY = 250;

var EventController = /*#__PURE__*/function () {
  function EventController(_ref) {
    var _this = this;

    var canvas = _ref.canvas,
        el = _ref.el;

    this._click = function (ev) {
      _this.emitEvent('click', ev);
    };

    this._start = function (ev) {
      var points = convertPoints(ev.touches, _this.canvas);

      if (!points) {
        return;
      }

      ev.points = points;

      _this.emitEvent('touchstart', ev); // 防止上次的内容没有清理掉，重新reset下


      _this.reset(); // 记录touch start 的时间


      _this.startTime = Date.now(); // 记录touch start 的点

      _this.startPoints = points;

      if (points.length > 1) {
        _this.startDistance = calcDistance(points[0], points[1]);
        _this.center = getCenter(points[0], points[1]);
      } else {
        // 如果touchstart后停顿250ms, 则也触发press事件
        _this.pressTimeout = setTimeout(function () {
          // 这里固定触发press事件
          var eventType = 'press';
          ev.direction = 'none';

          _this.emitStart(eventType, ev);

          _this.emitEvent(eventType, ev);

          _this.eventType = eventType;
        }, PRESS_DELAY);
      }
    };

    this._move = function (ev) {
      var points = convertPoints(ev.touches, _this.canvas);
      if (!points) return;

      _this.clearPressTimeout();

      ev.points = points;

      _this.emitEvent('touchmove', ev);

      var startPoints = _this.startPoints;
      if (!startPoints) return; // 多指触控

      if (points.length > 1) {
        // touchstart的距离
        var startDistance = _this.startDistance;
        var currentDistance = calcDistance(points[0], points[1]);
        ev.zoom = currentDistance / startDistance;
        ev.center = _this.center; // 触发缩放事件

        _this.emitStart('pinch', ev);

        _this.emitEvent('pinch', ev);
      } else {
        var deltaX = points[0].x - startPoints[0].x;
        var deltaY = points[0].y - startPoints[0].y;
        var direction = _this.direction || calcDirection(startPoints[0], points[0]);
        _this.direction = direction; // 获取press或者pan的事件类型
        // press 按住滑动, pan表示平移
        // 如果start后立刻move，则触发pan, 如果有停顿，则触发press

        var eventType = _this.getEventType(points);

        ev.direction = direction;
        ev.deltaX = deltaX;
        ev.deltaY = deltaY;

        _this.emitStart(eventType, ev);

        _this.emitEvent(eventType, ev); // 记录最后2次move的时间和坐标，为了给swipe事件用


        var prevMoveTime = _this.lastMoveTime;
        var now = Date.now(); // 最后2次的时间间隔一定要大于0，否则swipe没发计算

        if (now - prevMoveTime > 0) {
          _this.prevMoveTime = prevMoveTime;
          _this.prevMovePoints = _this.lastMovePoints;
          _this.lastMoveTime = now;
          _this.lastMovePoints = points;
        }
      }
    };

    this._end = function (ev) {
      _this.emitEnd(ev);

      _this.emitEvent('touchend', ev); // swipe事件处理, 在touchend之后触发


      var lastMoveTime = _this.lastMoveTime;
      var now = Date.now(); // 做这个判断是为了最后一次touchmove后到end前，还有一个停顿的过程
      // 100 是拍的一个值，理论这个值会很短，一般不卡顿的话在10ms以内

      if (now - lastMoveTime < 100) {
        var prevMoveTime = _this.prevMoveTime || _this.startTime;
        var intervalTime = lastMoveTime - prevMoveTime; // 时间间隔一定要大于0, 否则计算没意义

        if (intervalTime > 0) {
          var prevMovePoints = _this.prevMovePoints || _this.startPoints;
          var lastMovePoints = _this.lastMovePoints; // move速率

          var velocity = calcDistance(prevMovePoints[0], lastMovePoints[0]) / intervalTime; // 0.3 是参考hammerjs的设置

          if (velocity > 0.3) {
            ev.velocity = velocity;
            ev.direction = calcDirection(prevMovePoints[0], lastMovePoints[0]);

            _this.emitEvent('swipe', ev);
          }
        }
      }

      _this.reset();

      var touches = ev.touches; // 当多指只释放了1指时也会触发end, 这时重新触发一次start

      if (touches && touches.length > 0) {
        _this._start(ev);
      }
    };

    this._cancel = function (ev) {
      _this.emitEvent('touchcancel', ev);

      _this.reset();
    };

    // canvasEl
    this.canvas = canvas;
    this.delegateEvent(el); // 用来记录当前触发的事件

    this.processEvent = {};
  }

  var _proto = EventController.prototype;

  _proto.delegateEvent = function delegateEvent(canvasEl) {
    // 代理这几个事件
    canvasEl.addEventListener('click', this._click);
    canvasEl.addEventListener('touchstart', this._start);
    canvasEl.addEventListener('touchmove', this._move);
    canvasEl.addEventListener('touchend', this._end);
    canvasEl.addEventListener('touchcancel', this._cancel);
  };

  _proto.emitEvent = function emitEvent(type, ev) {
    var canvas = this.canvas;
    canvas.emit(type, ev);
  };

  _proto.getEventType = function getEventType(points) {
    var eventType = this.eventType,
        canvas = this.canvas,
        startTime = this.startTime,
        startPoints = this.startPoints;

    if (eventType) {
      return eventType;
    }

    var type;
    var panEventListeners = canvas.__events.pan; // 如果没有pan事件的监听，默认都是press

    if (!panEventListeners || !panEventListeners.length) {
      type = 'press';
    } else {
      // 如果有pan事件的处理，press则需要停顿250ms, 且移动距离小于10
      var now = Date.now();

      if (now - startTime > PRESS_DELAY && calcDistance(startPoints[0], points[0]) < 10) {
        type = 'press';
      } else {
        type = 'pan';
      }
    }

    this.eventType = type;
    return type;
  };

  _proto.enable = function enable(eventType) {
    this.processEvent[eventType] = true;
  } // 是否进行中的事件
  ;

  _proto.isProcess = function isProcess(eventType) {
    return this.processEvent[eventType];
  } // 触发start事件
  ;

  _proto.emitStart = function emitStart(type, ev) {
    if (this.isProcess(type)) {
      return;
    }

    this.enable(type);
    this.emitEvent(type + "start", ev);
  } // 触发end事件
  ;

  _proto.emitEnd = function emitEnd(ev) {
    var _this2 = this;

    var processEvent = this.processEvent;
    Object.keys(processEvent).forEach(function (type) {
      _this2.emitEvent(type + "end", ev);

      delete processEvent[type];
    });
  };

  _proto.clearPressTimeout = function clearPressTimeout() {
    if (this.pressTimeout) {
      clearTimeout(this.pressTimeout);
      this.pressTimeout = 0;
    }
  };

  _proto.reset = function reset() {
    this.clearPressTimeout();
    this.startTime = 0;
    this.startPoints = null;
    this.startDistance = 0;
    this.direction = null;
    this.eventType = null;
    this.pinch = false;
    this.prevMoveTime = 0;
    this.prevMovePoints = null;
    this.lastMoveTime = 0;
    this.lastMovePoints = null;
  };

  return EventController;
}();

var _default = EventController;
exports["default"] = _default;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _emit = _interopRequireDefault(__webpack_require__(42));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CanvasElement = /*#__PURE__*/function (_EventEmit) {
  (0, _inheritsLoose2["default"])(CanvasElement, _EventEmit);

  var _super = _createSuper(CanvasElement);

  function CanvasElement(ctx) {
    var _this;

    _this = _EventEmit.call(this) || this;
    _this.context = ctx; // canvas实际的宽高 (width/height) * pixelRatio

    _this.width = 0;
    _this.height = 0;
    _this.style = {};
    _this.currentStyle = {}; // 用来标识是CanvasElement实例

    _this.isCanvasElement = true;
    return _this;
  }

  var _proto = CanvasElement.prototype;

  _proto.getContext = function getContext()
  /* type */
  {
    return this.context;
  };

  _proto.getBoundingClientRect = function getBoundingClientRect() {
    var width = this.width;
    var height = this.height; // 默认都处理成可视窗口的顶部位置

    return {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    };
  };

  _proto.addEventListener = function addEventListener(type, listener) {
    this.on(type, listener);
  };

  _proto.removeEventListener = function removeEventListener(type, listener) {
    this.off(type, listener);
  };

  _proto.dispatchEvent = function dispatchEvent(type, e) {
    this.emit(type, e);
  };

  return CanvasElement;
}(_emit["default"]);

function supportEventListener(canvas) {
  if (!canvas) {
    return false;
  } // 非 HTMLCanvasElement


  if (canvas.nodeType !== 1 || !canvas.nodeName || canvas.nodeName.toLowerCase() !== 'canvas') {
    return false;
  } // 微信小程序canvas.getContext('2d')时也是CanvasRenderingContext2D
  // 也会有ctx.canvas, 而且nodeType也是1，所以还要在看下是否支持addEventListener


  var support = false;

  try {
    canvas.addEventListener('eventTest', function () {
      support = true;
    });
    canvas.dispatchEvent(new Event('eventTest'));
  } catch (error) {
    support = false;
  }

  return support;
}

var _default = {
  create: function create(ctx) {
    if (!ctx) {
      return null;
    }

    if (supportEventListener(ctx.canvas)) {
      return ctx.canvas;
    }

    return new CanvasElement(ctx);
  }
};
exports["default"] = _default;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

function _mod(n, m) {
  return (n % m + m) % m;
}

function _addStop(steps, gradient) {
  Util.each(steps, function (item) {
    item = item.split(':');
    gradient.addColorStop(Number(item[0]), item[1]);
  });
} // the string format: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'


function _parseLineGradient(color, shape, context) {
  var arr = color.split(' ');
  var angle = arr[0].slice(2, arr[0].length - 1);
  angle = _mod(parseFloat(angle) * Math.PI / 180, Math.PI * 2);
  var steps = arr.slice(1);

  var _shape$getBBox = shape.getBBox(),
      minX = _shape$getBBox.minX,
      minY = _shape$getBBox.minY,
      maxX = _shape$getBBox.maxX,
      maxY = _shape$getBBox.maxY;

  var start;
  var end;

  if (angle >= 0 && angle < 0.5 * Math.PI) {
    start = {
      x: minX,
      y: minY
    };
    end = {
      x: maxX,
      y: maxY
    };
  } else if (0.5 * Math.PI <= angle && angle < Math.PI) {
    start = {
      x: maxX,
      y: minY
    };
    end = {
      x: minX,
      y: maxY
    };
  } else if (Math.PI <= angle && angle < 1.5 * Math.PI) {
    start = {
      x: maxX,
      y: maxY
    };
    end = {
      x: minX,
      y: minY
    };
  } else {
    start = {
      x: minX,
      y: maxY
    };
    end = {
      x: maxX,
      y: minY
    };
  }

  var tanTheta = Math.tan(angle);
  var tanTheta2 = tanTheta * tanTheta;
  var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
  var y = tanTheta * (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.y;
  var gradient = context.createLinearGradient(start.x, start.y, x, y);

  _addStop(steps, gradient);

  return gradient;
} // the string format: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff'


function _parseRadialGradient(color, shape, context) {
  var arr = color.split(' ');
  var circleCfg = arr[0].slice(2, arr[0].length - 1);
  circleCfg = circleCfg.split(',');
  var fx = parseFloat(circleCfg[0]);
  var fy = parseFloat(circleCfg[1]);
  var fr = parseFloat(circleCfg[2]);
  var steps = arr.slice(1); // if radius is 0, no gradient, stroke with the last color

  if (fr === 0) {
    var _color = steps[steps.length - 1];
    return _color.split(':')[1];
  }

  var _shape$getBBox2 = shape.getBBox(),
      width = _shape$getBBox2.width,
      height = _shape$getBBox2.height,
      minX = _shape$getBBox2.minX,
      minY = _shape$getBBox2.minY;

  var r = Math.sqrt(width * width + height * height) / 2;
  var gradient = context.createRadialGradient(minX + width * fx, minY + height * fy, fr * r, minX + width / 2, minY + height / 2, r);

  _addStop(steps, gradient);

  return gradient;
}

module.exports = {
  parseStyle: function parseStyle(color, shape, context) {
    if (color[1] === '(') {
      try {
        var firstCode = color[0];

        if (firstCode === 'l') {
          return _parseLineGradient(color, shape, context);
        } else if (firstCode === 'r') {
          return _parseRadialGradient(color, shape, context);
        }
      } catch (ev) {
        console.error('error in parsing gradient string, please check if there are any extra whitespaces.');
        console.error(ev);
      }
    }

    return color;
  }
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Shape = __webpack_require__(10);

var Rect = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Rect, _Shape);

  var _super = _createSuper(Rect);

  function Rect() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Rect.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'rect';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      radius: 0,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height;
    context.beginPath();
    var radius = attrs.radius;

    if (!radius || !(width * height)) {
      context.rect(x, y, width, height);
    } else {
      radius = Util.parsePadding(radius);
      context.moveTo(x + radius[0], y);
      context.lineTo(x + width - radius[1], y);
      context.arc(x + width - radius[1], y + radius[1], radius[1], -Math.PI / 2, 0, false);
      context.lineTo(x + width, y + height - radius[2]);
      context.arc(x + width - radius[2], y + height - radius[2], radius[2], 0, Math.PI / 2, false);
      context.lineTo(x + radius[3], y + height);
      context.arc(x + radius[3], y + height - radius[3], radius[3], Math.PI / 2, Math.PI, false);
      context.lineTo(x, y + radius[0]);
      context.arc(x + radius[0], y + radius[0], radius[0], Math.PI, Math.PI * 3 / 2, false);
      context.closePath();
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height;
    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height
    };
  };

  return Rect;
}(Shape);

Shape.Rect = Rect;
module.exports = Rect;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var Circle = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Circle, _Shape);

  var _super = _createSuper(Circle);

  function Circle() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'circle';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r;
    return {
      minX: x - r,
      maxX: x + r,
      minY: y - r,
      maxY: y + r
    };
  };

  return Circle;
}(Shape);

Shape.Circle = Circle;
module.exports = Circle;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var bbox = __webpack_require__(21);

var Line = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Line, _Shape);

  var _super = _createSuper(Line);

  function Line() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Line.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canStroke = true;
    this._attrs.type = 'line';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      lineWidth: 1
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2,
        lineWidth = attrs.lineWidth;
    return bbox.getBBoxFromLine(x1, y1, x2, y2, lineWidth);
  };

  return Line;
}(Shape);

Shape.Line = Line;
module.exports = Line;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var bbox = __webpack_require__(21);

var Polygon = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Polygon, _Shape);

  var _super = _createSuper(Polygon);

  function Polygon() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polygon';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points;
    context.beginPath();

    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];

      if (i === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    }

    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points;
    return bbox.getBBoxFromPoints(points);
  };

  return Polygon;
}(Shape);

Shape.Polygon = Polygon;
module.exports = Polygon;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var Smooth = __webpack_require__(71);

var bbox = __webpack_require__(21); // filter the point which x or y is NaN


function _filterPoints(points) {
  var filteredPoints = [];

  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];

    if (!isNaN(point.x) && !isNaN(point.y)) {
      filteredPoints.push(point);
    }
  }

  return filteredPoints;
}

var Polyline = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Polyline, _Shape);

  var _super = _createSuper(Polyline);

  function Polyline() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polyline';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 1,
      smooth: false
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth;

    var filteredPoints = _filterPoints(points);

    context.beginPath();

    if (filteredPoints.length) {
      context.moveTo(filteredPoints[0].x, filteredPoints[0].y);

      if (smooth) {
        var constaint = [[0, 0], [1, 1]];
        var sps = Smooth.smooth(filteredPoints, false, constaint);

        for (var i = 0, n = sps.length; i < n; i++) {
          var sp = sps[i];
          context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
        }
      } else {
        var _i;

        var l;

        for (_i = 1, l = filteredPoints.length - 1; _i < l; _i++) {
          context.lineTo(filteredPoints[_i].x, filteredPoints[_i].y);
        }

        context.lineTo(filteredPoints[l].x, filteredPoints[l].y);
      }
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth,
        lineWidth = attrs.lineWidth;

    var filteredPoints = _filterPoints(points);

    if (smooth) {
      var newPoints = [];
      var constaint = [[0, 0], [1, 1]];
      var sps = Smooth.smooth(filteredPoints, false, constaint);

      for (var i = 0, n = sps.length; i < n; i++) {
        var sp = sps[i];

        if (i === 0) {
          newPoints.push([filteredPoints[0].x, filteredPoints[0].y, sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        } else {
          var lastPoint = sps[i - 1];
          newPoints.push([lastPoint[5], lastPoint[6], sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        }
      }

      return bbox.getBBoxFromBezierGroup(newPoints, lineWidth);
    }

    return bbox.getBBoxFromPoints(filteredPoints, lineWidth);
  };

  return Polyline;
}(Shape);

Shape.Polyline = Polyline;
module.exports = Polyline;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var bbox = __webpack_require__(21);

var Arc = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Arc, _Shape);

  var _super = _createSuper(Arc);

  function Arc() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Arc.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canStroke = true;
    this._attrs.canFill = true;
    this._attrs.type = 'arc';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: false,
      lineWidth: 1
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    context.beginPath();

    if (startAngle !== endAngle) {
      context.arc(x, y, r, startAngle, endAngle, anticlockwise);
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    return bbox.getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
  };

  return Arc;
}(Shape);

Shape.Arc = Arc;
module.exports = Arc;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var bbox = __webpack_require__(21);

var Sector = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Sector, _Shape);

  var _super = _createSuper(Sector);

  function Sector() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Sector.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'sector';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0,
      r: 0,
      r0: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: false
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        r = attrs.r,
        r0 = attrs.r0,
        anticlockwise = attrs.anticlockwise;
    context.beginPath();
    var unitX = Math.cos(startAngle);
    var unitY = Math.sin(startAngle);
    context.moveTo(unitX * r0 + x, unitY * r0 + y);
    context.lineTo(unitX * r + x, unitY * r + y); // 当扇形的角度非常小的时候，就不进行弧线的绘制；或者整个只有1个扇形时，会出现end<0的情况不绘制

    if (Math.abs(endAngle - startAngle) > 0.0001 || startAngle === 0 && endAngle < 0) {
      context.arc(x, y, r, startAngle, endAngle, anticlockwise);
      context.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);

      if (r0 !== 0) {
        context.arc(x, y, r0, endAngle, startAngle, !anticlockwise);
      }
    }

    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        r0 = attrs.r0,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    var outerBBox = bbox.getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
    var innerBBox = bbox.getBBoxFromArc(x, y, r0, startAngle, endAngle, anticlockwise);
    return {
      minX: Math.min(outerBBox.minX, innerBBox.minX),
      minY: Math.min(outerBBox.minY, innerBBox.minY),
      maxX: Math.max(outerBBox.maxX, innerBBox.maxX),
      maxY: Math.max(outerBBox.maxY, innerBBox.maxY)
    };
  };

  return Sector;
}(Shape);

Shape.Sector = Sector;
module.exports = Sector;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Shape = __webpack_require__(10);

var RectUtil = __webpack_require__(188);

var textWidthCacheCounter = 0;
var textWidthCache = {};
var TEXT_CACHE_MAX = 5000;

var Text = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Text, _Shape);

  var _super = _createSuper(Text);

  function Text() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'text';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      lineWidth: 0,
      lineCount: 1,
      fontSize: 12,
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textAlign: 'start',
      textBaseline: 'bottom',
      lineHeight: null,
      textArr: null
    };
  };

  _proto._getFontStyle = function _getFontStyle() {
    var attrs = this._attrs.attrs;
    var fontSize = attrs.fontSize,
        fontFamily = attrs.fontFamily,
        fontWeight = attrs.fontWeight,
        fontStyle = attrs.fontStyle,
        fontVariant = attrs.fontVariant;
    return fontStyle + " " + fontVariant + " " + fontWeight + " " + fontSize + "px " + fontFamily;
  };

  _proto._afterAttrsSet = function _afterAttrsSet() {
    var attrs = this._attrs.attrs;
    attrs.font = this._getFontStyle();

    if (attrs.text) {
      var text = attrs.text;
      var textArr = null;
      var lineCount = 1;

      if (Util.isString(text) && text.indexOf('\n') !== -1) {
        textArr = text.split('\n');
        lineCount = textArr.length;
      }

      attrs.lineCount = lineCount;
      attrs.textArr = textArr;
    }

    this.set('attrs', attrs);
  };

  _proto._getTextHeight = function _getTextHeight() {
    var attrs = this._attrs.attrs;

    if (attrs.height) {
      return attrs.height;
    }

    var lineCount = attrs.lineCount;
    var fontSize = attrs.fontSize * 1;

    if (lineCount > 1) {
      var spaceingY = this._getSpaceingY();

      return fontSize * lineCount + spaceingY * (lineCount - 1);
    }

    return fontSize;
  };

  _proto._getSpaceingY = function _getSpaceingY() {
    var attrs = this._attrs.attrs;
    var lineHeight = attrs.lineHeight;
    var fontSize = attrs.fontSize * 1;
    return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
  };

  _proto.drawInner = function drawInner(context) {
    var self = this;
    var attrs = self._attrs.attrs;
    var text = attrs.text;
    var x = attrs.x;
    var y = attrs.y;

    if (Util.isNil(text) || isNaN(x) || isNaN(y)) {
      // text will be 0
      return;
    }

    var textArr = attrs.textArr;
    var fontSize = attrs.fontSize * 1;

    var spaceingY = self._getSpaceingY();

    if (attrs.rotate) {
      // do rotation
      context.translate(x, y);
      context.rotate(attrs.rotate);
      x = 0;
      y = 0;
    }

    var textBaseline = attrs.textBaseline;
    var height;

    if (textArr) {
      height = self._getTextHeight();
    }

    var subY; // context.beginPath();

    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;

      if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
      }

      if (textArr) {
        for (var i = 0, len = textArr.length; i < len; i++) {
          var subText = textArr[i];
          subY = y + i * (spaceingY + fontSize) - height + fontSize; // bottom;

          if (textBaseline === 'middle') {
            subY += height - fontSize - (height - fontSize) / 2;
          }

          if (textBaseline === 'top') {
            subY += height - fontSize;
          }

          context.fillText(subText, x, subY);
        }
      } else {
        context.fillText(text, x, y);
      }
    }

    if (self.hasStroke()) {
      if (textArr) {
        for (var _i = 0, _len = textArr.length; _i < _len; _i++) {
          var _subText = textArr[_i];
          subY = y + _i * (spaceingY + fontSize) - height + fontSize; // bottom;

          if (textBaseline === 'middle') {
            subY += height - fontSize - (height - fontSize) / 2;
          }

          if (textBaseline === 'top') {
            subY += height - fontSize;
          }

          context.strokeText(_subText, x, subY);
        }
      } else {
        context.strokeText(text, x, y);
      }
    }
  };

  _proto.calculateBox = function calculateBox() {
    var self = this;
    var attrs = self._attrs.attrs;
    var x = attrs.x,
        y = attrs.y,
        textAlign = attrs.textAlign,
        textBaseline = attrs.textBaseline;

    var width = self._getTextWidth(); // attrs.width


    if (!width) {
      return {
        minX: x,
        minY: y,
        maxX: x,
        maxY: y
      };
    }

    var height = self._getTextHeight(); // attrs.height


    if (attrs.rotate) {
      var rotatedBox = RectUtil.calcRotatedBox({
        width: width,
        height: height,
        rotate: attrs.rotate
      });
      width = rotatedBox.width;
      height = rotatedBox.height;
    }

    var point = {
      x: x,
      y: y - height
    }; // default textAlign: start, textBaseline: bottom

    if (textAlign) {
      if (textAlign === 'end' || textAlign === 'right') {
        point.x -= width;
      } else if (textAlign === 'center') {
        point.x -= width / 2;
      }
    }

    if (textBaseline) {
      if (textBaseline === 'top') {
        point.y += height;
      } else if (textBaseline === 'middle') {
        point.y += height / 2;
      }
    }

    return {
      minX: point.x,
      minY: point.y,
      maxX: point.x + width,
      maxY: point.y + height
    };
  };

  _proto._getTextWidth = function _getTextWidth() {
    var attrs = this._attrs.attrs;

    if (attrs.width) {
      return attrs.width;
    }

    var text = attrs.text;
    var context = this.get('context');
    if (Util.isNil(text)) return undefined;
    var font = attrs.font;
    var textArr = attrs.textArr;
    var key = text + '' + font;

    if (textWidthCache[key]) {
      return textWidthCache[key];
    }

    var width = 0;

    if (textArr) {
      for (var i = 0, length = textArr.length; i < length; i++) {
        var subText = textArr[i];
        width = Math.max(width, Util.measureText(subText, font, context).width);
      }
    } else {
      width = Util.measureText(text, font, context).width;
    }

    if (textWidthCacheCounter > TEXT_CACHE_MAX) {
      textWidthCacheCounter = 0;
      textWidthCache = {};
    }

    textWidthCacheCounter++;
    textWidthCache[key] = width;
    return width;
  };

  return Text;
}(Shape);

Shape.Text = Text;
module.exports = Text;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Rect = {
  calcRotatedBox: function calcRotatedBox(_ref) {
    var width = _ref.width,
        height = _ref.height,
        rotate = _ref.rotate;
    var absRotate = Math.abs(rotate);
    return {
      width: Math.abs(width * Math.cos(absRotate) + height * Math.sin(absRotate)),
      height: Math.abs(height * Math.cos(absRotate) + width * Math.sin(absRotate))
    };
  }
};
module.exports = Rect;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Shape = __webpack_require__(10);

var Custom = /*#__PURE__*/function (_Shape) {
  (0, _inheritsLoose2["default"])(Custom, _Shape);

  var _super = _createSuper(Custom);

  function Custom() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Custom.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.createPath = null;
    this._attrs.type = 'custom';
  };

  _proto.createPath = function createPath(context) {
    var createPath = this.get('createPath');
    createPath && createPath.call(this, context);
  };

  _proto.calculateBox = function calculateBox() {
    var calculateBox = this.get('calculateBox');
    return calculateBox && calculateBox.call(this);
  };

  return Custom;
}(Shape);

Shape.Custom = Custom;
module.exports = Custom;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Path = __webpack_require__(72);

var Geom = __webpack_require__(17);

__webpack_require__(68);

var Line = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2["default"])(Line, _Path);

  var _super = _createSuper(Line);

  function Line() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Line.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Path.prototype.getDefaultCfg.call(this);

    cfg.type = 'line';
    cfg.sortable = true;
    return cfg;
  };

  return Line;
}(Path);

Geom.Line = Line;
module.exports = Line;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Geom = __webpack_require__(17);

var Util = __webpack_require__(0);

var SizeMixin = __webpack_require__(73);

__webpack_require__(192);

var Interval = /*#__PURE__*/function (_Geom) {
  (0, _inheritsLoose2["default"])(Interval, _Geom);

  var _super = _createSuper(Interval);

  var _proto = Interval.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);

    cfg.type = 'interval';
    cfg.shapeType = 'interval';
    cfg.generatePoints = true;
    return cfg;
  };

  function Interval(cfg) {
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

  return Interval;
}(Geom);

Geom.Interval = Interval;
module.exports = Interval;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Shape = __webpack_require__(19);

var Vector2 = __webpack_require__(13);

var Global = __webpack_require__(6);

function getRectPoints(cfg) {
  var x = cfg.x,
      y = cfg.y,
      y0 = cfg.y0,
      size = cfg.size;
  var ymin = y0;
  var ymax = y;

  if (Util.isArray(y)) {
    ymax = y[1];
    ymin = y[0];
  }

  var xmin;
  var xmax;

  if (Util.isArray(x)) {
    xmin = x[0];
    xmax = x[1];
  } else {
    xmin = x - size / 2;
    xmax = x + size / 2;
  }

  return [{
    x: xmin,
    y: ymin
  }, {
    x: xmin,
    y: ymax
  }, {
    x: xmax,
    y: ymax
  }, {
    x: xmax,
    y: ymin
  }];
}

function getRectRange(points) {
  var xValues = [];
  var yValues = [];

  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    xValues.push(point.x);
    yValues.push(point.y);
  }

  var xMin = Math.min.apply(null, xValues);
  var yMin = Math.min.apply(null, yValues);
  var xMax = Math.max.apply(null, xValues);
  var yMax = Math.max.apply(null, yValues);
  return {
    x: xMin,
    y: yMin,
    width: xMax - xMin,
    height: yMax - yMin
  };
}

function getMiddlePoint(a, b) {
  var x = (a.x - b.x) / 2 + b.x;
  var y = (a.y - b.y) / 2 + b.y;
  return {
    x: x,
    y: y
  };
}

var Interval = Shape.registerFactory('interval', {
  defaultShapeType: 'rect',
  getDefaultPoints: function getDefaultPoints(cfg) {
    return getRectPoints(cfg);
  }
});
Shape.registerShape('interval', 'rect', {
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      fill: cfg.color
    }, Global.shape.interval, cfg.style);

    if (cfg.isInCircle) {
      var newPoints = points.slice(0);

      if (this._coord.transposed) {
        newPoints = [points[0], points[3], points[2], points[1]];
      }

      var _cfg$center = cfg.center,
          x = _cfg$center.x,
          y = _cfg$center.y;
      var v = [1, 0];
      var v0 = [newPoints[0].x - x, newPoints[0].y - y];
      var v1 = [newPoints[1].x - x, newPoints[1].y - y];
      var v2 = [newPoints[2].x - x, newPoints[2].y - y];
      var startAngle = Vector2.angleTo(v, v1);
      var endAngle = Vector2.angleTo(v, v2);
      var r0 = Vector2.length(v0);
      var r = Vector2.length(v1);

      if (startAngle >= 1.5 * Math.PI) {
        startAngle = startAngle - 2 * Math.PI;
      }

      if (endAngle >= 1.5 * Math.PI) {
        endAngle = endAngle - 2 * Math.PI;
      }

      return container.addShape('Sector', {
        className: 'interval',
        attrs: Util.mix({
          x: x,
          y: y,
          r: r,
          r0: r0,
          startAngle: startAngle,
          endAngle: endAngle
        }, style)
      });
    }

    var rectCfg = getRectRange(points);
    return container.addShape('rect', {
      className: 'interval',
      attrs: Util.mix(rectCfg, style)
    });
  }
}); // 金字塔 和 漏斗图

['pyramid', 'funnel'].forEach(function (shapeType) {
  Shape.registerShape('interval', shapeType, {
    getPoints: function getPoints(cfg) {
      cfg.size = cfg.size * 2; // 漏斗图的 size 是柱状图的两倍

      return getRectPoints(cfg);
    },
    draw: function draw(cfg, container) {
      var points = this.parsePoints(cfg.points);
      var nextPoints = this.parsePoints(cfg.nextPoints);
      var polygonPoints = null;

      if (nextPoints) {
        polygonPoints = [points[0], points[1], nextPoints[1], nextPoints[0]];
      } else {
        polygonPoints = [points[0], points[1]]; // pyramid 顶部是三角形，所以取中心点就好了，funnel顶部是长方形

        if (shapeType === 'pyramid') {
          polygonPoints.push(getMiddlePoint(points[2], points[3]));
        } else {
          polygonPoints.push(points[2], points[3]);
        }
      }

      var attrs = Util.mix({
        fill: cfg.color,
        points: polygonPoints
      }, Global.shape.interval, cfg.style);
      return container.addShape('polygon', {
        className: 'interval',
        attrs: attrs
      });
    }
  });
});
module.exports = Interval;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Stack: __webpack_require__(194),
  Dodge: __webpack_require__(196),
  Symmetric: __webpack_require__(198)
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(195);

module.exports = Stack;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var isArray = __webpack_require__(34);

var isNil = __webpack_require__(35);

var Adjust = __webpack_require__(33);

var Stack = /*#__PURE__*/function (_Adjust) {
  _inheritsLoose(Stack, _Adjust);

  function Stack() {
    return _Adjust.apply(this, arguments) || this;
  }

  var _proto = Stack.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.xField = null; // 调整对应的 x 方向对应的字段名称

    this.yField = null; // 调整对应的 y 方向对应的字段名称
  };

  _proto.processAdjust = function processAdjust(dataArray) {
    this.processStack(dataArray);
  };

  _proto.processStack = function processStack(dataArray) {
    var self = this;
    var xField = self.xField;
    var yField = self.yField;
    var count = dataArray.length;
    var stackCache = {
      positive: {},
      negative: {}
    }; // 层叠顺序翻转

    if (self.reverseOrder) {
      dataArray = dataArray.slice(0).reverse();
    }

    for (var i = 0; i < count; i++) {
      var data = dataArray[i];

      for (var j = 0, len = data.length; j < len; j++) {
        var item = data[j];
        var x = item[xField] || 0;
        var y = item[yField];
        var xkey = x.toString();
        y = isArray(y) ? y[1] : y;

        if (!isNil(y)) {
          var direction = y >= 0 ? 'positive' : 'negative';

          if (!stackCache[direction][xkey]) {
            stackCache[direction][xkey] = 0;
          }

          item[yField] = [stackCache[direction][xkey], y + stackCache[direction][xkey]];
          stackCache[direction][xkey] += y;
        }
      }
    }
  };

  return Stack;
}(Adjust);

Adjust.Stack = Stack;
module.exports = Stack;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Dodge = __webpack_require__(197);

module.exports = Dodge;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Adjust = __webpack_require__(33);

var each = __webpack_require__(15);

var MARGIN_RATIO = 1 / 2;
var DODGE_RATIO = 1 / 2;

var Dodge = /*#__PURE__*/function (_Adjust) {
  _inheritsLoose(Dodge, _Adjust);

  function Dodge() {
    return _Adjust.apply(this, arguments) || this;
  }

  var _proto = Dodge.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    /**
     * 调整过程中,2个数据的间距
     * @type {Number}
     */
    this.marginRatio = MARGIN_RATIO;
    /**
     * 调整占单位宽度的比例,例如：占2个分类间距的 1/2
     * @type {Number}
     */

    this.dodgeRatio = DODGE_RATIO;
    this.adjustNames = ['x', 'y']; // 调整的维度，默认,x,y都做调整
  };

  _proto.getDodgeOffset = function getDodgeOffset(range, index, count) {
    var self = this;
    var pre = range.pre;
    var next = range.next;
    var tickLength = next - pre;
    var width = tickLength * self.dodgeRatio / count;
    var margin = self.marginRatio * width;
    var offset = 1 / 2 * (tickLength - count * width - (count - 1) * margin) + ((index + 1) * width + index * margin) - 1 / 2 * width - 1 / 2 * tickLength;
    return (pre + next) / 2 + offset;
  };

  _proto.processAdjust = function processAdjust(dataArray) {
    var self = this;
    var count = dataArray.length;
    var xField = self.xField;
    each(dataArray, function (data, index) {
      for (var i = 0, len = data.length; i < len; i++) {
        var obj = data[i];
        var value = obj[xField];
        var range = {
          pre: len === 1 ? value - 1 : value - 0.5,
          next: len === 1 ? value + 1 : value + 0.5
        };
        var dodgeValue = self.getDodgeOffset(range, index, count);
        obj[xField] = dodgeValue;
      }
    });
  };

  return Dodge;
}(Adjust);

Adjust.Dodge = Dodge;
module.exports = Dodge;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Symmetric = __webpack_require__(199);

module.exports = Symmetric;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var each = __webpack_require__(15);

var maxBy = __webpack_require__(200);

var isArray = __webpack_require__(34);

var ArrayUtil = {
  merge: __webpack_require__(202)
};

var Adjust = __webpack_require__(33);

var Symmetric = /*#__PURE__*/function (_Adjust) {
  _inheritsLoose(Symmetric, _Adjust);

  function Symmetric() {
    return _Adjust.apply(this, arguments) || this;
  }

  var _proto = Symmetric.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.xField = null; // 调整对应的 x 方向对应的字段名称

    this.yField = null; // 调整对应的 y 方向对应的字段名称

    this.cacheMax = null; // 缓存的最大值

    this.adjustNames = ['y']; // Only support stack y

    this.groupFields = null; // 参与分组的数据维度
  }; // 获取最大的y值


  _proto._getMax = function _getMax(dim) {
    var self = this;
    var mergeData = self.mergeData;
    var maxRecord = maxBy(mergeData, function (obj) {
      var value = obj[dim];

      if (isArray(value)) {
        return Math.max.apply(null, value);
      }

      return value;
    });
    var maxValue = maxRecord[dim];
    var max = isArray(maxValue) ? Math.max.apply(null, maxValue) : maxValue;
    return max;
  }; // 获取每个字段最大的值


  _proto._getXValuesMax = function _getXValuesMax() {
    var self = this;
    var yField = self.yField;
    var xField = self.xField;
    var cache = {};
    var mergeData = self.mergeData;
    each(mergeData, function (obj) {
      var xValue = obj[xField];
      var yValue = obj[yField];
      var max = isArray(yValue) ? Math.max.apply(null, yValue) : yValue;
      cache[xValue] = cache[xValue] || 0;

      if (cache[xValue] < max) {
        cache[xValue] = max;
      }
    });
    return cache;
  }; // 入口函数


  _proto.processAdjust = function processAdjust(dataArray) {
    var self = this;
    var mergeData = ArrayUtil.merge(dataArray);
    self.mergeData = mergeData;

    self._processSymmetric(dataArray);

    self.mergeData = null;
  }; // 处理对称


  _proto._processSymmetric = function _processSymmetric(dataArray) {
    var self = this;
    var xField = self.xField;
    var yField = self.yField;

    var max = self._getMax(yField);

    var first = dataArray[0][0];
    var cache;

    if (first && isArray(first[yField])) {
      cache = self._getXValuesMax();
    }

    each(dataArray, function (data) {
      each(data, function (obj) {
        var value = obj[yField];
        var offset;

        if (isArray(value)) {
          var xValue = obj[xField];
          var valueMax = cache[xValue];
          offset = (max - valueMax) / 2;
          var tmp = [];
          /* eslint-disable no-loop-func */

          each(value, function (subVal) {
            // 多个字段
            tmp.push(offset + subVal);
          });
          /* eslint-enable no-loop-func */

          obj[yField] = tmp;
        } else {
          offset = (max - value) / 2;
          obj[yField] = [offset, value + offset];
        }
      });
    });
  };

  return Symmetric;
}(Adjust);

Adjust.Symmetric = Symmetric;
module.exports = Symmetric;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(34);

var isFunction = __webpack_require__(201);

var each = __webpack_require__(15);
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */


var maxBy = function maxBy(arr, fn) {
  if (!isArray(arr)) {
    return undefined;
  }

  var max = arr[0];
  var maxData = void 0;

  if (isFunction(fn)) {
    maxData = fn(arr[0]);
  } else {
    maxData = arr[0][fn];
  }

  var data = void 0;
  each(arr, function (val) {
    if (isFunction(fn)) {
      data = fn(val);
    } else {
      data = val[fn];
    }

    if (data > maxData) {
      max = val;
      maxData = data;
    }
  });
  return max;
};

module.exports = maxBy;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */
var isType = __webpack_require__(27);

var isFunction = function isFunction(value) {
  return isType(value, 'Function');
};

module.exports = isFunction;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

var merge = function merge(dataArray) {
  var rst = [];

  for (var i = 0; i < dataArray.length; i++) {
    rst = rst.concat(dataArray[i]);
  }

  return rst;
};

module.exports = merge;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Base = __webpack_require__(43);

var Vector2 = __webpack_require__(13);

var Matrix = __webpack_require__(31);

var Polar = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Polar, _Base);

  var _super = _createSuper(Polar);

  function Polar() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Polar.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'polar';
    this.startAngle = -Math.PI / 2;
    this.endAngle = Math.PI * 3 / 2;
    this.inner = 0;
    this.innerRadius = 0; // alias

    this.isPolar = true;
    this.transposed = false;
    this.center = null;
    this.radius = null; // relative, 0 ~ 1
  };

  _proto.init = function init(start, end) {
    _Base.prototype.init.call(this, start, end);

    var self = this;
    var inner = self.inner || self.innerRadius;
    var width = Math.abs(end.x - start.x);
    var height = Math.abs(end.y - start.y);
    var maxRadius;
    var center;

    if (self.startAngle === -Math.PI && self.endAngle === 0) {
      maxRadius = Math.min(width / 2, height);
      center = {
        x: (start.x + end.x) / 2,
        y: start.y
      };
    } else {
      maxRadius = Math.min(width, height) / 2;
      center = {
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2
      };
    }

    var radius = self.radius;

    if (radius > 0 && radius <= 1) {
      maxRadius = maxRadius * radius;
    }

    this.x = {
      start: self.startAngle,
      end: self.endAngle
    };
    this.y = {
      start: maxRadius * inner,
      end: maxRadius
    };
    this.center = center;
    this.circleRadius = maxRadius; // the radius value in px
  };

  _proto._convertPoint = function _convertPoint(point) {
    var self = this;
    var center = self.center;
    var transposed = self.transposed;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';
    var x = self.x;
    var y = self.y;
    var angle = x.start + (x.end - x.start) * point[xDim];
    var radius = y.start + (y.end - y.start) * point[yDim];
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  };

  _proto._invertPoint = function _invertPoint(point) {
    var self = this;
    var center = self.center,
        transposed = self.transposed,
        x = self.x,
        y = self.y;
    var xDim = transposed ? 'y' : 'x';
    var yDim = transposed ? 'x' : 'y';
    var m = [1, 0, 0, 1, 0, 0];
    Matrix.rotate(m, m, x.start);
    var startV = [1, 0];
    Vector2.transformMat2d(startV, startV, m);
    startV = [startV[0], startV[1]];
    var pointV = [point.x - center.x, point.y - center.y];

    if (Vector2.zero(pointV)) {
      return {
        x: 0,
        y: 0
      };
    }

    var theta = Vector2.angleTo(startV, pointV, x.end < x.start);

    if (Math.abs(theta - Math.PI * 2) < 0.001) {
      theta = 0;
    }

    var l = Vector2.length(pointV);
    var percentX = theta / (x.end - x.start);
    percentX = x.end - x.start > 0 ? percentX : -percentX;
    var percentY = (l - y.start) / (y.end - y.start);
    var rst = {};
    rst[xDim] = percentX;
    rst[yDim] = percentY;
    return rst;
  };

  return Polar;
}(Base);

Base.Polar = Polar;
module.exports = Polar;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview 提取公共代码到util方法
 * @author dxq613@gmail.com
 */
var isString = __webpack_require__(48);

var isDate = __webpack_require__(222);

module.exports = {
  toTimeStamp: function toTimeStamp(value) {
    if (isString(value)) {
      if (value.indexOf('T') > 0) {
        value = new Date(value).getTime();
      } else {
        value = new Date(value.replace(/-/ig, '/')).getTime();
      }
    }

    if (isDate(value)) {
      value = value.getTime();
    }

    return value;
  }
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var _require = __webpack_require__(16),
    Group = _require.Group;

var Marker = __webpack_require__(76);

var MARKER_RADIUS = 3;

var List = /*#__PURE__*/function () {
  var _proto = List.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      showTitle: false,

      /**
       * title string
       * @type {?String}
       */
      title: null,

      /**
       * items array
       * @type {?Array}
       */
      items: null,

      /**
       * offset between title and items
       * @type {Number}
       */
      titleGap: 12,

      /**
       * offset between each item
       * @type {Number}
       */
      itemGap: 10,

      /**
       * the offset between each item in vertical direaction
       * @type {Number}
       */
      itemMarginBottom: 12,

      /**
       * the formatter for item text
       * @type {[type]}
       */
      itemFormatter: null,
      itemWidth: null,

      /**
       * offset between marker and text
       * @type {Number}
       */
      wordSpace: 6,
      x: 0,
      y: 0,
      layout: 'horizontal',

      /**
       * the join string of `name` and `value`
       * @type {String}
       */
      joinString: ': '
    };
  };

  function List(cfg) {
    Util.deepMix(this, this.getDefaultCfg(), cfg);

    this._init();

    this._renderTitle();

    this._renderItems();
  }

  _proto._init = function _init() {
    var container = new Group({
      zIndex: this.zIndex || 0
    });
    this.container = container;
    var wrapper = container.addGroup();
    this.wrapper = wrapper;
    var itemsGroup = wrapper.addGroup({
      className: 'itemsGroup'
    });
    this.itemsGroup = itemsGroup;

    if (this.parent) {
      this.parent.add(container);
    }
  };

  _proto._renderTitle = function _renderTitle(title) {
    title = title || this.title;
    var titleShape = this.titleShape;
    var titleHeight = 0;

    if (this.showTitle && title) {
      if (titleShape && !titleShape.get('destroyed')) {
        titleShape.attr('text', title);
      } else {
        var wrapper = this.wrapper,
            titleStyle = this.titleStyle;
        titleShape = wrapper.addShape('text', {
          className: 'title',
          attrs: Util.mix({
            x: 0,
            y: 0,
            text: title
          }, titleStyle)
        });
        this.titleShape = titleShape;
      }

      titleHeight = titleShape.getBBox().height + this.titleGap;
    }

    this._titleHeight = titleHeight;
  };

  _proto._renderItems = function _renderItems(items) {
    var self = this;
    items = items || self.items;

    if (!items) {
      return;
    }

    if (self.reversed) {
      items.reverse();
    }

    Util.each(items, function (item, index) {
      self._addItem(item, index);
    });

    if (items.length > 1) {
      this._adjustItems();
    }

    this._renderBackground();
  };

  _proto._renderBackground = function _renderBackground() {
    var background = this.background;

    if (background) {
      var container = this.container;
      var wrapper = this.wrapper;

      var _wrapper$getBBox = wrapper.getBBox(),
          minX = _wrapper$getBBox.minX,
          minY = _wrapper$getBBox.minY,
          width = _wrapper$getBBox.width,
          height = _wrapper$getBBox.height;

      var padding = background.padding || [0, 0, 0, 0];
      padding = Util.parsePadding(padding);
      var attrs = Util.mix({
        x: minX - padding[3],
        y: minY - padding[0],
        width: width + padding[1] + padding[3],
        height: height + padding[0] + padding[2]
      }, background);
      var backShape = this.backShape;

      if (backShape) {
        backShape.attr(attrs);
      } else {
        backShape = container.addShape('Rect', {
          zIndex: -1,
          attrs: attrs
        });
      }

      this.backShape = backShape;
      container.sort();
    }
  };

  _proto._addItem = function _addItem(item) {
    var itemsGroup = this.itemsGroup;
    var itemGroup = itemsGroup.addGroup({
      name: item.name,
      value: item.value,
      dataValue: item.dataValue,
      checked: item.checked
    });
    var unCheckStyle = this.unCheckStyle,
        unCheckColor = this.unCheckColor,
        nameStyle = this.nameStyle,
        valueStyle = this.valueStyle,
        wordSpace = this.wordSpace;
    var marker = item.marker,
        value = item.value;
    var startX = 0;

    if (unCheckColor) {
      unCheckStyle.fill = unCheckColor;
    }

    if (marker) {
      var radius = marker.radius || MARKER_RADIUS;
      var markerAttrs = Util.mix({
        x: radius,
        y: this._titleHeight
      }, marker);

      if (item.checked === false) {
        Util.mix(markerAttrs, unCheckStyle);
      }

      var markerShape = new Marker({
        className: 'item-marker',
        attrs: markerAttrs
      });
      itemGroup.add(markerShape);
      startX += markerShape.getBBox().width + wordSpace;
    }

    var nameText;
    var name = item.name;

    if (name) {
      var joinString = this.joinString || '';
      name = value ? name + joinString : name;
      nameText = itemGroup.addShape('text', {
        className: 'name',
        attrs: Util.mix({
          x: startX,
          y: this._titleHeight,
          text: this._formatItemValue(name)
        }, nameStyle, item.checked === false ? unCheckStyle : null)
      });
    }

    if (value) {
      var valueX = startX;

      if (nameText) {
        valueX += nameText.getBBox().width;
      }

      itemGroup.addShape('text', {
        className: 'value',
        attrs: Util.mix({
          x: valueX,
          y: this._titleHeight,
          text: value
        }, valueStyle, item.checked === false ? unCheckStyle : null)
      });
    }

    return itemGroup;
  };

  _proto._formatItemValue = function _formatItemValue(value) {
    var formatter = this.itemFormatter;

    if (formatter) {
      value = formatter.call(this, value);
    }

    return value;
  };

  _proto._getMaxItemWidth = function _getMaxItemWidth() {
    var width;
    var itemWidth = this.itemWidth;

    if (Util.isNumber(itemWidth) || Util.isNil(itemWidth)) {
      return itemWidth;
    }

    if (itemWidth === 'auto') {
      var itemsGroup = this.itemsGroup;
      var children = itemsGroup.get('children');
      var count = children.length;
      var maxItemWidth = 0;

      for (var i = 0; i < count; i++) {
        var _children$i$getBBox = children[i].getBBox(),
            _width = _children$i$getBBox.width;

        maxItemWidth = Math.max(maxItemWidth, _width);
      }

      var maxLength = this.maxLength;
      var itemGap = this.itemGap;
      var twoAvgWidth = (maxLength - itemGap) / 2;
      var threeAvgWidth = (maxLength - itemGap * 2) / 3;

      if (count === 2) {
        width = Math.max(maxItemWidth, twoAvgWidth);
      } else {
        // 1. max <= 3Avg, 3Avg
        // 2. 3Avg < max && max < 2avg, 2avg
        // 3. max > 2avg, max, one column
        if (maxItemWidth <= threeAvgWidth) {
          width = threeAvgWidth;
        } else if (maxItemWidth <= twoAvgWidth) {
          width = twoAvgWidth;
        } else {
          width = maxItemWidth;
        }
      }

      return width;
    }
  };

  _proto._adjustHorizontal = function _adjustHorizontal() {
    var maxLength = this.maxLength,
        itemsGroup = this.itemsGroup;
    var children = itemsGroup.get('children');
    var itemGap = this.itemGap,
        itemMarginBottom = this.itemMarginBottom;
    var titleHeight = this._titleHeight;
    var row = 0;
    var rowWidth = 0;
    var width;
    var height;

    var itemWidth = this._getMaxItemWidth();

    var legendHitBoxes = [];

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      var box = child.getBBox();
      var childHeight = box.height;
      var childWidth = box.width;
      width = itemWidth || childWidth;
      height = childHeight + itemMarginBottom;

      if (width - (maxLength - rowWidth) > 0.0001) {
        row++;
        rowWidth = 0;
      }

      child.moveTo(rowWidth, row * height);
      legendHitBoxes.push({
        x: rowWidth,
        y: row * height + titleHeight - childHeight / 2,
        width: childWidth * 1.375,
        height: childHeight * 1.375
      });
      rowWidth += width + itemGap;
    }

    this.legendHitBoxes = legendHitBoxes;
    return;
  };

  _proto._adjustVertical = function _adjustVertical() {
    var maxLength = this.maxLength,
        itemsGroup = this.itemsGroup;
    var itemGap = this.itemGap,
        itemMarginBottom = this.itemMarginBottom,
        itemWidth = this.itemWidth;
    var titleHeight = this._titleHeight;
    var children = itemsGroup.get('children');
    var colHeight = 0;
    var width;
    var height;
    var maxItemWidth = 0;
    var totalWidth = 0;
    var legendHitBoxes = [];

    for (var i = 0, length = children.length; i < length; i++) {
      var child = children[i];
      var bbox = child.getBBox();
      width = bbox.width;
      height = bbox.height;

      if (Util.isNumber(itemWidth)) {
        maxItemWidth = itemWidth + itemGap;
      } else if (width > maxItemWidth) {
        maxItemWidth = width + itemGap;
      }

      if (maxLength - colHeight < height) {
        colHeight = 0;
        totalWidth += maxItemWidth;
        child.moveTo(totalWidth, 0);
        legendHitBoxes.push({
          x: totalWidth,
          y: titleHeight - height / 2,
          width: width * 1.375,
          height: height * 1.375
        });
      } else {
        child.moveTo(totalWidth, colHeight);
        legendHitBoxes.push({
          x: totalWidth,
          y: colHeight - height / 2 + titleHeight,
          width: width * 1.375,
          height: height * 1.375
        });
      }

      colHeight += height + itemMarginBottom;
    }

    this.legendHitBoxes = legendHitBoxes;
    return;
  };

  _proto._adjustItems = function _adjustItems() {
    var layout = this.layout;

    if (layout === 'horizontal') {
      this._adjustHorizontal();
    } else {
      this._adjustVertical();
    }
  };

  _proto.moveTo = function moveTo(x, y) {
    this.x = x;
    this.y = y;
    var container = this.container;
    container && container.moveTo(x, y);
    return this;
  };

  _proto.setItems = function setItems(items) {
    this.clearItems();

    this._renderItems(items);
  };

  _proto.setTitle = function setTitle(title) {
    this._renderTitle(title);
  };

  _proto.clearItems = function clearItems() {
    var itemsGroup = this.itemsGroup;
    itemsGroup.clear();
  };

  _proto.getWidth = function getWidth() {
    var container = this.container;
    var bbox = container.getBBox();
    return bbox.width;
  };

  _proto.getHeight = function getHeight() {
    var container = this.container;
    var bbox = container.getBBox();
    return bbox.height;
  };

  _proto.show = function show() {
    var container = this.container;
    container.show();
  };

  _proto.hide = function hide() {
    var container = this.container;
    container.hide();
  };

  _proto.clear = function clear() {
    var container = this.container;
    container.clear();
    container.remove(true);
  };

  return List;
}();

module.exports = List;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Animate configuration and register
 * @author sima.zhang1990@gmail.com
 */
var Util = __webpack_require__(0);

var defaultAnimationCfg = {
  appear: {
    duration: 450,
    easing: 'quadraticOut'
  },
  // 'appear' animation options
  update: {
    duration: 300,
    easing: 'quadraticOut'
  },
  // 'update' animation options
  enter: {
    duration: 300,
    easing: 'quadraticOut'
  },
  // 'enter' animation options
  leave: {
    duration: 350,
    easing: 'quadraticIn'
  } // 'leave' animation options

};
var Animate = {
  defaultCfg: {},
  Action: {},
  getAnimation: function getAnimation(geomType, coord, animationType) {
    var geomAnimateCfg = this.defaultCfg[geomType];

    if (geomAnimateCfg) {
      var animation = geomAnimateCfg[animationType];

      if (Util.isFunction(animation)) {
        return animation(coord);
      }
    }

    return false;
  },
  getAnimateCfg: function getAnimateCfg(geomType, animationType) {
    var defaultCfg = defaultAnimationCfg[animationType];
    var geomConfig = this.defaultCfg[geomType];

    if (geomConfig && geomConfig.cfg && geomConfig.cfg[animationType]) {
      return Util.deepMix({}, defaultCfg, geomConfig.cfg[animationType]);
    }

    return defaultCfg;
  },
  registerAnimation: function registerAnimation(animationName, animationFun) {
    if (!this.Action) {
      this.Action = {};
    }

    this.Action[animationName] = animationFun;
  }
};
module.exports = Animate;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Utility
 * @author sima.zhang1990@gmail.com
 */
var _require = __webpack_require__(16),
    Matrix = _require.Matrix;

var Util = __webpack_require__(0);

var Helpers = {
  getCoordInfo: function getCoordInfo(coord) {
    var start = coord.start;
    var end = coord.end;
    return {
      start: start,
      end: end,
      width: end.x - start.x,
      height: Math.abs(end.y - start.y)
    };
  },
  getScaledMatrix: function getScaledMatrix(shape, v, direct) {
    var scaledMatrix;
    shape.apply(v);
    var x = v[0];
    var y = v[1];

    if (direct === 'x') {
      shape.transform([['t', x, y], ['s', 0.01, 1], ['t', -x, -y]]);
      var matrix = shape.getMatrix();
      scaledMatrix = Matrix.transform(matrix, [['t', x, y], ['s', 100, 1], ['t', -x, -y]]);
    } else if (direct === 'y') {
      shape.transform([['t', x, y], ['s', 1, 0.01], ['t', -x, -y]]);

      var _matrix = shape.getMatrix();

      scaledMatrix = Matrix.transform(_matrix, [['t', x, y], ['s', 1, 100], ['t', -x, -y]]);
    } else if (direct === 'xy') {
      shape.transform([['t', x, y], ['s', 0.01, 0.01], ['t', -x, -y]]);

      var _matrix2 = shape.getMatrix();

      scaledMatrix = Matrix.transform(_matrix2, [['t', x, y], ['s', 100, 100], ['t', -x, -y]]);
    }

    return scaledMatrix;
  },
  getAnimateParam: function getAnimateParam(animateCfg, index, id) {
    var result = {};

    if (animateCfg.delay) {
      result.delay = Util.isFunction(animateCfg.delay) ? animateCfg.delay(index, id) : animateCfg.delay;
    }

    result.easing = animateCfg.easing;
    result.duration = animateCfg.duration;
    result.delay = animateCfg.delay;
    return result;
  },
  doAnimation: function doAnimation(shape, endState, animateCfg, callback) {
    var id = shape._id;
    var index = shape.get('index');

    var _Helpers$getAnimatePa = Helpers.getAnimateParam(animateCfg, index, id),
        easing = _Helpers$getAnimatePa.easing,
        delay = _Helpers$getAnimatePa.delay,
        duration = _Helpers$getAnimatePa.duration;

    var anim = shape.animate().to({
      attrs: endState,
      duration: duration,
      delay: delay,
      easing: easing
    });

    if (callback) {
      anim.onEnd(function () {
        callback();
      });
    }
  }
};
module.exports = Helpers;

/***/ }),
/* 208 */,
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Geom = __webpack_require__(17);

__webpack_require__(210);

__webpack_require__(72);

__webpack_require__(190);

__webpack_require__(212);

__webpack_require__(191);

__webpack_require__(214);

__webpack_require__(216);

module.exports = Geom;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Geom = __webpack_require__(17);

__webpack_require__(211);

var Point = /*#__PURE__*/function (_Geom) {
  (0, _inheritsLoose2["default"])(Point, _Geom);

  var _super = _createSuper(Point);

  function Point() {
    return _Geom.apply(this, arguments) || this;
  }

  var _proto = Point.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);

    cfg.type = 'point';
    cfg.shapeType = 'point';
    cfg.generatePoints = false;
    return cfg;
  };

  _proto.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    Util.each(data, function (obj) {
      var shape = obj.shape;
      var cfg = self.getDrawCfg(obj);

      if (Util.isArray(obj.y)) {
        var hasStack = self.hasAdjust('stack');
        Util.each(obj.y, function (y, idx) {
          cfg.y = y;

          if (!hasStack || idx !== 0) {
            self.drawShape(shape, obj, cfg, container, shapeFactory);
          }
        });
      } else if (!Util.isNil(obj.y)) {
        self.drawShape(shape, obj, cfg, container, shapeFactory);
      }
    });
  };

  return Point;
}(Geom);

Geom.Point = Point;
module.exports = Point;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Global = __webpack_require__(6);

var ShapeUtil = __webpack_require__(38);

var Shape = __webpack_require__(19);

var SHAPES = ['circle', 'hollowCircle', 'rect'];
var Point = Shape.registerFactory('point', {
  defaultShapeType: 'circle',
  getDefaultPoints: function getDefaultPoints(pointInfo) {
    return ShapeUtil.splitPoints(pointInfo);
  }
});

function getPointsCfg(cfg) {
  var style = {
    lineWidth: 0,
    stroke: cfg.color,
    fill: cfg.color
  };

  if (cfg.size) {
    style.size = cfg.size;
  }

  Util.mix(style, cfg.style);
  return Util.mix({}, Global.shape.point, style);
}

function drawShape(cfg, container, shape) {
  if (cfg.size === 0) return;
  var pointCfg = getPointsCfg(cfg);
  var size = pointCfg.r || pointCfg.size;
  var x = cfg.x;
  var y = !Util.isArray(cfg.y) ? [cfg.y] : cfg.y;

  if (shape === 'hollowCircle') {
    pointCfg.lineWidth = 1;
    pointCfg.fill = null;
  }

  for (var i = 0, len = y.length; i < len; i++) {
    if (shape === 'rect') {
      return container.addShape('Rect', {
        className: 'point',
        attrs: Util.mix({
          x: x - size,
          y: y[i] - size,
          width: size * 2,
          height: size * 2
        }, pointCfg)
      });
    }

    return container.addShape('Circle', {
      className: 'point',
      attrs: Util.mix({
        x: x,
        y: y[i],
        r: size
      }, pointCfg)
    });
  }
}

Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('point', shapeType, {
    draw: function draw(cfg, container) {
      return drawShape(cfg, container, shapeType);
    }
  });
});
module.exports = Point;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @fileOverview area geometry
 * @author dxq613 @gmail.com
 * @author sima.zhang1990@gmail.com
 */
var Geom = __webpack_require__(17);

var ShapeUtil = __webpack_require__(38);

var Util = __webpack_require__(0);

__webpack_require__(213);

var Area = /*#__PURE__*/function (_Geom) {
  (0, _inheritsLoose2["default"])(Area, _Geom);

  var _super = _createSuper(Area);

  function Area() {
    return _Geom.apply(this, arguments) || this;
  }

  var _proto = Area.prototype;

  /**
   * get the default configuration
   * @protected
   * @return {Object} return the result
   */
  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);

    cfg.type = 'area';
    cfg.shapeType = 'area';
    cfg.generatePoints = true;
    cfg.sortable = true;
    return cfg;
  };

  _proto.draw = function draw(data, shapeFactory) {
    var self = this;
    var container = self.get('container');
    var cfg = this.getDrawCfg(data[0]);
    var yScale = self.getYScale();
    var connectNulls = self.get('connectNulls');
    var splitArray = ShapeUtil.splitArray(data, yScale.field, connectNulls);
    cfg.origin = data;
    Util.each(splitArray, function (subData, splitedIndex) {
      cfg.splitedIndex = splitedIndex;
      var points = subData.map(function (obj) {
        return obj.points;
      });
      cfg.points = points;
      self.drawShape(cfg.shape, data[0], cfg, container, shapeFactory);
    });
  };

  return Area;
}(Geom);

Geom.Area = Area;
module.exports = Area;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Shape = __webpack_require__(19);

var Smooth = __webpack_require__(71);

var bbox = __webpack_require__(21);

var Global = __webpack_require__(6);

function equals(v1, v2) {
  return Math.abs(v1 - v2) < 0.00001;
}

function notEmpty(value) {
  return !isNaN(value) && !Util.isNil(value);
}

function filterPoints(points) {
  var filteredPoints = []; // filter the point which x or y is NaN

  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];

    if (notEmpty(point.x) && notEmpty(point.y)) {
      filteredPoints.push(point);
    }
  }

  return filteredPoints;
}

function equalsCenter(points, center) {
  var eqls = true;
  Util.each(points, function (point) {
    if (!equals(point.x, center.x) || !equals(point.y, center.y)) {
      eqls = false;
      return false;
    }
  });
  return eqls;
}

function drawRectShape(topPoints, bottomPoints, container, style, isSmooth) {
  var shape;
  var points = topPoints.concat(bottomPoints);

  if (isSmooth) {
    shape = container.addShape('Custom', {
      className: 'area',
      attrs: Util.mix({
        points: points
      }, style),
      createPath: function createPath(context) {
        var constaint = [[0, 0], [1, 1]];
        var points = filterPoints(this._attrs.attrs.points);
        var pointsLen = points.length;
        var topPoints = points.slice(0, pointsLen / 2);
        var bottomPoints = points.slice(pointsLen / 2, pointsLen);
        var topSps = Smooth.smooth(topPoints, false, constaint);
        context.beginPath();
        context.moveTo(topPoints[0].x, topPoints[0].y);

        for (var i = 0, n = topSps.length; i < n; i++) {
          var sp = topSps[i];
          context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
        }

        if (bottomPoints.length) {
          var bottomSps = Smooth.smooth(bottomPoints, false, constaint);
          context.lineTo(bottomPoints[0].x, bottomPoints[0].y);

          for (var _i = 0, _n = bottomSps.length; _i < _n; _i++) {
            var _sp = bottomSps[_i];
            context.bezierCurveTo(_sp[1], _sp[2], _sp[3], _sp[4], _sp[5], _sp[6]);
          }
        }

        context.closePath();
      },
      calculateBox: function calculateBox() {
        var points = filterPoints(this._attrs.attrs.points);
        return bbox.getBBoxFromPoints(points);
      }
    });
  } else {
    shape = container.addShape('Polyline', {
      className: 'area',
      attrs: Util.mix({
        points: points
      }, style)
    });
  }

  return shape;
}

function drawShape(cfg, container, isSmooth) {
  var self = this;
  var points = cfg.points;
  var topPoints = [];
  var bottomPoints = [];
  Util.each(points, function (point) {
    bottomPoints.push(point[0]);
    topPoints.push(point[1]);
  });
  var style = Util.mix({
    fillStyle: cfg.color
  }, Global.shape.area, cfg.style);
  bottomPoints.reverse();
  topPoints = self.parsePoints(topPoints);
  bottomPoints = self.parsePoints(bottomPoints);

  if (cfg.isInCircle) {
    topPoints.push(topPoints[0]);
    bottomPoints.unshift(bottomPoints[bottomPoints.length - 1]);

    if (equalsCenter(bottomPoints, cfg.center)) {
      bottomPoints = [];
    }
  }

  return drawRectShape(topPoints, bottomPoints, container, style, isSmooth);
}

var Area = Shape.registerFactory('area', {
  defaultShapeType: 'area',
  getDefaultPoints: function getDefaultPoints(obj) {
    var x = obj.x;
    var y = obj.y;
    var y0 = obj.y0;
    y = Util.isArray(y) ? y : [y0, y];
    var points = [];
    points.push({
      x: x,
      y: y[0]
    }, {
      x: x,
      y: y[1]
    });
    return points;
  }
});
var SHAPES = ['area', 'smooth'];
Util.each(SHAPES, function (shapeType) {
  Shape.registerShape('area', shapeType, {
    draw: function draw(cfg, container) {
      var smooth = shapeType === 'smooth';
      return drawShape.call(this, cfg, container, smooth);
    }
  });
});
module.exports = Area;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Geom = __webpack_require__(17);

var Util = __webpack_require__(0);

__webpack_require__(215);

var Polygon = /*#__PURE__*/function (_Geom) {
  (0, _inheritsLoose2["default"])(Polygon, _Geom);

  var _super = _createSuper(Polygon);

  function Polygon() {
    return _Geom.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _Geom.prototype.getDefaultCfg.call(this);

    cfg.type = 'polygon';
    cfg.shapeType = 'polygon';
    cfg.generatePoints = true;
    return cfg;
  };

  _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
    var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);

    var self = this;
    var x = cfg.x;
    var y = cfg.y;
    var temp;

    if (!(Util.isArray(x) && Util.isArray(y))) {
      var xScale = self.getXScale();
      var yScale = self.getYScale();
      var xCount = xScale.values ? xScale.values.length : xScale.ticks.length;
      var yCount = yScale.values ? yScale.values.length : yScale.ticks.length;
      var xOffset = 0.5 * 1 / xCount;
      var yOffset = 0.5 * 1 / yCount;

      if (xScale.isCategory && yScale.isCategory) {
        x = [x - xOffset, x - xOffset, x + xOffset, x + xOffset];
        y = [y - yOffset, y + yOffset, y + yOffset, y - yOffset];
      } else if (Util.isArray(x)) {
        temp = x;
        x = [temp[0], temp[0], temp[1], temp[1]];
        y = [y - yOffset / 2, y + yOffset / 2, y + yOffset / 2, y - yOffset / 2];
      } else if (Util.isArray(y)) {
        temp = y;
        y = [temp[0], temp[1], temp[1], temp[0]];
        x = [x - xOffset / 2, x - xOffset / 2, x + xOffset / 2, x + xOffset / 2];
      }

      cfg.x = x;
      cfg.y = y;
    }

    return cfg;
  };

  return Polygon;
}(Geom);

Geom.Polygon = Polygon;
module.exports = Polygon;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Shape = __webpack_require__(19);

var Util = __webpack_require__(0);

var Polygon = Shape.registerFactory('polygon', {
  defaultShapeType: 'polygon',
  getDefaultPoints: function getDefaultPoints(pointInfo) {
    var points = [];
    var x = pointInfo.x,
        y = pointInfo.y;

    for (var i = 0, len = x.length; i < len; i++) {
      points.push({
        x: x[i],
        y: y[i]
      });
    }

    return points;
  }
});
Shape.registerShape('polygon', 'polygon', {
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      fill: cfg.color,
      points: points
    }, cfg.style);
    return container.addShape('Polygon', {
      className: 'polygon',
      attrs: style
    });
  }
});
module.exports = Polygon;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Geom = __webpack_require__(17);

var Util = __webpack_require__(0);

var SizeMixin = __webpack_require__(73);

__webpack_require__(217);

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

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Shape = __webpack_require__(19);

var Util = __webpack_require__(0);

function _sortValue(value) {
  var sorted = value.sort(function (a, b) {
    return a < b ? 1 : -1;
  });
  var length = sorted.length;

  if (length < 4) {
    var min = sorted[length - 1];

    for (var i = 0; i < 4 - length; i++) {
      sorted.push(min);
    }
  }

  return sorted;
} // from left bottom corner, and clockwise


function getCandlePoints(x, y, width) {
  var yValues = _sortValue(y);

  var points = [{
    x: x,
    y: yValues[0]
  }, {
    x: x,
    y: yValues[1]
  }, {
    x: x - width / 2,
    y: yValues[2]
  }, {
    x: x - width / 2,
    y: yValues[1]
  }, {
    x: x + width / 2,
    y: yValues[1]
  }, {
    x: x + width / 2,
    y: yValues[2]
  }, {
    x: x,
    y: yValues[2]
  }, {
    x: x,
    y: yValues[3]
  }];
  return points;
}

var Schema = Shape.registerFactory('schema', {});
Shape.registerShape('schema', 'candle', {
  getPoints: function getPoints(cfg) {
    return getCandlePoints(cfg.x, cfg.y, cfg.size);
  },
  draw: function draw(cfg, container) {
    var points = this.parsePoints(cfg.points);
    var style = Util.mix({
      stroke: cfg.color,
      fill: cfg.color,
      lineWidth: 1
    }, cfg.style);
    return container.addShape('Custom', {
      className: 'schema',
      attrs: style,
      createPath: function createPath(ctx) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);
        ctx.moveTo(points[2].x, points[2].y);

        for (var i = 3; i < 6; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }

        ctx.closePath();
        ctx.moveTo(points[6].x, points[6].y);
        ctx.lineTo(points[7].x, points[7].y);
      }
    });
  }
});
module.exports = Schema;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var Abstract = __webpack_require__(45);

var Circle = /*#__PURE__*/function (_Abstract) {
  (0, _inheritsLoose2["default"])(Circle, _Abstract);

  var _super = _createSuper(Circle);

  function Circle() {
    return _Abstract.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Abstract.prototype._initDefaultCfg.call(this);

    this.startAngle = -Math.PI / 2; // start angle，in radian

    this.endAngle = Math.PI * 3 / 2; // end angle, in radian

    this.radius = null; // radius

    this.center = null; // center
  };

  _proto.getOffsetPoint = function getOffsetPoint(value) {
    var startAngle = this.startAngle,
        endAngle = this.endAngle;
    var angle = startAngle + (endAngle - startAngle) * value;
    return this._getCirclePoint(angle);
  };

  _proto._getCirclePoint = function _getCirclePoint(angle, radius) {
    var self = this;
    var center = self.center;
    radius = radius || self.radius;
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  };

  _proto.getTextAlignInfo = function getTextAlignInfo(point, offset) {
    var self = this;
    var offsetVector = self.getOffsetVector(point, offset);
    var align;
    var baseLine = 'middle';

    if (offsetVector[0] > 0) {
      align = 'left';
    } else if (offsetVector[0] < 0) {
      align = 'right';
    } else {
      align = 'center';

      if (offsetVector[1] > 0) {
        baseLine = 'top';
      } else if (offsetVector[1] < 0) {
        baseLine = 'bottom';
      }
    }

    return {
      textAlign: align,
      textBaseline: baseLine
    };
  };

  _proto.getAxisVector = function getAxisVector(point) {
    var center = this.center;
    var factor = this.offsetFactor;
    return [(point.y - center.y) * factor, (point.x - center.x) * -1 * factor];
  };

  _proto.drawLine = function drawLine(lineCfg) {
    var center = this.center,
        radius = this.radius,
        startAngle = this.startAngle,
        endAngle = this.endAngle;
    var container = this.getContainer(lineCfg.top);
    container.addShape('arc', {
      className: 'axis-line',
      attrs: Util.mix({
        x: center.x,
        y: center.y,
        r: radius,
        startAngle: startAngle,
        endAngle: endAngle
      }, lineCfg)
    });
  };

  return Circle;
}(Abstract);

Abstract.Circle = Circle;
module.exports = Circle;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TimeCat = __webpack_require__(220);

module.exports = TimeCat;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * @fileOverview 时间数据作为分类类型
 * @author dxq613@gmail.com
 */


var Base = __webpack_require__(26);

var Category = __webpack_require__(69);

var fecha = __webpack_require__(221);

var catAuto = __webpack_require__(65);

var TimeUtil = __webpack_require__(204);

var each = __webpack_require__(15);

var isNumber = __webpack_require__(36);

var isObject = __webpack_require__(44);

var isString = __webpack_require__(48);
/**
 * 度量的构造函数
 * @class Scale.TimeCategory
 */


var TimeCategory = /*#__PURE__*/function (_Category) {
  _inheritsLoose(TimeCategory, _Category);

  function TimeCategory() {
    return _Category.apply(this, arguments) || this;
  }

  var _proto = TimeCategory.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    _Category.prototype._initDefaultCfg.call(this);

    this.type = 'timeCat';
    /**
     * 是否需要排序，默认进行排序
     * @type {Boolean}
     */

    this.sortable = true;
    this.tickCount = 5;
    /**
     * 时间格式化
     * @type {String}
     */

    this.mask = 'YYYY-MM-DD';
  };

  _proto.init = function init() {
    var self = this;
    var values = this.values; // 针对时间分类类型，会将时间统一转换为时间戳

    each(values, function (v, i) {
      values[i] = self._toTimeStamp(v);
    });

    if (this.sortable) {
      // 允许排序
      values.sort(function (v1, v2) {
        return v1 - v2;
      });
    }

    if (!self.ticks) {
      self.ticks = this.calculateTicks();
    }
  }
  /**
   * 计算 ticks
   * @return {array} 返回 ticks 数组
   */
  ;

  _proto.calculateTicks = function calculateTicks() {
    var self = this;
    var count = self.tickCount;
    var ticks;

    if (count) {
      var temp = catAuto({
        maxCount: count,
        data: self.values,
        isRounding: self.isRounding
      });
      ticks = temp.ticks;
    } else {
      ticks = self.values;
    }

    return ticks;
  }
  /**
   * @override
   */
  ;

  _proto.translate = function translate(value) {
    value = this._toTimeStamp(value);
    var index = this.values.indexOf(value);

    if (index === -1) {
      if (isNumber(value) && value < this.values.length) {
        index = value;
      } else {
        index = NaN;
      }
    }

    return index;
  }
  /**
   * @override
   */
  ;

  _proto.scale = function scale(value) {
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var index = this.translate(value);
    var percent;

    if (this.values.length === 1 || isNaN(index)) {
      // is index is NAN should not be set as 0
      percent = index;
    } else if (index > -1) {
      percent = index / (this.values.length - 1);
    } else {
      percent = 0;
    }

    return rangeMin + percent * (rangeMax - rangeMin);
  }
  /**
   * @override
   */
  ;

  _proto.getText = function getText(value) {
    var result = '';
    var index = this.translate(value);

    if (index > -1) {
      result = this.values[index];
    } else {
      result = value;
    }

    var formatter = this.formatter;
    result = parseInt(result, 10);
    result = formatter ? formatter(result) : fecha.format(result, this.mask);
    return result;
  }
  /**
   * @override
   */
  ;

  _proto.getTicks = function getTicks() {
    var self = this;
    var ticks = this.ticks;
    var rst = [];
    each(ticks, function (tick) {
      var obj;

      if (isObject(tick)) {
        obj = tick;
      } else {
        obj = {
          text: isString(tick) ? tick : self.getText(tick),
          value: self.scale(tick),
          tickValue: tick // 用于坐标轴上文本动画时确定前后帧的对应关系

        };
      }

      rst.push(obj);
    });
    return rst;
  } // 将时间转换为时间戳
  ;

  _proto._toTimeStamp = function _toTimeStamp(value) {
    return TimeUtil.toTimeStamp(value);
  };

  return TimeCategory;
}(Category);

Base.TimeCat = TimeCategory;
module.exports = TimeCategory;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
  'use strict';
  /**
   * Parse or format dates
   * @class fecha
   */

  var fecha = {};
  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm;

  var noop = function () {};

  function shorten(arr, sLen) {
    var newArr = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }

    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());

      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;

    while (val.length < len) {
      val = '0' + val;
    }

    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };
  var formatFlags = {
    D: function (dateObj) {
      return dateObj.getDate();
    },
    DD: function (dateObj) {
      return pad(dateObj.getDate());
    },
    Do: function (dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function (dateObj) {
      return dateObj.getDay();
    },
    dd: function (dateObj) {
      return pad(dateObj.getDay());
    },
    ddd: function (dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function (dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function (dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function (dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function (dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function (dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function (dateObj) {
      return String(dateObj.getFullYear()).substr(2);
    },
    YYYY: function (dateObj) {
      return pad(dateObj.getFullYear(), 4);
    },
    h: function (dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function (dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function (dateObj) {
      return dateObj.getHours();
    },
    HH: function (dateObj) {
      return pad(dateObj.getHours());
    },
    m: function (dateObj) {
      return dateObj.getMinutes();
    },
    mm: function (dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function (dateObj) {
      return dateObj.getSeconds();
    },
    ss: function (dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function (dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function (dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function (dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function (dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function (dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function (dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };
  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    YY: [twoDigits, function (d, v) {
      var da = new Date(),
          cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    d: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();

      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = (v + '').match(/([\+\-]|\d\d)/gi),
          minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a; // Some common format strings

  fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };
  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */

  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];
    var literals = []; // Make literals inactive by replacing them with ??

    mask = mask.replace(literal, function ($0, $1) {
      literals.push($1);
      return '??';
    }); // Apply formatting rules

    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    }); // Inline literal values back into the formatted value

    return mask.replace(/\?\?/g, function () {
      return literals.shift();
    });
  };
  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */


  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format; // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);

        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();

    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;

    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }

    return date;
  };
  /* istanbul ignore next */


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return fecha;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    main.fecha = fecha;
  }
})(this);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var isType = __webpack_require__(27);

var isDate = function isDate(value) {
  return isType(value, 'Date');
};

module.exports = isDate;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

var Arc = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Arc, _GuideBase);

  var _super = _createSuper(Arc);

  function Arc() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Arc.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'arc';
    /**
     * start point
     * @type {Array | Function}
     */

    this.start = [];
    /**
     * end point
     * @type {Array | Function}
     */

    this.end = [];
    /**
     * style configuration
     * @type {Object}
     */

    this.style = {
      stroke: '#999',
      lineWidth: 1
    };
  };

  _proto.render = function render(coord, container) {
    var self = this;
    var start = self.parsePoint(coord, self.start);
    var end = self.parsePoint(coord, self.end);

    if (!start || !end) {
      return;
    }

    var coordCenter = coord.center;
    var radius = Math.sqrt((start.x - coordCenter.x) * (start.x - coordCenter.x) + (start.y - coordCenter.y) * (start.y - coordCenter.y));
    var startAngle = Math.atan2(start.y - coordCenter.y, start.x - coordCenter.x);
    var endAngle = Math.atan2(end.y - coordCenter.y, end.x - coordCenter.x);
    var shape = container.addShape('arc', {
      className: 'guide-arc',
      attrs: Util.mix({
        x: coordCenter.x,
        y: coordCenter.y,
        r: radius,
        startAngle: startAngle,
        endAngle: endAngle
      }, self.style)
    });
    self.element = shape;
    return shape;
  };

  return Arc;
}(GuideBase);

GuideBase.Arc = Arc;
module.exports = Arc;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

function getOffsetFromAlign(alignX, alignY, width, height) {
  var result = [];

  if (alignX === 'left' && alignY === 'top') {
    result[0] = 0;
    result[1] = 0;
  } else if (alignX === 'right' && alignY === 'top') {
    result[0] = -width;
    result[1] = 0;
  } else if (alignX === 'left' && alignY === 'bottom') {
    result[0] = 0;
    result[1] = Math.floor(-height);
  } else if (alignX === 'right' && alignY === 'bottom') {
    result[0] = Math.floor(-width);
    result[1] = Math.floor(-height);
  } else if (alignX === 'right' && alignY === 'middle') {
    result[0] = Math.floor(-width);
    result[1] = Math.floor(-height / 2);
  } else if (alignX === 'left' && alignY === 'middle') {
    result[0] = 0;
    result[1] = Math.floor(-height / 2);
  } else if (alignX === 'center' && alignY === 'bottom') {
    result[0] = Math.floor(-width / 2);
    result[1] = Math.floor(-height);
  } else if (alignX === 'center' && alignY === 'top') {
    result[0] = Math.floor(-width / 2);
    result[1] = 0;
  } else {
    result[0] = Math.floor(-width / 2);
    result[1] = Math.floor(-height / 2);
  }

  return result;
}

function modifyCSS(DOM, CSS) {
  for (var key in CSS) {
    if (CSS.hasOwnProperty(key)) {
      DOM.style[key] = CSS[key];
    }
  }

  return DOM;
}

function createDom(str) {
  var container = document.createElement('div');
  str = str.replace(/(^\s*)|(\s*$)/g, '');
  container.innerHTML = '' + str;
  return container.childNodes[0];
}

var Html = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Html, _GuideBase);

  var _super = _createSuper(Html);

  function Html() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Html.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'html';
    /**
     * dom position
     * @type {Object | Array}
     */

    this.position = null;
    /**
      * alignment for horizontal direction，can be 'left','center','right'
      * @type {String}
      */

    this.alignX = 'center';
    /**
      * alignment for vertical direction，can be 'top', 'middle', 'bottom'
      * @type {String}
      */

    this.alignY = 'middle';
    /**
      * offset for horizontal direction
      * @type {Number}
      */

    this.offsetX = null;
    /**
      * offset for vertical direction
      * @type {Number}
      */

    this.offsetY = null;
    /**
    * the html string
    *@type {String | Function}
    */

    this.html = null;
  } // override paint
  ;

  _proto.render = function render(coord, container) {
    var self = this;
    var position = self.parsePoint(coord, self.position);

    if (!position) {
      return;
    }

    var myNode = createDom(self.html);
    myNode = modifyCSS(myNode, {
      position: 'absolute',
      top: Math.floor(position.y) + 'px',
      left: Math.floor(position.x) + 'px',
      visibility: 'hidden'
    });
    var canvasDom = container.get('canvas').get('el');
    var parentNode = canvasDom.parentNode;
    parentNode = modifyCSS(parentNode, {
      position: 'relative'
    });
    var wrapperNode = createDom('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
    parentNode.appendChild(wrapperNode);
    wrapperNode.appendChild(myNode);
    var canvasOffsetTop = canvasDom.offsetTop;
    var canvasOffsetLeft = canvasDom.offsetLeft;
    var alignX = self.alignX,
        alignY = self.alignY,
        offsetX = self.offsetX,
        offsetY = self.offsetY;
    var width = Util.getWidth(myNode);
    var height = Util.getHeight(myNode);
    var newOffset = getOffsetFromAlign(alignX, alignY, width, height);
    position.x = position.x + newOffset[0] + canvasOffsetLeft;
    position.y = position.y + newOffset[1] + canvasOffsetTop;

    if (offsetX) {
      position.x += offsetX;
    }

    if (offsetY) {
      position.y += offsetY;
    }

    modifyCSS(myNode, {
      top: Math.floor(position.y) + 'px',
      left: Math.floor(position.x) + 'px',
      visibility: 'visible'
    });
    self.element = wrapperNode;
  };

  _proto.remove = function remove() {
    var element = this.element;
    element && element.parentNode && element.parentNode.removeChild(element);
  };

  return Html;
}(GuideBase);

GuideBase.Html = Html;
module.exports = Html;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

var Line = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Line, _GuideBase);

  var _super = _createSuper(Line);

  function Line() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Line.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'line';
    this.start = [];
    this.end = [];
    this.style = {
      stroke: '#000',
      lineWidth: 1
    };
  };

  _proto.render = function render(coord, container) {
    var points = [];
    points[0] = this.parsePoint(coord, this.start);
    points[1] = this.parsePoint(coord, this.end);

    if (!points[0] || !points[1]) {
      return;
    }

    var shape = container.addShape('Line', {
      className: 'guide-line',
      attrs: Util.mix({
        x1: points[0].x,
        y1: points[0].y,
        x2: points[1].x,
        y2: points[1].y
      }, this.style)
    });
    this.element = shape;
    return shape;
  };

  return Line;
}(GuideBase);

GuideBase.Line = Line;
module.exports = Line;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

var Rect = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Rect, _GuideBase);

  var _super = _createSuper(Rect);

  function Rect() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Rect.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'rect';
    this.start = [];
    this.end = [];
    this.style = {
      fill: '#CCD7EB',
      opacity: 0.4
    };
  };

  _proto.render = function render(coord, container) {
    var start = this.parsePoint(coord, this.start);
    var end = this.parsePoint(coord, this.end);

    if (!start || !end) {
      return;
    }

    var shape = container.addShape('rect', {
      className: 'guide-rect',
      attrs: Util.mix({
        x: Math.min(start.x, end.x),
        y: Math.min(start.y, end.y),
        width: Math.abs(end.x - start.x),
        height: Math.abs(start.y - end.y)
      }, this.style)
    });
    this.element = shape;
    return shape;
  };

  return Rect;
}(GuideBase);

GuideBase.Rect = Rect;
module.exports = Rect;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

var Text = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Text, _GuideBase);

  var _super = _createSuper(Text);

  function Text() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'text';
    /**
     * the position of text
     * @type {Function | Array}
     */

    this.position = null;
    /**
     * the display content
     * @type {String}
     */

    this.content = null;
    /**
     * style configuration for text
     * @type {Object}
     */

    this.style = {
      fill: '#000'
    };
    /**
     * offset of horizontal direction
     * @type {Number}
     */

    this.offsetX = 0;
    /**
     * offset of vertical direction
     * @type {Number}
     */

    this.offsetY = 0;
  };

  _proto.render = function render(coord, container) {
    var position = this.position;
    var point = this.parsePoint(coord, position);

    if (!point) {
      return;
    }

    var content = this.content,
        style = this.style,
        offsetX = this.offsetX,
        offsetY = this.offsetY;

    if (offsetX) {
      point.x += offsetX;
    }

    if (offsetY) {
      point.y += offsetY;
    }

    var shape = container.addShape('text', {
      className: 'guide-text',
      attrs: Util.mix({
        x: point.x,
        y: point.y,
        text: content
      }, style)
    });
    this.element = shape;
    return shape;
  };

  return Text;
}(GuideBase);

GuideBase.Text = Text;
module.exports = Text;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

var Tag = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Tag, _GuideBase);

  var _super = _createSuper(Tag);

  function Tag() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Tag.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'tag';
    this.position = null;
    this.content = null;
    this.direct = 'tl';
    this.autoAdjust = true;
    this.offsetX = 0;
    this.offsetY = 0;
    this.side = 4;
    this.background = {
      padding: 5,
      radius: 2,
      fill: '#1890FF'
    };
    this.textStyle = {
      fontSize: 12,
      fill: '#fff',
      textAlign: 'center',
      textBaseline: 'middle'
    };
    this.withPoint = true;
    this.pointStyle = {
      fill: '#1890FF',
      r: 3,
      lineWidth: 1,
      stroke: '#fff'
    };
  };

  _proto._getDirect = function _getDirect(container, point, tagWidth, tagHeight) {
    var direct = this.direct;
    var side = this.side;
    var canvas = container.get('canvas');
    var clientWidth = canvas.get('width');
    var clientHeight = canvas.get('height');
    var x = point.x,
        y = point.y;
    var vertical = direct[0];
    var horizontal = direct[1]; // adjust for vertical direction

    if (vertical === 't' && y - side - tagHeight < 0) {
      vertical = 'b';
    } else if (vertical === 'b' && y + side + tagHeight > clientHeight) {
      vertical = 't';
    } // adjust for horizontal direction


    var diff = vertical === 'c' ? side : 0;

    if (horizontal === 'l' && x - diff - tagWidth < 0) {
      horizontal = 'r';
    } else if (horizontal === 'r' && x + diff + tagWidth > clientWidth) {
      horizontal = 'l';
    } else if (horizontal === 'c') {
      if (tagWidth / 2 + x + diff > clientWidth) {
        horizontal = 'l';
      } else if (x - tagWidth / 2 - diff < 0) {
        horizontal = 'r';
      }
    }

    direct = vertical + horizontal;
    return direct;
  };

  _proto.render = function render(coord, container) {
    var position = this.parsePoint(coord, this.position);

    if (!position) {
      return;
    } // 数据不在显示范围内时，x/y 会为NaN


    if (isNaN(position.x) || isNaN(position.y)) {
      return;
    }

    var content = this.content,
        background = this.background,
        textStyle = this.textStyle;
    var shapes = [];
    var wrapperContainer = container.addGroup({
      className: 'guide-tag'
    });

    if (this.withPoint) {
      var pointShape = wrapperContainer.addShape('Circle', {
        className: 'guide-tag-point',
        attrs: Util.mix({
          x: position.x,
          y: position.y
        }, this.pointStyle)
      });
      shapes.push(pointShape);
    }

    var tagContainer = wrapperContainer.addGroup(); // create a text shape

    var tagText = tagContainer.addShape('text', {
      className: 'guide-tag-text',
      zIndex: 1,
      attrs: Util.mix({
        x: 0,
        y: 0,
        text: content
      }, textStyle)
    });
    shapes.push(tagText); // create background box

    var textBBox = tagText.getBBox();
    var padding = Util.parsePadding(background.padding);
    var tagWidth = textBBox.width + padding[1] + padding[3];
    var tagHeight = textBBox.height + padding[0] + padding[2];
    var yMin = textBBox.minY - padding[0];
    var xMin = textBBox.minX - padding[3];
    var tagBg = tagContainer.addShape('rect', {
      className: 'guide-tag-bg',
      zIndex: -1,
      attrs: Util.mix({
        x: xMin,
        y: yMin,
        width: tagWidth,
        height: tagHeight
      }, background)
    });
    shapes.push(tagBg);
    var direct = this.autoAdjust ? this._getDirect(container, position, tagWidth, tagHeight) : this.direct;
    var side = this.side;
    var x = position.x + this.offsetX;
    var y = position.y + this.offsetY;
    var arrowPoints;
    var radius = Util.parsePadding(background.radius);

    if (direct === 'tl') {
      arrowPoints = [{
        x: tagWidth + xMin - side - 1,
        y: tagHeight + yMin - 1
      }, // 这个 1 是为了防止出现白边
      {
        x: tagWidth + xMin,
        y: tagHeight + yMin - 1
      }, {
        x: tagWidth + xMin,
        y: tagHeight + side + yMin
      }];
      radius[2] = 0;
      x = x - tagWidth;
      y = y - side - tagHeight;
    } else if (direct === 'cl') {
      arrowPoints = [{
        x: tagWidth + xMin - 1,
        y: (tagHeight - side) / 2 + yMin - 1
      }, {
        x: tagWidth + xMin - 1,
        y: (tagHeight + side) / 2 + yMin + 1
      }, {
        x: tagWidth + side + xMin,
        y: tagHeight / 2 + yMin
      }];
      x = x - tagWidth - side;
      y = y - tagHeight / 2;
    } else if (direct === 'bl') {
      arrowPoints = [{
        x: tagWidth + xMin,
        y: -side + yMin
      }, {
        x: tagWidth + xMin - side - 1,
        y: yMin + 1
      }, {
        x: tagWidth + xMin,
        y: yMin + 1
      }];
      radius[1] = 0;
      x = x - tagWidth;
      y = y + side;
    } else if (direct === 'bc') {
      arrowPoints = [{
        x: tagWidth / 2 + xMin,
        y: -side + yMin
      }, {
        x: (tagWidth - side) / 2 + xMin - 1,
        y: yMin + 1
      }, {
        x: (tagWidth + side) / 2 + xMin + 1,
        y: yMin + 1
      }];
      x = x - tagWidth / 2;
      y = y + side;
    } else if (direct === 'br') {
      arrowPoints = [{
        x: xMin,
        y: yMin - side
      }, {
        x: xMin,
        y: yMin + 1
      }, {
        x: xMin + side + 1,
        y: yMin + 1
      }];
      radius[0] = 0;
      y = y + side;
    } else if (direct === 'cr') {
      arrowPoints = [{
        x: xMin - side,
        y: tagHeight / 2 + yMin
      }, {
        x: xMin + 1,
        y: (tagHeight - side) / 2 + yMin - 1
      }, {
        x: xMin + 1,
        y: (tagHeight + side) / 2 + yMin + 1
      }];
      x = x + side;
      y = y - tagHeight / 2;
    } else if (direct === 'tr') {
      arrowPoints = [{
        x: xMin,
        y: tagHeight + side + yMin
      }, {
        x: xMin,
        y: tagHeight + yMin - 1
      }, {
        x: side + xMin + 1,
        y: tagHeight + yMin - 1
      }];
      radius[3] = 0;
      y = y - tagHeight - side;
    } else if (direct === 'tc') {
      arrowPoints = [{
        x: (tagWidth - side) / 2 + xMin - 1,
        y: tagHeight + yMin - 1
      }, {
        x: (tagWidth + side) / 2 + xMin + 1,
        y: tagHeight + yMin - 1
      }, {
        x: tagWidth / 2 + xMin,
        y: tagHeight + side + yMin
      }];
      x = x - tagWidth / 2;
      y = y - tagHeight - side;
    }

    var sideShape = tagContainer.addShape('Polygon', {
      className: 'guide-tag-side',
      zIndex: 0,
      attrs: {
        points: arrowPoints,
        fill: background.fill
      }
    });
    shapes.push(sideShape);
    tagBg.attr('radius', radius);
    tagContainer.moveTo(x - xMin, y - yMin);
    tagContainer.sort();
    this.element = wrapperContainer;
    return shapes;
  };

  return Tag;
}(GuideBase);

GuideBase.Tag = Tag;
module.exports = Tag;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Util = __webpack_require__(0);

var GuideBase = __webpack_require__(23);

var Point = /*#__PURE__*/function (_GuideBase) {
  (0, _inheritsLoose2["default"])(Point, _GuideBase);

  var _super = _createSuper(Point);

  function Point() {
    return _GuideBase.apply(this, arguments) || this;
  }

  var _proto = Point.prototype;

  _proto._initDefaultCfg = function _initDefaultCfg() {
    this.type = 'point';
    this.position = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.style = {
      fill: '#1890FF',
      r: 3,
      lineWidth: 1,
      stroke: '#fff'
    };
  };

  _proto.render = function render(coord, container) {
    var position = this.parsePoint(coord, this.position);
    if (!position) return null;
    var shape = container.addShape('Circle', {
      className: 'guide-point',
      attrs: Util.mix({
        x: position.x + this.offsetX,
        y: position.y + this.offsetY
      }, this.style)
    });
    this.element = shape;
    return shape;
  };

  return Point;
}(GuideBase);

GuideBase.Point = Point;
module.exports = Point;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Global = __webpack_require__(6);

var Tooltip = __webpack_require__(231);

var Helper = __webpack_require__(37); // Register the default configuration for Tooltip


Global.tooltip = Util.deepMix({
  triggerOn: 'press',
  triggerOff: 'pressend',
  alwaysShow: false,
  showTitle: false,
  showCrosshairs: false,
  crosshairsStyle: {
    stroke: 'rgba(0, 0, 0, 0.25)',
    lineWidth: 1
  },
  showTooltipMarker: true,
  background: {
    radius: 1,
    fill: 'rgba(0, 0, 0, 0.65)',
    padding: [3, 5]
  },
  titleStyle: {
    fontSize: 12,
    fill: '#fff',
    textAlign: 'start',
    textBaseline: 'top'
  },
  nameStyle: {
    fontSize: 12,
    fill: 'rgba(255, 255, 255, 0.65)',
    textAlign: 'start',
    textBaseline: 'middle'
  },
  valueStyle: {
    fontSize: 12,
    fill: '#fff',
    textAlign: 'start',
    textBaseline: 'middle'
  },
  showItemMarker: true,
  itemMarkerStyle: {
    radius: 3,
    symbol: 'circle',
    lineWidth: 1,
    stroke: '#fff'
  },
  layout: 'horizontal',
  snap: false
}, Global.tooltip || {});

function _getTooltipValueScale(geom) {
  var colorAttr = geom.getAttr('color');

  if (colorAttr) {
    var colorScale = colorAttr.getScale(colorAttr.type);

    if (colorScale.isLinear) {
      return colorScale;
    }
  }

  var xScale = geom.getXScale();
  var yScale = geom.getYScale();

  if (yScale) {
    return yScale;
  }

  return xScale;
}

function getTooltipName(geom, origin) {
  var name;
  var nameScale;

  var groupScales = geom._getGroupScales();

  if (groupScales.length) {
    Util.each(groupScales, function (scale) {
      nameScale = scale;
      return false;
    });
  }

  if (nameScale) {
    var field = nameScale.field;
    name = nameScale.getText(origin[field]);
  } else {
    var valueScale = _getTooltipValueScale(geom);

    name = valueScale.alias || valueScale.field;
  }

  return name;
}

function getTooltipValue(geom, origin) {
  var scale = _getTooltipValueScale(geom);

  return scale.getText(origin[scale.field]);
}

function getTooltipTitle(geom, origin) {
  var position = geom.getAttr('position');
  var field = position.getFields()[0];
  var scale = geom.get('scales')[field];
  return scale.getText(origin[scale.field]);
}

function _indexOfArray(items, item) {
  var rst = -1;
  Util.each(items, function (sub, index) {
    if (sub.title === item.title && sub.name === item.name && sub.value === item.value && sub.color === item.color) {
      rst = index;
      return false;
    }
  });
  return rst;
}

function _uniqItems(items) {
  var tmp = [];
  Util.each(items, function (item) {
    var index = _indexOfArray(tmp, item);

    if (index === -1) {
      tmp.push(item);
    } else {
      tmp[index] = item;
    }
  });
  return tmp;
}

function isEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

var TooltipController = /*#__PURE__*/function () {
  function TooltipController(cfg) {
    var _this = this;

    this.handleShowEvent = function (ev) {
      var chart = _this.chart;
      if (!_this.enable) return;
      var plot = chart.get('plotRange');
      var point = Util.createEvent(ev, chart);

      if (!Helper.isPointInPlot(point, plot) && !_this._tooltipCfg.alwaysShow) {
        // not in chart plot
        _this.hideTooltip();

        return;
      }

      var lastTimeStamp = _this.timeStamp;
      var timeStamp = +new Date();

      if (timeStamp - lastTimeStamp > 16) {
        _this.showTooltip(point);

        _this.timeStamp = timeStamp;
      }
    };

    this.handleHideEvent = function () {
      if (!_this.enable) return;

      _this.hideTooltip();
    };

    this.enable = true;
    this.cfg = {};
    this.tooltip = null;
    this.chart = null;
    this.timeStamp = 0;
    Util.mix(this, cfg);
    var _chart = this.chart;

    var canvas = _chart.get('canvas');

    this.canvas = canvas;
    this.canvasDom = canvas.get('el');
  }

  var _proto = TooltipController.prototype;

  _proto._setCrosshairsCfg = function _setCrosshairsCfg() {
    var self = this;
    var chart = self.chart;
    var defaultCfg = Util.mix({}, Global.tooltip);
    var geoms = chart.get('geoms');
    var shapes = [];
    Util.each(geoms, function (geom) {
      var type = geom.get('type');

      if (shapes.indexOf(type) === -1) {
        shapes.push(type);
      }
    });
    var coordType = chart.get('coord').type;

    if (geoms.length && (coordType === 'cartesian' || coordType === 'rect')) {
      if (shapes.length === 1 && ['line', 'area', 'path', 'point'].indexOf(shapes[0]) !== -1) {
        Util.mix(defaultCfg, {
          showCrosshairs: true
        });
      }
    }

    return defaultCfg;
  };

  _proto._getMaxLength = function _getMaxLength(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var _cfg = cfg,
        layout = _cfg.layout,
        plotRange = _cfg.plotRange;
    return layout === 'horizontal' ? plotRange.br.x - plotRange.bl.x : plotRange.bl.y - plotRange.tr.y;
  };

  _proto.render = function render() {
    var self = this;

    if (self.tooltip) {
      return;
    }

    var chart = self.chart;
    var canvas = chart.get('canvas');
    var frontPlot = chart.get('frontPlot').addGroup({
      className: 'tooltipContainer',
      zIndex: 10
    });
    var backPlot = chart.get('backPlot').addGroup({
      className: 'tooltipContainer'
    });
    var plotRange = chart.get('plotRange');
    var coord = chart.get('coord');

    var defaultCfg = self._setCrosshairsCfg();

    var cfg = self.cfg; // 通过 chart.tooltip() 接口传入的 tooltip 配置项

    var tooltipCfg = Util.deepMix({
      plotRange: plotRange,
      frontPlot: frontPlot,
      backPlot: backPlot,
      canvas: canvas,
      fixed: coord.transposed || coord.isPolar
    }, defaultCfg, cfg); // 创建 tooltip 实例需要的配置，不应该修改 this.cfg，即用户传入的配置

    tooltipCfg.maxLength = self._getMaxLength(tooltipCfg);
    this._tooltipCfg = tooltipCfg;
    var tooltip = new Tooltip(tooltipCfg);
    self.tooltip = tooltip;
    self.bindEvents();
  };

  _proto.clear = function clear() {
    var tooltip = this.tooltip;

    if (tooltip) {
      tooltip.destroy();
      this.unBindEvents();
    }

    this.tooltip = null;
    this.prePoint = null;
    this._lastActive = null;
  };

  _proto._getTooltipMarkerStyle = function _getTooltipMarkerStyle(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var _cfg2 = cfg,
        type = _cfg2.type,
        items = _cfg2.items;
    var tooltipCfg = this._tooltipCfg;

    if (type === 'rect') {
      var x;
      var y;
      var width;
      var height;
      var chart = this.chart;

      var _chart$get = chart.get('plotRange'),
          tl = _chart$get.tl,
          br = _chart$get.br;

      var coord = chart.get('coord');
      var firstItem = items[0];
      var lastItem = items[items.length - 1];
      var intervalWidth = firstItem.width;

      if (coord.transposed) {
        x = tl.x;
        y = lastItem.y - intervalWidth * 0.75;
        width = br.x - tl.x;
        height = firstItem.y - lastItem.y + 1.5 * intervalWidth;
      } else {
        x = firstItem.x - intervalWidth * 0.75;
        y = tl.y;
        width = lastItem.x - firstItem.x + 1.5 * intervalWidth;
        height = br.y - tl.y;
      }

      cfg.style = Util.mix({
        x: x,
        y: y,
        width: width,
        height: height,
        fill: '#CCD6EC',
        opacity: 0.3
      }, tooltipCfg.tooltipMarkerStyle);
    } else {
      cfg.style = Util.mix({
        radius: 4,
        fill: '#fff',
        lineWidth: 2
      }, tooltipCfg.tooltipMarkerStyle);
    }

    return cfg;
  };

  _proto._setTooltip = function _setTooltip(point, items, tooltipMarkerCfg) {
    if (tooltipMarkerCfg === void 0) {
      tooltipMarkerCfg = {};
    }

    var lastActive = this._lastActive;
    var tooltip = this.tooltip;
    var cfg = this._tooltipCfg;
    items = _uniqItems(items);
    var chart = this.chart;
    var coord = chart.get('coord');
    var yScale = chart.getYScales()[0];
    var snap = cfg.snap;

    if (snap === false && yScale.isLinear) {
      var invertPoint = coord.invertPoint(point);
      var plot = chart.get('plotRange');
      var tip;
      var pos;

      if (Helper.isPointInPlot(point, plot)) {
        if (coord.transposed) {
          tip = yScale.invert(invertPoint.x);
          pos = point.x;
          tooltip.setXTipContent(tip);
          tooltip.setXTipPosition(pos);
          tooltip.setYCrosshairPosition(pos);
        } else {
          tip = yScale.invert(invertPoint.y);
          pos = point.y;
          tooltip.setYTipContent(tip);
          tooltip.setYTipPosition(pos);
          tooltip.setXCrosshairPosition(pos);
        }
      }
    }

    if (cfg.onShow) {
      cfg.onShow({
        x: point.x,
        y: point.y,
        tooltip: tooltip,
        items: items,
        tooltipMarkerCfg: tooltipMarkerCfg
      });
    }

    if (isEqual(lastActive, items)) {
      if (snap === false && (Util.directionEnabled(cfg.crosshairsType, 'y') || cfg.showYTip)) {
        var canvas = this.chart.get('canvas');
        canvas.draw();
      }

      return;
    }

    this._lastActive = items;
    var onChange = cfg.onChange;

    if (onChange) {
      onChange({
        x: point.x,
        y: point.y,
        tooltip: tooltip,
        items: items,
        tooltipMarkerCfg: tooltipMarkerCfg
      });
    }

    var first = items[0];
    var title = first.title || first.name;
    var xTipPosX = first.x;

    if (items.length > 1) {
      xTipPosX = (items[0].x + items[items.length - 1].x) / 2;
    }

    tooltip.setContent(title, items, coord.transposed);
    tooltip.setPosition(items, point);

    if (coord.transposed) {
      var yTipPosY = first.y;

      if (items.length > 1) {
        yTipPosY = (items[0].y + items[items.length - 1].y) / 2;
      }

      tooltip.setYTipContent(title);
      tooltip.setYTipPosition(yTipPosY);
      tooltip.setXCrosshairPosition(yTipPosY);

      if (snap) {
        tooltip.setXTipContent(first.value);
        tooltip.setXTipPosition(xTipPosX);
        tooltip.setYCrosshairPosition(xTipPosX);
      }
    } else {
      tooltip.setXTipContent(title);
      tooltip.setXTipPosition(xTipPosX);
      tooltip.setYCrosshairPosition(xTipPosX);

      if (snap) {
        tooltip.setYTipContent(first.value);
        tooltip.setYTipPosition(first.y);
        tooltip.setXCrosshairPosition(first.y);
      }
    }

    var markerItems = tooltipMarkerCfg.items;

    if (cfg.showTooltipMarker && markerItems.length) {
      tooltipMarkerCfg = this._getTooltipMarkerStyle(tooltipMarkerCfg);
      tooltip.setMarkers(tooltipMarkerCfg);
    } else {
      tooltip.clearMarkers();
    }

    tooltip.show();
  };

  _proto.showTooltip = function showTooltip(point) {
    var self = this;
    var chart = self.chart;
    var tooltipMarkerType;
    var tooltipMarkerItems = [];
    var items = [];
    var cfg = self._tooltipCfg;
    var marker;

    if (cfg.showItemMarker) {
      marker = cfg.itemMarkerStyle;
    }

    var geoms = chart.get('geoms');
    var coord = chart.get('coord');
    Util.each(geoms, function (geom) {
      if (geom.get('visible')) {
        var type = geom.get('type');
        var records = geom.getSnapRecords(point);
        var adjust = geom.get('adjust'); // 漏斗图和金子塔图tooltip位置有问题，暂时不开放显示

        if (type === 'interval' && adjust && adjust.type === 'symmetric') {
          return;
        }

        Util.each(records, function (record) {
          if (record.x && record.y) {
            var x = record.x,
                y = record.y,
                _origin = record._origin,
                color = record.color;
            var tooltipItem = {
              x: x,
              y: Util.isArray(y) ? y[1] : y,
              color: color || Global.defaultColor,
              origin: _origin,
              name: getTooltipName(geom, _origin),
              value: getTooltipValue(geom, _origin),
              title: getTooltipTitle(geom, _origin)
            };

            if (marker) {
              tooltipItem.marker = Util.mix({
                fill: color || Global.defaultColor
              }, marker);
            }

            items.push(tooltipItem);

            if (['line', 'area', 'path'].indexOf(type) !== -1) {
              tooltipMarkerType = 'circle';
              tooltipMarkerItems.push(tooltipItem);
            } else if (type === 'interval' && (coord.type === 'cartesian' || coord.type === 'rect')) {
              tooltipMarkerType = 'rect';
              tooltipItem.width = geom.getSize(record._origin);
              tooltipMarkerItems.push(tooltipItem);
            }
          }
        });
      }
    });

    if (items.length) {
      var tooltipMarkerCfg = {
        items: tooltipMarkerItems,
        type: tooltipMarkerType
      };

      self._setTooltip(point, items, tooltipMarkerCfg);
    } else {
      self.hideTooltip();
    }
  };

  _proto.hideTooltip = function hideTooltip() {
    var cfg = this._tooltipCfg;
    this._lastActive = null;
    var tooltip = this.tooltip;

    if (tooltip) {
      tooltip.hide();

      if (cfg.onHide) {
        cfg.onHide({
          tooltip: tooltip
        });
      }

      var canvas = this.chart.get('canvas');
      canvas.draw();
    }
  };

  _proto._handleEvent = function _handleEvent(methodName, method, action) {
    var canvas = this.canvas;
    Util.each([].concat(methodName), function (aMethod) {
      if (action === 'bind') {
        canvas.on(aMethod, method);
      } else {
        canvas.off(aMethod, method);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    var cfg = this._tooltipCfg;
    var triggerOn = cfg.triggerOn,
        triggerOff = cfg.triggerOff,
        alwaysShow = cfg.alwaysShow;
    triggerOn && this._handleEvent(triggerOn, this.handleShowEvent, 'bind'); // 如果 !alwaysShow, 则在手势离开后就隐藏

    if (!alwaysShow) {
      this._handleEvent(triggerOff, this.handleHideEvent, 'bind');
    }
  };

  _proto.unBindEvents = function unBindEvents() {
    var cfg = this._tooltipCfg;
    var triggerOn = cfg.triggerOn,
        triggerOff = cfg.triggerOff,
        alwaysShow = cfg.alwaysShow;
    triggerOn && this._handleEvent(triggerOn, this.handleShowEvent, 'unBind');

    if (!alwaysShow) {
      this._handleEvent(triggerOff, this.handleHideEvent, 'unBind');
    }
  };

  return TooltipController;
}();

module.exports = {
  init: function init(chart) {
    var tooltipController = new TooltipController({
      chart: chart
    });
    chart.set('tooltipController', tooltipController);

    chart.tooltip = function (enable, cfg) {
      if (Util.isObject(enable)) {
        cfg = enable;
        enable = true;
      }

      tooltipController.enable = enable;

      if (cfg) {
        tooltipController.cfg = cfg;
      }

      return this;
    };
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var tooltipController = chart.get('tooltipController');
    tooltipController.render();

    chart.showTooltip = function (point) {
      tooltipController.showTooltip(point);
      return this;
    };

    chart.hideTooltip = function () {
      tooltipController.hideTooltip();
      return this;
    };
  },
  clearInner: function clearInner(chart) {
    var tooltipController = chart.get('tooltipController');
    tooltipController.clear();
  }
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Marker = __webpack_require__(76);

var Container = __webpack_require__(205);

var TextBox = __webpack_require__(232);

var GAP = 4;
/**
 * TODOList：
 * 1. 移除 fixed 参数
 */

var Tooltip = /*#__PURE__*/function () {
  var _proto = Tooltip.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * wether show the crosshairs
       * @type {Object}
       */
      showCrosshairs: false,

      /**
       * the style for crosshairs
       * @type {Object}
       */
      crosshairsStyle: {
        stroke: 'rgba(0, 0, 0, 0.25)',
        lineWidth: 1
      },

      /**
       * the type of crosshairs, optional value is 'x', 'y' or 'xy', default is 'y'
       */
      crosshairsType: 'y',

      /**
       * show or hide the x axis tip
       */
      showXTip: false,

      /**
       * show or hide the y axis tip
       */
      showYTip: false,
      xTip: null,
      xTipBackground: {
        radius: 1,
        fill: 'rgba(0, 0, 0, 0.65)',
        padding: [3, 5]
      },
      yTip: null,
      yTipBackground: {
        radius: 1,
        fill: 'rgba(0, 0, 0, 0.65)',
        padding: [3, 5]
      },

      /**
       * the style for tooltip container's background
       * @type {Object}
       */
      background: null,

      /**
       * layout, can be horizontal or vertical
       * @type {String}
       */
      layout: 'horizontal',
      offsetX: 0,
      offsetY: 0
    };
  };

  function Tooltip(cfg) {
    Util.deepMix(this, this.getDefaultCfg(), cfg);
    var frontPlot = this.frontPlot,
        custom = this.custom;

    if (!custom) {
      // custom means user do customize
      var container = new Container(Util.mix({
        parent: frontPlot,
        zIndex: 3
      }, cfg));
      this.container = container;
      var fixed = this.fixed,
          background = this.background;

      if (!fixed) {
        this.tooltipArrow = frontPlot.addShape('Polygon', {
          className: 'tooltip-arrow',
          visible: false,
          zIndex: 2,
          attrs: Util.mix({
            points: []
          }, background)
        });
      }
    }

    if (this.showXTip) {
      var xTipBackground = this.xTipBackground;
      var xTipBox = new TextBox({
        className: 'xTip',
        background: xTipBackground,
        visible: false
      });
      frontPlot.add(xTipBox.container);
      this.xTipBox = xTipBox;
    }

    if (this.showYTip) {
      var yTipBackground = this.yTipBackground;
      var yTipBox = new TextBox({
        className: 'yTip',
        background: yTipBackground,
        visible: false
      });
      frontPlot.add(yTipBox.container);
      this.yTipBox = yTipBox;
    }

    if (this.showCrosshairs) {
      this._renderCrosshairs();
    }

    frontPlot.sort();
  }

  _proto.setContent = function setContent(title, items) {
    this.title = title;
    this.items = items;

    if (!this.custom) {
      var container = this.container;
      container.setTitle(title);
      container.setItems(items);
    }
  };

  _proto.setYTipContent = function setYTipContent(val) {
    var yTip = this.yTip;

    if (Util.isFunction(yTip)) {
      val = yTip(val);
    } else {
      val = Util.mix({
        text: val
      }, yTip);
    }

    this.yTipBox && this.yTipBox.updateContent(val);
  };

  _proto.setYTipPosition = function setYTipPosition(pos) {
    var plotRange = this.plotRange;
    var crosshairsShapeX = this.crosshairsShapeX;

    if (this.showYTip) {
      var yTipBox = this.yTipBox;
      var yTipHeight = yTipBox.getHeight();
      var yTipWidth = yTipBox.getWidth();
      var posX = plotRange.tl.x - yTipWidth;
      var posY = pos - yTipHeight / 2;

      if (posY <= plotRange.tl.y) {
        posY = plotRange.tl.y;
      }

      if (posY + yTipHeight >= plotRange.br.y) {
        posY = plotRange.br.y - yTipHeight;
      }

      if (posX < 0) {
        posX = plotRange.tl.x;
        crosshairsShapeX && crosshairsShapeX.attr('x1', plotRange.tl.x + yTipWidth);
      }

      yTipBox.updatePosition(posX, posY);
    }
  };

  _proto.setXTipContent = function setXTipContent(val) {
    var xTip = this.xTip;

    if (Util.isFunction(xTip)) {
      val = xTip(val);
    } else {
      val = Util.mix({
        text: val
      }, xTip);
    }

    this.xTipBox && this.xTipBox.updateContent(val);
  };

  _proto.setXTipPosition = function setXTipPosition(pos) {
    var showXTip = this.showXTip,
        canvas = this.canvas,
        plotRange = this.plotRange,
        xTipBox = this.xTipBox,
        crosshairsShapeY = this.crosshairsShapeY;

    if (showXTip) {
      // const el = canvas.get('el');
      // const canvasHeight = Util.getHeight(el);
      var canvasHeight = canvas.get('height');
      var xTipWidth = xTipBox.getWidth();
      var xTipHeight = xTipBox.getHeight();
      var posX = pos - xTipWidth / 2;
      var posY = plotRange.br.y;

      if (posX <= plotRange.tl.x) {
        posX = plotRange.tl.x;
      }

      if (posX + xTipWidth >= plotRange.tr.x) {
        posX = plotRange.tr.x - xTipWidth;
      }

      if (canvasHeight - posY < xTipHeight) {
        posY -= xTipHeight;
      }

      xTipBox.updatePosition(posX, posY);
      crosshairsShapeY && crosshairsShapeY.attr('y1', posY);
    }
  };

  _proto.setXCrosshairPosition = function setXCrosshairPosition(pos) {
    this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, pos);
  };

  _proto.setYCrosshairPosition = function setYCrosshairPosition(pos) {
    this.crosshairsShapeY && this.crosshairsShapeY.moveTo(pos, 0);
  };

  _proto.setPosition = function setPosition(items) {
    var container = this.container,
        plotRange = this.plotRange,
        offsetX = this.offsetX,
        offsetY = this.offsetY,
        fixed = this.fixed,
        tooltipArrow = this.tooltipArrow;

    if (!container) {
      return;
    }

    var containerBBox = container.container.getBBox();
    var minX = containerBBox.minX,
        minY = containerBBox.minY,
        width = containerBBox.width,
        height = containerBBox.height;
    var tl = plotRange.tl,
        tr = plotRange.tr;
    var posX = 0;
    var posY = tl.y - height - GAP + offsetY;

    if (fixed) {
      var x = (tl.x + tr.x) / 2;
      posX = x - width / 2 + offsetX;
    } else {
      var _x;

      if (items.length > 1) {
        _x = (items[0].x + items[items.length - 1].x) / 2;
      } else {
        _x = items[0].x;
      }

      posX = _x - width / 2 + offsetX;

      if (posX < tl.x) {
        posX = tl.x;
      }

      if (posX + width > tr.x) {
        posX = tr.x - width;
      }

      if (tooltipArrow) {
        tooltipArrow.attr('points', [{
          x: _x - 3,
          y: tl.y - GAP + offsetY
        }, {
          x: _x + 3,
          y: tl.y - GAP + offsetY
        }, {
          x: _x,
          y: tl.y + offsetY
        }]);
        var backShape = container.backShape;
        var radius = Util.parsePadding(backShape.attr('radius'));

        if (_x === tl.x) {
          radius[3] = 0;
          tooltipArrow.attr('points', [{
            x: tl.x,
            y: tl.y + offsetY
          }, {
            x: tl.x,
            y: tl.y - GAP + offsetY
          }, {
            x: tl.x + GAP,
            y: tl.y - GAP + offsetY
          }]);
        } else if (_x === tr.x) {
          radius[2] = 0;
          tooltipArrow.attr('points', [{
            x: tr.x,
            y: tl.y + offsetY
          }, {
            x: tr.x - GAP,
            y: tl.y - GAP + offsetY
          }, {
            x: tr.x,
            y: tl.y - GAP + offsetY
          }]);
        }

        backShape.attr('radius', radius);
      }
    }

    container.moveTo(posX - minX, posY - minY);
  };

  _proto.setMarkers = function setMarkers(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var self = this;
    var _cfg = cfg,
        items = _cfg.items,
        style = _cfg.style,
        type = _cfg.type;

    var markerGroup = self._getMarkerGroup(type);

    if (type === 'circle') {
      for (var i = 0, length = items.length; i < length; i++) {
        var item = items[i];
        var marker = new Marker({
          className: 'tooltip-circle-marker',
          attrs: Util.mix({
            x: item.x,
            y: item.y,
            stroke: item.color
          }, style)
        });
        markerGroup.add(marker);
      }
    } else {
      markerGroup.addShape('rect', {
        className: 'tooltip-rect-marker',
        attrs: style
      });
    }
  };

  _proto.clearMarkers = function clearMarkers() {
    var markerGroup = this.markerGroup;
    markerGroup && markerGroup.clear();
  };

  _proto.show = function show() {
    var crosshairsShapeX = this.crosshairsShapeX;
    var crosshairsShapeY = this.crosshairsShapeY;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var xTipBox = this.xTipBox;
    var yTipBox = this.yTipBox;
    var canvas = this.canvas;
    crosshairsShapeX && crosshairsShapeX.show();
    crosshairsShapeY && crosshairsShapeY.show();
    markerGroup && markerGroup.show();
    container && container.show();
    tooltipArrow && tooltipArrow.show();
    xTipBox && xTipBox.show();
    yTipBox && yTipBox.show();
    canvas.draw();
  };

  _proto.hide = function hide() {
    var crosshairsShapeX = this.crosshairsShapeX;
    var crosshairsShapeY = this.crosshairsShapeY;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var xTipBox = this.xTipBox;
    var yTipBox = this.yTipBox;
    crosshairsShapeX && crosshairsShapeX.hide();
    crosshairsShapeY && crosshairsShapeY.hide();
    markerGroup && markerGroup.hide();
    container && container.hide();
    tooltipArrow && tooltipArrow.hide();
    xTipBox && xTipBox.hide();
    yTipBox && yTipBox.hide();
  };

  _proto.destroy = function destroy() {
    var crosshairsShapeX = this.crosshairsShapeX;
    var crosshairsShapeY = this.crosshairsShapeY;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var xTipBox = this.xTipBox;
    var yTipBox = this.yTipBox;
    crosshairsShapeX && crosshairsShapeX.remove(true);
    crosshairsShapeY && crosshairsShapeY.remove(true);
    markerGroup && markerGroup.remove(true);
    tooltipArrow && tooltipArrow.remove(true);
    container && container.clear();
    xTipBox && xTipBox.clear();
    yTipBox && yTipBox.clear();
    this.destroyed = true;
  };

  _proto._getMarkerGroup = function _getMarkerGroup(type) {
    var markerGroup = this.markerGroup;

    if (!markerGroup) {
      if (type === 'circle') {
        markerGroup = this.frontPlot.addGroup({
          zIndex: 1
        });
        this.frontPlot.sort();
      } else {
        markerGroup = this.backPlot.addGroup();
      }

      this.markerGroup = markerGroup;
    } else {
      markerGroup.clear();
    }

    return markerGroup;
  };

  _proto._renderCrosshairs = function _renderCrosshairs() {
    var crosshairsType = this.crosshairsType,
        crosshairsStyle = this.crosshairsStyle,
        frontPlot = this.frontPlot,
        plotRange = this.plotRange;
    var tl = plotRange.tl,
        br = plotRange.br;

    if (Util.directionEnabled(crosshairsType, 'x')) {
      this.crosshairsShapeX = frontPlot.addShape('Line', {
        className: 'tooltip-crosshairs-x',
        zIndex: 0,
        visible: false,
        attrs: Util.mix({
          x1: tl.x,
          y1: 0,
          x2: br.x,
          y2: 0
        }, crosshairsStyle)
      });
    }

    if (Util.directionEnabled(crosshairsType, 'y')) {
      this.crosshairsShapeY = frontPlot.addShape('Line', {
        className: 'tooltip-crosshairs-y',
        zIndex: 0,
        visible: false,
        attrs: Util.mix({
          x1: 0,
          y1: br.y,
          x2: 0,
          y2: tl.y
        }, crosshairsStyle)
      });
    }
  };

  return Tooltip;
}();

module.exports = Tooltip;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var _require = __webpack_require__(16),
    Group = _require.Group;

var TextBox = /*#__PURE__*/function () {
  var _proto = TextBox.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      x: 0,
      y: 0,
      content: '',
      textStyle: {
        fontSize: 12,
        fill: '#fff',
        textAlign: 'center',
        textBaseline: 'middle'
      },
      background: {
        radius: 1,
        fill: 'rgba(0, 0, 0, 0.65)',
        padding: [3, 5]
      },
      width: 0,
      height: 0,
      className: ''
    };
  };

  function TextBox(cfg) {
    Util.deepMix(this, this.getDefaultCfg(), cfg);

    this._init();

    var content = this.content,
        x = this.x,
        y = this.y;

    if (!Util.isNil(content)) {
      this.updateContent(content);
    }

    this.updatePosition(x, y);
  }

  _proto._init = function _init() {
    var content = this.content,
        textStyle = this.textStyle,
        background = this.background,
        className = this.className,
        visible = this.visible;
    var container = new Group({
      className: className,
      zIndex: 0,
      visible: visible
    });
    var text = container.addShape('Text', {
      className: className + '-text',
      zIndex: 1,
      attrs: Util.mix({
        text: content,
        x: 0,
        y: 0
      }, textStyle)
    });
    var backgroundShape = container.addShape('Rect', {
      className: className + '-bg',
      zIndex: -1,
      attrs: Util.mix({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, background)
    });
    container.sort();
    this.container = container;
    this.textShape = text;
    this.backgroundShape = backgroundShape;
  };

  _proto._getBBox = function _getBBox() {
    var textShape = this.textShape;
    var background = this.background;
    var textBBox = textShape.getBBox();
    var padding = Util.parsePadding(background.padding);
    var width = textBBox.width + padding[1] + padding[3];
    var height = textBBox.height + padding[0] + padding[2];
    var x = textBBox.minX - padding[3];
    var y = textBBox.minY - padding[0];
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  };

  _proto.updateContent = function updateContent(text) {
    var textShape = this.textShape,
        backgroundShape = this.backgroundShape;

    if (!Util.isNil(text)) {
      if (!Util.isObject(text)) {
        text = {
          text: text
        };
      }

      textShape.attr(text); // update box shape

      var _this$_getBBox = this._getBBox(),
          x = _this$_getBBox.x,
          y = _this$_getBBox.y,
          tipWidth = _this$_getBBox.width,
          tipHeight = _this$_getBBox.height;

      var width = this.width || tipWidth;
      var height = this.height || tipHeight;
      backgroundShape.attr({
        x: x,
        y: y,
        width: width,
        height: height
      });
      this._width = width;
      this._height = height;
      this.content = text.text;
    }
  };

  _proto.updatePosition = function updatePosition(x, y) {
    var container = this.container;

    var _this$_getBBox2 = this._getBBox(),
        xMin = _this$_getBBox2.x,
        yMin = _this$_getBBox2.y;

    container.moveTo(x - xMin, y - yMin);
    this.x = x - xMin;
    this.y = y - yMin;
  };

  _proto.getWidth = function getWidth() {
    return this._width;
  };

  _proto.getHeight = function getHeight() {
    return this._height;
  };

  _proto.show = function show() {
    this.container.show();
  };

  _proto.hide = function hide() {
    this.container.hide();
  };

  _proto.clear = function clear() {
    var container = this.container;
    container.clear();
    container.remove(true);
    this.container = null;
    this.textShape = null;
    this.backgroundShape = null;
  };

  return TextBox;
}();

module.exports = TextBox;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var Guide = __webpack_require__(23);

var Global = __webpack_require__(6); // register the default configuration for Guide


Global.guide = Util.deepMix({
  line: {
    style: {
      stroke: '#a3a3a3',
      lineWidth: 1
    },
    top: true
  },
  text: {
    style: {
      fill: '#787878',
      textAlign: 'center',
      textBaseline: 'middle'
    },
    offsetX: 0,
    offsetY: 0,
    top: true
  },
  rect: {
    style: {
      fill: '#fafafa'
    },
    top: false
  },
  arc: {
    style: {
      stroke: '#a3a3a3'
    },
    top: true
  },
  html: {
    offsetX: 0,
    offsetY: 0,
    alignX: 'center',
    alignY: 'middle'
  },
  tag: {
    top: true,
    offsetX: 0,
    offsetY: 0,
    side: 4,
    background: {
      padding: 5,
      radius: 2,
      fill: '#1890FF'
    },
    textStyle: {
      fontSize: 12,
      fill: '#fff',
      textAlign: 'center',
      textBaseline: 'middle'
    }
  },
  point: {
    top: true,
    offsetX: 0,
    offsetY: 0,
    style: {
      fill: '#fff',
      r: 3,
      lineWidth: 2,
      stroke: '#1890ff'
    }
  }
}, Global.guide || {});

var GuideController = /*#__PURE__*/function () {
  function GuideController(cfg) {
    this.guides = [];
    this.xScale = null;
    this.yScales = null;
    this.guideShapes = [];
    Util.mix(this, cfg);
  }

  var _proto = GuideController.prototype;

  _proto._toString = function _toString(position) {
    if (Util.isFunction(position)) {
      position = position(this.xScale, this.yScales);
    }

    position = position.toString();
    return position;
  };

  _proto._getId = function _getId(shape, guide) {
    var id = guide.id;

    if (!id) {
      var type = guide.type;

      if (type === 'arc' || type === 'line' || type === 'rect') {
        id = this._toString(guide.start) + '-' + this._toString(guide.end);
      } else {
        id = this._toString(guide.position);
      }
    }

    return id;
  };

  _proto.paint = function paint(coord) {
    var self = this;
    var chart = self.chart,
        guides = self.guides,
        xScale = self.xScale,
        yScales = self.yScales;
    var guideShapes = [];
    Util.each(guides, function (guide, idx) {
      guide.xScale = xScale;
      guide.yScales = yScales;
      var container;

      if (guide.type === 'regionFilter') {
        // TODO: RegionFilter support animation
        guide.chart = chart;
      } else {
        container = guide.top ? self.frontPlot : self.backPlot;
      }

      guide.coord = coord;
      guide.container = container;
      guide.canvas = chart.get('canvas');
      var shape = guide.render(coord, container);

      if (shape) {
        var id = self._getId(shape, guide);

        [].concat(shape).forEach(function (s) {
          s._id = s.get('className') + '-' + id;
          s.set('index', idx);
          guideShapes.push(s);
        });
      }
    });
    self.guideShapes = guideShapes;
  };

  _proto.clear = function clear() {
    this.reset();
    this.guides = [];
    return this;
  };

  _proto.reset = function reset() {
    var guides = this.guides;
    Util.each(guides, function (guide) {
      guide.remove();
    });
  };

  _proto._createGuide = function _createGuide(type, cfg) {
    var ClassName = Util.upperFirst(type);
    var guide = new Guide[ClassName](Util.deepMix({}, Global.guide[type], cfg));
    this.guides.push(guide);
    return guide;
  };

  _proto.line = function line(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('line', cfg);
  };

  _proto.text = function text(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('text', cfg);
  };

  _proto.arc = function arc(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('arc', cfg);
  };

  _proto.html = function html(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('html', cfg);
  };

  _proto.rect = function rect(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('rect', cfg);
  };

  _proto.tag = function tag(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('tag', cfg);
  };

  _proto.point = function point(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('point', cfg);
  };

  _proto.regionFilter = function regionFilter(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    return this._createGuide('regionFilter', cfg);
  };

  return GuideController;
}();

module.exports = {
  init: function init(chart) {
    var guideController = new GuideController({
      frontPlot: chart.get('frontPlot').addGroup({
        zIndex: 20,
        className: 'guideContainer'
      }),
      backPlot: chart.get('backPlot').addGroup({
        className: 'guideContainer'
      })
    });
    chart.set('guideController', guideController);
    /**
     * 为图表添加 guide
     * @return {GuideController} 返回 guide 控制器
     */

    chart.guide = function () {
      return guideController;
    };
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var guideController = chart.get('guideController');

    if (!guideController.guides.length) {
      return;
    }

    var xScale = chart.getXScale();
    var yScales = chart.getYScales();
    var coord = chart.get('coord');
    guideController.xScale = xScale;
    guideController.yScales = yScales;
    guideController.chart = chart; // for regionFilter

    guideController.paint(coord);
  },
  clear: function clear(chart) {
    chart.get('guideController').clear();
  },
  repaint: function repaint(chart) {
    chart.get('guideController').reset();
  }
};

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(0);

var List = __webpack_require__(205);

var Global = __webpack_require__(6);

var LEGEND_GAP = 12;
var MARKER_SIZE = 3;
var DEFAULT_CFG = {
  itemMarginBottom: 12,
  itemGap: 10,
  showTitle: false,
  titleStyle: {
    fontSize: 12,
    fill: '#808080',
    textAlign: 'start',
    textBaseline: 'top'
  },
  nameStyle: {
    fill: '#808080',
    fontSize: 12,
    textAlign: 'start',
    textBaseline: 'middle'
  },
  valueStyle: {
    fill: '#000000',
    fontSize: 12,
    textAlign: 'start',
    textBaseline: 'middle'
  },
  unCheckStyle: {
    fill: '#bfbfbf'
  },
  itemWidth: 'auto',
  wordSpace: 6,
  selectedMode: 'multiple' // 'multiple' or 'single'

}; // Register the default configuration for Legend

Global.legend = Util.deepMix({
  common: DEFAULT_CFG,
  // common legend configuration
  right: Util.mix({
    position: 'right',
    layout: 'vertical'
  }, DEFAULT_CFG),
  left: Util.mix({
    position: 'left',
    layout: 'vertical'
  }, DEFAULT_CFG),
  top: Util.mix({
    position: 'top',
    layout: 'horizontal'
  }, DEFAULT_CFG),
  bottom: Util.mix({
    position: 'bottom',
    layout: 'horizontal'
  }, DEFAULT_CFG)
}, Global.legend || {});

function getPaddingByPos(pos, appendPadding) {
  var padding = 0;
  appendPadding = Util.parsePadding(appendPadding);

  switch (pos) {
    case 'top':
      padding = appendPadding[0];
      break;

    case 'right':
      padding = appendPadding[1];
      break;

    case 'bottom':
      padding = appendPadding[2];
      break;

    case 'left':
      padding = appendPadding[3];
      break;

    default:
      break;
  }

  return padding;
}

var LegendController = /*#__PURE__*/function () {
  function LegendController(cfg) {
    var _this = this;

    this.handleEvent = function (ev) {
      var self = _this;

      function findItem(x, y) {
        var result = null;
        var legends = self.legends;
        Util.each(legends, function (legendItems) {
          Util.each(legendItems, function (legend) {
            var itemsGroup = legend.itemsGroup,
                legendHitBoxes = legend.legendHitBoxes;
            var children = itemsGroup.get('children');

            if (children.length) {
              var legendPosX = legend.x;
              var legendPosY = legend.y;
              Util.each(legendHitBoxes, function (box, index) {
                if (x >= box.x + legendPosX && x <= box.x + box.width + legendPosX && y >= box.y + legendPosY && y <= box.height + box.y + legendPosY) {
                  // inbox
                  result = {
                    clickedItem: children[index],
                    clickedLegend: legend
                  };
                  return false;
                }
              });
            }
          });
        });
        return result;
      }

      var chart = self.chart;

      var _Util$createEvent = Util.createEvent(ev, chart),
          x = _Util$createEvent.x,
          y = _Util$createEvent.y;

      var clicked = findItem(x, y);

      if (clicked && clicked.clickedLegend.clickable !== false) {
        var clickedItem = clicked.clickedItem,
            clickedLegend = clicked.clickedLegend;

        if (clickedLegend.onClick) {
          ev.clickedItem = clickedItem;
          clickedLegend.onClick(ev);
        } else if (!clickedLegend.custom) {
          var checked = clickedItem.get('checked');
          var value = clickedItem.get('dataValue');
          var filteredVals = clickedLegend.filteredVals,
              field = clickedLegend.field,
              selectedMode = clickedLegend.selectedMode;
          var isSingeSelected = selectedMode === 'single';

          if (isSingeSelected) {
            chart.filter(field, function (val) {
              return val === value;
            });
          } else {
            if (checked) {
              filteredVals.push(value);
            } else {
              Util.Array.remove(filteredVals, value);
            }

            chart.filter(field, function (val) {
              return filteredVals.indexOf(val) === -1;
            });
          }

          chart.repaint();
        }
      }
    };

    this.legendCfg = {};
    this.enable = true;
    this.position = 'top';
    Util.mix(this, cfg);
    var _chart = this.chart;
    this.canvasDom = _chart.get('canvas').get('el');
    this.clear();
  }

  var _proto = LegendController.prototype;

  _proto.addLegend = function addLegend(scale, items, filteredVals) {
    var self = this;
    var legendCfg = self.legendCfg;
    var field = scale.field;
    var fieldCfg = legendCfg[field];

    if (fieldCfg === false) {
      return null;
    }

    if (fieldCfg && fieldCfg.custom) {
      self.addCustomLegend(field);
    } else {
      var position = legendCfg.position || self.position;

      if (fieldCfg && fieldCfg.position) {
        position = fieldCfg.position;
      }

      if (scale.isCategory) {
        self._addCategoryLegend(scale, items, position, filteredVals);
      }
    }
  };

  _proto.addCustomLegend = function addCustomLegend(field) {
    var self = this;
    var legendCfg = self.legendCfg;

    if (field && legendCfg[field]) {
      legendCfg = legendCfg[field];
    }

    var position = legendCfg.position || self.position;
    var legends = self.legends;
    legends[position] = legends[position] || [];
    var items = legendCfg.items;

    if (!items) {
      return null;
    }

    var container = self.container;
    Util.each(items, function (item) {
      if (!Util.isPlainObject(item.marker)) {
        item.marker = {
          symbol: item.marker || 'circle',
          fill: item.fill,
          radius: MARKER_SIZE
        };
      } else {
        item.marker.radius = item.marker.radius || MARKER_SIZE;
      }

      item.checked = Util.isNil(item.checked) ? true : item.checked;
      item.name = item.name || item.value;
    });
    var legend = new List(Util.deepMix({}, Global.legend[position], legendCfg, {
      maxLength: self._getMaxLength(position),
      items: items,
      parent: container
    }));
    legends[position].push(legend);
  };

  _proto.clear = function clear() {
    var legends = this.legends;
    Util.each(legends, function (legendItems) {
      Util.each(legendItems, function (legend) {
        legend.clear();
      });
    });
    this.legends = {};
    this.unBindEvents();
  };

  _proto._isFiltered = function _isFiltered(scale, values, value) {
    var rst = false;
    Util.each(values, function (val) {
      rst = rst || scale.getText(val) === scale.getText(value);

      if (rst) {
        return false;
      }
    });
    return rst;
  };

  _proto._getMaxLength = function _getMaxLength(position) {
    var chart = this.chart;
    var appendPadding = Util.parsePadding(chart.get('appendPadding'));
    return position === 'right' || position === 'left' ? chart.get('height') - (appendPadding[0] + appendPadding[2]) : chart.get('width') - (appendPadding[1] + appendPadding[3]);
  };

  _proto._addCategoryLegend = function _addCategoryLegend(scale, items, position, filteredVals) {
    var self = this;
    var legendCfg = self.legendCfg,
        legends = self.legends,
        container = self.container,
        chart = self.chart;
    var field = scale.field;
    legends[position] = legends[position] || [];
    var symbol = 'circle';

    if (legendCfg[field] && legendCfg[field].marker) {
      symbol = legendCfg[field].marker;
    } else if (legendCfg.marker) {
      symbol = legendCfg.marker;
    }

    Util.each(items, function (item) {
      if (Util.isPlainObject(symbol)) {
        Util.mix(item.marker, symbol);
      } else {
        item.marker.symbol = symbol;
      }

      if (filteredVals) {
        item.checked = !self._isFiltered(scale, filteredVals, item.dataValue);
      }
    });
    var legendItems = chart.get('legendItems');
    legendItems[field] = items;
    var lastCfg = Util.deepMix({}, Global.legend[position], legendCfg[field] || legendCfg, {
      maxLength: self._getMaxLength(position),
      items: items,
      field: field,
      filteredVals: filteredVals,
      parent: container
    });

    if (lastCfg.showTitle) {
      Util.deepMix(lastCfg, {
        title: scale.alias || scale.field
      });
    }

    var legend = new List(lastCfg);
    legends[position].push(legend);
    return legend;
  };

  _proto._alignLegend = function _alignLegend(legend, pre, position) {
    var self = this;
    var _self$plotRange = self.plotRange,
        tl = _self$plotRange.tl,
        bl = _self$plotRange.bl;
    var chart = self.chart;
    var offsetX = legend.offsetX || 0;
    var offsetY = legend.offsetY || 0;
    var chartWidth = chart.get('width');
    var chartHeight = chart.get('height');
    var appendPadding = Util.parsePadding(chart.get('appendPadding'));
    var legendHeight = legend.getHeight();
    var legendWidth = legend.getWidth();
    var x = 0;
    var y = 0;

    if (position === 'left' || position === 'right') {
      var verticalAlign = legend.verticalAlign || 'middle';
      var height = Math.abs(tl.y - bl.y);
      x = position === 'left' ? appendPadding[3] : chartWidth - legendWidth - appendPadding[1];
      y = (height - legendHeight) / 2 + tl.y;

      if (verticalAlign === 'top') {
        y = tl.y;
      } else if (verticalAlign === 'bottom') {
        y = bl.y - legendHeight;
      }

      if (pre) {
        y = pre.get('y') - legendHeight - LEGEND_GAP;
      }
    } else {
      var align = legend.align || 'left';
      x = appendPadding[3];

      if (align === 'center') {
        x = chartWidth / 2 - legendWidth / 2;
      } else if (align === 'right') {
        x = chartWidth - (legendWidth + appendPadding[1]);
      }

      y = position === 'top' ? appendPadding[0] + Math.abs(legend.container.getBBox().minY) : chartHeight - legendHeight;

      if (pre) {
        var preWidth = pre.getWidth();
        x = pre.x + preWidth + LEGEND_GAP;
      }
    }

    if (position === 'bottom' && offsetY > 0) {
      offsetY = 0;
    }

    if (position === 'right' && offsetX > 0) {
      offsetX = 0;
    }

    legend.moveTo(x + offsetX, y + offsetY);
  };

  _proto.alignLegends = function alignLegends() {
    var self = this;
    var legends = self.legends;
    Util.each(legends, function (legendItems, position) {
      Util.each(legendItems, function (legend, index) {
        var pre = legendItems[index - 1];

        self._alignLegend(legend, pre, position);
      });
    });
    return self;
  };

  _proto.bindEvents = function bindEvents() {
    var legendCfg = this.legendCfg;
    var triggerOn = legendCfg.triggerOn || 'touchstart';
    Util.addEventListener(this.canvasDom, triggerOn, this.handleEvent);
  };

  _proto.unBindEvents = function unBindEvents() {
    var legendCfg = this.legendCfg;
    var triggerOn = legendCfg.triggerOn || 'touchstart';
    Util.removeEventListener(this.canvasDom, triggerOn, this.handleEvent);
  };

  return LegendController;
}();

module.exports = {
  init: function init(chart) {
    var legendController = new LegendController({
      container: chart.get('backPlot'),
      plotRange: chart.get('plotRange'),
      chart: chart
    });
    chart.set('legendController', legendController);

    chart.legend = function (field, cfg) {
      var legendCfg = legendController.legendCfg;
      legendController.enable = true;

      if (Util.isBoolean(field)) {
        legendController.enable = field;
        legendCfg = cfg || {};
      } else if (Util.isObject(field)) {
        legendCfg = field;
      } else {
        legendCfg[field] = cfg;
      }

      legendController.legendCfg = legendCfg;
      return this;
    };
  },
  beforeGeomDraw: function beforeGeomDraw(chart) {
    var legendController = chart.get('legendController');
    if (!legendController.enable) return null; // legend is not displayed

    var legendCfg = legendController.legendCfg;

    if (legendCfg && legendCfg.custom) {
      legendController.addCustomLegend();
    } else {
      var legendItems = chart.getLegendItems();
      var scales = chart.get('scales');
      var filters = chart.get('filters');
      Util.each(legendItems, function (items, field) {
        var scale = scales[field];
        var values = scale.values;
        var filteredVals;

        if (filters && filters[field]) {
          filteredVals = values.filter(function (v) {
            return !filters[field](v);
          });
        } else {
          filteredVals = [];
        }

        legendController.addLegend(scale, items, filteredVals);
      });
    }

    if (legendCfg && legendCfg.clickable !== false) {
      legendController.bindEvents();
    }

    var legends = legendController.legends;
    var legendRange = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    Util.each(legends, function (legendItems, position) {
      var padding = 0;
      Util.each(legendItems, function (legend) {
        var width = legend.getWidth();
        var height = legend.getHeight();

        if (position === 'top' || position === 'bottom') {
          padding = Math.max(padding, height);

          if (legend.offsetY > 0) {
            padding += legend.offsetY;
          }
        } else {
          padding = Math.max(padding, width);

          if (legend.offsetX > 0) {
            padding += legend.offsetX;
          }
        }
      });
      legendRange[position] = padding + getPaddingByPos(position, chart.get('appendPadding'));
    });
    chart.set('legendRange', legendRange);
  },
  afterGeomDraw: function afterGeomDraw(chart) {
    var legendController = chart.get('legendController');
    legendController.alignLegends();
  },
  clearInner: function clearInner(chart) {
    var legendController = chart.get('legendController');
    legendController.clear();
    chart.set('legendRange', null);
  }
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Handle the detail animations
 * @author sima.zhang1990@gmail.com
 */
var Util = __webpack_require__(0);

var Element = __webpack_require__(46);

var Timeline = __webpack_require__(236);

var Animator = __webpack_require__(237);

var Animate = __webpack_require__(206);

var ShapeAction = __webpack_require__(239);

var GroupAction = __webpack_require__(240);

var Chart = __webpack_require__(30);

var timeline;

Element.prototype.animate = function () {
  var attrs = Util.mix({}, this.get('attrs'));
  return new Animator(this, attrs, timeline);
};

Chart.prototype.animate = function (cfg) {
  this.set('animate', cfg);
  return this;
};

Animate.Action = ShapeAction;
Animate.defaultCfg = {
  interval: {
    enter: function enter(coord) {
      if (coord.isPolar && coord.transposed) {
        // for pie chart
        return function (shape) {
          shape.set('zIndex', -1);
          var container = shape.get('parent');
          container.sort();
        };
      }

      return ShapeAction.fadeIn;
    }
  },
  area: {
    enter: function enter(coord) {
      if (coord.isPolar) return null;
      return ShapeAction.fadeIn;
    }
  },
  line: {
    enter: function enter(coord) {
      if (coord.isPolar) return null;
      return ShapeAction.fadeIn;
    }
  },
  path: {
    enter: function enter(coord) {
      if (coord.isPolar) return null;
      return ShapeAction.fadeIn;
    }
  }
};
var GROUP_ANIMATION = {
  line: function line(coord) {
    if (coord.isPolar) {
      return GroupAction.groupScaleInXY;
    }

    return GroupAction.groupWaveIn;
  },
  area: function area(coord) {
    if (coord.isPolar) {
      return GroupAction.groupScaleInXY;
    }

    return GroupAction.groupWaveIn;
  },
  path: function path(coord) {
    if (coord.isPolar) {
      return GroupAction.groupScaleInXY;
    }

    return GroupAction.groupWaveIn;
  },
  point: function point() {
    return GroupAction.shapesScaleInXY;
  },
  interval: function interval(coord) {
    var result;

    if (coord.isPolar) {
      // polar coodinate
      result = GroupAction.groupScaleInXY;

      if (coord.transposed) {
        // pie chart
        result = GroupAction.groupWaveIn;
      }
    } else {
      result = coord.transposed ? GroupAction.groupScaleInX : GroupAction.groupScaleInY;
    }

    return result;
  },
  schema: function schema() {
    return GroupAction.groupWaveIn;
  }
};

function diff(fromAttrs, toAttrs) {
  var endState = {};

  for (var k in toAttrs) {
    if (Util.isNumber(fromAttrs[k]) && fromAttrs[k] !== toAttrs[k]) {
      endState[k] = toAttrs[k];
    } else if (Util.isArray(fromAttrs[k]) && JSON.stringify(fromAttrs[k]) !== JSON.stringify(toAttrs[k])) {
      endState[k] = toAttrs[k];
    }
  }

  return endState;
} // Add a unique id identifier to each shape


function _getShapeId(geom, dataObj, geomIdx) {
  var type = geom.get('type');
  var id = 'geom' + geomIdx + '-' + type;
  var xScale = geom.getXScale();
  var yScale = geom.getYScale();
  var xField = xScale.field || 'x';
  var yField = yScale.field || 'y';
  var yVal = dataObj[yField];
  var xVal;

  if (xScale.isIdentity) {
    xVal = xScale.value;
  } else {
    xVal = dataObj[xField];
  }

  if (type === 'interval' || type === 'schema') {
    id += '-' + xVal;
  } else if (type === 'line' || type === 'area' || type === 'path') {
    id += '-' + type;
  } else {
    id += xScale.isCategory ? '-' + xVal : '-' + xVal + '-' + yVal;
  }

  var groupScales = geom._getGroupScales();

  Util.each(groupScales, function (groupScale) {
    var field = groupScale.field;

    if (groupScale.type !== 'identity') {
      id += '-' + dataObj[field];
    }
  });
  return id;
} // get geometry's shapes


function getShapes(geoms, chart, coord) {
  var shapes = [];
  Util.each(geoms, function (geom, geomIdx) {
    var geomContainer = geom.get('container');
    var geomShapes = geomContainer.get('children');
    var type = geom.get('type');
    var animateCfg = Util.isNil(geom.get('animateCfg')) ? _getAnimateCfgByShapeType(type, chart) : geom.get('animateCfg');

    if (animateCfg !== false) {
      Util.each(geomShapes, function (shape, index) {
        if (shape.get('className') === type) {
          shape._id = _getShapeId(geom, shape.get('origin')._origin, geomIdx);
          shape.set('coord', coord);
          shape.set('animateCfg', animateCfg);
          shape.set('index', index);
          shapes.push(shape);
        }
      });
    }

    geom.set('shapes', geomShapes);
  });
  return shapes;
}

function cache(shapes) {
  var rst = {};

  for (var i = 0, len = shapes.length; i < len; i++) {
    var shape = shapes[i];
    if (!shape._id || shape.isClip) continue;
    var id = shape._id;
    rst[id] = {
      _id: id,
      type: shape.get('type'),
      // the type of shape
      attrs: Util.mix({}, shape._attrs.attrs),
      // the graphics attributes of shape
      className: shape.get('className'),
      geomType: shape.get('className'),
      index: shape.get('index'),
      coord: shape.get('coord'),
      animateCfg: shape.get('animateCfg')
    };
  }

  return rst;
}

function getAnimate(geomType, coord, animationType, animationName) {
  var result;

  if (Util.isFunction(animationName)) {
    result = animationName;
  } else if (Util.isString(animationName)) {
    result = Animate.Action[animationName];
  } else {
    result = Animate.getAnimation(geomType, coord, animationType);
  }

  return result;
}

function getAnimateCfg(geomType, animationType, animateCfg) {
  if (animateCfg === false || Util.isObject(animateCfg) && animateCfg[animationType] === false) {
    return false;
  }

  var defaultCfg = Animate.getAnimateCfg(geomType, animationType);

  if (animateCfg && animateCfg[animationType]) {
    return Util.deepMix({}, defaultCfg, animateCfg[animationType]);
  }

  return defaultCfg;
}

function addAnimate(cache, shapes, canvas) {
  var animate;
  var animateCfg; // the order of animation: leave -> update -> enter

  var updateShapes = [];
  var newShapes = [];
  Util.each(shapes, function (shape) {
    var result = cache[shape._id];

    if (!result) {
      newShapes.push(shape);
    } else {
      shape.set('cacheShape', result);
      updateShapes.push(shape);
      delete cache[shape._id];
    }
  }); // first do the leave animation

  Util.each(cache, function (deletedShape) {
    var className = deletedShape.className,
        coord = deletedShape.coord,
        _id = deletedShape._id,
        attrs = deletedShape.attrs,
        index = deletedShape.index,
        type = deletedShape.type;
    animateCfg = getAnimateCfg(className, 'leave', deletedShape.animateCfg);
    if (animateCfg === false) return true;
    animate = getAnimate(className, coord, 'leave', animateCfg.animation);

    if (Util.isFunction(animate)) {
      var tempShape = canvas.addShape(type, {
        attrs: attrs,
        index: index,
        canvas: canvas,
        className: className
      });
      tempShape._id = _id;
      animate(tempShape, animateCfg, coord);
    }
  }); // then do the update animation

  Util.each(updateShapes, function (updateShape) {
    var className = updateShape.get('className');
    animateCfg = getAnimateCfg(className, 'update', updateShape.get('animateCfg'));
    if (animateCfg === false) return true;
    var coord = updateShape.get('coord');
    var cacheAttrs = updateShape.get('cacheShape').attrs;
    var endState = diff(cacheAttrs, updateShape._attrs.attrs); // 判断如果属性相同的话就不进行变换

    if (Object.keys(endState).length) {
      animate = getAnimate(className, coord, 'update', animateCfg.animation);

      if (Util.isFunction(animate)) {
        animate(updateShape, animateCfg, coord);
      } else {
        updateShape.attr(cacheAttrs);
        updateShape.animate().to({
          attrs: endState,
          duration: animateCfg.duration,
          easing: animateCfg.easing,
          delay: animateCfg.delay
        }).onEnd(function () {
          updateShape.set('cacheShape', null);
        });
      }
    }
  }); // last, enter animation

  Util.each(newShapes, function (newShape) {
    // 新图形元素的进场元素
    var className = newShape.get('className');
    var coord = newShape.get('coord');
    animateCfg = getAnimateCfg(className, 'enter', newShape.get('animateCfg'));
    if (animateCfg === false) return true;
    animate = getAnimate(className, coord, 'enter', animateCfg.animation);

    if (Util.isFunction(animate)) {
      if (className === 'interval' && coord.isPolar && coord.transposed) {
        var index = newShape.get('index');
        var lastShape = updateShapes[index - 1];
        animate(newShape, animateCfg, lastShape);
      } else {
        animate(newShape, animateCfg, coord);
      }
    }
  });
}

function _getAnimateCfgByShapeType(type, chart) {
  if (!type) {
    return null;
  }

  var animateCfg = chart.get('animate');

  if (type.indexOf('guide-tag') > -1) {
    type = 'guide-tag';
  }

  if (Util.isObject(animateCfg)) {
    return animateCfg[type];
  }

  if (animateCfg === false) {
    return false;
  }

  return null;
}

module.exports = {
  afterCanvasInit: function afterCanvasInit()
  /* chart */
  {
    timeline = new Timeline();
    timeline.play();
  },
  beforeCanvasDraw: function beforeCanvasDraw(chart) {
    if (chart.get('animate') === false) {
      return;
    }

    var isUpdate = chart.get('isUpdate');
    var canvas = chart.get('canvas');
    var coord = chart.get('coord');
    var geoms = chart.get('geoms');
    var caches = canvas.get('caches') || [];

    if (caches.length === 0) {
      isUpdate = false;
    }

    var cacheShapes = getShapes(geoms, chart, coord);

    var _chart$get = chart.get('axisController'),
        frontPlot = _chart$get.frontPlot,
        backPlot = _chart$get.backPlot;

    var axisShapes = frontPlot.get('children').concat(backPlot.get('children'));
    var guideShapes = [];

    if (chart.get('guideController')) {
      guideShapes = chart.get('guideController').guideShapes;
    }

    var componentShapes = [];
    axisShapes.concat(guideShapes).forEach(function (s) {
      var className = s.get('className');

      var animateCfg = _getAnimateCfgByShapeType(className, chart);

      s.set('coord', coord);
      s.set('animateCfg', animateCfg);
      componentShapes.push(s);
      cacheShapes.push(s);
    });
    canvas.set('caches', cache(cacheShapes));

    if (isUpdate) {
      addAnimate(caches, cacheShapes, canvas);
    } else {
      // do the appear animation
      var animateCfg;
      var animate;
      Util.each(geoms, function (geom) {
        var type = geom.get('type');
        var geomCfg = Util.isNil(geom.get('animateCfg')) ? _getAnimateCfgByShapeType(type, chart) : geom.get('animateCfg');

        if (geomCfg !== false) {
          animateCfg = getAnimateCfg(type, 'appear', geomCfg);
          animate = getAnimate(type, coord, 'appear', animateCfg.animation);

          if (Util.isFunction(animate)) {
            var shapes = geom.get('shapes');
            Util.each(shapes, function (shape) {
              animate(shape, animateCfg, coord);
            });
          } else if (GROUP_ANIMATION[type]) {
            // do the default animation
            animate = GroupAction[animateCfg.animation] || GROUP_ANIMATION[type](coord);
            var yScale = geom.getYScale();
            var zeroY = coord.convertPoint({
              x: 0,
              y: yScale.scale(geom.getYMinValue())
            });
            var container = geom.get('container');
            animate && animate(container, animateCfg, coord, zeroY);
          }
        }
      }); // do the animation of components

      Util.each(componentShapes, function (shape) {
        var animateCfg = shape.get('animateCfg');
        var className = shape.get('className');

        if (animateCfg && animateCfg.appear) {
          // if user configure
          var defaultCfg = Animate.getAnimateCfg(className, 'appear');
          var appearCfg = Util.deepMix({}, defaultCfg, animateCfg.appear);

          var _animate = getAnimate(className, coord, 'appear', appearCfg.animation);

          if (Util.isFunction(_animate)) {
            _animate(shape, appearCfg, coord);
          }
        }
      });
    }
  },
  afterCanvasDestroyed: function afterCanvasDestroyed()
  /* chart */
  {
    timeline.stop();
  }
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(70),
    requestAnimationFrame = _require.requestAnimationFrame;

var clock = typeof performance === 'object' && performance.now ? performance : Date;

var Timeline = /*#__PURE__*/function () {
  function Timeline() {
    this.anims = [];
    this.time = null;
    this.playing = false;
    this.canvas = [];
  }

  var _proto = Timeline.prototype;

  _proto.play = function play() {
    var self = this;
    self.time = clock.now();
    self.playing = true;

    function step() {
      if (self.playing) {
        requestAnimationFrame(step);
        self.update();
      }
    }

    requestAnimationFrame(step);
  };

  _proto.stop = function stop() {
    this.playing = false;
    this.time = null;
    this.canvas = [];
  };

  _proto.update = function update() {
    var currentTime = clock.now();
    this.canvas = [];

    for (var i = 0; i < this.anims.length; i++) {
      var propertyAnim = this.anims[i];

      if (currentTime < propertyAnim.startTime || propertyAnim.hasEnded) {
        continue;
      }

      var shape = propertyAnim.shape; // shape

      if (shape.get('destroyed')) {
        this.anims.splice(i, 1);
        i--;
        continue;
      }

      var startState = propertyAnim.startState,
          endState = propertyAnim.endState,
          interpolate = propertyAnim.interpolate,
          duration = propertyAnim.duration;

      if (currentTime >= propertyAnim.startTime && !propertyAnim.hasStarted) {
        propertyAnim.hasStarted = true;

        if (propertyAnim.onStart) {
          propertyAnim.onStart();
        }
      }

      var t = (currentTime - propertyAnim.startTime) / duration;
      t = Math.max(0, Math.min(t, 1));
      t = propertyAnim.easing(t);

      if (propertyAnim.onFrame) {
        propertyAnim.onFrame(t);
      } else {
        for (var key in interpolate) {
          var diff = interpolate[key];
          var value = diff(t);
          var newValue = void 0;

          if (key === 'points') {
            newValue = [];
            var aLen = Math.max(startState.points.length, endState.points.length);

            for (var j = 0; j < aLen; j += 2) {
              newValue.push({
                x: value[j],
                y: value[j + 1]
              });
            }
          } else {
            newValue = value;
          }

          shape._attrs.attrs[key] = newValue;
          shape._attrs.bbox = null; // should clear calculated bbox
        }
      }

      var canvas = shape.get('canvas');

      if (this.canvas.indexOf(canvas) === -1) {
        this.canvas.push(canvas);
      }

      if (propertyAnim.onUpdate) {
        propertyAnim.onUpdate(t);
      }

      if (currentTime >= propertyAnim.endTime && !propertyAnim.hasEnded) {
        propertyAnim.hasEnded = true;

        if (propertyAnim.onEnd) {
          propertyAnim.onEnd();
        }
      }

      if (t === 1) {
        // end
        this.anims.splice(i, 1);
        i--;
      }
    }

    this.canvas.map(function (c) {
      c.draw();
      return c;
    });
    this.time = clock.now();
  };

  return Timeline;
}();

module.exports = Timeline;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Easing = __webpack_require__(238);

function plainArray(arr) {
  var result = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i]) {
      result.push(arr[i].x);
      result.push(arr[i].y);
    }
  }

  return result;
}

function interpolateNumber(a, b) {
  a = +a;
  b -= a;
  return function (t) {
    return a + b * t;
  };
}

function interpolateArray(a, b) {
  var nb = b ? b.length : 0;
  var na = a ? Math.min(nb, a.length) : 0;
  var x = new Array(na);
  var c = new Array(nb);
  var i;

  for (i = 0; i < na; ++i) {
    x[i] = interpolateNumber(a[i], b[i]);
  }

  for (; i < nb; ++i) {
    c[i] = b[i];
  }

  return function (t) {
    for (i = 0; i < na; ++i) {
      c[i] = x[i](t);
    }

    return c;
  };
}

var Animator = /*#__PURE__*/function () {
  function Animator(shape, source, timeline) {
    this.hasStarted = false;
    this.hasEnded = false;
    this.shape = shape;
    this.source = source;
    this.timeline = timeline;
    this.animate = null;
  } // delay, attrs, duration, easing


  var _proto = Animator.prototype;

  _proto.to = function to(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var delay = cfg.delay || 0;
    var attrs = cfg.attrs || {};
    var duration = cfg.duration || 1000;
    var easing; // 缓动函数

    if (typeof cfg.easing === 'function') {
      easing = cfg.easing;
    } else {
      easing = Easing[cfg.easing] || Easing.linear;
    }

    var animInfo = {
      shape: this.shape,
      startTime: this.timeline.time + delay,
      duration: duration,
      easing: easing
    };
    var interpolate = {}; // 差值函数

    for (var attrName in attrs) {
      var startValue = this.source[attrName];
      var endValue = attrs[attrName];

      if (attrName === 'points') {
        startValue = plainArray(startValue);
        endValue = plainArray(endValue);
        interpolate.points = interpolateArray(startValue, endValue);
        this.source.points = startValue;
        attrs.points = endValue;
      } else if (attrName === 'matrix') {
        interpolate.matrix = interpolateArray(startValue, endValue);
      } else {
        interpolate[attrName] = interpolateNumber(startValue, endValue);
      }
    }

    animInfo.interpolate = interpolate;
    animInfo.startState = this.source;
    animInfo.endState = attrs;
    animInfo.endTime = animInfo.startTime + duration;
    this.timeline.anims.push(animInfo);
    this.animate = animInfo;
    return this;
  };

  _proto.onFrame = function onFrame(callback) {
    // 自定义每一帧动画的动作
    if (this.animate) {
      this.animate.onFrame = function (frame) {
        callback(frame);
      };
    }

    return this;
  };

  _proto.onStart = function onStart(callback) {
    if (this.animate) {
      this.animate.onStart = function () {
        callback();
      };
    }

    return this;
  };

  _proto.onUpdate = function onUpdate(callback) {
    if (this.animate) {
      this.animate.onUpdate = function (frame) {
        callback(frame);
      };
    }

    return this;
  };

  _proto.onEnd = function onEnd(callback) {
    if (this.animate) {
      this.animate.onEnd = function () {
        callback();
      };
    }

    return this;
  };

  return Animator;
}();

module.exports = Animator;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Easing = {
  linear: function linear(k) {
    return k;
  },
  quadraticIn: function quadraticIn(k) {
    return k * k;
  },
  quadraticOut: function quadraticOut(k) {
    return k * (2 - k);
  },
  quadraticInOut: function quadraticInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }

    return -0.5 * (--k * (k - 2) - 1);
  },
  cubicIn: function cubicIn(k) {
    return k * k * k;
  },
  cubicOut: function cubicOut(k) {
    return --k * k * k + 1;
  },
  cubicInOut: function cubicInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }

    return 0.5 * ((k -= 2) * k * k + 2);
  },
  elasticIn: function elasticIn(k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) return 0;
    if (k === 1) return 1;

    if (!p) {
      p = 0.3;
    }

    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }

    return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
  },
  elasticOut: function elasticOut(k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) return 0;
    if (k === 1) return 1;

    if (!p) {
      p = 0.3;
    }

    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }

    return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
  },
  elasticInOut: function elasticInOut(k) {
    var s;
    var a = 0.1;
    var p = 0.4;
    if (k === 0) return 0;
    if (k === 1) return 1;

    if (!p) {
      p = 0.3;
    }

    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(1 / a);
    }

    if ((k *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    }

    return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
  },
  backIn: function backIn(k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  backOut: function backOut(k) {
    var s = 1.70158;
    return (k = k - 1) * k * ((s + 1) * k + s) + 1;
  },
  backInOut: function backInOut(k) {
    var s = 1.70158 * 1.525;

    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }

    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  bounceIn: function bounceIn(k) {
    return 1 - Easing.bounceOut(1 - k);
  },
  bounceOut: function bounceOut(k) {
    if ((k /= 1) < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    }

    return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
  },
  bounceInOut: function bounceInOut(k) {
    if (k < 0.5) {
      return Easing.bounceIn(k * 2) * 0.5;
    }

    return Easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  }
};
module.exports = Easing;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Animation functions for shape
 * @author sima.zhang1990@gmail.com
 */
var Util = __webpack_require__(0);

var Helpers = __webpack_require__(207);
/*
function waveIn(shape, animateCfg, coord) {
  const clip = Helpers.getClip(coord);
  clip.set('canvas', shape.get('canvas'));
  shape.attr('clip', clip);
  const onEnd = function() {
    shape.attr('clip', null);
    clip.remove(true);
  };
  Helpers.doAnimation(clip, clip.endState, animateCfg, onEnd);
}

function scaleInX(shape, animateCfg) {
  const box = shape.getBBox();
  const points = shape.get('origin').points;
  let x;
  const y = (box.minY + box.maxY) / 2;

  if (points[0].y - points[1].y > 0) { // 当顶点在零点之下
    x = box.maxX;
  } else {
    x = box.minX;
  }
  const scaledMatrix = Helpers.getScaledMatrix(shape, [ x, y ], 'x');
  Helpers.doAnimation(shape, { matrix: scaledMatrix }, animateCfg);
}

function scaleInY(shape, animateCfg) {
  const box = shape.getBBox();
  const points = shape.get('origin').points;
  const x = (box.minX + box.maxX) / 2;
  let y;

  if (points[0].y - points[1].y <= 0) { // 当顶点在零点之下
    y = box.maxY;
  } else {
    y = box.minY;
  }
  const scaledMatrix = Helpers.getScaledMatrix(shape, [ x, y ], 'x');
  Helpers.doAnimation(shape, { matrix: scaledMatrix }, animateCfg);
}
*/


function fadeIn(shape, animateCfg) {
  var fillOpacity = Util.isNil(shape.attr('fillOpacity')) ? 1 : shape.attr('fillOpacity');
  var strokeOpacity = Util.isNil(shape.attr('strokeOpacity')) ? 1 : shape.attr('strokeOpacity');
  shape.attr('fillOpacity', 0);
  shape.attr('strokeOpacity', 0);
  var endState = {
    fillOpacity: fillOpacity,
    strokeOpacity: strokeOpacity
  };
  Helpers.doAnimation(shape, endState, animateCfg);
}

module.exports = {
  // waveIn,
  // scaleInX,
  // scaleInY,
  fadeIn: fadeIn
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Group animate functions
 * @author sima.zhang1990@gmail.com
 */
var Util = __webpack_require__(207);

var Helper = __webpack_require__(37);

var _require = __webpack_require__(16),
    Shape = _require.Shape;

function _groupScaleIn(container, animateCfg, coord, zeroY, type) {
  var _Util$getCoordInfo = Util.getCoordInfo(coord),
      start = _Util$getCoordInfo.start,
      end = _Util$getCoordInfo.end,
      width = _Util$getCoordInfo.width,
      height = _Util$getCoordInfo.height;

  var x;
  var y;
  var clip = new Shape.Rect({
    attrs: {
      x: start.x,
      y: end.y,
      width: width,
      height: height
    }
  });

  if (type === 'y') {
    x = start.x + width / 2;
    y = zeroY.y < start.y ? zeroY.y : start.y;
  } else if (type === 'x') {
    x = zeroY.x > start.x ? zeroY.x : start.x;
    y = start.y + height / 2;
  } else if (type === 'xy') {
    if (coord.isPolar) {
      x = coord.center.x;
      y = coord.center.y;
    } else {
      x = (start.x + end.x) / 2;
      y = (start.y + end.y) / 2;
    }
  }

  var endMatrix = Util.getScaledMatrix(clip, [x, y], type);
  clip.isClip = true;
  clip.endState = {
    matrix: endMatrix
  };
  clip.set('canvas', container.get('canvas'));
  container.attr('clip', clip);

  var onEnd = function onEnd() {
    container.attr('clip', null);
    clip.remove(true);
  };

  Util.doAnimation(clip, clip.endState, animateCfg, onEnd);
}

function _shapeScale(container, animateCfg, type) {
  var shapes = container.get('children');
  var x;
  var y;
  var endMatrix;

  for (var i = 0, len = shapes.length; i < len; i++) {
    var shape = shapes[i];
    var box = shape.getBBox();
    x = (box.minX + box.maxX) / 2;
    y = (box.minY + box.maxY) / 2;
    endMatrix = Util.getScaledMatrix(shape, [x, y], type);
    Util.doAnimation(shape, {
      matrix: endMatrix
    }, animateCfg);
  }
}

function groupScaleInX(container, animateCfg, coord, zeroY) {
  _groupScaleIn(container, animateCfg, coord, zeroY, 'x');
}

function groupScaleInY(container, animateCfg, coord, zeroY) {
  _groupScaleIn(container, animateCfg, coord, zeroY, 'y');
}

function groupScaleInXY(container, animateCfg, coord, zeroY) {
  _groupScaleIn(container, animateCfg, coord, zeroY, 'xy');
}

function shapesScaleInX(container, animateCfg) {
  _shapeScale(container, animateCfg, 'x');
}

function shapesScaleInY(container, animateCfg) {
  _shapeScale(container, animateCfg, 'y');
}

function shapesScaleInXY(container, animateCfg) {
  _shapeScale(container, animateCfg, 'xy');
}

function groupWaveIn(container, animateCfg, coord) {
  var clip = Helper.getClip(coord);
  clip.set('canvas', container.get('canvas'));
  container.attr('clip', clip);

  var onEnd = function onEnd() {
    container.attr('clip', null);
    clip.remove(true);
  };

  var endState = {};

  if (coord.isPolar) {
    var startAngle = coord.startAngle,
        endAngle = coord.endAngle;
    endState.endAngle = endAngle;
    clip.attr('endAngle', startAngle);
  } else {
    var start = coord.start,
        end = coord.end;
    var width = Math.abs(start.x - end.x);
    var height = Math.abs(start.y - end.y);

    if (coord.isTransposed) {
      clip.attr('height', 0);
      endState.height = height;
    } else {
      clip.attr('width', 0);
      endState.width = width;
    }
  }

  Util.doAnimation(clip, endState, animateCfg, onEnd);
}

module.exports = {
  groupWaveIn: groupWaveIn,
  groupScaleInX: groupScaleInX,
  groupScaleInY: groupScaleInY,
  groupScaleInXY: groupScaleInXY,
  shapesScaleInX: shapesScaleInX,
  shapesScaleInY: shapesScaleInY,
  shapesScaleInXY: shapesScaleInXY
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(0);

var Chart = __webpack_require__(30);

Chart._Interactions = {};

Chart.registerInteraction = function (type, constructor) {
  Chart._Interactions[type] = constructor;
};

Chart.getInteraction = function (type) {
  return Chart._Interactions[type];
};

Chart.prototype.interaction = function (type, cfg) {
  var interactions = this._interactions || {};

  if (interactions[type]) {
    // if reprated, destroy last
    interactions[type].destroy();
  }

  var Ctor = Chart.getInteraction(type);
  var interact = new Ctor(cfg, this);
  interactions[type] = interact;
  this._interactions = interactions;
  return this;
};

Chart.prototype.clearInteraction = function (type) {
  var interactions = this._interactions;
  if (!interactions) return;

  if (type) {
    interactions[type] && interactions[type].destroy();
    delete interactions[type];
  } else {
    (0, _common.each)(interactions, function (interaction, key) {
      interaction.destroy();
      delete interactions[key];
    });
  }

  return this;
};

var _default = Chart;
exports["default"] = _default;

/***/ }),
/* 242 */,
/* 243 */,
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(0);

var _context = _interopRequireDefault(__webpack_require__(249));

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

/***/ }),
/* 245 */,
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Default, without interactins
 */
var F2 = __webpack_require__(77);

__webpack_require__(209);

__webpack_require__(193);

__webpack_require__(203); // polar coordinate


__webpack_require__(218); // the axis for polar coordinate


__webpack_require__(219); // timeCat scale


__webpack_require__(223);

__webpack_require__(224);

__webpack_require__(225);

__webpack_require__(226);

__webpack_require__(227);

__webpack_require__(228);

__webpack_require__(229);

var Marker = __webpack_require__(76); // 把一些component挂上去，外部可以直接使用


F2.Component = {
  Marker: Marker
};

var Tooltip = __webpack_require__(230);

var Guide = __webpack_require__(233);

var Legend = __webpack_require__(234);

var Animation = __webpack_require__(235);

F2.Animate = __webpack_require__(206); // register plugins

F2.Chart.plugins.register([Tooltip, Legend, Guide, Animation]); // 默认添加交互

__webpack_require__(247);

module.exports = F2;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _register = _interopRequireDefault(__webpack_require__(241));

var _pan = _interopRequireDefault(__webpack_require__(248));

var _pinch = _interopRequireDefault(__webpack_require__(250));

// 注册交互
_register["default"].registerInteraction('pan', _pan["default"]);

_register["default"].registerInteraction('pinch', _pinch["default"]);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(244));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Pan = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Pan, _Base);

  var _super = _createSuper(Pan);

  function Pan() {
    return _Base.apply(this, arguments) || this;
  }

  var _proto = Pan.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      type: 'pan',
      startEvent: 'panstart',
      processEvent: 'pan',
      endEvent: 'panend'
    };
  };

  _proto.start = function start() {
    var context = this.context;
    context.start();
  };

  _proto.process = function process(e) {
    var direction = e.direction,
        deltaX = e.deltaX;

    if (direction === 'up' || direction === 'down') {
      return;
    }

    e.preventDefault && e.preventDefault();
    var context = this.context;
    var chart = context.chart;
    var coord = chart.get('coord');
    var start = coord.start,
        end = coord.end;
    var coordWidth = end.x - start.x;
    var ratio = deltaX / coordWidth;
    context.doMove(ratio);
  };

  return Pan;
}(_base["default"]);

var _default = Pan;
exports["default"] = _default;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _array = __webpack_require__(75);

var _const = __webpack_require__(47);

var autoCat = __webpack_require__(65); // 判断新老values是否相等，这里只要判断前后是否相等即可


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

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(22));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(2));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(4));

var _base = _interopRequireDefault(__webpack_require__(244));

var _common = __webpack_require__(0);

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Pinch = /*#__PURE__*/function (_Base) {
  (0, _inheritsLoose2["default"])(Pinch, _Base);

  var _super = _createSuper(Pinch);

  var _proto = Pinch.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      type: 'pinch',
      startEvent: 'pinchstart',
      processEvent: 'pinch',
      endEvent: 'pinchend'
    };
  };

  function Pinch(cfg, chart) {
    var _this;

    _this = _Base.call(this, cfg, chart) || this;

    var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
        context = _assertThisInitialize.context;

    (0, _common.mix)(context, cfg);
    return _this;
  }

  _proto.start = function start() {
    var context = this.context;
    context.start();
  };

  _proto.process = function process(e) {
    e.preventDefault && e.preventDefault();
    var zoom = e.zoom,
        center = e.center;
    var context = this.context;
    var chart = context.chart;
    var coord = chart.get('coord');
    var start = coord.start,
        end = coord.end;
    var coordWidth = end.x - start.x;
    var leftLen = Math.abs(center.x - start.x);
    var rightLen = Math.abs(end.x - center.x); // 计算左右缩放的比例

    var leftScale = leftLen / coordWidth;
    var rightScale = rightLen / coordWidth;
    context.doZoom(leftScale, rightScale, zoom);
  };

  _proto.end = function end() {
    // 缩放完成后再更新ticks
    var context = this.context;
    context.updateTicks();
  };

  return Pinch;
}(_base["default"]);

var _default = Pinch;
exports["default"] = _default;

/***/ })
/******/ ]);
});