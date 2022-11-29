import {GeometryPainter} from '../scene/shapes/painters/GeometryPainter';
import {INodeEnumerable} from '../scene/INodeEnumerable';

/**
 * Parses and draws an svg file
 */
export class SvgPainter extends GeometryPainter implements INodeEnumerable {
    /**
     * Parses and draws an svg file
     * @param options XML String or options
     * @param options.xml XML String
     */
    constructor(options: string | object | { xml?: string; } );
    /**
     * Return SVG
     */
    getSvg(): string;
    /**
     * Set SVG value
     * @param xml XML String
     */
    setSvg(xml: string): this;
}
