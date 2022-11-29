/**
 * Represents a data range, with low and high value
 */
export class Range {
    /**
     * Represents a data range, with low and high value
     * @param low Lower range boundary
     * @param low.low Lower range boundary
     * @param low.high Upper range boundary
     * @param high Upper range boundary
     */
    constructor(low?: number | Range | object | { low?: number; high?: number; } , high?: number);
    /**
     * returns true if the Ranges are equal
     * @param range range to compare to
     * @param epsilon acceptance criteria
     */
    equalsRange(range: Range, epsilon?: number): boolean;
    /**
     * Gets upper range boundary
     */
    getHigh(): number;
    /**
     * Gets lower range boundary
     */
    getLow(): number;
    /**
     * Returns lower range boundary
     */
    low: number;
    /**
     * Returns upper range boundary
     */
    high: number;
    /**
     * Sets upper range boundary
     * @param high New upper boundary
     */
    setHigh(high: number): this;
    /**
     * Sets lower range boundary
     * @param low New low boundary
     */
    setLow(low: number): this;
    /**
     * Sets a new range with given lower and upper boundaries. This method
     * checks if low is less then high otherwise swaps limits
     * @param low Lower range boundary
     * @param high Upper range boundary
     */
    setRange(low: number | Range, high?: number): this;
    /**
     * Gets all the properties pertaining to this object
     * @example
     * ```javascript
     * {'low': 0, 'high': 1}
     * ```
     */
    getProperties(): {low: number; high: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.low Lower range boundary
     * @param properties.high Upper range boundary
     */
    setProperties(properties: object | { low?: number; high?: number; } ): this;
    /**
     * Returns string representation
     */
    toString(): string;
    /**
     * Return clone object.
     */
    clone(): Range;
    /**
     * return the size of the range
     */
    getSize(): number;
    /**
     * Determines whether or not this Range and the specified Range
     * intersection.<br>
     * Two ranges intersect if their intersection size is longer than 0.
     * @param low range or lower range boundary
     * @param high Upper range boundary
     */
    intersects(low: number | Range, high?: number): boolean;
    /**
     * Determines whether or not this Range and the specified Range
     * intersection. Two ranges intersect if their intersection is nonempty.
     * @param low range or lower range boundary
     * @param high Upper range boundary
     */
    intersect(low: number | Range, high?: number): this;
    /**
     * Check if range contains another range or value
     * @param range The range to check containment with current one or value
     */
    contains(range: Range | number): boolean;
    /**
     * Union this Range with the specified
     * @param range The range to union with current one
     */
    union(range: Range): void;
    /**
     * Subtract second range from the first range and returns result as array of non-overlapping contiguous ranges.
     * @param first the first range
     * @param second range the first range
     */
    static subtract(first: Range, second: Range): Range[];
    /**
     * Create or get range from object
     * @param object object can be in format of constructor of geotoolkit.util.Range
     */
    static fromObject(object?: object | Range): Range | null;
}
