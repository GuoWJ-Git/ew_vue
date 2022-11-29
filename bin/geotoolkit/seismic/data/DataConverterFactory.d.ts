import {SampleDataFormatType} from './SampleDataFormatType';
import {DataConverter} from './DataConverter';

/**
 * Define factory of converters of sample formats
 */
export class DataConverterFactory {
    /**
     * Define factory of converters of sample formats
     */
    constructor();
    /**
     * Create instance of data converter
     * @param dataType data type
     * @param nullValue null value
     */
    create(dataType: SampleDataFormatType, nullValue?: number): DataConverter | any;
    /**
     * Return factory instance
     */
    static getInstance(): DataConverterFactory;
}
