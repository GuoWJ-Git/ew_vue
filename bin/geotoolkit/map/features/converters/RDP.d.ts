import {BaseConverter} from './BaseConverter';
import {IFeature} from '../IFeature';
import {Rect} from '../../../util/Rect';
import {Iterator} from '../../../util/iterator';

/**
 * Converts features into a scaled view in purpose of simplify geometry and remove unnecessary points using RDP(Ramer-Douglas-Peucker) algorithm.
 * Only multipoint-like features are supported.
 */
export class RDP extends BaseConverter {
    /**
     * Converts features into a scaled view in purpose of simplify geometry and remove unnecessary points using RDP(Ramer-Douglas-Peucker) algorithm.
     * Only multipoint-like features are supported.
     */
    constructor();
    /**
     * Converts and saves features in a scaled view. Only multipoint-like features are supported.
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
}
