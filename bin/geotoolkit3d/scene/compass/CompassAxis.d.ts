import {Object3D} from '../Object3D';
import {Color} from '../../THREE';

/**
 * A compass made of 3 colored lines.<br>
 * <br>
 * <ul>
 *     <li> X axis: Red</li>
 *     <li> Y axis: Green</li>
 *     <li> Z axis: blue</li>
 * </ul>
 */
export class CompassAxis extends Object3D {
    /**
     * A compass made of 3 colored lines.<br>
     * <br>
     * <ul>
     *     <li> X axis: Red</li>
     *     <li> Y axis: Green</li>
     *     <li> Z axis: blue</li>
     * </ul>
     * @param options The options
     * @param options.zaxiscolor Optional color for Z axis
     * @param options.yaxiscolor Optional color for Y axis
     * @param options.xaxiscolor Optional color for X axis
     */
    constructor(options?: object | { zaxiscolor?: Color; yaxiscolor?: Color; xaxiscolor?: Color; } );
}
