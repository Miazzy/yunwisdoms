"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * for Sankey Diagram
 * graph data required (nodes, edges)
 */
var util_1 = require("@antv/util");
var d3_sankey_1 = require("d3-sankey");
var data_set_1 = require("../../data-set");
var ALIGN_METHOD = {
    sankeyLeft: d3_sankey_1.sankeyLeft,
    sankeyRight: d3_sankey_1.sankeyRight,
    sankeyCenter: d3_sankey_1.sankeyCenter,
    sankeyJustify: d3_sankey_1.sankeyJustify,
};
var DEFAULT_OPTIONS = {
    // nodeId: node => node.index,
    value: function (node) { return node.value; },
    source: function (edge) { return edge.source; },
    target: function (edge) { return edge.target; },
    nodeAlign: 'sankeyJustify',
    nodeWidth: 0.02,
    nodePadding: 0.02,
};
function transform(dv, options) {
    options = util_1.assign({}, DEFAULT_OPTIONS, options);
    var nodeAlign = null;
    if (util_1.isString(options.nodeAlign)) {
        nodeAlign = ALIGN_METHOD[options.nodeAlign];
    }
    else if (util_1.isFunction(options.nodeAlign)) {
        nodeAlign = options.nodeAlign;
    }
    var sankeyProcessor = d3_sankey_1.sankey()
        .links(function (d) { return d.edges; })
        .nodeWidth(options.nodeWidth)
        .nodePadding(options.nodePadding)
        .extent([
        [0, 0],
        [1, 1],
    ]);
    if (util_1.isFunction(options.nodeId)) {
        sankeyProcessor.nodeId(options.nodeId);
    }
    if (nodeAlign) {
        sankeyProcessor.nodeAlign(nodeAlign);
    }
    // TODO:
    // @ts-ignore
    sankeyProcessor(dv);
    // post process (x, y), etc.
    dv.nodes.forEach(function (node) {
        var x0 = node.x0, x1 = node.x1, y0 = node.y0, y1 = node.y1;
        /* points
         * 3---2
         * |   |
         * 0---1
         */
        node.x = [x0, x1, x1, x0];
        node.y = [y0, y0, y1, y1];
    });
    dv.edges.forEach(function (edge) {
        var source = edge.source, target = edge.target;
        var sx = source.x1;
        var tx = target.x0;
        edge.x = [sx, sx, tx, tx];
        var offset = edge.width / 2;
        edge.y = [edge.y0 + offset, edge.y0 - offset, edge.y1 + offset, edge.y1 - offset];
    });
}
data_set_1.DataSet.registerTransform('diagram.sankey', transform);
data_set_1.DataSet.registerTransform('sankey', transform);