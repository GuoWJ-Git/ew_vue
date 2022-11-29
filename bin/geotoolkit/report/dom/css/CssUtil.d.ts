import {Document} from '../Document';
import {CssStyleSheet} from './CssStyleSheet';
import {CssStyleRule} from './CssStyleRule';

/**
 * Helper class for CSS Object Mode
 * The class CssUtil contains common methods for procession Css Styles in document.
 */
export class CssUtil {
    /**
     * Helper class for CSS Object Mode
     * The class CssUtil contains common methods for procession Css Styles in document.
     */
    constructor();
    /**
     * Return all availabls CSS Classes <tag class=""/> in specified CSS object or document
     * @param cssObject css style sheet
     * @param tagName tag name
     * @param classNames class names
     */
    static getClassesByTag(cssObject: Document | CssStyleSheet | CssStyleRule, tagName: string, classNames?: string[]): string[];
}
