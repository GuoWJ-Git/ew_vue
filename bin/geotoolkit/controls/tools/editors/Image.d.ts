import {SymbolEditor} from './SymbolEditor';
import {Image as ShapesImage} from '../../../scene/shapes/Image';

/**
 * Image editor can be used to create and modify geotoolkit.scene.shapes.Image shapes
 */
export class Image extends SymbolEditor {
    /**
     * Image editor can be used to create and modify geotoolkit.scene.shapes.Image shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.node image to edit
     */
    constructor(options?: object | { name?: string; node?: ShapesImage; } );
}
