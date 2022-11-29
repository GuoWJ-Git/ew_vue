import {Polyline} from '../../../scene/shapes/Polyline';
import {ILink} from './ILink';
import {Dimension} from '../../../util/Dimension';
import {Node} from '../../../scene/Node';
import {Point} from '../../../util/Point';
import {GraphicsPath} from '../../../renderer/GraphicsPath';
import {Rect} from '../../../util/Rect';
import {LinkSide} from './LinkSide';
import {LinkConnection} from './LinkConnection';

/**
 * Polygonal link visual. This visual allows to create points in real-time,
 * e.g. draw custom link.
 */
export class PolylineVisual extends Polyline implements ILink {
    /**
     * Polygonal link visual. This visual allows to create points in real-time,
     * e.g. draw custom link.
     * @param options options
     */
    constructor(options?: object);
    /**
     * Returns component class, string value
     */
    getPrototypeId(): string;
    /**
     * Gets component name
     */
    getPrototypeName(): string;
    /**
     * Gets component category
     */
    getCategory(): string;
    /**
     * Gets an array of keywords for better search
     */
    getSearchKeywords(): string[];
    /**
     * Gets default size of the link visual
     */
    getDefaultSize(): Dimension;
    /**
     * This method does nothing for the link visual
     * @param dimension new default dimension
     */
    setDefaultSize(dimension: Dimension): this;
    /**
     * Sets text and its options
     * @param textOptions text and/or its options
     * @param textOptions.text text content
     */
    setText(textOptions: object | { text?: string; }  | string): this;
    /**
     * Gets geometry for the current link visual
     */
    getGeometry(): Node;
    /**
     * Returns an array of link points: begin and end
     */
    getLinkPoints(): Point[];
    /**
     * LinkVisual does not let setting alternative linking points, only begin and end
     * @param ignored ingored param
     */
    setLinkPoints(ignored: any): this;
    /**
     * Gets outline (path) for the Link Visual
     */
    getOutline(): GraphicsPath;
    /**
     * Gets the default icon size for UI representation
     */
    getDefaultIconSize(): Dimension;
    /**
     * Sets url for icon
     * @param value a url to an icon
     */
    setUrl(value: string): this;
    /**
     * Gets url for icon
     */
    getUrl(): string;
    /**
     * Gets tubing width, if set to Schematics/skin mode
     */
    getTubingWidth(): number;
    /**
     * Ses tubing width for schematic/skin mode
     * @param value a width for the "tubing"
     */
    setTubingWidth(value: number): void;
    /**
     * Gets current bounds
     */
    getBounds(): Rect;
    /**
     * Connects self to the given visual, using the given linkside to the model point (in coordinates of visual)
     * @param visual a visual to connect to
     * @param linkSide link side (begin or end)
     * @param visualModelPoint model coordinates (in visual model space)
     */
    connectTo(visual: Node, linkSide: LinkSide, visualModelPoint: Point): boolean;
    /**
     * Gets array of connections
     */
    getConnections(): LinkConnection[];
    /**
     * Checks if the link visual was previously connected and disconnects if so.
     * If devicePoint coordinates are specified, then a point with index pointIndex will be set to
     * model position, calculated from devicePoint value.
     * The devicePoint X Y values are used to provide "sticky" behavior for hot points.
     * @param linkSide defines side of the link
     * @param devicePointX device X-coordinate to reset. Ignored if null
     * @param devicePointY device Y-coordinate to reset. Ignored if null
     */
    disconnectFrom(linkSide: LinkSide, devicePointX?: number, devicePointY?: number): void;
    /**
     * checks if the visual connected to the link and returns all link point indexes. If not connected, an empty
     * array returns
     * @param visual a visual to get connection points.
     */
    getConnectedIndexes(visual: Node): number[];
    /**
     * Performs links update, using previously set up connections.
     * It takes connected shapes and updates self begin and end points depending on
     * connected points
     * @param force force
     */
    updateLinks(force?: boolean): void;
    /**
     * Checks if the link visual can connect to a component
     * @param component a component to check if the link visual can connect to
     * @param modelPoint a point in parent's model space
     * @param minDistance minimum distance in device units (pixels) for snapping
     */
    canConnect(component: Node, modelPoint: Point, minDistance: number): Point;
}
