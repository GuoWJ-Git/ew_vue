import {AnimatedNode} from '../scene/AnimatedNode';
import {Rect} from '../util/Rect';
import {LineStyle} from '../attributes/LineStyle';
import {LogTrack} from './LogTrack';
import {RgbaColor} from '../util/RgbaColor';
import {Transformation} from '../util/Transformation';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * This represents a parent class of all well log visuals. LogVisuals are shapes that are considered by the WelllogJS toolkit as 'top level' shapes.
 * The LogHeader and LogFooters for those visuals are created by the toolkit. <br>
 * Some advanced features like the Widget's SelectionTool will ignore any shape that is not a Visual. This class defines the parent class that needs to be inherited from, to benefit from those features.<br>
 * Most common WellLog shapes already inherit from this class, like LogCurve, LogTrack, etc.
 */
export class LogAbstractVisual extends AnimatedNode {
    /**
     * This represents a parent class of all well log visuals. LogVisuals are shapes that are considered by the WelllogJS toolkit as 'top level' shapes.
     * The LogHeader and LogFooters for those visuals are created by the toolkit. <br>
     * Some advanced features like the Widget's SelectionTool will ignore any shape that is not a Visual. This class defines the parent class that needs to be inherited from, to benefit from those features.<br>
     * Most common WellLog shapes already inherit from this class, like LogCurve, LogTrack, etc.
     * @param options An object containing the properties to set
     * @param options.basename The base name
     * @param options.bounds the rectangle specifying position of the visual in the track. If set, autobounds will be switched off
     * @param options.autobounds Enables or disables auto bounds
     * @param options.linestyle linestyle
     * @param options.microposleft left micro position
     * @param options.microposright right micro position
     */
    constructor(options?: object | { basename?: string; bounds?: Rect; autobounds?: boolean; linestyle?: LineStyle | string | object; microposleft?: number; microposright?: number; } );
    /**
     * Invalidate bounds
     * @param bounds model bounds
     * @param force force
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     */
    invalidateParent(bounds?: Rect | any, force?: boolean): this;
    /**
     * Returns parent track if geotoolkit.welllog.LogTrack
     */
    getTrack(): LogTrack;
    /**
     * Sets line style
     * @param lineStyle The style in which the line is displayed
     * object can be in format of constructor of geotoolkit.attributes.LineStyle
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | string | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; } , merge?: boolean): this;
    /**
     * Returns line style
     */
    getLineStyle(): LineStyle;
    /**
     * Return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Returns parent model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Returns bounds in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * Sets bounds of the visual in the parent coordinates
     * and sets up auto bounds to false
     * @param bounds the rectangle specifying position of the visual in the track.
     */
    setBounds(bounds: Rect): this;
    /**
     * Enables or disables auto bounds. If auto bounds is enabled then it
     * equals to parent model limits
     * @param enable Enables or disables auto bounds
     */
    setAutoBounds(enable: boolean): this;
    /**
     * Returns auto bounds value
     */
    isAutoBounds(): boolean;
    /**
     * Returns micro position left
     */
    getMicroPositionLeft(): number;
    /**
     * Returns micro position right
     */
    getMicroPositionRight(): number;
    /**
     * Returns micro position transformation
     */
    protected getMicroPositionTransformation(): Transformation | null;
    /**
     * Sets micro position (0 - 1).  It allows application code to display the visual in a subarea of the track.<br>
     * By default log visuals uses all space of the trace in the horizontal direction, but micro position allows to place log visual in the specified position of the track in horizontal direction.
     * See example below
     * @example
     * ```javascript
     * // The following code places curve 20% from left and 20% from right.
     * curve.setMicroPosition(0.2,0.8);
     * ```
     * @param left left position
     * @param right right position
     */
    setMicroPosition(left: number, right: number): this;
    /**
     * calls when microPosition has been changed
     */
    protected onMicroPositionChanged(): this;
    /**
     * Retrieves the world transformation of the spatial
     */
    getContentsTransform(): Transformation | null;
    /**
     * Retrieves the local transformation of the node which represents
     * multiplication of parent to bounds and contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Check culling.
     * Returns true if object is inside of renderable area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {basename: string; bounds: Rect; autobounds: boolean; linestyle: LineStyle; microposleft: number; microposright: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.basename The base name
     * @param properties.bounds the rectangle specifying position of the visual in the track.
     * @param properties.autobounds Enables or disables auto bounds
     * @param properties.linestyle linestyle
     * @param properties.microposleft left micro position
     * @param properties.microposright right micro position
     */
    setProperties(properties: object | { basename?: string; bounds?: Rect; autobounds?: boolean; linestyle?: LineStyle | string | object; microposleft?: number; microposright?: number; } ): this;
    /**
     * return an object that contains all headers registered with the visual
     */
    getHeaders(): any;
    /**
     * Return the header registered by the name
     * @param name header name
     */
    getHeader(name: string): any;
    /**
     * Sets header instance with specified name. This name usually defines header or footer.
     * @param name of the container. The 'header' and 'footer' is used.
     * @param headerInstance the header instance
     * @param silent silent node to avoid sending events that header is created
     */
    setHeader(name: string, headerInstance: any, silent?: boolean): this;
    /**
     * Returns the base name
     */
    getBaseName(): string;
    /**
     * Sets base name of the visual
     * @param name The base name
     */
    setBaseName(name: string): this;
    /**
     * This method is called if header is set.  Send event {@link @int/geotoolkit/welllog/LogAbstractVisual.Events.HeaderSet}
     * @param name of the container. The 'header' and 'footer' is used.
     * @param headerInstance the header instance
     * @param silent silent node to avoid sending events that header is created
     */
    protected onHeaderSet(name: string, headerInstance: any, silent?: boolean): void;
}
/**
 * Visual Events enumerator
 */
export enum Events {
    /**
     * Event type fired when an instance of the header is set
     */
    HeaderSet = 'HeaderSet'
}
