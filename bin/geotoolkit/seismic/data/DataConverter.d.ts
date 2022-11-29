import {SampleDataFormatType} from './SampleDataFormatType';

/**
 * Define abstract converter of binary data to array of numbers
 */
export class DataConverter {
    /**
     * Define abstract converter of binary data to array of numbers
     * @param dataType data type
     * @param nullValue null value
     */
    constructor(dataType?: SampleDataFormatType, nullValue?: number);
    /**
     * Converts binary data and return statistics
     * @param uint8binary binary data
     * @param offset offset
     * @param target target array
     * @param samplesCount samples count
     */
    convert(uint8binary: Uint8Array, offset: number, target: number[], samplesCount: number): {average: number; min: number; max: number; rms: number} | object;
}
