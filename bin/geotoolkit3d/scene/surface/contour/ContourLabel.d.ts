import {Label} from '../../label/Label';
import {Vector3} from '../../../THREE';

/**
 * Label used specifically for contour surfaces.
 * This label adjust it's value based on the label z position and the given surfacescale.
 */
export class ContourLabel extends Label {
    /**
     * Label used specifically for contour surfaces.
     * This label adjust it's value based on the label z position and the given surfacescale.
     * @param options The options (See geotoolkit3d.scene.label.Label for common options)
     * @param options.text text to display. If not provided, text will be the z-component of origin
     * @param options.surfacescale the scale of contour surface
     * @param options.formatter The function that takes value and scale to format the label text
     */
    constructor(options: object | { text?: number | string; surfacescale?: Vector3; formatter?: Function; } );
    /**
     * set text properties and options
     * @param options The ContourLabel options (See geotoolkit3d.scene.label.Label.setOptions for common options)
     * @param options.surfacescale the scale of contour surface
     * @param options.formatter The function that takes value and scale to format the label text
     */
    setOptions(options: object | { surfacescale?: Vector3; formatter?: Function; } ): this;
}
