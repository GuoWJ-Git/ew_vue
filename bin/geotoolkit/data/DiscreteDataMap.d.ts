import {EventDispatcher} from '../util/EventDispatcher';

/**
 * Defines log discrete value map. It maps value ranges or value codes to corresponding values based on continues or discrete type of the map.
 */
export class DiscreteDataMap extends EventDispatcher {
    /**
     * Defines log discrete value map. It maps value ranges or value codes to corresponding values based on continues or discrete type of the map.
     * @param options properties object
     * @param options.values list of values
     * @param options.type data type to specify usage codes or ranges
     * @param options.ranges array of ranges
     * @param options.codes code value for each section
     */
    constructor(options?: object | { values?: object[]; type?: MapType; ranges?: number[][]; codes?: number[]; } );
    /**
     * Return mapped object for specified value
     * @param value value index
     */
    getValueAt(value: number): any;
    /**
     * Returns array of ranges
     */
    getRanges(): number[][];
    /**
     * Sets array of ranges
     * @param ranges array of ranges
     */
    setRanges(ranges: number[][]): this;
    /**
     * Returns array of ranges
     */
    getCodes(): number[];
    /**
     * Sets array of codes
     * @param codes array of codes
     */
    setCodes(codes: number[]): this;
    /**
     * Returns data map type
     */
    getMapType(): MapType;
    /**
     * Sets data map type
     * @param mapType map type
     */
    setMapType(mapType: MapType): this;
    /**
     * Returns array of values
     */
    getValues(): object[];
    /**
     * Sets array of values
     * @param values list of values
     */
    setValues(values: object[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {type: MapType; values: object[]; ranges: number[][]; codes: number[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.type map type
     * @param properties.values list of values
     * @param properties.ranges array of ranges
     * @param properties.codes array of codes
     */
    setProperties(properties?: object | { type?: MapType; values?: object[]; ranges?: number[][]; codes?: number[]; } ): this;
}
/**
 * Disrete map type
 * if the type is "Continuous", then the "ranges" parameter is used, which determines the inclusion in the range.
 * If the type is "Discrete", then the "codes" parameter is used to determine if the parameter falls within the set of specified values.
 */
export enum MapType {
    /**
     * discrete
     */
    Discrete = 'Discrete',
    /**
     * continuous
     */
    Continuous = 'Continuous'
}
