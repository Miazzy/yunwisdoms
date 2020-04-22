"use strict";

/**
 * @fileOverview The class of canvas plot
 * @author sima.zhang
 */
var Util = require('../util');

var _require = require('../renderer'),
    Group = _require.Group;

var AUTO_STR = 'auto';

var PlotBack = function PlotBack(cfg) {
  PlotBack.superclass.constructor.call(this, cfg);
};

Util.extend(PlotBack, Group);
Util.augment(PlotBack, {
  getDefaultCfg: function getDefaultCfg() {
    return {
      /**
       * 类型
       * @type {String}
       */
      type: 'plotBack',

      /**
       * 画布边距
       * @type {Number | Array | Object | "auto"}
       */
      padding: null,

      /**
       * 大背景
       * @type {Object}
       */
      background: null,

      /**
       * 绘图区域范围
       * @type {Object}
       */
      plotRange: null,

      /**
       * 绘图区域背景
       * @type {Object}
       */
      plotBackground: null
    };
  },
  _beforeRenderUI: function _beforeRenderUI() {
    this._calculateRange();
  },
  _renderUI: function _renderUI() {
    this._renderBackground();

    this._renderPlotBackground();
  },
  _renderBackground: function _renderBackground() {
    var self = this;
    var background = self.get('background');

    if (background) {
      var canvas = this.get('canvas');
      var width = self.get('width') || canvas.get('width');
      var height = self.get('height') || canvas.get('height');
      var cfg = {
        x: 0,
        y: 0,
        width: width,
        height: height
      };
      var rect = self.get('backgroundShape');

      if (!rect) {
        rect = this.addShape('rect', {
          attrs: Util.mix(cfg, background)
        });
        this.set('backgroundShape', rect);
      } else {
        rect.attr(cfg);
      }
    } else {
      return;
    }
  },
  _renderPlotBackground: function _renderPlotBackground() {
    var self = this;
    var plotBackground = self.get('plotBackground');

    if (plotBackground) {
      var plotRange = self.get('plotRange');
      var width = plotRange.br.x - plotRange.bl.x;
      var height = plotRange.br.y - plotRange.tr.y;
      var tl = plotRange.tl;
      var cfg = {
        x: tl.x,
        y: tl.y,
        width: width,
        height: height
      };
      var plotBackShape = self.get('plotBackShape');

      if (!plotBackShape) {
        if (plotBackground.image) {
          cfg.img = plotBackground.image;
          plotBackShape = self.addShape('image', {
            attrs: cfg
          });
        } else {
          // 矩形
          Util.mix(cfg, plotBackground);
          plotBackShape = self.addShape('rect', {
            attrs: cfg
          });
        }

        self.set('plotBackShape', plotBackShape);
      } else {
        plotBackShape.attr(cfg);
      }
    } else {
      return;
    }
  },
  _convert: function _convert(val, isHorizontal) {
    if (Util.isString(val)) {
      if (val === AUTO_STR) {
        val = 0;
      } else if (val.includes('%')) {
        var canvas = this.get('canvas');
        var width = this.get('width') || canvas.get('width');
        var height = this.get('height') || canvas.get('height');
        val = parseInt(val, 10) / 100;
        val = isHorizontal ? val * width : val * height;
      }
    }

    return val;
  },
  _calculateRange: function _calculateRange() {
    var self = this;
    var plotRange = self.get('plotRange');

    if (Util.isNil(plotRange)) {
      plotRange = {};
    }

    var padding = self.get('padding');
    var canvas = this.get('canvas');
    var width = self.get('width') || canvas.get('width');
    var height = self.get('height') || canvas.get('height');
    var allPadding = Util.toAllPadding(padding);

    var top = self._convert(allPadding[0], false);

    var right = self._convert(allPadding[1], true);

    var bottom = self._convert(allPadding[2], false);

    var left = self._convert(allPadding[3], true);

    var minX = Math.min(left, width - right);
    var maxX = Math.max(left, width - right);
    var minY = Math.min(height - bottom, top);
    var maxY = Math.max(height - bottom, top);
    plotRange.tl = {
      x: minX,
      y: minY
    }; // top-left

    plotRange.tr = {
      x: maxX,
      y: minY
    }; // top-right

    plotRange.bl = {
      x: minX,
      y: maxY
    }; // bottom-left

    plotRange.br = {
      x: maxX,
      y: maxY
    }; // bottom-right

    plotRange.cc = {
      x: (maxX + minX) / 2,
      y: (maxY + minY) / 2
    };
    this.set('plotRange', plotRange);
  },
  repaint: function repaint() {
    this._calculateRange();

    this._renderBackground();

    this._renderPlotBackground();

    return this;
  }
});
module.exports = PlotBack;