import {Polygon} from './Polygon';

/**
 * Polyline editor can be used to create and modify geotoolkit.scene.shapes.Polyline shapes
 */
export class Polyline extends Polygon {
    /**
     * Polyline editor can be used to create and modify geotoolkit.scene.shapes.Polyline shapes
     * @param options editor options
     * @param options.name tool name
     */
    constructor(options?: object | { name?: string; } );
    /**
     * Sets properties
     * @param properties properties
     * @param properties.name tool name
     */
    setProperties(properties?: object | { name?: string; } ): this;
}
