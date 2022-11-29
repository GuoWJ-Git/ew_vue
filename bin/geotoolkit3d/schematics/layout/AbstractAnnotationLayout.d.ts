import {Iterator} from '../../../geotoolkit/util/iterator';
import {AnnotationBase} from '../../scene/AnnotationBase';

/**
 * Base class for schematics annotations layout
 */
export class AbstractAnnotationLayout {
    /**
     * Base class for schematics annotations layout
     */
    constructor();
    /**
     * Dispose
     */
    dispose(): void;
    /**
     * Layout annotations
     */
    layout(): void;
    /**
     * Return iterator of annotations
     */
    getAnnotations(): Iterator;
    /**
     * Return number of annotations
     */
    getAnnotationsCount(): number;
    /**
     * Return annotation by index
     * @param index index of annotation
     */
    getAnnotation(index: number): AnnotationBase;
}
