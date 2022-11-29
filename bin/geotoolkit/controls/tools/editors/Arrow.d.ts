import {Line} from './Line';
import {Arrow as ShapesArrow} from '../../../scene/shapes/Arrow';

/**
 * Arrow editor can be used to create and modify geotoolkit.scene.shapes.Arrow shapes
 */
export class Arrow extends Line {
    /**
     * Arrow editor can be used to create and modify geotoolkit.scene.shapes.Arrow shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.node arrow node to edit
     */
    constructor(options?: object | { name?: string; node?: ShapesArrow; } );
}
