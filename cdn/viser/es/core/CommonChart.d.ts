import IMainConfig from '../typed/IMain';
declare class CommonChart {
    private chartInstance;
    private viewInstance;
    private config;
    constructor(config: IMainConfig);
    getWidth(): any;
    getHeight(): any;
    render(): void;
    repaint(config: IMainConfig): void;
    destroy(chart: any): void;
    clear(chart: any): void;
    private checkChartConfig;
    private createView;
    private setEvents;
    private setDataSource;
    private setFilter;
    private setScale;
    private setCoord;
    private setSeries;
    private setAxis;
    private setTooltip;
    private setDefaultTooltip;
    private setGuide;
    private setLegend;
    private setContent;
    private setView;
    private setViews;
    private setFacetViews;
    private setFacet;
    private setBrush;
    private repaintWidthHeight;
    private renderDiffConfig;
}
export default CommonChart;