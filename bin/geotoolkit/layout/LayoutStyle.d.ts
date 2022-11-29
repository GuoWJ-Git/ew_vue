import {SpaceStyle} from '../attributes/SpaceStyle';
import {SizeConstraint} from './SizeConstraint';
import {Node} from '../scene/Node';

/**
 * Defines properties for node layout.
 */
export class LayoutStyle extends SpaceStyle {
    /**
     * Defines properties for node layout.
     * @param layoutStyle object which contains the following fields
     * @param layoutStyle.position layout position
     * @param layoutStyle.float float position
     * @param layoutStyle.width width
     * @param layoutStyle.height height
     * @param layoutStyle.size layout size
     * @param layoutStyle.constraint layout constrains
     * @param layoutStyle.minheight minimum height
     * @param layoutStyle.maxheight maximum height
     * @param layoutStyle.minwidth minimum width
     * @param layoutStyle.maxwidth maximum width
     * @param layoutStyle.min-height deprecated since 2021.1 (3.3) minimum height
     * @param layoutStyle.max-height deprecated since 2021.1 (3.3) maximum height
     * @param layoutStyle.min-width deprecated since 2021.1 (3.3) minimum width
     * @param layoutStyle.max-width deprecated since 2021.1 (3.3) maximum width
     */
    constructor(layoutStyle?: object | { position?: string; float?: string; width?: number | string; height?: number | string; size?: number | string; constraint?: SizeConstraint; minheight?: number | string; maxheight?: number | string; minwidth?: number | string; maxwidth?: number | string; "min-height"?: number | string; "max-height"?: number | string; "min-width"?: number | string; "max-width"?: number | string; } );
    /**
     * return position type
     */
    getPosition(): string;
    /**
     * set position type
     * @param position position type
     */
    setPosition(position: string): this;
    /**
     * return float type
     */
    getFloat(): string;
    /**
     * set float type
     * @param float float type
     */
    setFloat(float: string): this;
    /**
     * return width position
     */
    getWidth(): number | string;
    /**
     * set width
     * @param width position
     */
    setWidth(width: number | string): this;
    /**
     * return height position
     */
    getHeight(): number | string;
    /**
     * set height
     * @param height position
     */
    setHeight(height: number | string): this;
    /**
     * return size
     */
    getSize(): number | string;
    /**
     * set size
     * @param size size
     */
    setSize(size: number | string): this;
    /**
     * set  size constraint
     * @param constraint size constraint
     */
    setSizeConstraint(constraint: SizeConstraint): this;
    /**
     * Return size constraint
     */
    getSizeConstraint(): SizeConstraint;
    /**
     * sets minimum height
     * @param height height
     */
    setMinHeight(height: number | string): this;
    /**
     * Returns minimum height
     */
    getMinHeight(): number | string;
    /**
     * sets maximum height
     * @param height height
     */
    setMaxHeight(height: number | string): this;
    /**
     * Returns maximum height
     */
    getMaxHeight(): number | string;
    /**
     * sets minimum width
     * @param width width
     */
    setMinWidth(width: number | string): this;
    /**
     * Returns minimum width
     */
    getMinWidth(): number | string;
    /**
     * sets maximum width
     * @param width width
     */
    setMaxWidth(width: number | string): this;
    /**
     * Returns maximum width
     */
    getMaxWidth(): number | string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {position: string; float: string; width: number | string; height: number | string; size: number | string; constraint: SizeConstraint; minheight: number | string; maxheight: number | string; minwidth: number | string; maxwidth: number | string; 'min-height': number | string; 'max-height': number | string; 'min-width': number | string; 'max-width': number | string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.position layout position
     * @param properties.float float position
     * @param properties.width width
     * @param properties.height height
     * @param properties.size size
     * @param properties.constraint layout constrains
     * @param properties.minheight minimum height
     * @param properties.maxheight maximum height
     * @param properties.minwidth minimum width
     * @param properties.maxwidth maximum width
     * @param properties.min-height deprecated since 2021.1 (3.3) minimum height
     * @param properties.max-height deprecated since 2021.1 (3.3) maximum height
     * @param properties.min-width deprecated since 2021.1 (3.3) minimum width
     * @param properties.max-width deprecated since 2021.1 (3.3) maximum width
     */
    setProperties(properties: object | { position?: string; float?: string; width?: number | string; height?: number | string; size?: number | string; constraint?: SizeConstraint; minheight?: number | string; maxheight?: number | string; minwidth?: number | string; maxwidth?: number | string; "min-height"?: number | string; "max-height"?: number | string; "min-width"?: number | string; "max-width"?: number | string; } ): this;
    /**
     * Create or get layout style from object
     * @param object object can be in format of constructor
     * geotoolkit.layout.LayoutStyle
     */
    static fromObject(object?: object | LayoutStyle): LayoutStyle | null;
    /**
     * Merge layoutStyle object with existing instance
     * @param node node
     * @param layoutStyle instance of node property
     * @param object contains layout style
     * @param merge merge flag
     * @param invalidateMethod invalidate method
     * @param silent silent setting
     */
    static mergeFromObject(node: Node, layoutStyle: LayoutStyle, object: LayoutStyle | object, merge?: boolean, invalidateMethod?: Function, silent?: boolean): LayoutStyle;
}
