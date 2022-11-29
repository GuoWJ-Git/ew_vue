import {ShapeAdapter} from './ShapeAdapter';
import {Node} from '../../scene/Node';

/**
 * Defines adapter to move and modify a Line shape
 */
export class LineShapeAdapter extends ShapeAdapter {
    /**
     * Defines adapter to move and modify a Line shape
     */
    constructor();
    /**
     * OnInitialize
     */
    onInitialize(): boolean;
    /**
     * Sets shape
     * @param shape shape to be modified
     */
    setShape(shape: Node): this;
    /**
     * Active state is changed
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * Update handles
     */
    updateHandles(): this;
}
