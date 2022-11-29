import {ParserContext} from '../ParserContext';

/**
 */
export class NodeParser {
    /**
     * @param nodeName 
     * @param nodeType 
     */
    constructor(nodeName: string, nodeType: number);
    /**
     * Return parser name
     */
    getName(): string;
    /**
     * Return node type
     */
    getType(): number;
    /**
     * Extracts requested attribute from provided node
     * @param node XML node
     * @param attrName The name of attribute to obtain
     * @param defaultValue default value
     */
    getAttribute(node: Node, attrName: string, defaultValue?: object): object | any;
    /**
     * Extracts requested attribute from provided node
     * @param node XML node
     * @param attrName The name of attribute to obtain
     * @param defaultValue default value
     */
    static getAttribute(node: Node, attrName: string, defaultValue?: object): object | any;
    /**
     * @param node node to parse
     * @param context parser context
     */
    parseAttributes(node: Node, context: ParserContext): ParserContext;
    /**
     * Create element associated with node
     * @param node 
     * @param context The parsing context to be used to parse the node
     */
    createElement(node: Node, context: ParserContext): ParserContext;
    /**
     * @param node node
     * @param context context
     */
    parseElement(node: Node, context: ParserContext): ParserContext;
    /**
     * add child elements
     * @param childElements 
     * @param context 
     */
    addElements(childElements: ParserContext[], context: ParserContext): ParserContext;
    /**
     * Parse string into array of objects, assuming that string value looks like "[value,value,value]"
     * for example "[10,20,30,75.8999,36]" or "[x:10;y:20,x:15;y:45]"
     * <polygon path="x:[1,2,3,4,5];y:[5,4,3,2,1]"/>
     * @param value value
     */
    tryParseArray(value: string): object[] | any;
    /**
     * Parse string into array of objects, assuming that string value looks like "[value,value,value]"
     * for example "[10,20,30,75.8999,36]" or "[x:10;y:20,x:15;y:45]"
     * <polygon path="x:[1,2,3,4,5];y:[5,4,3,2,1]"/>
     * @param value value
     */
    static tryParseArray(value: string | any): object[] | any;
    /**
     * Parse string in to JSON object, assuming that string value looks like "name:value;name:value"
     * for example <group bounds="x:10;y:10;width:100;height:200" limits="auto"/>
     * or <group layoutstyle="left:50%;top:50%;right:0;bottom:0" limits="auto"/>
     * @param value value
     */
    tryParseJSON(value: string): object | any;
    /**
     * Parse string in to JSON object, assuming that string value looks like "name:value;name:value"
     * for example <group bounds="x:10;y:10;width:100;height:200" limits="auto"/>
     * or <group layoutstyle="left:50%;top:50%;right:0;bottom:0" limits="auto"/>
     * @param value value
     */
    static tryParseJSON(value: string | any): object | any;
    /**
     * Try parse value to avoid converting it later in run-time
     * @param value value
     */
    tryParseValue(value: string): number | string | boolean;
    /**
     * Try parse value to avoid converting it later in run-time
     * @param value value
     */
    static tryParseValue(value: string): number | string | boolean;
}
