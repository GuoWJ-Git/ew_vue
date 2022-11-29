import {LineStyle} from '../attributes/LineStyle';
import {Unit} from './Unit';

/**
 * Defines helper methods to work with line style
 */
export class LineStyleUtil {
    /**
     * Defines helper methods to work with line style
     */
    constructor();
    /**
     * Returns line width in dest units
     * @param lineStyle the line style
     * @param destUnit dest unit
     */
    static getLineWidth(lineStyle: LineStyle, destUnit: Unit): number;
}
