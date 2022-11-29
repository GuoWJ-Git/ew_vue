import {ShapeAdapter} from './ShapeAdapter';

/**
 * Defines adapter to move and modify a positions of the polyline or polygon shape
 */
export class PolyLineShapeAdapter extends ShapeAdapter {
    /**
     * Defines adapter to move and modify a positions of the polyline or polygon shape
     */
    constructor();
    /**
     * OnInitialize
     */
    onInitialize(): boolean;
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
