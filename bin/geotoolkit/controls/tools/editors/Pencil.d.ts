import {AbstractEditor} from './AbstractEditor';

/**
 * Pencil editor can be used to create and modify geotoolkit.scene.shapes.Path shapes that imitates pencil behavior
 * using lineTo tags.
 */
export class Pencil extends AbstractEditor {
    /**
     * Pencil editor can be used to create and modify geotoolkit.scene.shapes.Path shapes that imitates pencil behavior
     * using lineTo tags.
     * @param options editor options
     * @param options.name tool name
     */
    constructor(options?: object | { name?: string; } );
    /**
     * Sets all properties
     * @param properties properties
     * @param properties.name tool name
     */
    setProperties(properties?: object | { name?: string; } ): this;
}
