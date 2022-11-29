import {Object3D} from '../Object3D';
import {Type} from '../../Event';

/**
 * Base class for geotoolkit3d Reservoir Grid's
 */
export class AbstractReservoirGrid extends Object3D {
    /**
     * Base class for geotoolkit3d Reservoir Grid's
     * @param options 
     */
    constructor(options: object);
    /**
     * A decorator implements EventDispatcher.on()
     * @param type type of event
     * @param callback callback function
     */
    on(type: Type, callback: Function): void;
    /**
     * A decorator implements EventDispatcher.off()
     * @param type type of event
     * @param callback callback function
     */
    off(type: Type, callback: Function): void;
}
