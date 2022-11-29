import {DataFormatType} from './DataFormatType';
import {SampleDataFormatType} from './SampleDataFormatType';

/**
 * Define utility methods to return data format and sample format
 */
export class DataFormatLengthCalculator {
    /**
     * Define utility methods to return data format and sample format
     */
    constructor();
    /**
     * Return amount of bytes in this format
     * @param dataFormat data format
     */
    static getDataFormatLength(dataFormat: DataFormatType): number;
    /**
     * Return amount of bytes fro current sample format
     * @param sampleDataFormat sample format
     */
    static getSampleDataFormatLength(sampleDataFormat: SampleDataFormatType): number;
}
