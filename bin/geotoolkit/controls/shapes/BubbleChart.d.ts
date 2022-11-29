import {ScaledShape} from '../../scene/shapes/ScaledShape';
import {TextStyle} from '../../attributes/TextStyle';
import {ColorProvider} from '../../util/ColorProvider';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {Rect} from '../../util/Rect';
import {AxisDimension} from '../../axis/AxisDimension';
import {Area} from '../../util/Area';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Transformation} from '../../util/Transformation';
import {Point} from '../../util/Point';

/**
 * A bubble chart is a variation of a scatter chart in which the data points are replaced with bubbles, <br>
 * and an additional dimension of the data is represented in the size of the bubbles. <br>
 * a bubble chart plots x values, y values, z (color) values and s (size) values. <br>
 * geotoolkit.controls.shapes.BubbleChart is used internally by the {@link @int/geotoolkit/widgets/BubbleChart.BubbleChart}.
 */
export class BubbleChart extends ScaledShape {
    /**
     * A bubble chart is a variation of a scatter chart in which the data points are replaced with bubbles, <br>
     * and an additional dimension of the data is represented in the size of the bubbles. <br>
     * a bubble chart plots x values, y values, z (color) values and s (size) values. <br>
     * geotoolkit.controls.shapes.BubbleChart is used internally by the {@link @int/geotoolkit/widgets/BubbleChart.BubbleChart}.
     * @param options options
     * @param options.datax Data series x
     * @param options.minx The x minimum to use, can be used to clip the data
     * @param options.maxx The x maximum to use, can be used to clip the data
     * @param options.autominmaxx automatically adjust x limit to contain all symbols in x axis direction without clipping anyone
     * @param options.neatlimitx enable calculation of neat limit for series x
     * @param options.preciselimitx option for neat limits calculates only step and hide edge ticks. It is enabled only if neatlimits is set
     * @param options.minspanx desired minimum distance between ticks in pixels for series x
     * @param options.datay Data series y
     * @param options.miny The y minimum to use, can be used to clip the data
     * @param options.maxy The y maximum to use, can be used to clip the data
     * @param options.autominmaxy automatically adjust y limit to contain all symbols in  axis direction without clipping anyone
     * @param options.neatlimity enable calculation of neat limit for series y
     * @param options.preciselimity option for neat limits calculates only step and hide edge ticks. It is enabled only if neatlimits is set
     * @param options.minspany desired minimum distance between ticks in pixels for series y
     * @param options.datas Data series s
     * @param options.mins The s minimum to use
     * @param options.maxs The s maximum to use
     * @param options.autominmaxs enable automatically calculate minimum and maximum of series s
     * @param options.dataz Data series z
     * @param options.minz The z minimum to use
     * @param options.maxz The z maximum to use
     * @param options.autominmaxz enable automatically calculate minimum and maximum of series z
     * @param options.labels text value of labels
     * @param options.labellocation The relative location of label to bubble
     * @param options.secondarylocation The relative location of label to bubble when first location is unable to show the label completely
     * @param options.labeltextstyle the text style of labels
     * @param options.labelpadding the padding between labels and bubble or view boundary
     * @param options.labelvisible flag determine the visibility of labels
     * @param options.validlength the min length of four data series
     * @param options.minsize minimum size (side length of square) of symbol
     * @param options.maxsize maximum size (side length of square) of symbol
     * @param options.sizebin the number of bins for showing different degree of size, defaluat value is the number of items in data series
     * @param options.colorprovider The colorProvider used to color points based on their Z value
     * @param options.defaultfillstyle The fillstyle to be used if there is no ColorProvider provided or if a point has no valid Z value
     * @param options.defaultlinestyle The linestyle to be used to render symbol
     * @param options.symbol The painter to draw symbols
     * @param options.selectable determine if the shape is selectable
     * @param parentbounds bounds of parent node
     */
    constructor(options?: object | { datax?: any[]; minx?: number; maxx?: number; autominmaxx?: boolean; neatlimitx?: boolean; preciselimitx?: boolean; minspanx?: number; datay?: any[]; miny?: number; maxy?: number; autominmaxy?: boolean; neatlimity?: boolean; preciselimity?: boolean; minspany?: number; datas?: any[]; mins?: number; maxs?: number; autominmaxs?: boolean; dataz?: any[]; minz?: number; maxz?: number; autominmaxz?: boolean; labels?: any[]; labellocation?: string; secondarylocation?: string; labeltextstyle?: TextStyle | string | object; labelpadding?: number; labelvisible?: boolean; validlength?: number; minsize?: number; maxsize?: number; sizebin?: number; colorprovider?: ColorProvider; defaultfillstyle?: string | object | FillStyle; defaultlinestyle?: string | object | LineStyle; symbol?: Function; selectable?: boolean; } , parentbounds?: Rect);
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.datax Data series x
     * @param properties.minx The x minimum to use, can be used to clip the data
     * @param properties.maxx The x maximum to use, can be used to clip the data
     * @param properties.autominmaxx automatically adjust x limit to contain all symbols in x axis direction without clipping anyone
     * @param properties.neatlimitx enable calculation of neat limit for series x
     * @param properties.preciselimitx option for neat limits calculates for series x only step and hide edge ticks. It is enabled only if neatlimits is set
     * @param properties.minspanx desired minimum distance between ticks in pixels for series x
     * @param properties.datay Data series y
     * @param properties.miny The y minimum to use, can be used to clip the data
     * @param properties.maxy The y maximum to use, can be used to clip the data
     * @param properties.autominmaxy automatically adjust y limit to contain all symbols in  axis direction without clipping anyone
     * @param properties.neatlimity enable calculation of neat limit for series y
     * @param properties.preciselimity option for neat limits calculates only step and hide edge ticks. It is enabled only if neatlimits is set
     * @param properties.minspany desired minimum distance between ticks in pixels for series y
     * @param properties.datas Data series s
     * @param properties.mins The s minimum to use
     * @param properties.maxs The s maximum to use
     * @param properties.autominmaxs enable automatically calculate minimum and maximum of series s
     * @param properties.dataz Data series z
     * @param properties.minz The z minimum to use
     * @param properties.maxz The z maximum to use
     * @param properties.autominmaxz enable automatically calculate minimum and maximum of series z
     * @param properties.labels text value of labels
     * @param properties.labellocation The relative location of label to bubble
     * @param properties.secondarylocation The relative location of label to bubble when first location is unable to show the label completely
     * @param properties.labeltextstyle the text style of labels
     * @param properties.labelpadding the padding between labels and bubble or view boundary
     * @param properties.labelvisible flag determine the visibility of labels
     * @param properties.validlength the min length of four data series
     * @param properties.minsize minimum size (side length of square) of symbol
     * @param properties.maxsize maximum size (side length of square) of symbol
     * @param properties.sizebin the number of bins for showing different degree of size, defaluat value is the number of items in data series
     * @param properties.colorprovider The colorProvider used to color points based on their Z value
     * @param properties.defaultfillstyle The fillstyle to be used if there is no ColorProvider provided or if a point has no valid Z value
     * @param properties.defaultlinestyle The linestyle to be used to render symbol
     * @param properties.symbol The painter to draw symbols
     * @param properties.selectable determine if the shape is selectable
     */
    setProperties(properties?: object | { datax?: any[]; minx?: number; maxx?: number; autominmaxx?: boolean; neatlimitx?: boolean; preciselimitx?: boolean; minspanx?: number; datay?: any[]; miny?: number; maxy?: number; autominmaxy?: boolean; neatlimity?: boolean; preciselimity?: boolean; minspany?: number; datas?: any[]; mins?: number; maxs?: number; autominmaxs?: boolean; dataz?: any[]; minz?: number; maxz?: number; autominmaxz?: boolean; labels?: any[]; labellocation?: string; secondarylocation?: string; labeltextstyle?: TextStyle | string | object; labelpadding?: number; labelvisible?: boolean; validlength?: number; minsize?: number; maxsize?: number; sizebin?: number; colorprovider?: ColorProvider; defaultfillstyle?: string | object | FillStyle; defaultlinestyle?: string | object | LineStyle; symbol?: Function; selectable?: boolean; } ): this;
    /**
     * Get data
     * @param ignoreFixedLimit if it is true, return real limit for each axis, otherwise return fixed limit
     * @param ignoreAutoLimit ignore the auto limits
     */
    getData(ignoreFixedLimit: boolean, ignoreAutoLimit: boolean): {datax: any[]; minx: number; maxx: number; autominmaxx: boolean; neatlimitx: boolean; preciselimitx: boolean; minspanx: number; datay: any[]; miny: number; maxy: number; autominmaxy: boolean; neatlimity: boolean; preciselimity: boolean; minspany: number; datas: any[]; mins: number; maxs: number; autominmaxs: boolean; dataz: any[]; minz: number; maxz: number; labels: any[]; labellocation: string; secondarylocation: string; labeltextstyle: TextStyle; labelpadding: number; labelvisible: boolean; validlength: number; minsize: number; maxsize: number; colorprovider: ColorProvider; defaultfillstyle: FillStyle; defaultlinestyle: LineStyle; symbol: Function} | object;
    /**
     * Add values to chart
     * @param amount the amount of added values
     */
    addData(amount: number): void;
    /**
     * remove data from chart
     * @param from index where starting remove
     * @param amount amount of data to be removed
     */
    removeData(from: number, amount: number): void;
    /**
     * Set the real bounds (real size in pixel) for chart
     * @param parentbounds bounds of the chart in pixel
     */
    setParentBounds(parentbounds: Rect): this;
    /**
     * Get the real bounds of chart in pixel
     */
    getParentBounds(): Rect;
    /**
     * Set the bounds of the chart in model unit
     * @param bounds bounds of the chart in model unit
     */
    setBounds(bounds: Rect): boolean;
    /**
     * Get the bounds of the chart in model unit
     */
    getBounds(): Rect;
    /**
     * Update the model bounds
     * @param parentbounds bounds of parent node
     * @param start the starting index for incrementally calculating new model bounds
     * @param end the ending index for incrementally calculating new model bounds
     */
    updateLimits(parentbounds?: Rect, start?: number, end?: number): void;
    /**
     * Return axis dimension for X axis
     */
    getAxisDimensionX(): AxisDimension;
    /**
     * Return axis dimension for Y axis
     */
    getAxisDimensionY(): AxisDimension;
    /**
     * Invalidate cache for rebuilding cache before rendering
     */
    invalidateCache(): void;
    /**
     * get selected symbols
     * @param area selected area
     * @param context rendering context or transformation
     */
    getIndicesAt(area: Area, context: RenderingContext | Transformation): any[];
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): number[];
}
/**
 * Enum for Boxplot.BoxValueLocation
 */
export enum LabelLocation {
    /**
     * on top of bubble
     */
    Top = 'Top',
    /**
     * below the bubble
     */
    Bottom = 'Bottom',
    /**
     * on center of the bubble
     */
    Center = 'Center'
}
