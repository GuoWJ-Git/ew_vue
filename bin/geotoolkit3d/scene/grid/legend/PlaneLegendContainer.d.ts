import {Object3D} from '../../Object3D';
import {Vector3} from '../../../THREE';

/**
 * Hold the label for grid legends, feature a plane collision detection.
 */
export class PlaneLegendContainer extends Object3D {
    /**
     * Hold the label for grid legends, feature a plane collision detection.
     */
    constructor();
    /**
     * @param options options object
     * @param options.legendlabel the label to display
     * @param options.grid the grid the legend is displayed on (used for collision detection)
     * @param options.position the panel position relative to the grid center.
     * @param options.scale the panel scale
     * @param options.hideiftoolarge if true, hide the legend text when it doesnt fit inside it's panel.
     * @param options.centerbeforehiding if true and "hide if too large" enabled, will try to shift the legend text to fit inside the panel if possible.
     */
    setOptions(options: object | { legendlabel: object; grid: object; position: Vector3; scale: Vector3; hideiftoolarge: boolean; centerbeforehiding: boolean; } ): this;
}
