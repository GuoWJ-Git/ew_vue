import {ElementStyle} from './ElementStyle';

/**
 * for future use only
 */
export class Registry {
    /**
     * for future use only
     */
    constructor();
    /**
     * Check style name
     * @param styleName styleName
     */
    checkStyle(styleName: string): boolean;
    /**
     * Return style by style name
     * @param styleName styleName
     */
    createStyle(styleName: string): ElementStyle;
}
