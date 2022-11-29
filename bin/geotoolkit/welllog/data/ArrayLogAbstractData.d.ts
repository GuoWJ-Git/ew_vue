import {EventDispatcher} from '../../util/EventDispatcher';
import {AbstractUnit} from '../../util/AbstractUnit';
import {LogDataEvent} from './LogDataEvent';
import {AbstractDataRow} from './AbstractDataRow';

/**
 * Define abstract data source for array log visuals like Log2DVisual
 */
export class ArrayLogAbstractData extends EventDispatcher {
    /**
     * Define abstract data source for array log visuals like Log2DVisual
     * @param name name of data
     */
    constructor(name?: string);
    /**
     * Return name of the data
     */
    getName(): string;
    /**
     * Set name of the data
     * @param name The data name
     */
    setName(name: string): this;
    /**
     * Sets index unit
     * @param unit index unit
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Returns index unit
     */
    getIndexUnit(): AbstractUnit | null;
    /**
     * Notify if data is changed
     * @param args optional parameters
     */
    protected update(args?: LogDataEvent): void;
    /**
     * Return the value to indicate if data source was changed
     */
    getTimeStamp(): number;
    /**
     * Update time stamp
     */
    protected updateTimeStamp(): void;
    /**
     * Return number of rows
     */
    getNumberOfRows(): number;
    /**
     * Return a row by index
     * @param index index of the row
     */
    getRow(index: number): AbstractDataRow;
    /**
     * Return minimum value
     */
    getMinValue(): number;
    /**
     * Return maximum value
     */
    getMaxValue(): number;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
    getMaxDepth(): number;
    /**
     * Return minimum angle of columns in radians
     */
    getMinAngle(): number;
    /**
     * Return maximum angle of columns in radians
     */
    getMaxAngle(): number;
}
