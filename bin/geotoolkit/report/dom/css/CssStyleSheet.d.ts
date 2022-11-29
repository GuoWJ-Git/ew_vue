import {StyleSheet} from './StyleSheet';
import {CssRuleList} from './CssRuleList';

/**
 * Defines CSS Style Sheet
 */
export class CssStyleSheet extends StyleSheet {
    /**
     * Defines CSS Style Sheet
     * @param options optionals options
     * @param options.baseURL A string containing the baseURL used to resolve relative URLs in the stylesheet.
     * @param options.media A MediaList containing a list of media rules, or a string containing a single rule.
     * @param options.disabled A Boolean indicating whether the stylesheet is disabled. False by default.
     */
    constructor(options?: object | { baseURL?: string; media?: string; disabled?: string; } );
    /**
     * Returns a live {geotoolkit.report.dom.css.CssRuleList} which maintains an up-to-date list of the {geotoolkit.report.dom.css.CssRule} objects that comprise the stylesheet.
     */
    cssRules: CssRuleList;
    /**
     * Delete Rule at specified index
     * @param index rule index to delete
     */
    deleteRule(index: number): this;
    /**
     * Insert new CSS rule into the current style sheet
     * @param cssttext a DOMString containing the rule to be inserted. What the inserted rule must contain depends on its type:
     * @param index A positive integer less than or equal to stylesheet.cssRules.length, representing the newly inserted rule's position in CssStyleSheet.cssRules. The default is 0.
     */
    insertRule(cssttext: string, index?: number): number;
    /**
     * Asynchronously replaces the content of the stylesheet and returns a Promise that resolves with the updated CssStyleSheet.
     * @param cssText A string containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.
     */
    replace(cssText: string): Promise<any>;
    /**
     * Synchronously replaces the content of the stylesheet.
     * @param cssText A string containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.
     */
    replaceSync(cssText: string): this;
}
