import {AbstractEditor} from './AbstractEditor';

/**
 * Polygon editor can be used to create and modify geotoolkit.scene.shapes.Polygon shapes
 */
export class Polygon extends AbstractEditor {
    /**
     * Polygon editor can be used to create and modify geotoolkit.scene.shapes.Polygon shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.preview preview path properties (@see {@link @int/geotoolkit/scene/shapes/Path.Path#setProperties})
     * @param options.handles handles properties
     * @param options.handles.begin node first vertex handle properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param options.handles.middle node middle vertex handles properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param options.handles.end node last vertex handle properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     */
    constructor(options?: object | { name?: string; preview?: any; handles?: object | { begin?: any; middle?: any; end?: any; } ; } );
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @param properties.name tool name
     * @param properties.preview preview path properties (@see {@link @int/geotoolkit/scene/shapes/Path.Path#setProperties})
     * @param properties.handles handles properties
     * @param properties.handles.begin node first vertex handle properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param properties.handles.middle node middle vertex handles properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param properties.handles.end node last vertex handle properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     */
    setProperties(properties: object | { name?: string; preview?: any; handles?: object | { begin?: any; middle?: any; end?: any; } ; } ): this;
    /**
     * Returns properties to the editing elements
     */
    getProperties(): {preview: any; handles: {begin: any; middle: any; end: any}} | any;
    /**
     * Sets polygon handles properties
     * @param properties properties
     * @param properties.begin begin handle properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param properties.middle begin handles properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     * @param properties.end begin handle properties see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties}
     */
    setExtraHandlesProperties(properties: object | { begin?: any; middle?: any; end?: any; } ): void;
    /**
     * Changes node handle 'active' class if some node handle is currently active
     * @param active true if 'active' class should be added, false otherwise
     */
    setNodeHandleActive(active: boolean): this;
}
