/**
 * Define a numerical data interface
 */
export abstract class INumericalDataSeries {
    /**
     * Returns min value
     * @param unit unit optional output unit to convert the data to (if none specified, data is not converted)
     */
    abstract getMin(unit?: string): number;
    /**
     * Returns max value
     * @param unit unit optional output unit to convert the data to (if none specified, data is not converted)
     */
    abstract getMax(unit?: string): number;
}
