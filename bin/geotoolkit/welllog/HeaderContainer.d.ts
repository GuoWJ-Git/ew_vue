import {Group} from '../scene/Group';
import {LogVisualHeaderProvider} from './header/LogVisualHeaderProvider';
import {Node} from '../scene/Node';
import {Rect} from '../util/Rect';
import {Point} from '../util/Point';
import {LogTrack} from './LogTrack';
import {LogBaseTrackHeader} from './header/LogBaseTrackHeader';

/**
 * Defines a container of log headers
 */
export class HeaderContainer extends Group {
    /**
     * Defines a container of log headers
     * @param options provider of header prototypes or properties object
     * @param options.headersspacing spacing between headers
     * @param options.headerspadding padding
     * @param options.provider provider of header prototypes
     * @param options.scrollable sets whether this container is scrollable
     */
    constructor(options?: LogVisualHeaderProvider | object | { headersspacing?: number; headerspadding?: number; provider?: LogVisualHeaderProvider; scrollable?: boolean; } );
    /**
     * Set display type
     * @param displayType level of detail
     */
    setDisplayType(displayType: DisplayType): this;
    /**
     * Returns display type
     */
    getDisplayType(): DisplayType;
    /**
     * Sets header provider
     * @param provider provider of header prototypes
     */
    setHeaderProvider(provider: LogVisualHeaderProvider): this;
    /**
     * Return a header provider
     */
    getHeaderProvider(): LogVisualHeaderProvider;
    /**
     * Add child
     * @param node the child
     */
    addChild(node: Node | Node[]): this;
    /**
     * Remove child node
     * @param node node or array of nodes to be removed
     */
    removeChild(node: Node | Node[]): this;
    /**
     * Insert child at given index
     * @param index position where to insert child
     * @param node the child
     */
    insertChild(index: number, node: HeaderContainer): this;
    /**
     * Return preferred size to layout children
     * @param rect desired rect to layout
     */
    getPreferredSize(rect?: Rect): Rect;
    /**
     * Set spacing in pixels between headers
     * @param spacing spacing in pixels between header
     */
    setHeadersSpacing(spacing: number): this;
    /**
     * Return spacing in pixels between headers
     */
    getHeadersSpacing(): number;
    /**
     * Set margin in pixels between headers
     * @deprecated since 2021.1 (3.3) use .setHeadersSpacing() instead
     * @param margin margin in pixels between header
     */
    setMargin(margin: number): this;
    /**
     * Return margin in pixels between headers
     * @deprecated since 2021.1 (3.3) use .getHeadersSpacing() instead
     */
    getMargin(): number;
    /**
     * Set margin in pixels between headers
     * @param padding padding in pixels header to use in header containers
     */
    setHeadersPadding(padding: number): this;
    /**
     * Return padding in pixels in header containers
     */
    getHeadersPadding(): number;
    /**
     * Set margin in pixels between headers
     * @deprecated since 2021.1 (3.3) use .setHeadersPadding() instead
     * @param padding padding in pixels header to use in header containers
     */
    setPadding(padding: number): this;
    /**
     * Return padding in pixels in header containers
     * @deprecated since 2021.1 (3.3) use .getHeadersPadding() instead
     */
    getPadding(): number;
    /**
     * Determines whether this container is scrollable
     * Returns true if scrollable
     */
    isScrollable(): boolean;
    /**
     * Sets whether this container is scrollable
     * @param scrollable sets whether this container is scrollable
     */
    setScrollable(scrollable: boolean): this;
    /**
     * Scroll to the top
     */
    scrollToTop(): this;
    /**
     * Scroll to the bottom
     */
    scrollToBottom(): this;
    /**
     * Returns position to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayPosition(): Point;
    /**
     * Sets display position
     * @param posX x-axis position used by header to display value
     * @param markerDepth marker depth to be used to display value
     */
    setDisplayPosition(posX: number, markerDepth: number): this;
    /**
     * Return marker depth to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Sets marker depth
     * @param value depth of time value used by header
     */
    setDisplayMarkerDepth(value: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {headersspacing: number; headerspadding: number; provider: LogVisualHeaderProvider; scrollable: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.headersspacing spacing between headers
     * @param properties.headerspadding padding
     * @param properties.provider provider of header prototypes
     * @param properties.scrollable sets whether this container is scrollable
     */
    setProperties(properties?: object | { headersspacing?: number; headerspadding?: number; provider?: LogVisualHeaderProvider; scrollable?: boolean; } ): this;
    /**
     * Return log track header
     * @param track log track
     */
    getTrackHeader(track: LogTrack): LogBaseTrackHeader | any;
}
/**
 * Enum defining Orientation values
 */
export enum DisplayType {
    /**
     * Default
     */
    Default = 'default',
    /**
     * Maximized
     */
    Maximized = 'maximized',
    /**
     * Minimized
     */
    Minimized = 'minimized'
}
