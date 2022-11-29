import {CssRule} from './CssRule';
import {CssStyleDeclaration} from './CssStyleDeclaration';

/**
 * Defines CSS Style Rule
 */
export class CssStyleRule extends CssRule {
    /**
     * Defines CSS Style Rule
     */
    constructor();
    /**
     * Returns the textual representation of the selector for this rule, e.g. "h1,h2".
     */
    selectorText: string;
    /**
     * Returns the style declaration object for the rule.
     */
    style: CssStyleDeclaration | null;
}
