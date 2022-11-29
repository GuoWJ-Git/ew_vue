import {RectangularShapeAdapter} from './scaling/RectangularShapeAdapter';
import {Node} from '../../scene/Node';
import {Rect} from '../../util/Rect';

/**
 * Defines adapter to move text shape
 */
export class TextShapeAdapter extends RectangularShapeAdapter {
    /**
     * Defines adapter to move text shape
     */
    constructor();
    /**
     * OnInitialize
     */
    onInitialize(): boolean;
    /**
     * Sets shape
     * @param shape shape to be set
     */
    setShape(shape: Node): this;
    /**
     * Active state is changed
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * Return shape bounds
     */
    getShapeBounds(): Rect;
    /**
     * Update handles
     */
    updateHandles(): this;
}
