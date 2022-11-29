import {Layout} from './Layout';
import {Rect} from '../util/Rect';
import {ILayoutable} from './ILayoutable';
import {Iterator} from '../util/iterator';
import {Group} from '../scene/Group';

/**
 * Define an abstract class for box layout to line up child <code>geotoolkit.layout.ILayoutable</code> horizontally or vertically.
 * Children can be added using methods: <code>add</code> or <code>insert</code>  or can be passed as parameter in method <code>layout</code>
 * If layout has any item added directly it ignores items passed to <code>layout</code> as parameter
 */
export class BoxLayout extends Layout {
    /**
     * Define an abstract class for box layout to line up child <code>geotoolkit.layout.ILayoutable</code> horizontally or vertically.
     * Children can be added using methods: <code>add</code> or <code>insert</code>  or can be passed as parameter in method <code>layout</code>
     * If layout has any item added directly it ignores items passed to <code>layout</code> as parameter
     * @param dstRect layout area or properties object
     * @param dstRect.rect bounds of the layout
     * @param dstRect.reverse reverse flag
     * @param dstRect.layoutables layoutable elements
     */
    constructor(dstRect?: Rect | object | { rect?: Rect; reverse?: boolean; layoutables?: ILayoutable[]; } );
    /**
     * Returns true if layout is in reverse order
     */
    getReverse(): boolean;
    /**
     * Set reverse order iteration flag
     * @param reverse reverse order flag
     */
    setReverse(reverse: boolean): this;
    /**
     * Gets rectangular layout area
     */
    getRect(): Rect;
    /**
     * Sets rectangular layout area
     * @param dstRect rectangular layout area
     */
    setRect(dstRect: Rect): this;
    /**
     * Adds layoutable element
     * @param node layoutable element(s)
     */
    add(node: ILayoutable | ILayoutable[] | Iterator): this;
    /**
     * Inserts layoutable element
     * @param index index where element will be inserted
     * @param node layoutable element(s)
     */
    insert(index: number, node: ILayoutable | ILayoutable[] | Iterator): this;
    /**
     * Removes a layoutable node if found
     * @param node layoutable element
     */
    remove(node: Group): this;
    /**
     * Remove all children items from layout
     */
    clear(): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {rect: Rect; reverse: boolean; layoutables: ILayoutable[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.rect bounds of the layout
     * @param properties.reverse reverse order iteration flag
     * @param properties.layoutables layoutable elements
     */
    setProperties(properties?: object | { rect?: Rect; reverse?: boolean; layoutables?: ILayoutable[]; } ): this;
}
/**
 * Enum of alignment
 */
export enum Alignment {
    /**
     * Top
     */
    Top = 0,
    /**
     * Bottom
     */
    Bottom = 1,
    /**
     * Left
     */
    Left = 2,
    /**
     * Right
     */
    Right = 3,
    /**
     * Center
     */
    Center = 4
}
