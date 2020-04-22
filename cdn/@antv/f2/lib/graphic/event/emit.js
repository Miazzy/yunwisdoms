"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _common = require("../../util/common");

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