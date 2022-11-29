import {DeviceSizeGroup} from './DeviceSizeGroup';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Basic schematics component node. The constructor creates a full data copy by default.
 */
export class ComponentNode extends DeviceSizeGroup {
    /**
     * Basic schematics component node. The constructor creates a full data copy by default.
     * @param options Data to set. This instance will be fully copied. To avoid this, create a new instance
     * with null as data and then explicitly call {@see setData} with second argument set to "false".
     * @param options.description element description
     * @param options.geometry element geometry
     * @param options.renderinghints component rendering hints
     * @param options.rectbounds geometry bounds
     */
    constructor(options?: object | { description?: string; geometry?: any; renderinghints?: any; rectbounds?: Rect; } );
    /**
     * Return initialization state
     */
    protected isInitialized(): boolean;
    /**
     * Sets selected state
     * @param selected selected state
     */
    setSelected(selected: boolean): this;
    /**
     * Gets selected state
     */
    getSelected(): boolean;
    /**
     * Gets "resource-based" indicator. Inherited class should override the
     * method to ensure WellBoreNode invalidation on the node's resource load.
     */
    isResourceBased(): boolean;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    dispose(): void;
    /**
     * Gets graphical styles associated with it.
     * The implementation returns an empty array.
     */
    getStyles(): any[];
    /**
     * Sets model bounds
     * @param rectBounds geometry bounds to set
     */
    protected setGeometryBounds(rectBounds: Rect): this;
    /**
     * Gets model bounds
     */
    getGeometryBounds(): Rect;
    /**
     * Get the node bounds.
     */
    getBounds(): Rect;
    /**
     * Gets description (Convenience method)
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    getDescription(deepCopy?: boolean): string | null;
    /**
     * Sets description (Convenience method)
     * @param description element description
     * @param deepCopy a flag indicating if the data should be fully copied before setting or not
     */
    setDescription(description: string | null, deepCopy?: boolean): this;
    /**
     * Validates geometry data. The implementation returns "true" always.
     * Custom implementation shall override the method.
     * @param geometryData geometry data to validate
     */
    validGeometryData(geometryData: any): boolean;
    /**
     * Gets component data (see "setData" API for return object elements)
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    getData(deepCopy?: boolean): any;
    /**
     * Sets component data
     * @param data data to set
     * @param data.geometry component geometry
     * @param data.description component description
     * @param data.renderinghints component rendering hints
     * @param data.id component unique ID
     * @param deepCopy deep copy flag
     */
    setData(data: object | { geometry?: any; description?: string; renderinghints?: any; id?: string; } , deepCopy?: boolean): this;
    /**
     * Gets geometric data to build the node on (Convenience method)
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    getGeometryData(deepCopy?: boolean): any;
    /**
     * Sets geometric data (Convenience method). Overridable must call the base implementation
     * for "getGeometryData" to retrieve proper information.
     * Overridable is expected to build the node geometry based on
     * the geometryData provided.
     * Optional parameters "compressedScale" and "horizontalCompressedScale" are
     * for geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed only,
     * and, "horizontalCompressedScale" works for L-shaped schematics case only.
     * @param geometryData geometry data
     * @param geometryData.compressedScale compressed scale
     * @param geometryData.horizontalCompressedScale horizontal compressed scale
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    setGeometryData(geometryData: object | { compressedScale?: number; horizontalCompressedScale?: number; }  | any, deepCopy?: boolean): this;
    /**
     * Sets rendering hints
     * @param hints rendering hints
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    setRenderingHints(hints: any, deepCopy?: boolean): this;
    /**
     * Gets rendering hints
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    getRenderingHints(deepCopy?: boolean): any;
    /**
     * Updates (if needed) shape geometry depending on rendering context state.
     * The implementation does nothing
     * @param context Rendering Context
     */
    updateShapeGeometry(context: RenderingContext): void;
    /**
     * Gets component's textual description. <br>
     * The implementation returns description if available; name otherwise.
     */
    toString(): string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {description: string; geometry: any; rectbounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.description element description
     * @param properties.geometry geometry data
     * @param properties.renderinghints component rendering hints
     * @param properties.rectbounds geometry bounds
     */
    setProperties(properties?: object | { description?: string; geometry?: any; renderinghints?: any; rectbounds?: Rect; } ): this;
}
