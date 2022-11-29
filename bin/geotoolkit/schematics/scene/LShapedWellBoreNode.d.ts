import {WellBoreNode, ViewMode} from './WellBoreNode';

/**
 * L-shaped WellBoreNode extension.
 * @example
 * ```javascript
 * // how to create and add data to L-Shaped Schematic
 * import {LShapedWellBoreNode} from '@int/geotoolkit/schematics/scene/LShapedWellBoreNode';
 * ...
 * const wellBoreNode = new LShapedWellBoreNode({
 *  'data': wellBoreData,
 *  'trackWidth': 250,
 *  // Setup the deviation point (compare to the "tubing" depth range above)
 *  'deviationDepth': 8000,
 *  'LShapeAccuracy': 16
 * })
 * ```
 */
export class LShapedWellBoreNode extends WellBoreNode {
    /**
     * L-shaped WellBoreNode extension.
     * @param options 
     * @param options.viewMode well bore view mode
     * @param options.trackWidth track width
     * @param options.deviationDepth deviation depth (if "null" then it's calculated based on the data)
     * @param options.LShapeAccuracy accuracy (bigger number means smoother L-shape)
     */
    constructor(options?: object | { viewMode?: ViewMode; trackWidth?: number; deviationDepth?: number; LShapeAccuracy?: number; } );
    /**
     * Gets deviation depth value (or object if 'KOP' and 'EOC' values set before)
     * @param type deviation depth type ('KOP' or 'EOC')
     */
    getDeviationDepth(type?: string): {KOP: number; EOC: number} | object;
    /**
     * Sets deviation depth value
     * @param deviationDepth deviation depth value
     * @param type deviation depth type ('KOP' or 'EOC')
     */
    setDeviationDepth(deviationDepth: number, type?: string): this;
    /**
     * @param disposeComponents automatically dispose components
     */
    protected clearComponents(disposeComponents?: boolean): void;
    /**
     * Gets well bore view mode.
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode.
     * @param viewMode view mode type or
     * an object containing view mode type and options
     * @param viewMode.name view mode name (type)
     * @param viewMode.options view mode options
     */
    setViewMode(viewMode?: object | { name?: ViewMode; options?: object; }  | ViewMode): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {trackWidth: number; deviationDepth: number; LShapeAccuracy: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.viewMode well bore view mode
     * @param properties.trackWidth track width
     * @param properties.deviationDepth deviation depth
     * @param properties.LShapeAccuracy accuracy
     */
    setProperties(properties?: object | { viewMode?: ViewMode; trackWidth?: number; deviationDepth?: number; LShapeAccuracy?: number; } ): this;
}
