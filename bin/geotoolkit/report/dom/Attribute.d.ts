import {Node} from './Node';

/**
 * The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string.<br>
 */
export class Attribute {
    /**
     * The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string.<br>
     * @param options The options
     * @param options.name name of the attribute.
     * @param options.value attribute value.
     * @param options.namespaceURI attribute namespaceURI.
     * @param options.localName attribute localName.
     * @param options.prefix attribute prefix.
     */
    constructor(options?: string | object | { name?: string; value?: string; namespaceURI?: string; localName?: string; prefix?: string; } );
    /**
     * The attribute's name.
     */
    name: string;
    /**
     * The element holding the attribute.
     */
    ownerElement: Node;
    /**
     * The attribute's value.
     */
    value: string;
    /**
     * The attribute's value.
     */
    nodeValue: string;
    /**
     * This property always returns true. Originally, it returned true if the attribute was explicitly specified in the source code or by a script, and false if its value came from the default one defined in the document's DTD.
     */
    specified: boolean;
    /**
     * A string representing the namespace URI of the attribute, or null if there is no namespace.
     */
    namespaceURI: string;
    /**
     * A string representing the local part of the qualified name of the attribute.
     */
    localName: string;
    /**
     * A string representing the namespace prefix of the attribute, or null if no prefix is specified.
     */
    prefix: string;
}
