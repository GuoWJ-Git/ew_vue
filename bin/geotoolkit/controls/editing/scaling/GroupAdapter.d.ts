import {RectangularShapeAdapter} from './RectangularShapeAdapter';

/**
 * Group adapter tool inherits from rectangle adapter.
 * Sets the bounds to the 'group', instead of setting the transformation
 */
export class GroupAdapter extends RectangularShapeAdapter {
    /**
     * Group adapter tool inherits from rectangle adapter.
     * Sets the bounds to the 'group', instead of setting the transformation
     * @param options options
     * @param options.box options for box
     * @param options.box.activefillstyle options for active box fill style
     * @param options.box.inactivefillstyle options for inactive box inactive fill style
     * @param options.box.linestyle options for box line style
     */
    constructor(options?: object | { box?: object | { activefillstyle?: object; inactivefillstyle?: object; linestyle?: object; } ; } );
    /**
     * OnMove
     * @param x x coordinate
     * @param y y coordinate
     */
    onMove(x: number, y: number): this;
}
