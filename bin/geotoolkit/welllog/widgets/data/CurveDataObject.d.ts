import {DataObject} from '../../../data/DataObject';

/**
 * Define abstract curve data object which provides samples and indices together
 */
export class CurveDataObject extends DataObject {
    /**
     * Define abstract curve data object which provides samples and indices together
     * @param options 
     */
    constructor(options?: object);
    /**
     * Request load data
     * @param options additional parameters of curve data passed to callback function
     * @param callback function called to request data
     */
    getData(options: any, callback: Function): void;
}
