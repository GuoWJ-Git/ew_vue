import {Dimension} from '../../util/Dimension';
import {Node} from '../../scene/Node';
import {GraphicsPath} from '../../renderer/GraphicsPath';
import {Point} from '../../util/Point';

/**
 * Base interface for all visuals that can be placed into Diagram
 */
export abstract class IComponent {
    /**
     * Returns component class, string value
     */
    abstract getPrototypeId(): string;
    /**
     * The name of the component
     */
    abstract getPrototypeName(): string;
    /**
     * Drawing category. The default value is 'default'
     */
    abstract getCategory(): string;
    /**
     * Cue words for the component search. By default, the shape will not be searched
     */
    abstract getSearchKeywords(): string[];
    /**
     * Defines default visual size in UI units (pixels by default). Default value is (50, 50)
     */
    abstract getDefaultSize(): Dimension;
    /**
     * Defines default visual size in UI units (pixels by default). Default value is (50, 50)
     * @param dimension new default dimension
     */
    abstract setDefaultSize(dimension: Dimension): this;
    /**
     * gets geometry for the drawing
     */
    abstract getGeometry(): Node;
    /**
     * gets outline for the drawing. This outline will be used as path with possible connection along.
     * By default, no outline will be used
     */
    abstract getOutline(): GraphicsPath;
    /**
     * Gets default link points in model space. If not specified, the 'outline' property will be used.
     * If 'ouline' is not set, then the shape becomes 'unconnectable'
     */
    abstract getLinkPoints(): Point[];
    /**
     * Sets link points. Link points must be defined in the shapes's model
     * space
     * @param points an array of model-space points
     * that represent possible connections
     */
    abstract setLinkPoints(points: Point[]): void;
    /**
     * Sets text and its options
     * @param textOptions text and/or its options
     * @param textOptions.text text content
     */
    abstract setText(textOptions: object | { text?: string; }  | string): this;
    /**
     * @param url 
     */
    abstract setUrl(url: string): this;
    /**
     * Gets URL for an icon
     */
    abstract getUrl(): string;
    /**
     */
    abstract getDefaultIconSize(): Dimension;
}
