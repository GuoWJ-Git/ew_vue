import {CssRule} from './CssRule';

/**
 * Defines CSS Style Declaration
 */
export class CssStyleDeclaration {
    /**
     * Defines CSS Style Declaration
     */
    constructor();
    /**
     * Textual representation of the declaration block, if and only if it is exposed via HTMLElement.style.
     * Setting this attribute changes the inline style. If you want a text representation of a computed declaration block, you can get it with JSON.stringify().
     */
    cssText: string;
    /**
     * Returns the containing rule, otherwise null. E.g. if this rule is a style rule inside an @media block, the parent rule would be that CSSMediaRule.
     */
    parentRule: CssRule;
    /**
     * Return length of the rules list
     */
    length: number;
    /**
     * Returns the optional priority, "important".
     * @param property CSS style property
     */
    getPropertyPriority(property: string): string | null;
    /**
     * Returns the property value given a property name.
     * @param property CSS style property name
     */
    getPropertyValue(property: string): string | null;
    /**
     * Removes a property from the CSS declaration block.
     * @param property CSS style property
     */
    removeProperty(property: string): string;
    /**
     * Modifies an existing CSS property or creates a new CSS property in the declaration block.
     * @param property CSS style property name
     * @param value CSS style property value
     * @param priority CSS style property priority
     */
    setProperty(property: string, value: string, priority?: string): this;
}
