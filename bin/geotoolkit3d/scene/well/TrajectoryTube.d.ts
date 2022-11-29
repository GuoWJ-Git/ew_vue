import {Object3D} from '../Object3D';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color} from '../../THREE';
import {AnnotationBase} from '../AnnotationBase';

/**
 * A well trajectory as a 3D tube.<br>
 * <br>
 * This shape displays a well trajectory as a tube that can be colored with an optional attribute.<br>
 * Note that the shape of the tube will be preserved even when changing the global scale of the plot.<br>
 */
export class TrajectoryTube extends Object3D {
    /**
     * A well trajectory as a 3D tube.<br>
     * <br>
     * This shape displays a well trajectory as a tube that can be colored with an optional attribute.<br>
     * Note that the shape of the tube will be preserved even when changing the global scale of the plot.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.data.values A value attribute used for coloring the trajectory
     * @param options.size The tube size in model space
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.tubeprecision The tube shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
     * @param options.closed True if the tube should have a cap at both ends
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; values?: number[] | number; } ; size?: number; colorprovider?: ColorProvider | string | Color; tubeprecision?: number; closed?: boolean; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.size The tube size in model space
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.tubeprecision The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
     */
    setOptions(options?: object | { size?: number; colorprovider?: ColorProvider | string | Color; tubeprecision?: number; } ): this;
    /**
     * Get options
     * (see {@link @int/geotoolkit3d/scene/well/TrajectoryTube.TrajectoryTube#setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Gets annotation label
     */
    getAnnotation(): AnnotationBase;
    /**
     * Sets annotation label
     * @param annotation label
     * @param anchorDepth depth to anchor label (central depth by default)
     */
    setAnnotation(annotation: AnnotationBase, anchorDepth?: number): this;
}
