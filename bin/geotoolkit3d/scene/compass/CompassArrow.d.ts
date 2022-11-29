import {Object3D} from '../Object3D';
import {Vector3, Color} from '../../THREE';

/**
 * A compass made of a red/green arrow pointing north.<br>
 */
export class CompassArrow extends Object3D {
    /**
     * A compass made of a red/green arrow pointing north.<br>
     * @param options The options
     * @param options.origin The origin of the arrow in normalized coordinates
     * @param options.direction The direction of the arrow in normalized coordinates
     * @param options.topcolor Optional color for top of the compass arrow
     * @param options.bottomcolor Optional color for bottom of the compass arrow
     * @param options.outlinecolor Optional color for compass arrow outline
     */
    constructor(options?: object | { origin?: Vector3; direction?: Vector3; topcolor?: Color; bottomcolor?: Color; outlinecolor?: Color; } );
}
