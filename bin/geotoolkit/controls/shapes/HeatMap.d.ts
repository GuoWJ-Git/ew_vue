import {ScaledShape} from '../../scene/shapes/ScaledShape';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {ColorProvider} from '../../util/ColorProvider';
import {Rect} from '../../util/Rect';
import {TextStyle} from '../../attributes/TextStyle';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Point} from '../../util/Point';

/**
 * Defines a 2D heatmap, A heat map  is a graphical representation
 * of data where the individual values contained in a matrix are represented as colors
 */
export class HeatMap extends ScaledShape {
    /**
     * Defines a 2D heatmap, A heat map  is a graphical representation
     * of data where the individual values contained in a matrix are represented as colors
     * @param options the data source or options object
     * @param options.data the data source
     * @param options.colplottype plot type of column
     * @param options.rowplottype plot type of row
     * @param options.min minimum value limit in data source
     * @param options.max maximum value limit in data source
     * @param options.offsetx offset of x axis
     * @param options.offsety offset of y axis
     * @param options.keepmodellimits flag to keep model limits
     * @param options.colorprovider color provider for rendering heatmap
     * @param properties deprecated (since 2021.1 (3.3)) use first argument instead
     */
    constructor(options?: AbstractDataTable | number[][] | object | { data?: AbstractDataTable | number[][]; colplottype?: PlotType; rowplottype?: PlotType; min?: number; max?: number; offsetx?: number; offsety?: number; keepmodellimits?: boolean; colorprovider?: ColorProvider; } , properties?: any);
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data the data source
     * @param properties.colplottype plot type of column
     * @param properties.rowplottype plot type of row
     * @param properties.min minimum value limit in data source
     * @param properties.max maximum value limit in data source
     * @param properties.offsetx offset of x axis
     * @param properties.offsety offset of y axis
     * @param properties.keepmodellimits flag to keep model limits
     * @param properties.colorprovider color provider for rendering heatmap
     */
    setProperties(properties?: object | { data?: AbstractDataTable | number[][]; colplottype?: PlotType; rowplottype?: PlotType; min?: number; max?: number; offsetx?: number; offsety?: number; keepmodellimits?: boolean; colorprovider?: ColorProvider; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {colplottype: PlotType; rowplottype: PlotType; min: number; max: number; offsetx: number; offsety: number; keepmodellimits: boolean; colorprovider: ColorProvider} | any;
    /**
     * Get model limit
     */
    getModelLimits(): Rect;
    /**
     * Set model bounds
     * @param bounds model bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Get model bounds
     */
    getBounds(): Rect;
    /**
     * Set options of heatmap
     * @param options options
     * @param options.colplottype plot type of column
     * @param options.rowplottype plot type of row
     * @param options.min minimum value limit in data source
     * @param options.max maximum value limit in data source
     * @param options.offsetx offset of x axis
     * @param options.offsety offset of y axis
     * @param options.keepmodellimits flag to keep model limits
     * @param options.colorprovider color provider for rendering heatmap
     */
    setOptions(options: object | { colplottype?: PlotType; rowplottype?: PlotType; min?: number; max?: number; offsetx?: number; offsety?: number; keepmodellimits?: boolean; colorprovider?: ColorProvider; } ): this;
    /**
     * Get options of heatmap
     */
    getOptions(): {colplottype: PlotType; rowplottype: PlotType; min: number; max: number; offsetx: number; offsety: number; keepmodellimits: boolean; labels: {visible: boolean; textstyle: TextStyle}; colorprovider: ColorProvider} | any;
    /**
     * set if keep model limit of shape when setting offset property
     * @param iskeepmodellimits set if keep model limits when offsetting heatmap
     */
    setKeepModelLimits(iskeepmodellimits: boolean): this;
    /**
     * get keep model limits property
     */
    isKeepModelLimits(): boolean;
    /**
     * set x and y offset separately
     * @example
     * ```javascript
     * // the heatmap would shift toward higher x limit with 2 model x unit and toward lower y limit with 3 model y unit
     * heatmap.setModelOffset(2, -3)
     * ```
     * @param offsetx offsets for each column
     * @param offsety offsets for each row
     */
    setModelOffset(offsetx: number | number[], offsety: number | number[]): this;
    /**
     * get offset x and y
     */
    getModelOffset(): {offsetx: number | number[]; offsety: number | number[]} | object;
    /**
     * set min and max value limit
     * @param min customized min value
     * @param max customized max value
     */
    setMinMax(min: number, max: number): this;
    /**
     * Set color provider
     * @param colorProvider the color provider
     */
    setColorProvider(colorProvider: ColorProvider): this;
    /**
     * Gets color provider
     */
    getColorProvider(): any | ColorProvider;
    /**
     * Set plot mode of column
     * @param type plot type
     */
    setColPlotMode(type: PlotType): this;
    /**
     * get plot mode of column
     */
    getColumnPlotMode(): PlotType;
    /**
     * Set plot mode of row
     * @param type plot type
     */
    setRowPlotMode(type: PlotType): this;
    /**
     * get plot mode of row
     */
    getRowPlotMode(): PlotType;
    /**
     * Set data source
     * @param data the data source
     */
    setData(data: AbstractDataTable | number[][]): this;
    /**
     * draw labels
     * @param context rendering context
     */
    drawLabels(context: RenderingContext): void;
    /**
     * set the visibility of labels
     * @param visible the flag to set the visibility of labels
     */
    setLabelsVisible(visible: boolean): this;
    /**
     * return the visibility of labels
     */
    isLabelsVisible(): boolean;
    /**
     * set textstyle for labels
     * @param textstyle textstyle for labels
     * @param merge merge flag is true if textStyle should be merged with the current style
     */
    setLabelsTextStyle(textstyle: TextStyle | string | object, merge?: boolean): this;
    /**
     * return textstyle of labels
     */
    getLabelsTextStyle(): TextStyle;
    /**
     * hit test return point in model space
     * @param pt point in device space
     */
    hitTest(pt: Point): Point | any;
    /**
     */
    dispose(): void;
}
/**
 * Enum of Plotting types
 */
export enum PlotType {
    /**
     * Step plot mode (no interpolation)
     */
    Step = 'STEP',
    /**
     * Linear interpolation between data point, first column(or row) and last column(or row)
are mapped to the bound of the image
     */
    LinearInbound = 'LINEARINBOUND',
    /**
     * Linear interpolation between data point, and also calculate interpolation for the area where outside of
the first column(or row) and last column(or row) by interpolate between them.
     */
    LinearLoop = 'LINEARLOOP',
    /**
     * Linear interpolation between data point, and draw outside area of the
first column(or row) and last column(or row) by mirror the color of them.
     */
    LinearMirror = 'LINEARMIRROR'
}
