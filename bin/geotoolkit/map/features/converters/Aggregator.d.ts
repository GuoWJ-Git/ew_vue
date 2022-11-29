import {BaseConverter} from './BaseConverter';
import {IFeature} from '../IFeature';
import {Rect} from '../../../util/Rect';
import {Iterator} from '../../../util/iterator';

/**
 * Converts features into a binary tree for the purpose of aggregation nearby points.
 * Only point-like features are supported.
 */
export class Aggregator extends BaseConverter {
    /**
     * Converts features into a binary tree for the purpose of aggregation nearby points.
     * Only point-like features are supported.
     * @param options convert options
     * @param options.mindistance minimum distance between aggregations (in pixel)
     * @param options.min minimum number of points to start aggregation
     * @param options.enabled true if aggregation is enabled
     * @param options.timeout timeout between features cached request and the actual data query (in ms)
     * @param options.amountaggregations number(s) of children in aggregation tree for extension
     * @param options.radius distance(s) between layers for extension
     */
    constructor(options: object | { mindistance?: number; min?: number; enabled?: boolean; timeout?: number; amountaggregations?: number | number[]; radius?: number | number[]; } );
    /**
     * Converts and saves features as a binary tree. Only point-like features are supported.
     * @param features new features to add
     */
    saveConvertedFeatures(features: IFeature[]): any[] | any;
    /**
     * Returns saved features corresponded to the options
     * @param options request options
     * @param options.bbox bounding box for requested features
     * @param options.filter additional filter by features
     * @param options.scale map scale to calculate minimum distance between features for aggregation
     */
    getFeatures(options: object | { bbox?: Rect; filter?: Function | null; scale?: number; } ): IFeature[];
    /**
     * Removes feature(s) from the store
     * @param features feature(s) to remove
     */
    removeFeatures(features: Iterator | IFeature): this;
    /**
     * Gets current conversion options.
     */
    getOptions(): {mindistance: number; min: number; enabled: boolean; timeout: number} | any;
    /**
     * Sets new conversion options.
     * @param options convert options
     * @param options.mindistance minimum distance between aggregations (in pixel)
     * @param options.min minimum number of points to start aggregation
     * @param options.enabled true if aggregation is enabled
     * @param options.timeout timeout between features cached request and the actual data query (in ms)
     * @param options.amountaggregations number(s) of children in aggregation tree for extension
     * @param options.radius distance(s) between layers for extension
     */
    setOptions(options: object | { mindistance?: number; min?: number; enabled?: boolean; timeout?: number; amountaggregations?: number | number[]; radius?: number | number[]; } ): this;
}
