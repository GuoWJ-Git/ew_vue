import {AbstractHighlightPass} from './AbstractHighlightPass';
import {Vector2, Scene, Camera} from '../THREE';
import {Object3D} from '../scene/Object3D';

/**
 * Implementation of highlight meshes with edges
 */
export class HighlightPass extends AbstractHighlightPass {
    /**
     * Implementation of highlight meshes with edges
     * @param options options object
     * @param options.resolution resolution
     * @param options.scene scene
     * @param options.camera camers
     * @param options.enabled enabled
     */
    constructor(options?: object | { resolution?: Vector2; scene?: Scene; camera?: Camera; enabled?: boolean; } );
    /**
     * Set options
     * @param options options
     * @param options.enabled enabled
     */
    setOptions(options?: object | { enabled?: boolean; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
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
