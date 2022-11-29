import {Group} from '../scene/Group';
import {Rect} from '../util/Rect';

/**
 * A class that parses svg documents into carnac shapes
 */
export class SVGParser {
    /**
     * A class that parses svg documents into carnac shapes
     * @param xmlDocument Input SVG document to parse
     * @param xmlDocument.xmldocument Input SVG document to parse
     * @param xmlDocument.dpi Screen resolution
     * @param dpi Screen resolution
     */
    constructor(xmlDocument?: string | object | { xmldocument?: string; dpi?: number; } , dpi?: number);
    /**
     * Returns pattern scalability flag
     */
    scalablePatterns(): boolean;
    /**
     * Sets pattern scalability flag
     * @param scale Pattern scalability flag
     */
    setScalablePatterns(scale: boolean): this;
    /**
     * Parses the given XML document into given group
     * @param shapesGroup A group to fill with parsed elements
     * @param doc The document to parse
     */
    parse(shapesGroup: Group, doc?: Document | string): {bounds: Rect | null; viewBox: Rect | null} | object;
    /**
     * Returns information stored in svg tag of the document
     * @param doc The document to parse
     */
    getSvgMetaInfo(doc?: Document | string): {overflow: string; viewBox: Rect; height: number; width: number} | object;
}
