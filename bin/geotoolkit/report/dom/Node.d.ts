import {EventDispatcher} from '../../util/EventDispatcher';
import {INodeEnumerable} from '../../scene/INodeEnumerable';
import {NamedItemMap} from './NamedItemMap';
import {IElementsRegistry} from './IElementsRegistry';
import {NodeList} from './NodeList';

/**
 * Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 */
export class Node extends EventDispatcher implements INodeEnumerable {
    /**
     * Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
     * for example, inheriting the same set of methods, or being testable in the same way.<br>
     * @param options The options
     * @param options.nodeName node name
     * @param options.localName node local name
     * @param options.tagName node tag name
     * @param options.nodeType node type
     * @param options.nodeValue node value
     * @param options.data node data
     * @param options.ownerDocument tag name of the node.
     * @param options.parentNode tag name of the node.
     * @param options.attributes tag name of the node.
     * @param options.registry tag name of the node.
     */
    constructor(options?: object | { nodeName?: string; localName?: string; tagName?: string; nodeType?: string; nodeValue?: string | null; data?: string | null; ownerDocument?: Node | null; parentNode?: Node | null; attributes?: NamedItemMap | null; registry?: IElementsRegistry | null; } );
    /**
     * Invalidate root document
     * @param eventArgs event args
     */
    protected invalidateDocument(eventArgs: any): this;
    /**
     * Set shadow element registry
     * @param registry elements registry
     */
    protected setElementRegistry(registry: IElementsRegistry): this;
    /**
     * Returns elements Registry
     */
    protected getElementRegistry(): IElementsRegistry | any;
    /**
     * Gets time stamp
     */
    getTimeStamp(): number;
    /**
     * Update time stamp to indicate that style has been changed.
     */
    updateTimeStamp(): this;
    /**
     * Return node index
     */
    getNodeIndex(): number;
    /**
     * Returns index of node.
     * @param node item to get index of
     */
    indexOfNode(node: Node): number;
    /**
     */
    protected invalidate(): this;
    /**
     * Set attribute value
     * @param name attribute name
     * @param value attribute value
     */
    setAttribute(name: string, value?: string | any): this;
    /**
     * Returns element id
     */
    getId(): string;
    /**
     * Returns css class name to be used to apply CSS style
     */
    getCssClass(): string | any;
    /**
     * Set css class
     * @param cssClass css class
     */
    setCssClass(cssClass: string): this;
    /**
     * Returns element GUID
     */
    getGuid(): string;
    /**
     * Set node GUID
     * @param guid node GUID
     */
    setGuid(guid: string | any): this;
    /**
     * Node local name
     */
    localName: string;
    /**
     * Node tag name
     */
    tagName: string;
    /**
     * Returns node tag name
     */
    getTagName(): string;
    /**
     * Node name
     */
    nodeName: string;
    /**
     * Node value
     */
    nodeValue: string;
    /**
     * Returns node value
     */
    getNodeValue(): any;
    /**
     * Set node value
     * @param nodeValue node value
     */
    setNodeValue(nodeValue: any): this;
    /**
     * Node data
     */
    data: string;
    /**
     * Node type
     */
    nodeType: NodeType;
    /**
     * Return root node
     */
    getRootNode(): Node;
    /**
     * Return root node
     * @deprecated since 2022 (3.4) use geotoolkit.report.dom.Node.getRootNode instead
     */
    rootNode: Node;
    /**
     * Parent node
     */
    parentNode: Node;
    /**
     * Returns parent node
     */
    getParent(): Node;
    /**
     */
    protected onParentChanged(): this;
    /**
     * The element holding the item.
     */
    childNodes: NodeList;
    /**
     * First child node
     */
    firstChild: Node;
    /**
     * Last child node
     */
    lastChild: Node;
    /**
     * Previous sibling node
     */
    previousSibling: Node;
    /**
     * Next sibling node
     */
    nextSibling: Node;
    /**
     * Node attributes
     */
    attributes: NamedItemMap;
    /**
     * Node owner document
     */
    ownerDocument: Node;
    /**
     * Insert child
     * @param newChild child to insert
     * @param refChild ref child
     */
    insertBefore(newChild: Node, refChild: Node): this;
    /**
     * Insert child
     * @param newChild child to insert
     * @param refChild ref child
     */
    insertAfter(newChild: Node, refChild: Node): this;
    /**
     * Replace child
     * @param newChild child to replace with
     * @param oldChild child to replace
     */
    replaceChild(newChild: Node, oldChild: Node): this;
    /**
     * Remove child from node
     * @param child to remove
     */
    removeChild(child: Node): this;
    /**
     * Remove all child nodes from this node
     */
    clearNodes(): this;
    /**
     * Add child to the node
     * @param newChild child to add
     */
    appendChild(newChild: Node): this;
    /**
     * Return true if node has children
     */
    hasChildNodes(): boolean;
    /**
     * Puts the specified node and all of its sub-tree into a "normalized" form. In a normalized sub-tree, no text nodes in the sub-tree are empty and there are no adjacent text nodes.<br>
     */
    normalize(): this;
    /**
     * Check if attribute exists
     * @param name attribute name
     */
    hasAttribute(name: string): boolean;
    /**
     * Return attribute value
     * @param name attribute name
     */
    getAttribute(name: string): string | any;
    /**
     * Serialize element to xml
     * @param recursive save whole dom element structure
     * @param serializationContext serialization Context
     * @param serializationContext.guid save internal guid
     * @param serializationContext.internal save for internal use internal
     */
    save(recursive?: boolean, serializationContext?: object | { guid?: boolean; internal?: boolean; } ): string;
    /**
     * Find root of the node with specified type
     * @param node node to start search
     * @param classType type of the class to search for or short interface name
     */
    static findParentNode(node: Node, classType: Function | string): Node | any;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
/**
 * Enum of Node types
 */
export type NodeType = any;

