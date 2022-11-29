/**
 * Define utils methods to prettify or simplify XML
 */
export class XMLUtil {
    /**
     * Define utils methods to prettify or simplify XML
     */
    constructor();
    /**
     * Return pretty string
     * @param xmlObject xml string or DOM Document
     * @param onError onError callback
     */
    static prettify(xmlObject: string | Document, onError: Function): string;
    /**
     * Return simplified XML string
     * @param xmlObject xml string or DOM Document
     */
    static simplify(xmlObject: string | Document): string;
}
