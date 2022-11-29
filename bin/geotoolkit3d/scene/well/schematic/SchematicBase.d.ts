import {Object3D} from '../../Object3D';
import {AnnotationBase} from '../../AnnotationBase';
import {Material} from '../../../THREE';

/**
 * Parent class of schematic objects
 */
export class SchematicBase extends Object3D {
    /**
     * Parent class of schematic objects
     */
    constructor();
    /**
     * Get the current annotation holding title, icon, text...
     */
    getAnnotation(): AnnotationBase;
    /**
     * Set the current annotation holding title, icon, text...
     * @param annotation annotation
     */
    setAnnotation(annotation: AnnotationBase): this;
    /**
     * Get options, font, color, etc...
     */
    getOptions(): object | any;
    /**
     * Set options, font, color, etc...
     * @param newOptions geotoolkit.attributes.FillStyle
     */
    setOptions(newOptions?: object): this;
    /**
     * Return the material of the schematic being a material provided by the user ar creation or a created material
     * depending on the "fillstyle" option parameter at creation.
     */
    getMaterial(): Material;
}
