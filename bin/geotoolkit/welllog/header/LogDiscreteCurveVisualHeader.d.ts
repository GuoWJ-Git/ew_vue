import {LogVisualHeader} from './LogVisualHeader';
import {Orientation} from '../../util/Orientation';

/**
 * Define visual to render discrete curve header
 */
export class LogDiscreteCurveVisualHeader extends LogVisualHeader {
    /**
     * Define visual to render discrete curve header
     * @param options visual for discrete curve header or properties object
     * @param options.visual visual for discrete curve header
     */
    constructor(options?: LogVisualHeader | object | { visual?: LogVisualHeader; } );
    /**
     * Sets header orientation
     * @param orientation header orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Returns header orientation
     */
    getOrientation(): Orientation;
    /**
     * Set the visibility of curve name
     * @param visible The visibility of the curve name
     */
    setCurveNameVisible(visible: boolean): this;
    /**
     * Gets visibility of curve name
     */
    getCurveNameVisible(): boolean;
}
