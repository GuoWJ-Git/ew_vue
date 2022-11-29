import {NodeParser} from './NodeParser';
import {ParserContext} from '../ParserContext';

/**
 */
export class PropertyParser extends NodeParser {
    /**
     */
    constructor();
    /**
     * Convert contexts to JSON
     * @param childContexts array of parsed contexts
     */
    static getJSON(childContexts: ParserContext[]): object | any;
}
