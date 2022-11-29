import {LogAbstractVisual} from '../LogAbstractVisual';
import {LogVisualHeader} from './LogVisualHeader';
import {Node} from '../../scene/Node';

/**
 * Create the standard representation of a well log header provider.
 */
export class LogVisualHeaderProvider {
    /**
     * Create the standard representation of a well log header provider.
     * @param options name of the header provider or properties object
     * @param options.headerhelpers see example
     * @param options.name name of the header provider
     */
    constructor(options: object | { headerhelpers?: any; name?: string; }  | string);
    /**
     * return name of provider
     */
    getName(): string;
    /**
     * set name
     * @param name name of the header provider
     */
    setName(name: string): this;
    /**
     * Gets header helpers
     */
    getHeaderHelpers(): any;
    /**
     * Returns header instance associated with specified visual
     * @param node specified visual
     */
    getHeader(node: LogAbstractVisual): LogVisualHeader | any;
    /**
     * Sets header instance for specified visual
     * @param node current node
     * @param headerInstance prototype to create the header instance
     * @param silent silent node to avoid sending events that header is created
     */
    registerHeader(node: Node, headerInstance: any, silent?: boolean): this;
    /**
     * Sets header implementation
     * @param className class name for visual
     * @param headerInstance prototype to create the header instance, use null to unregister
     */
    registerHeaderProvider(className: string, headerInstance?: LogVisualHeader): this;
    /**
     * return default header implementation for specified class name
     * @param className class name for visual
     */
    getHeaderProvider(className: string): LogVisualHeader | any;
    /**
     * get header prototype
     * @param node type of visual to return
     */
    getHeaderPrototype(node: Node): LogVisualHeader;
    /**
     * Return default instance of the LogVisualHeaderProvider
     */
    static getDefaultInstance(): LogVisualHeaderProvider;
    /**
     * Returns clone
     */
    clone(): LogVisualHeaderProvider;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {headerhelpers: any; roundedboxradius: number; name: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @example
     * ```javascript
     * import {CompositeLogCurve} from '@int/geotoolkit/welllog/CompositeLogCurve';
     * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
     * import {LogCurveVisualHeader} from '@int/geotoolkit/welllog/header/LogCurveVisualHeader';
     * import {CompositeLogCurveHeader} from '@int/geotoolkit/welllog/header/CompositeLogCurveHeader';
     * properties = {
     *     'headerhelpers': {
     *       LogCurve.getClassName(): new LogCurveVisualHeader()),
     *       CompositeLogCurve.getClassName(): new CompositeLogCurveHeader())
     *     }
     * }
     * ```
     * @param properties An object containing the properties to set
     * @param properties.headerhelpers see example
     * @param properties.name name of the header provider
     * @param properties.roundedboxradius radius of the rounded box
     */
    setProperties(properties: object | { headerhelpers?: any; name?: string; roundedboxradius?: number; } ): this;
}
