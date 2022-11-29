import {Text} from './Text';

/**
 * Callout editor can be used to create and modify geotoolkit.controls.shapes.Callout nodes. Textarea dom element is used to
 * modify text.
 */
export class Callout extends Text {
    /**
     * Callout editor can be used to create and modify geotoolkit.controls.shapes.Callout nodes. Textarea dom element is used to
     * modify text.
     * @param options editor options
     * @param options.name tool name
     * @param options.handles handles properties
     * @param options.handles.anchor callout anchor handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    constructor(options?: object | { name?: string; handles?: object | { anchor?: any; } ; } );
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @param properties.name tool name
     * @param properties.handles handles properties
     * @param properties.handles.anchor callout anchor handle properties (@see {@link @int/geotoolkit/scene/shapes/SymbolShape.SymbolShape#setProperties})
     */
    setProperties(properties: object | { name?: string; handles?: object | { anchor?: any; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {handles: {anchor: any}} | any;
}
