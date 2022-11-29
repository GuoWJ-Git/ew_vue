import {AbstractDataSeries} from './AbstractDataSeries';
import {DataSeries} from './DataSeries';
import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Filter
 */
export type FilterCallback = (index: number, value: any) => void;
/**
 * Define a generic read-only view of an underlying {@link @int/geotoolkit/data/DataSeries.DataSeries} or {@link @int/geotoolkit/data/DataSeriesView.DataSeriesView}.
 * A DataSeriesView allows unit conversion, pre- and post-processing and filtering.<br>
 */
export class DataSeriesView extends AbstractDataSeries {
    /**
     * Define a generic read-only view of an underlying {@link @int/geotoolkit/data/DataSeries.DataSeries} or {@link @int/geotoolkit/data/DataSeriesView.DataSeriesView}.
     * A DataSeriesView allows unit conversion, pre- and post-processing and filtering.<br>
     * @param options the original data series or data series view or properties object
     * @param options.data the original data series or data series view
     * @param options.unit unit of the view
     * @param options.preprocessor pre-processor function. See setPreProcessor() method
     * @param options.postprocessor post-processor function. See setPostProcessor() method
     * @param options.filters array of filters
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: DataSeries | DataSeriesView | object | { data?: AbstractDataSeries; unit?: string | AbstractUnit; preprocessor?: Function; postprocessor?: Function; filters?: (FilterCallback | DataSeriesView)[]; } , properties?: any);
    /**
     * Returns a clone of the data series view.
     */
    clone(): DataSeriesView;
    /**
     * DataSeriesView does not support setName() method.
     * @param name data object name
     */
    setName(name: string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {id: number | string; name: string; type: string; unit: string | AbstractUnit} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data the original data series or data series view
     * @param properties.unit unit of the view
     * @param properties.preprocessor pre-processor function. See setPreProcessor() method
     * @param properties.postprocessor post-processor function. See setPostProcessor() method
     * @param properties.filters array of filters
     */
    setProperties(properties?: object | { data?: AbstractDataSeries; unit?: string | AbstractUnit; preprocessor?: Function; postprocessor?: Function; filters?: (FilterCallback | DataSeriesView)[]; } ): this;
    /**
     * Sets view unit of the data series view.
     * @param unit unit to set
     */
    setUnit(unit?: string | AbstractUnit): this;
    /**
     * Returns view unit of the data series view. This method returns unit set through setUnit() method, which can be different from getUnit() if view unit is not convertable to data unit.
     */
    getViewUnit(): AbstractUnit | null;
    /**
     * Sets pre-processor function. This processor will be called before filters.
     * @param preProcessor pre-processor function. The function must accept single value and array of values as parameter.
     */
    setPreProcessor(preProcessor?: Function): this;
    /**
     * Returns pre-processor function.
     */
    getPreProcessor(): Function;
    /**
     * Sets post-processor function. This processor will be called after filters.
     * @param postProcessor post-processor function. The function must accept single value and array of values as parameter.
     */
    setPostProcessor(postProcessor?: Function): this;
    /**
     * Returns post-processor function.
     */
    getPostProcessor(): Function;
    /**
     * Synchronizes internal mapping for filters.
     */
    protected synchronize(): void;
    /**
     * Returns an array of objects in the data series.
     * @param copy whether creating a copy of data
     * @param unit unit optional output unit to convert the data to. if not specified, data will not be converted
     */
    toArray(copy?: boolean, unit?: string | AbstractUnit): object[];
    /**
     * Return the array of value filters as functions or geotoolkit.data.DataSeriesView.
     */
    getFilters(): (DataSeriesView | Function)[];
    /**
     * Adds a value filter to the end of existing filters.
     * @param filter filter function or DataSeriesView.
     *             If DataSeriesView specified, changes from DataSeriesView might not be applied.
     * @param filterType filter type.
     *             Value type filter only filters by value and index passed in will be null. Value type filter will be optimized.
     */
    addFilter(filter: Function | DataSeriesView | object, filterType?: FilterType): this;
    /**
     * Removes a value filter from the data series view.
     * @param filter filter to remove
     */
    removeFilter(filter: Function | DataSeriesView): this;
    /**
     * Replaces an existing filter with a new filter.
     * @param oldFilter old filter
     * @param newFilter new filter
     * @param filterType filter type
     */
    replaceFilter(oldFilter: Function | DataSeriesView | object, newFilter: Function | DataSeriesView | object, filterType?: FilterType): this;
    /**
     * Clears all filters.
     */
    clearFilters(): this;
    /**
     * Returns true
     */
    isReadOnly(): boolean;
}
/**
 * DataSeriesView events.
 */
export enum Events {
    /**
     * FilterChanged
     */
    FilterChanged = 'FilterChanged',
    /**
     * Rebuild
     */
    Rebuild = 'Rebuild'
}
/**
 * FilterType.
 */
export enum FilterType {
    /**
     * General. Filter function can filter on both index and value.
     */
    General = 'General',
    /**
     * Value. Filter function can only filter value.
     */
    Value = 'Value'
}
