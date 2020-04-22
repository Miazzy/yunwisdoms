/*** Generated by streamline 0.10.15 (callbacks) --standalone - DO NOT EDIT ***/
var __rt=(function(){var __modules={},mod;function require(p){var m=__modules[p.substring(3)]; return m && m.exports};__modules['globals']=(mod={exports:{}});(function(module, exports){var glob = typeof global === "object" ? global : window;var secret = "_20c7abceb95c4eb88b7ca1895b1170d1";module.exports = (glob[secret] || (glob[secret] = { context: {} }));var g = glob[secret];g.runtime || Object.defineProperty(g, 'runtime', {get: function() { return g.__runtime__; },set: function(value) {if (g.__runtime__ !== value) {if (g.__runtime__) {if (/-fast$/.test(g.__runtime__) ||/-fast$/.test(value)) throw new Error("cannot mix streamline runtimes: " + g.__runtime__ + " and " + value);console.log("warning: mixing streamline runtimes: " + g.__runtime__ + " and " + value);}g.__runtime__ = value;}}});g.withContext = function(fn, cx) {return function() {var oldContext = g.context;g.context = cx || {};try {fn.apply(this, arguments)} finally {g.context = oldContext;}};};g.setPromise = function(name) {if (g.Promise) return; var req = require; if (name === true) g.Promise = typeof Promise === "function" ? Promise : req('es6-promise');else g.Promise = require(name);};})(mod, mod.exports);__modules['util/future']=(mod={exports:{}});(function(module, exports){(function(exports) {var globals = require("../globals");exports.future = function(fn, args, i) {var err, result, done, q = [], self = this;args = Array.prototype.slice.call(args);args[i] = function(e, r) {err = e, result = r, done = true;q && q.forEach(function(f) {f.call(self, e, r);});q = null;};args[i].__futurecb = true;fn.apply(this, args);var ret = function F(cb) {if (typeof cb !== 'function') {var globals = require('../globals');if (cb == null && globals.Promise) return exports.promise.call(this, F, [], 0);if (cb !== false && !globals.oldStyleFutures) throw new Error("callback missing (argument #0). See https://github.com/Sage/streamlinejs/blob/master/FAQ.md#no-callback-given-error");return F;}if (done) cb.call(self, err, result);else q.push(cb);};ret.__future = true;return ret;};exports.streamlinify = function(fn, idx) {return function() {if (!arguments[idx]) return exports.future.call(this, fn, arguments, idx);else return fn.apply(this, arguments);};};exports.promise = function(fn, args, i) {if (args[i] === false) return exports.future.call(this, fn, args, i);if (args[i] != null) throw new Error("invalid callback: " + typeof(args[i]));if (globals.oldStyleFutures) return exports.future.call(this, fn, args, i);if (!globals.Promise) throw new Error("callback missing (argument #" + i + "). See https://github.com/Sage/streamlinejs/blob/master/FAQ.md#no-callback-given-error");var self = this;args = Array.prototype.slice.call(args);return new globals.Promise(function(resolve, reject) {args[i] = function(e, r) {if (e) reject(e);else resolve(r);};fn.apply(self, args);});};exports.then = function(promise, method, cb) {promise[method](function(r) {cb && cb(null, r);cb = null;}, function(e) {cb && cb(e);cb = null;});};})(typeof exports !== 'undefined' ? exports : (Streamline.future = Streamline.future || {}));})(mod, mod.exports);__modules['callbacks/runtime']=(mod={exports:{}});(function(module, exports){(function(exports) {var __g = require("../globals");__g.runtime = 'callbacks';var __fut = require("../util/future");__g.context = __g.context || {};__g.depth = __g.depth || 0;__g.async = __g.async || false;__g.trampoline = (function() {var q = [];return {queue: function(fn) {q.push(fn);},flush: function() {__g.depth++;try {var fn;while (fn = q.shift()) fn();} finally {__g.depth--;}}}})();exports.runtime = function(filename, oldStyleFutures) {__g.oldStyleFutures = oldStyleFutures;function __func(_, __this, __arguments, fn, index, frame, body) {if (typeof _ !== 'function') return __fut.promise.call(__this, fn, __arguments, index);frame.file = filename;frame.prev = __g.frame;frame.calls = 0;if (frame.prev) frame.prev.calls++;var emitter = __g.emitter;__g.frame = frame;__g.depth++;if (emitter) emitter.emit("enter", frame, _); try {frame.active = true;body();} catch (e) {__setEF(e, frame.prev);__propagate(_, e);} finally {frame.active = false;if (emitter) {emitter.emit("exit", frame);}__g.frame = frame.prev;if (--__g.depth === 0 && __g.trampoline) __g.trampoline.flush();}}return {__g: __g,__func: __func,__cb: __cb,__future: __fut.future,__propagate: __propagate,__trap: __trap,__tryCatch: __tryCatch,__catch: __catch,__forIn: __forIn,__apply: __apply,__construct: __construct,__setEF: __setEF,streamlinify: __fut.streamlinify,__pthen: __fut.then,};};function __cb(_, frame, offset, col, fn, trampo, returnArray) {frame.offset = offset;frame.col = col;var ctx = __g.context;var calls = frame.calls;var emitter = __g.emitter;var ret = function ___(err, result) {if (returnArray) result = Array.prototype.slice.call(arguments, 1);returnArray = false; var oldFrame = __g.frame;__g.frame = frame;var oldContext = __g.context;__g.context = ctx;if (emitter && __g.depth === 0) emitter.emit('resume', frame);if (emitter) emitter.emit('enter', frame);__g.depth++;try {if (trampo && frame.active && __g.trampoline) {__g.trampoline.queue(function() {return ___(err, result);});} else {___.dispatched = true;if (err) {__setEF(err, frame);return _(err);}frame.active = true;return fn(null, result);}} catch (ex) {if (___.dispatched && _.name !== '___' && _.name !== '__trap' && calls !== frame.calls) throw ex;__setEF(ex, frame);return __propagate(_, ex);} finally {frame.active = false;if (emitter) emitter.emit("exit", frame);__g.frame = oldFrame;if (--__g.depth === 0 && __g.trampoline) __g.trampoline.flush();__g.context = oldContext;}};if (emitter && !ret.dispatched) emitter.emit('yield', frame);ret.__streamlined = true;return ret;}function __propagate(_, err) {try {_(err);} catch (ex) {__trap(ex);}}function __trap(err) {if (err) {if (__g.context && __g.context.errorHandler) __g.context.errorHandler(err);else process.nextTick(function() {throw err;});}}function __tryCatch(_, fn) {try {fn();} catch (e) {try {_(e);} catch (ex) {__trap(ex);}}}function __catch(fn, _) {var frame = __g.frame,context = __g.context;__g.trampoline.queue(function() {var oldFrame = __g.frame,oldContext = __g.context;__g.frame = frame;__g.context = context;try {fn();} catch (ex) {_(ex);} finally {__g.frame = oldFrame;__g.context = oldContext;}});}function __forIn(object) {var array = [];for (var obj in object) {array.push(obj);}return array;}function __apply(cb, fn, thisObj, args, index) {if (cb == null) return __fut.future(__apply, arguments, 0);args = Array.prototype.slice.call(args, 0);args[index != null ? index : args.length] = cb;return fn.apply(thisObj, args);}function __construct(constructor, i) {var key = '__async' + i,f;return constructor[key] || (constructor[key] = function() {var args = arguments;function F() {var self = this;var cb = args[i];args[i] = function(e, r) {cb(e, self);};args[i].__streamlined = cb.__streamlined;args[i].__futurecb = cb.__futurecb;return constructor.apply(self, args);}F.prototype = constructor.prototype;return new F();});}function __setEF(e, f) {function formatStack(e, raw) {var ff = typeof navigator === 'object' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;if (ff) raw = "Error: " + e.message + '\n' + raw;var s = raw,f, skip;var cut = (e.message || '').split('\n').length;var lines = s.split('\n');s = lines.slice(cut).map(function(l) {var m = /([^@]*)\@(.*?)\:(\d+)(?:\:(\d+))?$/.exec(l);l = m ? "  at " + m[1] + " (" + m[2] + ":" + parseInt(m[3]) + ":" + (m[4] || "0") + ")" : l;var i = l.indexOf('__$');if (i >= 0 && !skip) {skip = true;return l.substring(0, i) + l.substring(i + 3);}return skip ? '' : l;}).filter(function(l) {return l;}).join('\n');s = lines.slice(0, cut).join('\n') + '\n  <<< async stack >>>' + (skip ? '\n' + s : '');for (var f = e.__frame; f; f = f.prev) {if (f.offset >= 0) s += "\n  at " + f.name + " (" + f.file + ":" + (f.line + f.offset) + ":" + (f.col+1) + ")"}s += '\n  <<< raw stack >>>' + '\n' + lines.slice(cut).join('\n');return s;};e.__frame = e.__frame || f;if (exports.stackTraceEnabled && e.__lookupGetter__ && e.__lookupGetter__("rawStack") == null) {var getter = e.__lookupGetter__("stack");if (!getter) { var raw = e.stack || "raw stack unavailable";getter = function() {return raw;}}e.__defineGetter__("rawStack", getter);e.__defineGetter__("stack", function() {return formatStack(e, getter());});}}exports.stackTraceEnabled = true;})(typeof exports !== 'undefined' ? exports : (Streamline.runtime = Streamline.runtime || {}));require && require("../callbacks/builtins");})(mod, mod.exports);return __modules['callbacks/runtime'].exports.runtime('lib/PropertyContainer._coffee', false);})(),__func=__rt.__func,__cb=__rt.__cb,__catch=__rt.__catch,__tryCatch=__rt.__tryCatch;
(function() {
  var PropertyContainer, adjustError, status, util;
  status = require("http-status");
  util = require("./util");
  adjustError = util.adjustError;
  module.exports = PropertyContainer = (function() {
    var get, set;
    function PropertyContainer(db, data) {
      this.db = db;
      this._request = db._request;
      this._data = (data || {
      });
      this._data.self = ((((data != null) ? data.self : void 0)) || null);
    };
    get = function(props) {
      var getter, name, _results;
      _results = [];
      for (name in props) {
        getter = props[name];
        _results.push(PropertyContainer.prototype.__defineGetter__(name, getter));
      };
      return _results;
    };
    set = function(props) {
      var name, setter, _results;
      _results = [];
      for (name in props) {
        setter = props[name];
        _results.push(PropertyContainer.prototype.__defineSetter__(name, setter));
      };
      return _results;
    };
    get({
      self: function() {
        return (this._data.self || null);
      }
    });
    get({
      exists: function() {
        return (this.self != null);
      }
    });
    get({
      id: function() {
        var match;
        if (!this.exists) {
          return null;
        }
         else {
          match = /(?:node|relationship)\/(\d+)$/.exec(this.self);
          return parseInt(match[1]);
        }
        ;
      }
    });
    get({
      data: function() {
        return (this._data.data || null);
      }
    });
    set({
      data: function(value) {
        return this._data.data = value;
      }
    });
    PropertyContainer.prototype.equals = function(other) {
      return (this.self === (((other != null) ? other.self : void 0)));
    };
    PropertyContainer.prototype["delete"] = function PropertyContainer_prototype_delete__1(_) {
      var error, response, __this = this;
      var __frame = {
        name: "PropertyContainer_prototype_delete__1",
        line: 86
      };
      return __func(_, this, arguments, PropertyContainer_prototype_delete__1, 0, __frame, function __$PropertyContainer_prototype_delete__1() {
        if (!__this.exists) {
          return _(null);
        }
        ;
        return (function ___(__then) {
          (function ___(_) {
            __tryCatch(_, function __$PropertyContainer_prototype_delete__1() {
              return __this._request.del(__this.self, __cb(_, __frame, 5, 33, function ___(__0, __1) {
                response = __1;
                if ((response.statusCode !== status.NO_CONTENT)) {
                  switch (response.statusCode) {
                  case status.NOT_FOUND:
                    return _(new Error("PropertyContainer not found"));
                  case status.CONFLICT:
                    return _(new Error("Node could not be deleted (still has relationships?)"));
                    default:
                    return _(response);
                  };
                }
                ;
                __this._data.self = null;
                __then();
              }, true));
            });
          })(function ___(_error, __result) {
            __catch(function __$PropertyContainer_prototype_delete__1() {
              if (_error) {
                error = _error;
                return _(adjustError(error));
              }
               else {
                _(null, __result);
              }
              ;
            }, _);
          });
        })(function ___() {
          __tryCatch(_, function __$PropertyContainer_prototype_delete__1() {
            _();
          });
        });
      });
    };
    PropertyContainer.prototype.del = function() {
      return this["delete"].apply(this, arguments);
    };
    PropertyContainer.prototype.toJSON = function() {
      var json;
      json = this.db._toJSON(this);
      json._data = this._data;
      return json;
    };
    PropertyContainer._fromJSON = function(db, obj) {
      var _data;
      _data = obj._data;
      return new this(db, _data);
    };
    return PropertyContainer;
  })();
}).call(this);
//# sourceMappingURL=PropertyContainer.map