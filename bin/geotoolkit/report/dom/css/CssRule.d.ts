import {CssStyleSheet} from './CssStyleSheet';

/**
 * Defines CSS Rule
 */
export class CssRule {
    /**
     * Defines CSS Rule
     */
    constructor();
    /**
     * Represents the textual representation of the rule, e.g. "h1,h2 { font-size: 16pt }" or "@import 'url'". To access or modify parts of the rule (e.g. the value of "font-size" in the example)
     */
    cssText: string;
    /**
     * Returns the containing rule, otherwise null. E.g. if this rule is a style rule inside an @media block, the parent rule would be that CSSMediaRule.
     */
    parentRule: CssRule;
    /**
     * Returns the {geotoolkit.report.dom.css.CssStyleSheet} object for the style sheet that contains this rule
     */
    parentStyleSheet: CssStyleSheet;
}
