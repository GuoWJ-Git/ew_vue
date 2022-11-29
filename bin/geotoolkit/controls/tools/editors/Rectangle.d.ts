import {SymbolEditor} from './SymbolEditor';
import {Rectangle as ShapesRectangle} from '../../../scene/shapes/Rectangle';

/**
 * Rectangle editor can be used to create and modify geotoolkit.scene.shapes.Rectangle shapes
 */
export class Rectangle extends SymbolEditor {
    /**
     * Rectangle editor can be used to create and modify geotoolkit.scene.shapes.Rectangle shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.node rectangle node to edit
     */
    constructor(options?: object | { name?: string; node?: ShapesRectangle; } );
}
