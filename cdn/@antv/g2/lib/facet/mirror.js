"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

/**
 * @fileOverview mirror facets
 * @author dxq613@gmail.com
 */
var List = require('./list');

var Mirror =
/*#__PURE__*/
function (_List) {
  (0, _inheritsLoose2.default)(Mirror, _List);

  function Mirror() {
    return _List.apply(this, arguments) || this;
  }

  var _proto = Mirror.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    var cfg = _List.prototype.getDefaultCfg.call(this);

    cfg.type = 'mirror';
    this.transpose = false;
    return cfg;
  };

  _proto.init = function init() {
    var self = this;

    if (self.transpose) {
      self.cols = 2;
      self.rows = 1;
    } else {
      self.cols = 1;
      self.rows = 2;
    }

    _List.prototype.init.call(this);
  };

  _proto.beforeProcessView = function beforeProcessView(view, facet) {
    if (this.transpose) {
      if (facet.colIndex % 2 === 0) {
        view.coord().transpose().scale(-1, 1);
      } else {
        view.coord().transpose();
      }
    } else {
      if (facet.rowIndex % 2 !== 0) {
        view.coord().scale(1, -1);
      }
    }
  };

  _proto.renderTitle = function renderTitle(view, facet) {
    if (this.transpose) {
      this.drawColTitle(view, facet);
    } else {
      this.drawRowTitle(view, facet);
    }
  };

  _proto.setXAxis = function setXAxis(xField, axes, facet) {
    // 当是最后一行或者下面没有 view 时文本不显示
    if (facet.colIndex === 1 || facet.rowIndex === 1) {
      axes[xField].label = null;
      axes[xField].title = null;
    }
  };

  _proto.setYAxis = function setYAxis()
  /* yField, axes, facet */
  {};

  return Mirror;
}(List);

module.exports = Mirror;