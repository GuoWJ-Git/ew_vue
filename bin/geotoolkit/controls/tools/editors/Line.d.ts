import {AbstractEditor} from './AbstractEditor';

/**
 * Line editor can be used to create and modify geotoolkit.scene.shapes.Line shapes
 */
export class Line extends AbstractEditor {
    /**
     * Line editor can be used to create and modify geotoolkit.scene.shapes.Line shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.handles handles properties
     * @param options.handles.from node from vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     * @param options.handles.to node to vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    constructor(options?: object | { name?: string; handles?: object | { from?: any; to?: any; } ; } );
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @param properties.name tool name
     * @param properties.handles handles properties
     * @param properties.handles.from node from vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     * @param properties.handles.to node to vertex handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    setProperties(properties?: object | { name?: string; handles?: object | { from?: any; to?: any; } ; } ): this;
    /**
     * Gets properties
     */
    getProperties(): {handles: {from: any; to: any}} | any;
}
