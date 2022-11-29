import {DataSeriesView} from './DataSeriesView';
import {INumericalDataSeries} from './INumericalDataSeries';
import {NumericalDataSeries} from './NumericalDataSeries';

/**
 * Define a numerical customized readonly view of {@link @int/geotoolkit/data/NumericalDataSeries.NumericalDataSeries} or {geotoolkit.data.NumericalDataSeriesView} for filtering,
 * and unit conversion
 */
export class NumericalDataSeriesView extends DataSeriesView implements INumericalDataSeries {
    /**
     * Define a numerical customized readonly view of {@link @int/geotoolkit/data/NumericalDataSeries.NumericalDataSeries} or {geotoolkit.data.NumericalDataSeriesView} for filtering,
     * and unit conversion
     * @param options an original data series or data series view or properties object
     * @param options.data an original data series or data series view or properties object
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: NumericalDataSeries | NumericalDataSeriesView | object | { data?: NumericalDataSeries | NumericalDataSeriesView; } , properties?: any);
    /**
     * Returns a clone of the numerical data series view.
     */
    clone(): NumericalDataSeriesView;
    /**
     * Sets pre-processor function. This processor will be called before filters.
     * @param preProcessor pre-processor function. The function must accept single value and array of values as parameter.
     */
    setPreProcessor(preProcessor?: Function): this;
    /**
     * Sets post-processor function. This processor will be called after filters.
     * @param postProcessor post-processor function. The function must accept single value and array of values as parameter.
     */
    setPostProcessor(postProcessor?: Function): this;
    /**
     * Gets min value
     * @param unit unit optional output unit to convert the data to (if none specified, data is not converted)
     */
    getMin(unit?: string): number;
    /**
     * Gets max value
     * @param unit unit optional output unit to convert the data to (if none specified, data is not converted)
     */
    getMax(unit?: string): number;
}
