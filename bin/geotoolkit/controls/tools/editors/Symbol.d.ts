import {SymbolEditor} from './SymbolEditor';
import {SymbolShape} from '../../../scene/shapes/SymbolShape';

/**
 * Symbol editor can be used to create and modify geotoolkit.scene.shapes.SymbolShape shapes
 * @deprecated since 2021.1 (3.3) use geotoolkit.controls.tools.editors.SymbolEditor instead
 */
export class Symbol extends SymbolEditor {
    /**
     * Symbol editor can be used to create and modify geotoolkit.scene.shapes.SymbolShape shapes
     * @param options editor options
     * @param options.name tool name
     * @param options.node symbol to edit
     */
    constructor(options?: object | { name?: string; node?: SymbolShape; } );
}
