import {LogAbstractData} from './data/LogAbstractData';
import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Define abstract strategy to calculate curve limits based on data
 */
export class LogCurveLimitsStrategy {
    /**
     * Define abstract strategy to calculate curve limits based on data
     */
    constructor();
    /**
     * Calculate data limits based on data
     * @param data data
     * @param unit display unit
     */
    getLimits(data: LogAbstractData, unit?: AbstractUnit): number[];
}
