import {LogVisualHeader} from './LogVisualHeader';
import {Node} from '../../scene/Node';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * Define an implementation of visual header for StackedLogFill visual.
 */
export class StackedLogFillHeader extends LogVisualHeader {
    /**
     * Define an implementation of visual header for StackedLogFill visual.
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: Node | object | { visual?: Node; } );
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): {fills: number[]; curves: number[]} | object;
    /**
     * Return marker depth to be used to display value. By default it is NaN and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Sets vertical header
     * @param vertical true, if vertical, else false
     * @param size size for height of vertical mode
     */
    setVertical(vertical: boolean, size?: number): this;
}
