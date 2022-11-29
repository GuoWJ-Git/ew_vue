import {TrajectoryTube} from './TrajectoryTube';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color} from '../../THREE';

/**
 * A multi-lateral well trajectory tube.<br>
 * @deprecated since 3.3 use geotoolkit3d.scene.well.TrajectoryTube instead
 */
export class MultiLateralTube extends TrajectoryTube {
    /**
     * A multi-lateral well trajectory tube.<br>
     * @param options The options
     * @param options.data The instance of geotoolkit3d.data.well.MultiLateralWellData
     * @param options.size The tube size in model space
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.tubeprecision The tube shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
     * @param options.closed True if the tube should have a cap at both ends
     */
    constructor(options: object | { data: MultiLateralTube; size?: number; colorprovider?: ColorProvider | string | Color; tubeprecision?: number; closed?: boolean; } );
}
