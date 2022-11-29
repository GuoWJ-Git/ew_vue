import {LineStyle} from '../../attributes/LineStyle';

/**
 * Define an interface interface for styling isolines
 */
export abstract class IsolineStylingStrategy {
    /**
     * Returns if isoline of specified level should be drawn
     * @param level level
     */
    abstract getIsolineVisible(level: number): boolean;
    /**
     * Gets style for isoline
     * @param level level
     */
    abstract getIsolineStyle(level: number): LineStyle;
}
