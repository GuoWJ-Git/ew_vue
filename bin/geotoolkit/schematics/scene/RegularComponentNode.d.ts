import {ReusableComponentNode} from './ReusableComponentNode';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Most-common schematics components are derived from this class. Derived components: "tubing", "valve", "nipple" etc. <br>
 * To specify an offset from center on a component, use the 'offset' property in  "setGeometryData" method below.
 */
export class RegularComponentNode extends ReusableComponentNode {
    /**
     * Most-common schematics components are derived from this class. Derived components: "tubing", "valve", "nipple" etc. <br>
     * To specify an offset from center on a component, use the 'offset' property in  "setGeometryData" method below.
     * @param options An object containing the properties to set
     * @param options.depthfrom depth from
     * @param options.depthto depth to
     * @param options.outerradius outer radius
     * @param options.offset component offset
     */
    constructor(options?: object | { depthfrom?: number; depthto?: number; outerradius?: number; offset?: number; } );
    /**
     * Gets component's textual description. <br>
     * The returned string contains description (if available, name otherwise),
     * plus geometry information: 'depth' ('from' and 'to'), as well as 'diameter' ('outer')
     */
    toString(): string;
    /**
     * Validates geometry data.
     * @param geometryData an object with geometry data
     * @param geometryData.depth an object with depths descriptors (from and to)
     * @param geometryData.depth.from depth from
     * @param geometryData.depth.to depth to
     * @param geometryData.diameter an object with diameter descriptor
     * @param geometryData.diameter.outer outer diameter
     */
    validGeometryData(geometryData: object | { depth?: object | { from?: number; to?: number; } ; diameter?: object | { outer?: number; } ; } ): boolean;
    /**
     * Sets geometry
     * @param geometryData an object with geometry data
     * @param geometryData.depth an object with depths descriptors (from and to)
     * @param geometryData.depth.from depth from
     * @param geometryData.depth.to depth to
     * @param geometryData.diameter an object with diameter descriptor
     * @param geometryData.diameter.outer outer diameter
     * @param geometryData.offset component offset
     */
    setGeometryData(geometryData: object | { depth?: object | { from?: number; to?: number; } ; diameter?: object | { outer?: number; } ; offset?: number; } ): this;
    /**
     * Checks collision.
     * Returns true if object is inside of renderable area
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depthfrom: number; depthto: number; outerradius: number; offset: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depthfrom depth from
     * @param properties.depthto depth to
     * @param properties.outerradius outer radius
     * @param properties.offset component offset
     */
    setProperties(properties?: object | { depthfrom?: number; depthto?: number; outerradius?: number; offset?: number; } ): this;
}
