import { sankeyLeft, sankeyRight, sankeyCenter, sankeyJustify } from 'd3-sankey';
declare const ALIGN_METHOD: {
    sankeyLeft: typeof sankeyLeft;
    sankeyRight: typeof sankeyRight;
    sankeyCenter: typeof sankeyCenter;
    sankeyJustify: typeof sankeyJustify;
};
export interface Options {
    nodeId?(node: any): any;
    value?(node: any): any;
    source?(edge: any): any;
    target?(edge: any): any;
    nodeAlign?: keyof typeof ALIGN_METHOD;
    nodeWidth?: number;
    nodePadding?: number;
}
export {};