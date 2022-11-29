import {Polygon} from './Polygon';

/**
 * Spline editor can be used to create and modify geotoolkit.scene.shapes.Path shapes that imitates spline
 * behavior using bezier curves.
 */
export class Spline extends Polygon {
    /**
     * Spline editor can be used to create and modify geotoolkit.scene.shapes.Path shapes that imitates spline
     * behavior using bezier curves.
     * @param options editor options
     * @param options.name tool name
     * @param options.cpline control points path properties (@see {@link @int/geotoolkit/scene/shapes/Path.Path#setProperties})
     * @param options.handles handles properties
     * @param options.handles.controlpoint control point handles properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    constructor(options?: object | { name?: string; cpline?: any; handles?: object | { controlpoint?: any; } ; } );
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @param properties.name tool name
     * @param properties.cpline control points path properties (@see {@link @int/geotoolkit/scene/shapes/Path.Path#setProperties})
     * @param properties.handles handles properties
     * @param properties.handles.controlpoint control point handles properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    setProperties(properties: object | { name?: string; cpline?: any; handles?: object | { controlpoint?: any; } ; } ): this;
    /**
     * Returns all
     */
    getProperties(): {cpline: any; handles: {controlpoint: any}} | any;
    /**
     * Sets extra Spline properties
     * @param properties handles properties
     * @param properties.controlpoint control point handles properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    setExtraHandlesProperties(properties?: object | { controlpoint?: any; } ): void;
}
