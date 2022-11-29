import {LogAbstractVisual} from './LogAbstractVisual';
import {Rect} from '../util/Rect';
import {RenderingContext} from '../renderer/RenderingContext';
import {Transformation} from '../util/Transformation';

/**
 * Create a logarithmic value grid where you can specify a count of decades as shown in example
 * @example
 * ```javascript
 * const grid = new LogLog10ValueGrid(3);
 * ```
 */
export class LogLog10ValueGrid extends LogAbstractVisual {
    /**
     * Create a logarithmic value grid where you can specify a count of decades as shown in example
     * @param options number of decades to be displayed or options object
     * @param options.decadecount number of decades to be displayed
     * @param options.intermediate enables or disables display of minor lines in the grid
     * @param options.reverse enables or disables reverse direction
     * @param options.logstart left limits of log grid
     * @param options.logstop right limits of log grid
     * @param options.logbase a logarithm base
     * @param intermediate enables or disables display of minor lines in the grid
     */
    constructor(options: number | object | { decadecount?: number; intermediate?: boolean; reverse?: boolean; logstart?: number; logstop?: number; logbase?: number; } , intermediate?: boolean);
    /**
     * Enable or disable reverse direction
     * @param reverse enables or disables reverse direction
     */
    setReverse(reverse: boolean): this;
    /**
     * Returns reverse direction flag
     */
    getReverse(): boolean;
    /**
     * Enable or disable displaying intermediate lines
     * @param enable enables or disables display of minor lines in the grid
     */
    setIntermediate(enable: boolean): this;
    /**
     * Returns true if visual displays intermediate lines
     */
    getIntermediate(): boolean;
    /**
     * Return a decade count
     */
    getDecadeCount(): number;
    /**
     * Sets decade count
     * @param decadeCount number of decades to be displayed
     */
    setDecadeCount(decadeCount: number): this;
    /**
     * Sets a logarithmic scale
     * @param scale Must be more then zero (because logarithmic).
     */
    setLogScale(scale: number): this;
    /**
     * Sets logarithmic line range.
     * @param start start value of tick generator
     * @param stop stop value of tick generator
     */
    setLogarithmicRange(start: number, stop: number): this;
    /**
     * get log start and log stop
     */
    getLogarithmicRange(): {logstart: number; logstop: number} | object;
    /**
     * return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Returns model limits
     */
    getBounds(): Rect;
    /**
     * Sets bounds
     * @param bounds bounds of the visual
     */
    setBounds(bounds: Rect): this;
    /**
     * Draws grid
     * @param gr Rendering Context
     * @param deviceModelRect invalid area of the device
     * @param tr transformation from model to device
     */
    drawGrid(gr: RenderingContext, deviceModelRect: Rect, tr: Transformation): void;
    /**
     * Draws vertical ticks
     * @param gr Rendering Context
     * @param top where to start drawing ticks
     * @param height height of the ticks
     * @param l left position inside track
     * @param r right position inside track
     */
    drawVerticalTicks(gr: RenderingContext, top: number, height: number, l: number, r: number): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {decadecount: number; intermediate: boolean; reverse: boolean; logstart: number; logstop: number; logbase: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.decadecount number of decades to be displayed
     * @param properties.intermediate enables or disables display of minor lines in the grid
     * @param properties.reverse enables or disables reverse direction
     * @param properties.logstart left limits of log grid
     * @param properties.logstop right limits of log grid
     * @param properties.logbase a logarithm base
     */
    setProperties(properties: object | { decadecount?: number; intermediate?: boolean; reverse?: boolean; logstart?: number; logstop?: number; logbase?: number; } ): this;
}
