import {RectangularShape} from '../../scene/shapes/RectangularShape';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../../data/NumericalDataSeriesView';
import {ColorProvider} from '../../util/ColorProvider';
import {Point} from '../../util/Point';
import {Rect} from '../../util/Rect';
import {Area} from '../../util/Area';

/**
 * Cross plot is a two dimensional chart, that uses horizontal and vertical axes to plot the data points. <br/>
 * Crossplot shows how much one variable is affected by another. The relationship between two variables is called their correlation. </br>
 * Crossplots usually consist of a large body of data. <br>
 * The closer the data points plotted as making a straight line, the higher the correlation between variables.<br/>
 * geotoolkit.controls.shapes.CrossPlot is used internally by the {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot}.
 */
export class CrossPlot extends RectangularShape {
    /**
     * Cross plot is a two dimensional chart, that uses horizontal and vertical axes to plot the data points. <br/>
     * Crossplot shows how much one variable is affected by another. The relationship between two variables is called their correlation. </br>
     * Crossplots usually consist of a large body of data. <br>
     * The closer the data points plotted as making a straight line, the higher the correlation between variables.<br/>
     * geotoolkit.controls.shapes.CrossPlot is used internally by the {@link @int/geotoolkit/widgets/CrossPlot.CrossPlot}.
     * @param options data
     * @param options.x The x object containing values, min and max
     * @param options.x.data The x values
     * @param options.x.min The x minimum to use, can be used to clip the data
     * @param options.x.max The x maximum to use, can be used to clip the data
     * @param options.y The y object containing values, min and max
     * @param options.y.data The y values
     * @param options.y.min The y minimum to use, can be used to clip the data
     * @param options.y.max The y maximum to use, can be used to clip the data
     * @param options.z The z object containing values, min and max
     * @param options.z.data The z values
     * @param options.datax The x values
     * @param options.minx The x minimum to use, can be used to clip the data
     * @param options.maxx The x maximum to use, can be used to clip the data
     * @param options.datay The y values
     * @param options.miny The y minimum to use, can be used to clip the data
     * @param options.maxy The y maximum to use, can be used to clip the data
     * @param options.dataz The z values
     * @param options.colorprovider The colorProvider used to color points based on their Z value
     * @param options.defaultcolor The color to be used if there is no ColorProvider provided or if a point has no valid Z value
     * @param options.defaultlinecolor The color of line to be used in symbol
     * @param options.painter The painter to draw symbols
     * @param options.symbolsize The symbol size in pixel
     * @param options.highlightcolor The color to use for highlighted shapes
     */
    constructor(options?: object | { x?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; min?: number; max?: number; } ; y?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; min?: number; max?: number; } ; z?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; } ; datax?: number[] | NumericalDataSeries | NumericalDataSeriesView; minx?: number; maxx?: number; datay?: number[] | NumericalDataSeries | NumericalDataSeriesView; miny?: number; maxy?: number; dataz?: number[] | NumericalDataSeries | NumericalDataSeriesView; colorprovider?: ColorProvider; defaultcolor?: string; defaultlinecolor?: string; painter?: any; symbolsize?: number; highlightcolor?: string; } );
    /**
     * @param properties properties
     * @param properties.x The x object containing values, min and max
     * @param properties.x.data The x values
     * @param properties.x.min The x minimum to use, can be used to clip the data
     * @param properties.x.max The x maximum to use, can be used to clip the data
     * @param properties.y The y object containing values, min and max
     * @param properties.y.data The y values
     * @param properties.y.min The y minimum to use, can be used to clip the data
     * @param properties.y.max The y maximum to use, can be used to clip the data
     * @param properties.z The z object containing values, min and max
     * @param properties.z.data The z values
     * @param properties.datax The x values
     * @param properties.minx The x minimum to use, can be used to clip the data
     * @param properties.maxx The x maximum to use, can be used to clip the data
     * @param properties.datay The y values
     * @param properties.miny The y minimum to use, can be used to clip the data
     * @param properties.maxy The y maximum to use, can be used to clip the data
     * @param properties.dataz The z values
     * @param properties.colorprovider The colorProvider used to color points based on their Z value
     * @param properties.defaultcolor The color to be used if there is no ColorProvider provided or if a point has no valid Z value
     * @param properties.defaultlinecolor The color of line to be used in symbol
     * @param properties.painter The painter to draw symbols
     * @param properties.symbolsize The symbol size in pixel
     * @param properties.highlightcolor The color to use for highlighted shapes
     */
    setProperties(properties?: object | { x?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; min?: number; max?: number; } ; y?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; min?: number; max?: number; } ; z?: object | { data?: number[]; } ; datax?: number[]; minx?: number; maxx?: number; datay?: number[] | NumericalDataSeries | NumericalDataSeriesView; miny?: number; maxy?: number; dataz?: number[]; colorprovider?: ColorProvider; defaultcolor?: string; defaultlinecolor?: string; painter?: any; symbolsize?: number; highlightcolor?: string; } ): this;
    /**
     * Modifies the crossplot content, the content of the given object will be merged with the current state of the shape.
     * IE: If you pass only one parameter, all the others will remain unchanged.
     * @param data data
     * @param data.x The x object containing values, min and max
     * @param data.x.data The x values
     * @param data.x.min The x minimum to use, can be used to clip the data
     * @param data.x.max The x maximum to use, can be used to clip the data
     * @param data.y The y object containing values, min and max
     * @param data.y.data The y values
     * @param data.y.min The y minimum to use, can be used to clip the data
     * @param data.y.max The y maximum to use, can be used to clip the data
     * @param data.z The z object containing values, min and max
     * @param data.z.data The z values
     * @param data.datax The x values
     * @param data.minx The x minimum to use, can be used to clip the data
     * @param data.maxx The x maximum to use, can be used to clip the data
     * @param data.datay The y values
     * @param data.miny The y minimum to use, can be used to clip the data
     * @param data.maxy The y maximum to use, can be used to clip the data
     * @param data.dataz The z values
     * @param data.colorprovider The colorProvider used to color points based on their Z value
     * @param data.defaultcolor The color to use if there is no ColorProvider provided or if a point has no valid Z value
     * @param data.defaultlinecolor The color of line to be used in symbol
     * @param data.painter The painter to draw symbols
     * @param data.symbolsize The symbol size in pixel
     * @param data.highlightcolor The color to use for highlighted shapes
     */
    setData(data: object | { x?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; min?: number; max?: number; } ; y?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; min?: number; max?: number; } ; z?: object | { data?: number[] | NumericalDataSeries | NumericalDataSeriesView; } ; datax?: number[] | NumericalDataSeries | NumericalDataSeriesView; minx?: number; maxx?: number; datay?: number[] | NumericalDataSeries | NumericalDataSeriesView; miny?: number; maxy?: number; dataz?: number[] | NumericalDataSeries | NumericalDataSeriesView; colorprovider?: ColorProvider; defaultcolor?: string; defaultlinecolor?: string; painter?: any; symbolsize?: number; highlightcolor?: string; } ): this;
    /**
     * Get Data
     */
    getData(): {datax: number[]; minx: number; maxx: number; datay: number[]; miny: number; maxy: number; dataz: number[] | null; colorprovider: ColorProvider; defaultcolor: string; defaultlinecolor: string; highlightcolor: string; symbolsize: number; painter: any} | object;
    /**
     * Return ColorProvider
     */
    getColorProvider(): ColorProvider;
    /**
     * Return false if bounds is equal to zero
     */
    isEmpty(): boolean;
    /**
     * Update limits
     */
    updateLimits(): boolean;
    /**
     * Sets the painter that will be used to draw crossplot points
     * @param painter The symbol painter function to draw
     */
    setSymbolPainter(painter: Function): this;
    /**
     * Get the current painter used to draw points
     */
    getSymbolPainter(): Function;
    /**
     * Returns if clipping is enabled or not for this node.
     */
    isClippingEnabled(): boolean;
    /**
     * Enables or disables clipping of this node. If enabled,
     * shapes will not be rendered outside of its bounds.
     * @param doClip enable clipping on this node
     */
    enableClipping(doClip: boolean): this;
    /**
     * Gets Highlighted Indices
     */
    getHighlightedIndices(): any[];
    /**
     * Highlights the selected area
     * @param rect search area
     * @param reset un-highlights previously selected indices
     */
    highlightArea(rect: Point | Rect, reset: boolean): this;
    /**
     * Highlights the selected indices
     * @param indices indices to be highlighted
     * @param reset un-highlights previously selected indices
     */
    highlightIndices(indices: number[], reset: boolean): this;
    /**
     * Return indices in search area
     * @param area search area
     */
    getIndicesAt(area: Area): number[];
    /**
     * Return points in search area
     * @param rect search area
     */
    getPointsAt(rect: Point | Rect): any[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: {min: number; max: number}; y: {min: number; max: number}; minx: number; maxx: number; miny: number; maxy: number; colorprovider: ColorProvider; defaultcolor: string; defaultlinecolor: string; painter: any; symbolsize: number; highlightcolor: string} | any;
}
