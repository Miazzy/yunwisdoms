"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _common = require("../util/common");

var Chart = require('../chart/chart');

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