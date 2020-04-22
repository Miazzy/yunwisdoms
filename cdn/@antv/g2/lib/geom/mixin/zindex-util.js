"use strict";

module.exports = {
  toFront: function toFront(shape) {
    var parent = shape.get('parent');
    var originIndex = parent.get('children').indexOf(shape);
    shape.set('_originIndex', originIndex);
    shape.toFront(); // 移动到最上面
  },
  resetZIndex: function resetZIndex(shape) {
    var parent = shape.get('parent');
    var originIndex = shape.get('_originIndex');
    var siblings = parent.get('children');
    var currentIndex = siblings.indexOf(shape);

    if (originIndex >= 0 && originIndex !== currentIndex) {
      siblings.splice(currentIndex, 1); // 从数组中移除

      siblings.splice(originIndex, 0, shape); // 重新加入数组，返回原先的位置
    }
  }
};