import {EventDispatcher} from '../../../util/EventDispatcher';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';

/**
 * Draws an aim symbol that consists of a multiple circles with the same center and different radiuses
 */
export class AimPainter extends EventDispatcher {
    /**
     * Draws an aim symbol that consists of a multiple circles with the same center and different radiuses
     * @param radiuses array of the circles radiuses (from 0 to 1) or properties object
     * @param radiuses.radiuses array of the circles radiuses (from 0 to 1)
     */
    constructor(radiuses: number[] | object | { radiuses?: number[]; } );
    /**
     * Gets all the properties pertaining to the aim painter
     */
    getProperties(): {radiuses: number[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param props aim painter properties
     * @param props.radiuses array of the circles radiuses (from 0 to 1)
     */
    setProperties(props: object | { radiuses?: number[]; } ): this;
    /**
     * Sets aim circle radiuses (from 0 to 1)
     * @param radiuses array of the circles radiuses (from 0 to 1)
     */
    setRadiuses(radiuses: number[]): this;
    /**
     * Returns current aim circle radiuses
     */
    getRadiuses(): number[];
    /**
     * Draw text on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
