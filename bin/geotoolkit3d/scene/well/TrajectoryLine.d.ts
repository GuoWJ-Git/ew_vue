import {Object3D} from '../Object3D';
import {MultiLateralWellData} from '../../data/well/MultiLateralWellData';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color} from '../../THREE';
import {AnnotationBase} from '../AnnotationBase';

/**
 * A well trajectory as a 3D line.<br>
 * <br>
 * This shape displays a well trajectory as a line that can be colored with an optional attribute.<br>
 * Note that the shape of the line will be preserved even when changing the global scale of the plot.<br>
 */
export class TrajectoryLine extends Object3D {
    /**
     * A well trajectory as a 3D line.<br>
     * <br>
     * This shape displays a well trajectory as a line that can be colored with an optional attribute.<br>
     * Note that the shape of the line will be preserved even when changing the global scale of the plot.<br>
     * @param options The options
     * @param options.data If the data options is an array of data objects or geotoolkit3d.data.well.MultiLateralWellData, it will generate multilateral well. If the data options is a data object, it will generate a single well.
     * @param options.colorprovider A color provider or a single color in css format
     */
    constructor(options: object | { data: object[] | MultiLateralWellData | object; colorprovider?: ColorProvider | string | Color; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.colorprovider A color provider or a single color in css format
     */
    setOptions(options?: object | { colorprovider?: ColorProvider | string | Color; } ): this;
    /**
     * Sets annotation label
     * @param annotation label
     * @param anchorDepth depth to anchor label (central depth by default)
     */
    setAnnotation(annotation: AnnotationBase, anchorDepth?: number): this;
}
