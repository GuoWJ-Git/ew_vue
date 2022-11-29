import {Object3D} from '../Object3D';
import {Trajectory3d} from '../../geodata/Trajectory3d';
import {WellBoreData} from '../../../geotoolkit/schematics/data/WellBoreData';
import {AbstractAnnotationLayout} from '../../schematics/layout/AbstractAnnotationLayout';
import {AnnotationBase} from '../AnnotationBase';

/**
 */
export class SchematicsNode extends Object3D {
    /**
     * @param parameters 
     * @param parameters.data trajectory data
     * @param parameters.radiusscaling radius scaling
     * @param parameters.components requested components to render
     * @param parameters.annotationlayout annotation layout (geotoolkit3d.schematics.layout.DefaultAnnotationLayout by default)
     */
    constructor(parameters: object | { data?: Trajectory3d; radiusscaling?: number; components?: WellBoreData; annotationlayout?: AbstractAnnotationLayout; } );
    /**
     * Gets annotation label
     * @deprecated since 3.3 use SchematicsNode.getAnnotations instead
     */
    getAnnotation(): any;
    /**
     * Gets annotations label
     */
    getAnnotations(): AnnotationBase;
    /**
     * Sets annotation label
     * @deprecated since 3.3, use SchematicsNode.setAnnotations instead
     * @param annotation label
     * @param depth anchor depth of label (middle of trajectory by default)
     */
    setAnnotation(annotation: AnnotationBase, depth?: number): this;
    /**
     * Sets annotation label
     * @param annotations labels
     * @param depths anchor depths of label (middle of trajectory by default)
     */
    setAnnotations(annotations: AnnotationBase[], depths?: number[]): this;
    /**
     * Set options
     * @param options options object
     * @param options.radiusscaling radius scaling
     */
    setOptions(options?: object | { radiusscaling?: number; } ): this;
    /**
     * Get options
     */
    getOptions(): {radiusscaling: number} | any;
    /**
     * Get trajectory data
     */
    getTrajectoryData(): Trajectory3d;
    /**
     * Sets annotation layout
     * @param annotationLayout annotation layout
     */
    setAnnotationLayout(annotationLayout: AbstractAnnotationLayout): this;
}
