import {CompositeNode} from '../../scene/CompositeNode';
import {ILayoutable} from '../../layout/ILayoutable';
import {LogTrack} from '../LogTrack';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {Rect} from '../../util/Rect';
import {LayoutStyle} from '../../layout/LayoutStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Pattern} from '../../attributes/Pattern';
import {Transformation} from '../../util/Transformation';

/**
 * Define a base implementation of the track header. This class doesn't create
 * headers for track children
 */
export class LogBaseTrackHeader extends CompositeNode implements ILayoutable {
    /**
     * Define a base implementation of the track header. This class doesn't create
     * headers for track children
     * @param track a log track to create header or properties object
     * @param track.track a log track to create header
     * @param track.borderfillstyle The fill style of the border
     * @param track.borderlinestyle The line style of the border
     * @param track.borders borders
     * @param track.borders.top visibility of top part
     * @param track.borders.bottom visibility of bottom part
     * @param track.borders.left visibility of left part
     * @param track.borders.right visibility of right part
     * @param track.isbordervisible The visibility of the border
     * @param track.modellimits model limits
     * @param track.bounds bounds
     * @param height height of the track
     */
    constructor(track: LogTrack | object | { track?: LogTrack; borderfillstyle?: FillStyle | string | object; borderlinestyle?: LineStyle | string | object; borders?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; } ; isbordervisible?: boolean; modellimits?: Rect; bounds?: Rect; } , height?: number);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: LogBaseTrackHeader): this;
    /**
     * Return track to create a header
     */
    getTrack(): LogTrack;
    /**
     * Returns track visibility if track is not null, true instead
     */
    getVisible(): boolean;
    /**
     * Returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bounds of the node
     */
    setBounds(bounds: Rect): this;
    /**
     * return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Return desired height of the header
     */
    getDesiredHeight(): number;
    /**
     * Sets the border visibility
     * @param visible The visibility of the border
     */
    setBorderVisibility(visible: boolean): this;
    /**
     * Gets the header border's visibility.
     */
    getBorderVisibility(): boolean;
    /**
     * Sets the border line style
     * @param lineStyle The style in which the line is displayed
     * object can be in format of constructor of geotoolkit.attributes.LineStyle
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setBorderLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Gets the border line style
     */
    getBorderLineStyle(): LineStyle | any;
    /**
     * Sets the border fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setBorderFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Gets the border fill style
     */
    getBorderFillStyle(): FillStyle | any;
    /**
     * Gets transformation
     */
    getContentsTransform(): Transformation | any;
    /**
     * Get models limits
     */
    getModelLimits(): Rect;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     * @param propagate propagate invalidate layout to parent
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Update layout of the children headers
     */
    updateLayout(): void;
    /**
     * Rebuild Track header
     */
    rebuild(): this;
    /**
     * invalidate Method
     */
    getInvalidateMethod(): Function;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {track: LogTrack; borderfillstyle: FillStyle; borderlinestyle: LineStyle; borders: {top: boolean; bottom: boolean; left: boolean; right: boolean}; isbordervisible: boolean; modellimits: Rect; bounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.track a log track to create header
     * @param properties.borderfillstyle The fill style of the border
     * @param properties.borderlinestyle The line style of the border
     * @param properties.borders borders
     * @param properties.borders.top visibility of top part
     * @param properties.borders.bottom visibility of bottom part
     * @param properties.borders.left visibility of left part
     * @param properties.borders.right visibility of right part
     * @param properties.isbordervisible The visibility of the border
     * @param properties.modellimits model limits
     * @param properties.bounds bounds
     */
    setProperties(properties: object | { track?: LogTrack; borderfillstyle?: FillStyle | string | object; borderlinestyle?: LineStyle | string | object; borders?: object | { top?: boolean; bottom?: boolean; left?: boolean; right?: boolean; } ; isbordervisible?: boolean; modellimits?: Rect; bounds?: Rect; } ): this;
    /**
     * Adds new css class to node
     * @param cssclass css class name('s)
     */
    addCssClass(cssclass: string[] | string): this;
    /**
     * Removes css class from node
     * @param cssclass css class name('s)
     */
    removeCssClass(cssclass: string[] | string): this;
}
