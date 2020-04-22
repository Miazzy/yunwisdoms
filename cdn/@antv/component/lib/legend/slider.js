function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * @fileOverview The class of slider
 * @author sima.zhang
 */
var Util = require('../util');

var DomUtil = Util.DomUtil;
var Group = Util.Group;

var Slider =
/*#__PURE__*/
function (_Group) {
  _inheritsLoose(Slider, _Group);

  function Slider() {
    return _Group.apply(this, arguments) || this;
  }

  var _proto = Slider.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * 范围
       * @type {Array}
       */
      range: null,

      /**
       * 中滑块属性
       * 透明的，用于用户交互
       * @type {ATTRS}
       */
      middleAttr: {
        fill: '#fff',
        fillOpacity: 0
      },

      /**
       * 背景
       * @type {G-Element}
       */
      backgroundElement: null,

      /**
       * 下滑块
       * @type {G-Element}
       */
      minHandleElement: null,

      /**
       * 上滑块
       * @type {G-Element}
       */
      maxHandleElement: null,

      /**
       * 中块，
       * 透明的，用于用户交互
       * @type {G-Element}
       */
      middleHandleElement: null,

      /**
       * 当前的激活的元素
       * @type {G-Element}
       */
      currentTarget: null,

      /**
       * 布局方式： horizontal，vertical
       * @type {String}
       */
      layout: 'vertical',

      /**
       * 宽
       * @type {Number}
       */
      width: null,

      /**
       * 高
       * @type {Number}
       */
      height: null,

      /**
       * 当前的PageX
       * @type {Number}
       */
      pageX: null,

      /**
       * 当前的PageY
       * @type {Number}
       */
      pageY: null
    };
  } // arrange the zindex and cursors of each element
  ;

  _proto._beforeRenderUI = function _beforeRenderUI() {
    var layout = this.get('layout');
    var backgroundElement = this.get('backgroundElement');
    var minHandleElement = this.get('minHandleElement');
    var maxHandleElement = this.get('maxHandleElement');
    var middleHandleElement = this.addShape('rect', {
      attrs: this.get('middleAttr')
    });
    var trigerCursor = layout === 'vertical' ? 'ns-resize' : 'ew-resize';
    this.add([backgroundElement, minHandleElement, maxHandleElement]);
    this.set('middleHandleElement', middleHandleElement);
    backgroundElement.set('zIndex', 0);
    middleHandleElement.set('zIndex', 1);
    minHandleElement.set('zIndex', 2);
    maxHandleElement.set('zIndex', 2);
    middleHandleElement.attr('cursor', 'move');
    minHandleElement.attr('cursor', trigerCursor);
    maxHandleElement.attr('cursor', trigerCursor);
    this.sort();
  } // rendering
  ;

  _proto._renderUI = function _renderUI() {
    if (this.get('layout') === 'horizontal') {
      this._renderHorizontal();
    } else {
      this._renderVertical();
    }
  };

  _proto._transform = function _transform(layout) {
    var range = this.get('range');
    var minRatio = range[0] / 100;
    var maxRatio = range[1] / 100;
    var width = this.get('width');
    var height = this.get('height');
    var minHandleElement = this.get('minHandleElement');
    var maxHandleElement = this.get('maxHandleElement');
    var middleHandleElement = this.get('middleHandleElement');
    minHandleElement.resetMatrix();
    maxHandleElement.resetMatrix();

    if (layout === 'horizontal') {
      middleHandleElement.attr({
        x: width * minRatio,
        y: 0,
        width: (maxRatio - minRatio) * width,
        height: height
      });
      minHandleElement.translate(minRatio * width, height);
      maxHandleElement.translate(maxRatio * width, height);
    } else {
      middleHandleElement.attr({
        x: 0,
        y: height * (1 - maxRatio),
        width: width,
        height: (maxRatio - minRatio) * height
      });
      minHandleElement.translate(1, (1 - minRatio) * height);
      maxHandleElement.translate(1, (1 - maxRatio) * height);
    }
  };

  _proto._renderHorizontal = function _renderHorizontal() {
    this._transform('horizontal');
  };

  _proto._renderVertical = function _renderVertical() {
    this._transform('vertical');
  };

  _proto._bindUI = function _bindUI() {
    this.on('mousedown', Util.wrapBehavior(this, '_onMouseDown'));
  } // if the target matches name
  ;

  _proto._isElement = function _isElement(target, name) {
    var element = this.get(name);

    if (target === element) {
      return true;
    }

    if (element.isGroup) {
      var elementChildren = element.get('children');
      return elementChildren.indexOf(target) > -1;
    }

    return false;
  } // get the result range after adding diff to range
  // insure that the result out of the interval [0, 100]
  ;

  _proto._getRange = function _getRange(diff, range) {
    var rst = diff + range;
    rst = rst > 100 ? 100 : rst;
    rst = rst < 0 ? 0 : rst;
    return rst;
  };

  _proto._updateStatus = function _updateStatus(dim, ev) {
    var totalLength = dim === 'x' ? this.get('width') : this.get('height');
    dim = Util.upperFirst(dim);
    var range = this.get('range');
    var page = this.get('page' + dim);
    var currentTarget = this.get('currentTarget');
    var rangeStash = this.get('rangeStash');
    var layout = this.get('layout');
    var sign = layout === 'vertical' ? -1 : 1;
    var currentPage = ev['page' + dim]; // the distance of the mouse dragging

    var diffPage = currentPage - page;
    var diffRange = diffPage / totalLength * 100 * sign;
    var diffStashRange; // the min and max trigger overlap, range[0] and range[1] change together

    if (range[1] <= range[0]) {
      if (this._isElement(currentTarget, 'minHandleElement') || this._isElement(currentTarget, 'maxHandleElement')) {
        range[0] = this._getRange(diffRange, range[0]);
        range[1] = this._getRange(diffRange, range[0]);
      }
    } else {
      // user drags the min trigger
      if (this._isElement(currentTarget, 'minHandleElement')) {
        range[0] = this._getRange(diffRange, range[0]);
      } // user drags the max trigger


      if (this._isElement(currentTarget, 'maxHandleElement')) {
        range[1] = this._getRange(diffRange, range[1]);
      }
    } // the user drags the middle bar


    if (this._isElement(currentTarget, 'middleHandleElement')) {
      // the diffrence between min and max trigger while mouse down
      diffStashRange = rangeStash[1] - rangeStash[0];
      range[0] = this._getRange(diffRange, range[0]); // keep the diffStashRange

      range[1] = range[0] + diffStashRange;

      if (range[1] > 100) {
        range[1] = 100;
        range[0] = range[1] - diffStashRange;
      }
    }

    this.emit('sliderchange', {
      range: range
    });
    this.set('page' + dim, currentPage);

    this._renderUI();

    this.get('canvas').draw(); // need delete

    return;
  } // the listener of mouse down
  ;

  _proto._onMouseDown = function _onMouseDown(ev) {
    var currentTarget = ev.currentTarget;
    var originEvent = ev.event;
    var range = this.get('range');
    originEvent.stopPropagation();
    originEvent.preventDefault();
    this.set('pageX', originEvent.pageX);
    this.set('pageY', originEvent.pageY);
    this.set('currentTarget', currentTarget); // stash the range

    this.set('rangeStash', [range[0], range[1]]);

    this._bindCanvasEvents();
  };

  _proto._bindCanvasEvents = function _bindCanvasEvents() {
    var containerDOM = this.get('canvas').get('containerDOM'); // this.on('mousemove', Util.wrapBehavior(this, '_onCanvasMouseMove'));

    this.onMouseMoveListener = DomUtil.addEventListener(containerDOM, 'mousemove', Util.wrapBehavior(this, '_onCanvasMouseMove'));
    this.onMouseUpListener = DomUtil.addEventListener(containerDOM, 'mouseup', Util.wrapBehavior(this, '_onCanvasMouseUp'));
    this.onMouseLeaveListener = DomUtil.addEventListener(containerDOM, 'mouseleave', Util.wrapBehavior(this, '_onCanvasMouseUp'));
  } // listener of mouse click and move = drag
  ;

  _proto._onCanvasMouseMove = function _onCanvasMouseMove(ev) {
    if (!this._mouseOutArea(ev)) {
      var layout = this.get('layout');

      if (layout === 'horizontal') {
        this._updateStatus('x', ev);
      } else {
        this._updateStatus('y', ev);
      }
    }
  } // listener of mouse up
  ;

  _proto._onCanvasMouseUp = function _onCanvasMouseUp() {
    this._removeDocumentEvents();
  } // remove listeners
  ;

  _proto._removeDocumentEvents = function _removeDocumentEvents() {
    this.onMouseMoveListener.remove();
    this.onMouseUpListener.remove();
  } // if the mouse is out of the area
  ;

  _proto._mouseOutArea = function _mouseOutArea(ev) {
    var el = this.get('canvas').get('el');
    var el_bbox = el.getBoundingClientRect();
    var parent = this.get('parent');
    var bbox = parent.getBBox();
    var left = parent.attr('matrix')[6];
    var top = parent.attr('matrix')[7];
    var right = left + bbox.width;
    var bottom = top + bbox.height;
    var mouseX = ev.clientX - el_bbox.x;
    var mouseY = ev.clientY - el_bbox.y;

    if (mouseX < left || mouseX > right || mouseY < top || mouseY > bottom) {
      return true;
    }

    return false;
  };

  return Slider;
}(Group);

module.exports = Slider;