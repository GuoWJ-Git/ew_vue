import {Object3D} from '../../THREE';

/**
 * A 3D compass.<br>
 * <br>
 * This class adds a canvas in the given HTML element that will be used to render a 3D compass shape.<br>
 * <br>
 * The compass will rotate the camera to look at the compass shape in the same direction that the parent plot is looking.<br>
 * The compass shape itself can be static.<br>
 */
export class Compass {
    /**
     * A 3D compass.<br>
     * <br>
     * This class adds a canvas in the given HTML element that will be used to render a 3D compass shape.<br>
     * <br>
     * The compass will rotate the camera to look at the compass shape in the same direction that the parent plot is looking.<br>
     * The compass shape itself can be static.<br>
     * @param options The options
     * @param options.container The div element in which the canvas will be created and added.
     * @param options.canvas The canvas element to render to.
     * @param options.renderer renderer options for the compass
     * @param options.renderer.parameters renderer parameters for the compass
     * @param options.visible The visibility
     */
    constructor(options: object | { container?: HTMLElement; canvas?: HTMLElement; renderer?: object | { parameters?: object; } ; visible?: boolean; } );
    /**
     * Return the compass shape
     */
    getCompassObject(): Object3D;
    /**
     * Sets the compass shape
     * @param newObject The new compass shape
     */
    setCompassObject(newObject: Object3D): this;
}
