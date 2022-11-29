import {AbstractEditor} from './AbstractEditor';
import {SymbolShape} from '../../../scene/shapes/SymbolShape';

/**
 * Symbol editor can be used to create and modify geotoolkit.scene.shapes.SymbolShape shapes
 */
export class SymbolEditor extends AbstractEditor {
    /**
     * Symbol editor can be used to create and modify geotoolkit.scene.shapes.SymbolShape shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.node symbol to edit
     */
    constructor(options?: object | { name?: string; node?: SymbolShape; } );
    /**
     */
    getAspectRatio(): number;
}
