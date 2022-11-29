import {EventDispatcher} from '../util/EventDispatcher';
import {Rect} from '../util/Rect';
import {ILayoutable} from './ILayoutable';
import {Node} from '../scene/Node';
import {Iterator} from '../util/iterator';

/**
 * The Layout class provides an abstract class for all layouts in the toolkits. This class defines a virtual API for arranging children nodes using method layout, which has parameter area.
 */
export class Layout extends EventDispatcher {
    /**
     * The Layout class provides an abstract class for all layouts in the toolkits. This class defines a virtual API for arranging children nodes using method layout, which has parameter area.
     */
    constructor();
    /**
     * Performs layout operation
     * @param area desired rect to layout
     * @param targets array of nodes or iterator of nodes supposed to layout
     */
    layout(area?: Rect, targets?: ILayoutable[] | Node[] | Iterator): this;
    /**
     * Return the preferable size of children. Default implementation returns desired rect
     * @param rect desired rect to layout
     * @param targets array of nodes supposed to layout
     */
    getPreferredSize(rect: Rect, targets?: Node[]): Rect;
    /**
     * Notify that layout is invalidated. Send event {@link @int/geotoolkit/layout/Events.Events.LayoutInvalidated}
     */
    invalidateLayout(): this;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): this;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     */
    protected copyConstructor(src: Layout): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties: object): this;
}
