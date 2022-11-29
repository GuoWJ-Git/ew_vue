import {Rectangle} from './Rectangle';
import {Ellipse as ShapesEllipse} from '../../../scene/shapes/Ellipse';

/**
 * Ellipse editor can be used to create and modify geotoolkit.scene.shapes.Ellipse shapes
 */
export class Ellipse extends Rectangle {
    /**
     * Ellipse editor can be used to create and modify geotoolkit.scene.shapes.Ellipse shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.node ellipse node to edit
     */
    constructor(options?: object | { name?: string; node?: ShapesEllipse; } );
}
