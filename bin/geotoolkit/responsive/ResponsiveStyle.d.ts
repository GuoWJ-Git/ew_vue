import {Style} from '../attributes/Style';
import {Node, Events} from '../scene/Node';
import {CssStyle} from '../css/CssStyle';

/**
 * Defines behavior of responsive nodes.
 * @example
 * ```javascript
 * // Function as condition
 * import {ResponsiveStyle} from '@int/geotoolkit/responsive/ResponsiveStyle';
 * const rules = [
 *   {
 *       'condition': (node) => return node.getBounds().getWidth() < 500 && node.getBounds().getWidth() > 200,
 *       'properties': {
 *           'z': {
 *               'annotationsize': 0
 *           }
 *       }
 *  }];
 *  const style = new ResponsiveStyle({
 *   'rules': rules
 * });
 * ```
 * @example
 * ```javascript
 * // Object as condition
 * const rules = [
 *   {
 *      'condition': {
 *          'maxWidth': 500,
 *          'maxHeight': 500
 *        },
 *       'properties': {
 *           'z': {
 *               'annotationsize': 0
 *           }
 *       }
 *  }];
 *  const style = new ResponsiveStyle({
 *   'rules': rules
 * });
 * ```
 * @example
 * ```javascript
 * // Expressions as condition
 * const rules = [
 *   {
 *      'condition': 'node => width(node) < 500 || height(node) < 500',
 *       'properties': {
 *           'z': {
 *               'annotationsize': 0
 *           }
 *       }
 *  }];
 *  const style = new ResponsiveStyle({
 *   'rules': rules
 * });
 * ```
 * @example
 * ```javascript
 * // CSS style as properties
 * const rules = [
 *   {
 *       'condition': (node) => node.getBounds().getWidth() < 500 && node.getBounds().getWidth() > 200,
 *       'css': [
 *               '.Grid { ',
 *               ' visible: false;',
 *               '}',
 *               '.CrossPlot {',
 *               'z-annotationsize: 0;',
 *               'x-annotationsize: 0;',
 *               'y-annotationsize: 0;',
 *               '}'
 *       ].join('\n')
 *  }];
 * ```
 */
export class ResponsiveStyle extends Style {
    /**
     * Defines behavior of responsive nodes.
     * @param options options
     * @param options.start start applying options
     * @param options.end end applying options
     * @param options.target optional target to apply styles
     * @param options.rules an array of rules {@link @int/geotoolkit/responsive/ResponsiveStyle.Rule}
     * @param options.events events to apply responsive style
     */
    constructor(options?: object | { start?: Function; end?: Function; target?: Node; rules?: Rule[] | Rule; events?: Events[]; } );
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ResponsiveStyle): this;
    /**
     * Check if style should be applied for the current event
     * @param event event to check
     */
    supportsEvent(event: string): boolean;
    /**
     * Return a source of events
     */
    getSource(): Node | null;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {start: Function; end: Function; target: Node; rules: Rule[]; events: Events[]} | any;
    /**
     * Apply rules for the current node
     * @param node current instance of the node
     */
    apply(node: Node): void;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.start start applying options
     * @param properties.end end applying options
     * @param properties.target optional target to apply styles
     * @param properties.rules an array of rules {@link @int/geotoolkit/responsive/ResponsiveStyle.Rule}
     * @param properties.events events
     */
    setProperties(properties: object | { start?: Function; end?: Function; target?: Node; rules?: Rule[] | Rule; events?: Events[]; } ): this;
    /**
     * Create or get responsive style from object
     * @param object object can be in format of constructor
     * geotoolkit.responsive.ResponsiveStyle
     */
    static fromObject(object: object | ResponsiveStyle | null): ResponsiveStyle | null;
}
/**
 * The rule definition.
 */
export type Rule = { condition: {  maxWidth: number;  maxHeight: number;  minWidth: number;  minHeight: number }; properties: any; css: string | CssStyle; apply: Function; restore: boolean; deep: boolean}
