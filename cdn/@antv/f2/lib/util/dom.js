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