import {NodeParser} from './NodeParser';

/**
 * Define an abstract parser of element
 * @example
 * ```javascript
 * // How to create a custom parser
 * import {ElementParser} from '@int/geotoolkit/report/parsers/ElementParser';
 * import {obfuscate} from '@int/geotoolkit/lib';
 * import {CrossPlot} from '@int/geotoolkit/widgets/CrossPlot';
 * import {Events} from '@int/geotoolkit/report/elements/Events';
 * import {NodeParser} from '@int/geotoolkit/report/parsers/NodeParser';
 * import {Registry} from '@int/geotoolkit/report/parsers/Registry';
 * import {DOMParser as cgDOMParser} from '@int/geotoolkit/report/dom/DOMParser';
 * import {Parser} from '@int/geotoolkit/report/Parser';
 * class CrossPlotParser extends ElementParser {
 *    constructor () {
 *        super();
 *    }
 *    createElement (node, context) {
 *        // if (node.nodeType !== node.ELEMENT_NODE) return null;
 *        const element = new CrossPlot();
 *        context.setElement(element);
 *        context.notify(Events.ElementCreated, this, element);
 *        return context;
 *    }
 *    parseAttributes (node, context) {
 *        const element = context.getElement();
 *        const properties = {};
 *        if (node.attributes != null) {
 *            for (let i = 0; i < node.attributes.length; i++) {
 *                const attr = node.attributes.item(i);
 *                const value = attr.value;
 *                const name = attr.name;
 *                if (value == null || typeof value !== 'string') {
 *                    properties[name] = value;
 *                    continue;
 *                }
 *                properties[name] = NodeParser.tryParseJSON(value) || NodeParser.tryParseValue(value);
 *            }
 *        }
 *        element.setProperties(properties);
 *    }
 *    addElements (childContexts, context) {
 *      return context;
 *    }
 * }
 * obfuscate(CrossPlotParser);
 * const registry = Registry.getDefaultInstance();
 * registry.register(new CrossPlotParser(), 'crossplot', window.Node.ELEMENT_NODE);
 * const xml = '<document width="100%"><body width="100%"><crossplot tag="8"></crossplot></body></document>';
 *  cgDOMParser
 * .parse(xml)
 * .then( (cgDomDocument) => Parser.parse(cgDomDocument));
 * ```
 */
export class ElementParser extends NodeParser {
    /**
     * Define an abstract parser of element
     * @param nodeName 
     * @param nodeType 
     */
    constructor(nodeName?: string, nodeType?: number);
}
