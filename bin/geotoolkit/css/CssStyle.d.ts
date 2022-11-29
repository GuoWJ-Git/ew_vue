import {Style} from '../attributes/Style';
import {Registry} from '../persistence/Registry';
import {Node} from '../scene/Node';

/**
 * Defines a CSS style which has a set of css rules to be applied for a node and all children.
 * This CSS wrapper class can parse css given as a String.<br>
 * <b>CSS Styles Tutorial</b> in CarnacJS shows how CSS Styles can be applied.
 * @example
 * ```javascript
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const css = ['',
 *  '* {',
 * '   textstyle-color: darkblue;',
 * '   textstyle-font: 42px Roboto; ',
 * '   textstyle-alignment: center;  ',
 * '}'
 * ].join('\n');
 * // Style will be applied for all shapes
 * group.setCss(new CssStyle({'css': css}));
 * ```
 * @example
 * ```javascript
 * CSS as an object
 * const css = {
 *  'selector': '.Group',
 *      'properties': {
 *          'fillstyle': {
 *              'color': 'green'
 *          },
 *          'visible': false
 *       }
 * };
 * group.setCss(new CssStyle({
 *   'css': css
 * }));
 * ```
 */
export class CssStyle extends Style {
    /**
     * Defines a CSS style which has a set of css rules to be applied for a node and all children.
     * This CSS wrapper class can parse css given as a String.<br>
     * <b>CSS Styles Tutorial</b> in CarnacJS shows how CSS Styles can be applied.
     * @param options Object containing css and additional properties or the CSS string
     * @param options.css css The css string to parse or object with selector and properties or array
     * of objects with selector and properties
     * @param options.css.selector selector of CSS
     * @param options.css.properties properties to apply
     * @param options.registry registry of serializers for declaration blocks
     */
    constructor(options?: object | { css?: string | object | { selector?: string; properties?: object; }  | object[]; registry?: Registry; }  | string);
    /**
     * Return the current CSS properties
     */
    getCss(): object | string;
    /**
     * Apply CSS for the current node
     * @param node current instance of the node
     */
    apply(node: Node | Node[]): this;
    /**
     * Return a state of node and selected children before applying style
     * @param node node to apply selectors
     * @param deep true if state should include node children's state
     */
    getState(node?: Node, deep?: boolean): any;
    /**
     * Create or get css style from object
     * @param object object can be in format of constructor of geotoolkit.css.CssStyle
     */
    static fromObject(object?: string | any | CssStyle): CssStyle | null;
    /**
     * Enable / disable applying style
     * If style is disabled it will not be applied for any node
     * @param enabled sets the enabled state
     */
    setEnabled(enabled: boolean): this;
    /**
     * Returns enable state
     */
    isEnabled(): boolean;
}
/**
 * Enum of the supported css pseudo classes
 */
export enum PseudoClass {
    /**
     * Hover pseudo class is added for nodes under current cursor position
     */
    Hover = 'hover',
    /**
     * Highlight pseudo class is added for highlighted nodes
     */
    Highlight = 'highlight'
}
