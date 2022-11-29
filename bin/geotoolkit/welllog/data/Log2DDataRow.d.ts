import {AbstractDataRow} from './AbstractDataRow';

/**
 * One line of 2D Data to be passed into Log2DVisualData. After being built can be added to a Log2DVisualData
 * by pushing it to getRows().
 */
export class Log2DDataRow extends AbstractDataRow {
    /**
     * One line of 2D Data to be passed into Log2DVisualData. After being built can be added to a Log2DVisualData
     * by pushing it to getRows().
     * @param depth depth or properties object
     * @param depth.depth depth
     * @param depth.values values
     * @param depth.angles angles
     * @param values array of values
     * @param angles array of angles in radians
     */
    constructor(depth: number | object | { depth?: number; values?: number[]; angles?: number[]; } , values: number[], angles: number[]);
    /**
     * Sets data
     * @param values values
     * @param angles angles in radians
     */
    setData(values: number[], angles: number[]): this;
    /**
     * Add single data
     * @param value value
     * @param angle angle in radians
     */
    addData(value: number, angle: number): this;
    /**
     * Return a count of the samples in the row
     */
    getSize(): number;
    /**
     * Return the depth
     */
    getDepth(): number;
    /**
     * Return the values
     * @param values optional buffer to fill values
     */
    getValues(values?: number[]): number[];
    /**
     * Return the angles
     */
    getAngles(): number[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depth: number; values: number[]; angles: number[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depth depth
     * @param properties.values values
     * @param properties.angles angles
     */
    setProperties(properties: object | { depth?: number; values?: number[]; angles?: number[]; } ): this;
}
