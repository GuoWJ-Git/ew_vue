import {ReusableComponentNode} from './ReusableComponentNode';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Most-common schematics component node extension. Derived component(s): "cement"
 */
export class FlippedComponentNode extends ReusableComponentNode {
    /**
     * Most-common schematics component node extension. Derived component(s): "cement"
     * @param options options or is left
     * @param options.isleft isLeft is "left" part of shape flag
     */
    constructor(options?: boolean | object | { isleft?: boolean; } );
    /**
     * Sets rendering hints.<br>
     * When overriding the method {geotoolkit.schematics.scene.FlippedComponentNode}'s inheritants must call for
     * "FlippedComponentNode.prototype.setRenderingHints" AT THE VERY END of the method's body
     * @param hints rendering hints
     * @param deepCopy a flag indicating if the data should be fully copied before returning or not
     */
    setRenderingHints(hints: any, deepCopy?: boolean): this;
    /**
     * Gets component's textual description. <br>
     * The returned string contains description (if available, name otherwise),
     * plus geometry information: 'depth' ('from' and 'to'), as well as 'diameter' ('outer' and 'inner')
     */
    toString(): string;
    /**
     * Gets if the template is "left" one.
     */
    isLeft(): boolean;
    /**
     * Sets the template's "left" flag
     * @param left left flag
     */
    setLeft(left: boolean): this;
    /**
     * Validates geometry data.
     * @param geometryData Geometry data
     * @param geometryData.depth depth description object
     * @param geometryData.depth.from depth from
     * @param geometryData.depth.to depth to
     * @param geometryData.diameter diameter description object
     * @param geometryData.diameter.outer outer diameter
     * @param geometryData.diameter.inner inner diameter
     */
    validGeometryData(geometryData: object | { depth?: object | { from?: number; to?: number; } ; diameter?: object | { outer?: number; inner?: number; } ; } ): boolean;
    /**
     * Sets geometry
     * @param geometryData Geometry data for the node
     * @param geometryData.depth geometry depth object
     * @param geometryData.depth.from depth from
     * @param geometryData.depth.to depth to
     * @param geometryData.diameter diameter description object
     * @param geometryData.diameter.outer outer diameter
     * @param geometryData.diameter.inner inner diameter
     * @param geometryData.offset component offset
     */
    setGeometryData(geometryData: object | { depth?: object | { from?: number; to?: number; } ; diameter?: object | { outer?: number; inner?: number; } ; offset?: number; } ): this;
    /**
     * Checks collision
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {isleft: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.isleft is left
     */
    setProperties(properties: object | { isleft?: boolean; } ): this;
}
