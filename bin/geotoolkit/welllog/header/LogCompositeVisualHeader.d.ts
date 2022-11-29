import {LogVisualHeader} from './LogVisualHeader';
import {INodeEnumerable} from '../../scene/INodeEnumerable';
import {Node, StateChanges} from '../../scene/Node';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {LayoutStyle} from '../../layout/LayoutStyle';
import {Rect} from '../../util/Rect';
import {Layout} from '../../layout/Layout';
import {Iterator} from '../../util/iterator';

/**
 * Define visual to render composite curve header
 */
export class LogCompositeVisualHeader extends LogVisualHeader implements INodeEnumerable {
    /**
     * Define visual to render composite curve header
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: Node | object | { visual?: Node; } );
    /**
     * Sets visual
     * @param visual visual
     */
    setVisual(visual: LogAbstractVisual): this;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
    /**
     * Sets desired height of the header as a layoutable object
     * @param value desired height to set
     */
    setDesiredHeight(value: string | number): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param silent silent setting
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, silent?: boolean): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets automatic model limits calculation mode
     * @param mode Model Limits Logics to be used
     */
    setAutoModelLimitsMode(mode: boolean): this;
    /**
     * Get Model Limits Logics to use when no Model Limits have been set
     * set to true: will use parents width and height, starting at 0
     * set to false: will use parents bounds
     */
    getAutoModelLimitsMode(): boolean;
    /**
     * Sets inner model limits
     * @param modelLimits inner limits
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Gets model limits, the limits of this container inside space
     */
    getModelLimits(): Rect | any;
    /**
     * Associate layout with a header
     * @param layout layout to be set
     */
    setLayout(layout: Layout): this;
    /**
     * Returns layout associated with the header
     */
    getLayout(): Layout;
    /**
     * Add a child node
     * @param node the child node to be added
     */
    addChild(node: Node | Node[] | Iterator): this;
    /**
     * Return iterator by child nodes
     * @param filter a filter function. Returns all nodes if null
     */
    getChildren(filter?: Function): Iterator;
    /**
     * Remove child node
     * @param node node or array of nodes to be removed
     */
    removeChild(node: Node | Node[]): this;
    /**
     * Remove all child nodes from this composite group
     * @param disposeChildren automatically dispose children. If it is
     * true then method dispose is called for each child.
     */
    clearChildren(disposeChildren?: boolean): this;
    /**
     * Return node by index
     * @param i index of the node
     */
    getChild(i: number): Node;
    /**
     * Return number of child nodes
     */
    getChildrenCount(): number;
    /**
     * Mark this group to be updated.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bounds of the node
     */
    setBounds(bounds: Rect): this;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
