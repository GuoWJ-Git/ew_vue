import {AnchoredHandle} from './AnchoredHandle';
import {Dimension} from '../../util/Dimension';

/**
 * Defines a shape to draw a handle. The shape is part of the editor feature that lets a user interact with a shape.<br>
 * It provides the rendering for the handles that can be grabbed and moved by the user.
 */
export class Handle extends AnchoredHandle {
    /**
     * Defines a shape to draw a handle. The shape is part of the editor feature that lets a user interact with a shape.<br>
     * It provides the rendering for the handles that can be grabbed and moved by the user.
     * @param x X coordinate of handle anchor or a JSON with handle properties
     * @param y Y coordinate of handle anchor
     * @param size The two dimensional size of the anchor
     */
    constructor(x?: object | number, y?: number, size?: number | Dimension);
}
