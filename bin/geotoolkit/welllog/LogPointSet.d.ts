import {LogAbstractVisual} from './LogAbstractVisual';
import {Rect} from '../util/Rect';
import {AbstractScaledData} from '../data/AbstractScaledData';

/**
 * Create point set visual
 */
export class LogPointSet extends LogAbstractVisual {
    /**
     * Create point set visual
     * @param options 
     */
    constructor(options?: object);
    /**
     * Returns null
     */
    getModelLimits(): Rect | any;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the point set in the parent coordinates false
     * @param bounds bounds of the point set
     */
    setBounds(bounds: Rect): this;
    /**
     * Enable or disable auto bounds If auto bounds is enabled then it equals to
     * parent model limits
     * @param enable Enable or disable auto bounds
     */
    setAutoBounds(enable: boolean): this;
    /**
     * Enable automatic bounds. If auto bounds is enabled then it equals to
     * parent model limits
     */
    isAutoBounds(): boolean;
    /**
     * Gets the visual's scaled data
     */
    getScaledData(): AbstractScaledData | null;
}
