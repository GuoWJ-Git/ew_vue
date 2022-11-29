import {Graphics} from './Graphics';
import {AbstractUnit} from '../util/AbstractUnit';
import {IFilter} from './IFilter';
import {Transformation} from '../util/Transformation';
import {RenderingState} from './RenderingState';
import {Surface} from './Surface';
import {Rect} from '../util/Rect';
import {TextStyle} from '../attributes/TextStyle';
import {TextMetrics} from './TextMetrics';
import {LineStyle} from '../attributes/LineStyle';
import {Node} from '../scene/Node';
import {Point} from '../util/Point';
import {BlendMode} from '../util/BlendMode';

/**
 * Represents context to traverse nodes during picking and rendering
 */
export class RenderingContext extends Graphics {
    /**
     * Represents context to traverse nodes during picking and rendering
     * @param deviceUnit represent the {string} name, {string} symbol or {geotoolkit.util.AbstractUnit} unit to be used as unit for device
     * @param filters an array of filters
     */
    constructor(deviceUnit?: string | AbstractUnit, filters?: IFilter[]);
    /**
     * Add filter to be applied
     * @param filter filter to add
     */
    addFilter(filter: IFilter): this;
    /**
     * Remove an instance of the filter
     * @param filter filter to remove
     */
    removeFilter(filter: IFilter): this;
    /**
     * Gets an array of filters
     */
    protected getFilters(): IFilter[] | any;
    /**
     * Sets an array of filters
     * @param filters filters
     */
    protected setFilters(filters: IFilter[] | any): this;
    /**
     * Gets the current transformation, which defines transformation from model
     * coordinates to device coordinates
     */
    getTransformation(): Transformation;
    /**
     * Sets the current transformation, which defines transformation from model
     * coordinates to device coordinates
     * @param transformation transformation to be set
     */
    setTransformation(transformation: Transformation): void;
    /**
     * Gets the current transformation, which defines transformation from device
     * coordinates to model coordinates.
     * Note, that inverse transformation can be calculated based on
     * getTransformation() call (and vice versa).
     */
    getInverseTransformation(): Transformation;
    /**
     * Creates rendering state
     */
    createRenderingState(): RenderingState;
    /**
     * Creates a new surface
     * @param width width of surface
     * @param height height of surface
     * @param devicePixel If set to true, width and height will be used as 'device' pixels.
     */
    createSurface(width: number, height: number, devicePixel?: boolean): Surface;
    /**
     * Creates a new context with concatenated transformation
     * @param tr a transformation to concatenate
     */
    pushTransformation(tr: Transformation): RenderingContext;
    /**
     * Gets rectangular area (defined in device space) to invalidate
     */
    getDeviceRect(): Rect;
    /**
     * Gets "global" view port (defined in device space).
     * The implementation calls for "this.getDeviceRect()"
     */
    getGlobalViewPort(): Rect;
    /**
     * Sets "global" view port (defined in device space)
     * The implementation is empty
     * @param globalViewPort "global" view port
     */
    setGlobalViewPort(globalViewPort: Rect): this;
    /**
     * Gets rectangular area (defined in model space) to invalidate.
     * Note, that having called getTransformation() (or getInverseTransformation())
     * model rect can be calculated based on device rect (and vice versa).
     */
    getModelRect(): Rect;
    /**
     * Sets device rectangle area of interest
     * @param rect 
     */
    setDeviceRect(rect: Rect): void;
    /**
     * Sets model rectangle
     * @param rect model area of interest
     */
    setModelRect(rect: Rect): void;
    /**
     * Return true if context is doing picking now
     */
    isPicking(): boolean;
    /**
     * Return text metrics
     * @param text text
     * @param textStyle the text style
     */
    measureText(text: string, textStyle?: TextStyle): TextMetrics;
    /**
     * Returns line dimension at the current context
     * @param lineStyle the line style
     */
    measureLine(lineStyle: LineStyle): number;
    /**
     * Save the current state
     */
    save(): void;
    /**
     * Restore current state
     */
    restore(): void;
    /**
     * Filter node
     * @param node node to be rendered
     */
    filter(node: Node): boolean;
    /**
     * Specify node to be rendered
     * @param node node to be rendered
     */
    setCurrentNode(node: Node): void;
    /**
     * Prepare rendering context. The default implementation blocks notifications from nodes and
     * styles. if you call beginRendering then call the endRendering.
     */
    beginRendering(): void;
    /**
     * End usage ot the rendering context
     */
    endRendering(): void;
    /**
     * Gets path length in device space. <br>
     * The default implementation returns straight distance between transformed points
     * @param pt1 first model point
     * @param pt2 second model point
     */
    getDevicePathLength(pt1: Point, pt2: Point): number;
    /**
     * Specifies the alpha (transparency) value that is applied to shapes and images before they are drawn
     * @param alpha A number between 0.0 (fully transparent) and 1.0 (fully opaque).
     * Not all implementations can support it
     * @param mode defines mode to blend opacity
     */
    setGlobalAlpha(alpha: number, mode?: BlendMode): this;
    /**
     * Gets the alpha (transparency) value that is applied to shapes and images before they are drawn
     */
    getGlobalAlpha(): number;
    /**
     * Enable or disable image smoothing if context is supported determines whether scaled images are smoothed.
     * When enlarging images, the default resizing algorithm will blur the pixels. Set this property to false
     * to retain the pixels' sharpness. By default is ignored
     * @param enable enable or disable smoothing
     */
    setImageSmoothing(enable: boolean): this;
    /**
     * Return images smoothing enabled flag if context is supported. By default it returns false
     */
    getImageSmoothing(): boolean;
}
