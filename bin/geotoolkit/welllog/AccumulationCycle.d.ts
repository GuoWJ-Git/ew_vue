import {LogAbstractVisual} from './LogAbstractVisual';
import {AccumulationCycleData} from './data/AccumulationCycleData';
import {Rect} from '../util/Rect';

/**
 * Define visual to display accumulation cycles
 */
export class AccumulationCycle extends LogAbstractVisual {
    /**
     * Define visual to display accumulation cycles
     * @param options data source to be displayed or properties object
     * @param options.data data source to be displayed
     */
    constructor(options?: AccumulationCycleData | object | { data?: AccumulationCycleData; } );
    /**
     * Returns Data
     */
    getDataSource(): AccumulationCycleData;
    /**
     * Sets data source to be displayed.
     * @param data data to display
     */
    setData(data: AccumulationCycleData): this;
    /**
     * Synchronize state from data
     * @param rect optional area to invalidate track
     */
    updateFromData(rect?: Rect): this;
}
