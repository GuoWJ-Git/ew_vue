import {Node} from './Node';
import {NodeList} from './NodeList';
import {Attribute} from './Attribute';
import {EventDispatcher} from '../../util/EventDispatcher';
import {Iterator} from '../../util/iterator';

/**
 * Element is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
 * for example, inheriting the same set of methods, or being testable in the same way.<br>
 */
export class Element extends Node {
    /**
     * Element is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly;
     * for example, inheriting the same set of methods, or being testable in the same way.<br>
     * @param options The options
     * @param options.name name of the node. It is often used for debugging purposes or to simplify queries
     */
    constructor(options?: object | { name?: string; } );
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Clean up cached properties
     * @param silent silent reset
     */
    protected onResetCssProperties(silent?: boolean): this;
    /**
     * The children property returns a collection of an element's child elements, as an NodeList object.
     */
    children: NodeList;
    /**
     * Adds a new {@link @int/geotoolkit/report/dom/Attribute.Attribute}  node to the specified element.
     * @param newAttr attribute
     */
    setAttributeNode(newAttr: Attribute): this;
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
     * Set attribute value
     * @param name attribute name
     * @param value attribute value
     */
    setAttribute(name: string, value?: string | any): this;
    /**
     * Remove attribute
     * @param name attribute name
     */
    removeAttribute(name: string): this;
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    protected connectStyle(style: EventDispatcher, type: string, callback: Function): this;
    /**
     * Disconnect style<br>
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    protected disconnectStyle(style: EventDispatcher, type: string, callback: Function): this;
    /**
     * Return iterator by CSS styles
     * @param filter a filter function. Returns all nodes if null
     */
    getCssStyles(filter?: Function): Iterator;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: object): this;
    /**
     * Gets the element properties
     */
    getProperties(): object | any;
    /**
     * Reset own styles
     */
    protected resetElementStyle(): this;
    /**
     * Pre process style object
     * parse strings to JSON, for example margin='15px' to margin-top:15px, margin-right: 15px ....
     * @param properties style object
     */
    protected preProcessStyle(properties: any): any;
    /**
     * Return collected inner css style
     */
    getInnerCssStyle(): string | null;
    /**
     * Set text value
     * @param text text value
     */
    setText(text: string): this;
    /**
     * Set XML content
     * @param xmlValue xml to parse
     */
    setXmlContent(xmlValue: string): Promise<any>;
}
