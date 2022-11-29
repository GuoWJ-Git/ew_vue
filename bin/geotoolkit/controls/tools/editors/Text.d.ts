import {AbstractEditor} from './AbstractEditor';
import {Path} from '../../../scene/shapes/Path';
import {EventArgs} from '../EventArgs';

/**
 * Text editor can be used to create and modify geotoolkit.scene.shapes.Text shapes. Textarea dom element is used to
 * modify node text
 */
export class Text extends AbstractEditor {
    /**
     * Text editor can be used to create and modify geotoolkit.scene.shapes.Text shapes. Textarea dom element is used to
     * modify node text
     * @param options editor options
     * @param options.name tool name
     * @param options.preview preview text path (for bounding box creation)
     */
    constructor(options?: object | { name?: string; preview?: Path; } );
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @param properties.name tool name
     * @param properties.preview preview path properties (@see {@link @int/geotoolkit/scene/shapes/Path.Path#setProperties})
     */
    setProperties(properties: object | { name?: string; preview?: object; } ): this;
    /**
     * Gets properties
     */
    getProperties(): {preview: object} | any;
    /**
     * Shows/hides textarea dom element (and hides/shows scene text shape respectively
     * @param visible true to show textarea and hide scene text, false otherwise
     */
    protected setTextAreaVisible(visible: boolean): this;
    /**
     * Updates text shape bounds (anchor + size)
     */
    protected updateTextShape(): void;
    /**
     * Creates shape basing on user click event and default text sizes
     * @param eventArgs event args
     */
    protected createTextOnClick(eventArgs: EventArgs): void;
}
