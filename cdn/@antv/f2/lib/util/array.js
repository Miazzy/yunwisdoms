"use strict";

exports.__esModule = true;
exports.merge = merge;
exports.values = values;
exports.firstValue = firstValue;
exports.group = group;
exports.groupToMap = groupToMap;
exports.remove = remove;
exports.getRange = getRange;

var _util = require("@antv/util");

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