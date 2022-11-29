import {EventDispatcher} from '../../../util/EventDispatcher';
import {Node} from '../Node';
import {Style} from '../../../attributes/Style';

/**
 * Defines CSS Style Sheet
 */
export class StyleSheet extends EventDispatcher {
    /**
     * Defines CSS Style Sheet
     * @param options optionals options
     * @param options.baseURL A string containing the baseURL used to resolve relative URLs in the stylesheet.
     * @param options.media A MediaList containing a list of media rules, or a string containing a single rule.
     * @param options.disabled A Boolean indicating whether the stylesheet is disabled. False by default.
     */
    constructor(options?: object | { baseURL?: string; media?: string; disabled?: string; } );
    /**
     * Notify the that the style sheet is invalidated
     */
    protected invalidate(): Style;
    /**
     * Is a boolean value representing whether the current stylesheet has been applied or not.
     */
    disabled: boolean;
    /**
     * Returns a string representing the location of the stylesheet.
     */
    href: string;
    /**
     * Returns a string representing the intended destination medium for style information.
     */
    media: string;
    /**
     * Returns a Node associating this style sheet with the current document.
     */
    ownerNode: Node;
    /**
     * Returns a string representing the advisory title of the current style sheet.
     */
    parentStyleSheet: StyleSheet;
    /**
     * Returns a string representing the style sheet language for this style sheet.
     */
    type: string;
    /**
     * Returns a string representing the advisory title of the current style sheet.
     */
    title: string;
}
