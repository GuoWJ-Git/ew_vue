import {AbstractPass} from './AbstractPass';
import {Object3D} from '../scene/Object3D';

/**
 * Base class for highlight passes
 */
export class AbstractHighlightPass extends AbstractPass {
    /**
     * Base class for highlight passes
     */
    constructor();
    /**
     * Clears highlighted objects
     */
    clearSelectedObjects(): void;
    /**
     * Add new object to highlight
     * @param object object to highlight
     */
    addSelectedObjects(object: Object3D): void;
}
