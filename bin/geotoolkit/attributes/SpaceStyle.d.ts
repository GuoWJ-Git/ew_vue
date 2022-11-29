import {Style} from './Style';
import {Node} from '../scene/Node';
import {Rect} from '../util/Rect';
import {Transformation} from '../util/Transformation';

/**
 * Defines properties to specify margins or
 * padding
 */
export class SpaceStyle extends Style {
    /**
     * Defines properties to specify margins or
     * padding
     * @param space object which contains the following fields
     * @param space.left left position
     * @param space.right right position
     * @param space.top top position
     * @param space.bottom bottom position
     */
    constructor(space?: object | { left?: number | string; right?: number | string; top?: number | string; bottom?: number | string; }  | number | string);
    /**
     * return JSON representation of the space object
     */
    getStyle(): {left: number | string; right: number | string; bottom: number | string; top: number | string} | object;
    /**
     * Set style
     * @param spaceStyle space style
     * @param silent silent mode
     */
    setStyle(spaceStyle: SpaceStyle | object, silent?: boolean): this;
    /**
     * Return left position
     */
    getLeft(): number | string;
    /**
     * Set left position
     * @param left position
     */
    setLeft(left: number | string): this;
    /**
     * Return top position
     */
    getTop(): number | string;
    /**
     * Set top position
     * @param top position
     */
    setTop(top: number | string): this;
    /**
     * Return right position
     */
    getRight(): number | string;
    /**
     * Set right position
     * @param right position
     */
    setRight(right: number | string): this;
    /**
     * Return bottom position
     */
    getBottom(): number | string;
    /**
     * Set bottom position
     * @param bottom position
     */
    setBottom(bottom: number | string): this;
    /**
     * Return true if styles are equals
     * @param style style to compare
     */
    equalsTo(style: SpaceStyle): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {left: number | string; right: number | string; top: number | string; bottom: number | string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object which contains the following fields
     * @param properties.left left position
     * @param properties.right right position
     * @param properties.top top position
     * @param properties.bottom bottom position
     */
    setProperties(properties?: object | { left?: number | string; right?: number | string; top?: number | string; bottom?: number | string; } ): this;
    /**
     * Create or get space style from object
     * @param object object can be in format of constructor
     * geotoolkit.attributes.SpaceStyle
     */
    static fromObject(object?: object | SpaceStyle): SpaceStyle | null;
    /**
     * Merge spaceStyle object with existing instance
     * @param node node
     * @param spaceStyle instance of node property
     * @param object contains space style
     * @param merge merge flag
     * @param invalidateMethod invalidate method
     */
    static mergeFromObject(node: Node | null, spaceStyle: SpaceStyle | null, object: SpaceStyle | object | any, merge?: boolean, invalidateMethod?: Function): SpaceStyle;
    /**
     * Return area excluding space
     * @param style style to exclude space
     * @param rect original area
     * @param transformation screen transformation
     */
    static excludeSpace(style: SpaceStyle | number, rect: Rect | null, transformation?: Transformation | null): Rect | null;
    /**
     * Return area including space
     * @param style style to add space
     * @param rect original area
     * @param transformation screen transformation
     */
    static addSpace(style: SpaceStyle, rect: Rect | null, transformation?: Transformation | null): Rect | null;
}
