import {AbstractNode} from './AbstractNode';
import {INodeEnumerable} from './INodeEnumerable';
import {Node} from './Node';
import {Iterator} from '../util/iterator';
import {RenderingContext} from '../renderer/RenderingContext';
import {Rect} from '../util/Rect';
import {Transformation} from '../util/Transformation';

/**
 * A compositenode is a container for other nodes. Nodes/Children can be added/removed/inserted at any time.<br>
 * When clipping is enabled shapes will not be rendered outside the bounds of the composite node. Clipping children is based on the composite bounds.<br>
 * New clipping style can be set using setClipStyle() and it replaces the bounds clipping. If bounds clipping is disabled the new clip style will still be applied for the children.
 */
export class CompositeNode extends AbstractNode implements INodeEnumerable {
    /**
     * A compositenode is a container for other nodes. Nodes/Children can be added/removed/inserted at any time.<br>
     * When clipping is enabled shapes will not be rendered outside the bounds of the composite node. Clipping children is based on the composite bounds.<br>
     * New clipping style can be set using setClipStyle() and it replaces the bounds clipping. If bounds clipping is disabled the new clip style will still be applied for the children.
     * @param options options
     * @param options.clipping enable clipping, this does not consider the clipstyle, it is related to bounds-clipping.
     * @param options.children array of children nodes, nodes won't be disposed
     */
    constructor(options?: object | { clipping?: boolean; children?: Node | Node[]; } );
    /**
     * Returns if clipping is enabled or not for this node.
     */
    isClippingEnabled(): boolean;
    /**
     * Enables or disables clipping of this node. If enabled,
     * shapes will not be rendered outside of its bounds.
     * @param doClip enable clipping on this node
     */
    enableClipping(doClip: boolean): this;
    /**
     * Return index of child
     * ( index of the specified child or -1 if node is not found)
     * @param node node to check index
     */
    indexOfChild(node: Node): number;
    /**
     * Insert child node at specified index
     * @param index specified index
     * @param node a child node to add
     */
    insertChild(index: number, node: Node): this;
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
     * Replace child node by index
     * @param index index of the node
     * @param node node
     */
    setChild(index: number, node: Node): this;
    /**
     * changes the z-order of the nodes being rendered.
     * @param node any child added in the Composite node
     * @param order position to be added
     * @param anchor anchor node to specify changeOrder with respect to this node
     */
    changeChildOrder(node: Node, order: NodeOrder, anchor?: Node): this;
    /**
     * Occurs before child rendering
     * @param context Rendering Context
     * @param callback callback to be called after rendering of geometry
     */
    preRendering(context: RenderingContext, callback?: Function): void;
    /**
     * To be called after rendering, used for PDF output
     * @param context Rendering Context
     * @param callback callback to be called after rendering
     */
    postRendering(context: RenderingContext, callback?: Function): void;
    /**
     * Render node in asynchronous mode
     * @param context The rendering context to be used to draw the node
     * @param callback callback function
     */
    renderAsync(context: RenderingContext, callback: Function): void;
    /**
     * Render children in asynchronous mode
     * @param context The rendering context to be used to draw the node
     * @param callback callback function to be called then all children are rendered
     */
    protected renderContentAsync(context: RenderingContext, callback: Function): void;
    /**
     * Render children async
     * @param context Rendering Context
     * @param callback callback function to be called then all children are rendered
     */
    protected renderChildrenAsync(context: RenderingContext, callback: Function): void;
    /**
     * render to specified context. This method calls preRendering, renderChildren, postRendering
     * @param context Rendering Context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Render children
     * @param context Rendering Context
     */
    protected renderChildren(context: RenderingContext): void;
    /**
     * Render
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Sets node by index
     * @deprecated since 2020 (3.0) use setChild instead
     * @param index index of the node
     * @param node node
     */
    set(index: number, node: Node): Node | null;
    /**
     * Set visible model limits
     * @param visibleModelBounds visible model limits or bounds
     * @param deviceBounds device bounds
     */
    setVisibleModelLimits(visibleModelBounds: Rect, deviceBounds?: Rect): this;
    /**
     * Return visible model limits
     * @param ignoreModelLimits flag defines whether to ignore ModelLimits or not
     */
    getVisibleModelLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Return visible device limits
     * @param ignoreModelLimits flag defines whether to ignore ModelLimits or not
     */
    getVisibleDeviceLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Return device limits
     */
    getDeviceLimits(): Rect;
    /**
     * Return model limits. (By default it returns null)
     */
    getModelLimits(): Rect | null;
    /**
     * Gets bounds in the parent coordinates
     */
    getBounds(): Rect | any;
    /**
     * Return area of content. By default it is equal to bounds.
     * @param transformation scene transformation
     */
    getContentsArea(transformation?: Transformation): Rect;
    /**
     * Transformation of inner contents to content area
     */
    getContentsTransform(): Transformation | null;
    /**
     * Retrieves the local transformation of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Check culling
     * Returns true if object is inside of renderable area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Adjust position of node to specified area
     * @param area specified area. Default to Parent Model Limits
     * @param vAlign vertical alignment. It can be "top", "bottom", "center". Defaults to "top".
     * @param hAlign horizontal alignment It can be "left", "right", "center". Defaults to "left".
     */
    adjustPosition(area?: Rect, vAlign?: string, hAlign?: string): this;
    /**
     * MoveTo position of node to specified area
     * @param area specified area
     * @param vAlign vertical alignment. It can be "top", "bottom", "center".
     * @param hAlign horizontal alignment It can be "left", "right", "center".
     */
    moveTo(area: Rect, vAlign?: string, hAlign?: string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {clipping: boolean; children: Node[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.clipping flag set to enable clipping or not
     * @param properties.children array of children nodes, nodes won't be disposed
     */
    setProperties(properties: object | { clipping?: boolean; children?: Node[]; } ): this;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * This method is called it child or children ara added
     * @param child added child
     */
    protected onChildAdded(child: Node | Iterator): void;
    /**
     * This method is called it child or children ara removed
     * @param child removed child
     */
    protected onChildRemoved(child: Node): void;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
/**
 * Enum for node order
 */
export enum NodeOrder {
    /**
     * First in array
     */
    First = 'First',
    /**
     * An index prior to the given anchor node
     */
    Before = 'Before',
    /**
     * An index next to the given anchor node
     */
    After = 'After',
    /**
     * Last in the array
     */
    Last = 'Last',
    /**
     * An index next to where it currently is
     */
    Forward = 'Forward',
    /**
     * An index prior to where it currently is
     */
    Backward = 'Backward'
}
