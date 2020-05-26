! function() {
    "use strict";

    function e(e) { return e === undefined || null === e }

    function t(e) { return e !== undefined && null !== e }

    function n(e) { return null !== e && "object" === (void 0 === e ? "undefined" : d(e)) }

    function r(e) { return "object" === (void 0 === e ? "undefined" : d(e)) && e instanceof HTMLElement }

    function o(e) { var t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : "" }

    function i() { return new RegExp("MSIE (\\d+\\.\\d+);").test(navigator.userAgent), parseFloat(RegExp.$1) || Infinity }

    function a(e, t) { for (var n in t) e[n] = t[n]; return e }

    function c(e) { var t = Object.create(null); return function(n) { return t[n] || (t[n] = e(n)) } }

    function u(e) { return p.call(e).slice(8, -1) }

    function s(e) { throw new Error("Vaptcha error: " + e) }

    function l(e) {
        var t = e.mode,
            n = e.outage;
        return !!t && "downtime" === (t = t.toLowerCase()) && !!n
    }

    function Promise(e) {
        var t = this;
        this.state = "pending", this.value = undefined, this.reason = undefined, this.onResolveAsyncCallbacks = [], this.onRejectAsyncCallbacks = [];
        var n = function(e) { "pending" === t.state && (t.state = "fulfilled", t.value = e, t.onResolveAsyncCallbacks.map(function(e) { return e() })) },
            r = function(e) { "pending" === t.state && (t.state = "rejected", t.reason = e, t.onRejectAsyncCallbacks.map(function(t) { return t(e) })) };
        try { e(n, r) } catch (o) { r(o) }
    }
    window.HTMLElement = window.HTMLElement || Element, Array.prototype.map || (Array.prototype.map = function(e, t) {
        var n, r, o;
        if (null == this) throw new TypeError(" this is null or not defined");
        var i = Object(this),
            a = i.length >>> 0;
        if ("[object Function]" != Object.prototype.toString.call(e)) throw new TypeError(e + " is not a function");
        for (t && (n = t), r = new Array(a), o = 0; o < a;) {
            var c, u;
            o in i && (c = i[o], u = e.call(n, c, o, i), r[o] = u), o++
        }
        return r
    }), Array.prototype.includes || (Array.prototype.includes = function(e, t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this),
            r = n.length >>> 0;
        if (0 === r) return !1;
        for (var o = 0 | t, i = Math.max(o >= 0 ? o : r - Math.abs(o), 0); i < r;) {
            if (n[i] === e) return !0;
            i++
        }
        return !1
    }), Array.prototype.findIndex || (Array.prototype.findIndex = function(e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var t = Object(this),
            n = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (var r = arguments[1], o = 0; o < n;) {
            if (e.call(r, t[o], o, t)) return o;
            o++
        }
        return -1
    }), Object.create || (Object.create = function(e) { var t = function() {}; return t.prototype = e, new t });
    var f = { vid: null, scene: "", container: null, type: "float", style: "dark", lang: "zh-CN", ai: !0, https: !0, guide: !0, aiAnimation: !0, protocol: "https://", css_version: "downtime", cdn_servers: ["cdn.vaptcha.com"], api_server: "api.vaptcha.com/v2", canvas_path: "/canvas.min.js" },
        d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        p = Object.prototype.toString,
        h = (c(function(e) {
            for (var t = {}, n = e && -1 !== e.indexOf("?") && e.split("?")[1] || window.location.search.substring(1), r = n.split("&"), o = 0; o < r.length; o++) {
                var i = r[o].split("=");
                t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return t
        }), c(function(e) { return e.charAt(0).toUpperCase() + e.slice(1) })),
        v = function(t) { this.data = t, this.valiudateFuns = [], this.ruleFuns = { required: function(t, n) { return e(t) || 0 === t.length ? n : null } } };
    v.prototype = {
        constructor: v,
        addValidateRules: function(e) { a(this.ruleFuns, e) },
        add: function(e, t, n) {
            var r = this,
                o = t.split(":"),
                i = o.shift(),
                a = this.ruleFuns[i];
            o.unshift(this.data[e]), o.push(n), a && this.valiudateFuns.push(function() { return a.apply(r, o) })
        },
        validate: function() { for (var e, t = 0; e = this.valiudateFuns[t++];) { var n = e(); if (n) return s(n), !1 } return !0 }
    };
    var m = { AccessDenied: "0101", RefreshAgain: "0102", Success: "0103", Fail: "0104", RefreshTooFast: "0105", RefreshTanto: "0106", DrawTanto: "0107", Attack: "0108", jsonpTimeOut: "0703", challengeExpire: "1002" };
    Promise.prototype.then = function(e) {
        var t = this;
        if ("fulfilled" === this.state) { var r = e(this.value); if (n(r) && "Promise" === o(r.constructor)) return r }
        return "pending" === this.state ? new Promise(function(r) {
            t.onResolveAsyncCallbacks.push(function() {
                var i = e(t.value);
                if (n(i) && "Promise" === o(i.constructor)) return i.then(r);
                r(i)
            })
        }) : this
    }, Promise.prototype["catch"] = function(e) { return "rejected" === this.state && e(this.reason), "pending" === this.state && this.onRejectAsyncCallbacks.push(e), this }, Promise.resolve = function(e) { return new Promise(function(t) { t(e) }) }, Promise.reject = function(e) { return new Promise(function(t, n) { n(e) }) };
    var y = function() {
            var e = f.protocol,
                t = f.api_server,
                n = function(e) { var t = ""; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t += "&" + n + "=" + encodeURIComponent(e[n])); return t },
                r = function(r, o) {
                    var i = n(o),
                        a = r.indexOf("http://") > -1 || r.indexOf("https://") > -1;
                    return r.indexOf("?") < 0 && (i = "?" + i.slice(1)), a ? "" + r + i : "" + e + t + r + i
                },
                o = function(e) {
                    var t = document.getElementsByTagName("head")[0],
                        n = document.createElement("script");
                    return n.charset = "UTF-8", n.src = e, t.appendChild(n), { remove: function() { t.removeChild(n) } }
                },
                i = function(e, t) {
                    return t = t || {}, new Promise(function(n) {
                        var i = "VaptchaJsonp" + (new Date).valueOf();
                        window[i] && (i += "1"), a(t, { callback: i }), e = r(e, t);
                        var c = o(e),
                            u = setTimeout(function() { clearTimeout(u), window[i] = null, c.remove(), n({ code: "0703", msg: "Time out,Refresh Again!" }) }, 1e4);
                        window[i] = function() { clearTimeout(u), n.apply(this, arguments), c.remove(), window[i] = null }
                    })
                };
            return i.setConfig = function(n) { e = n.protocol || e, t = n.api_server || t }, i
        }(),
        g = { getConfig: function(e) { return y("/config", { id: e.vid, type: e.type, scene: e.scene || "" }) }, refresh: function(e) { return y("/refresh", e) }, click: function(e) { return y("/click", e) }, get: function(e) { return y("/get", e) }, verify: function(e) { return y("/verify", e) }, userbehavior: function(e) { return y("/userbehavior", e) } },
        w = { "0201": "id empty", "0202": "id error", "0208": "scene error", "0209": "request used up", "0906": "params error", "0702": "domain not match" },
        b = function() {
            var o = !1,
                c = function(e) { var t = new v(e); return t.add("outage", "required", "please configure outage"), t.validate(), a(e, { js_path: "vaptcha-sdk-downtime.2.0.2.js", api_server: window.location.host, protocol: window.location.protocol + "//", mode: "DownTime" }), y.setConfig(e), y(e.outage, { action: "get" }).then(function(t) { return t.code !== m.Success ? (s(w[t.msg] || t.msg), Promise.reject(t.code)) : (a(e, t), Promise.resolve()) }) },
                f = function(e) { return l(e) ? c(e) : g.getConfig(e).then(function(t) { return t.code !== m.Success ? (s(w[t.msg] || t.msg), Promise.reject(t.code)) : (t.type !== e.type && (t.mode = t.type, t.type = e.type), a(e, t), l(e) ? c(e) : Promise.resolve()) }) },
                d = function(e, t) { return "" + e.protocol + e.cdn_servers[0] + "/" + t },
                p = function(t) {
                    var n = document.getElementsByTagName("head")[0],
                        r = document.getElementById("vaptcha_style");
                    return new Promise(function(o) { e(r) ? (r = document.createElement("link"), a(r, { rel: "stylesheet", type: "text/css", href: t, id: "vaptcha_style", onload: o }), n && n.appendChild(r)) : o() })
                },
                b = function C(e) {
                    var n = document.getElementsByTagName("head")[0],
                        r = document.querySelector("script[src='" + e + "']");
                    return new Promise(function(o) {
                        if (t(r)) return void(r.loaded ? o() : setTimeout(function() { return C(e).then(o) }));
                        r = document.createElement("script");
                        var i = function() { r.readyState && "loaded" !== r.readyState && "complete" !== r.readyState || (o(), r.loaded = !0, r.onload = null, r.onreadystatechange = null) };
                        a(r, { async: !0, charset: "utf-8", src: e, onerror: function() { return s("load sdk timeout") }, onload: i, onreadystatechange: i }), n.appendChild(r)
                    })
                },
                j = function T(e) {
                    var t = e.sdkName,
                        n = e.config,
                        r = d(n, n.js_path);
                    return b(r).then(function() {
                        var e = window["_" + h(t) + "Vaptcha"],
                            r = new e(n);
                        return r.vaptcha.resetCaptcha = function(e, t) { a(n, t), T({ sdkName: e, config: n }).then(function(e) { r.destroy(), r.options = e.options, r.vaptcha = e.vaptcha, e.render(), "character" === n.mode && ["click", "float", "popup"].includes(n.type) && e.vaptcha.dtClickCb({ target: e.vaptcha.btnDiv }) }) }, Promise.resolve(r)
                    })
                },
                A = function(e) {
                    o = !0, e.https = !0, e.protocol = "https://", y.setConfig(e), !["embed", "popup", "invisible"].includes(e.type) && (e.type = "popup"), i() < 9 && b(d(e, e.canvas_path));
                    var t = new v(e);
                    if (t.addValidateRules({ elementOrSelector: function(t, o) { if ("String" === u(e.container) && (e.container = document.querySelector(e.container)), n(e.container) && r(e.container[0]) && (e.container = e.container[0]), !r(e.container)) return o } }), t.add("vid", "required", "please configure vid"), "invisible" !== e.type && t.add("container", "elementOrSelector", "please configure container with element or selector"), t.validate()) return f(e).then(function() {
                        var t = "theme_https." + e.css_version + ".css",
                            n = d(e, t);
                        return p(n)
                    }).then(function() { var t = e.mode || e.type; return o = !1, j({ sdkName: t, config: e }) })
                };
            return function S(e) { return new Promise(function(t) { o ? setTimeout(function() { S(e).then(t) }, 1e3) : A(e).then(t) })["catch"](function(e) { return o = !1, s(e), Promise.reject(e) }) }
        }(),
        j = function() {
            var e = function(e) {
                    var n = e.getAttribute("data-config"),
                        r = {};
                    if (t(n)) try { r = JSON.parse(n) } catch (o) { s("dom config format error") }
                    return r
                },
                n = function(e) { var n = e.getAttribute("data-vid"); return t(n) ? { vid: n } : {} },
                r = function(e, n) {
                    var r = Object.create(f);
                    r.container = e, a(r, n), t(r.vid) && b(r).then(function(e) { e.renderTokenInput(), e.render() })
                };
            return function() {
                for (var t = document.querySelectorAll("[data-vid]"), o = document.querySelectorAll("[data-config]"), i = 0; i < o.length; i++) {
                    var a = e(o[i]);
                    r(o[i], a)
                }
                for (var c = 0; c < t.length; c++)
                    if (!Array.prototype.includes.call(o, t[c])) {
                        var u = n(t[c]);
                        r(t[c], u)
                    }
            }
        }();
    window.onload = j, window.vaptcha = function(e) { var t = Object.create(f); return a(t, e), b(t) }
}();