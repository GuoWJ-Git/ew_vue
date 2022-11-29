import {EventDispatcher} from '../../../util/EventDispatcher';
import {IFeature} from '../IFeature';
import {Rect} from '../../../util/Rect';
import {Iterator} from '../../../util/iterator';

/**
 * Converts features in a form convenient for storage and processing. Returns saved features on request.
 */
export class BaseConverter extends EventDispatcher {
    /**
     * Converts features in a form convenient for storage and processing. Returns saved features on request.
     */
    constructor();
    /**
     * Converts and saves new features in array. All features are supported.
     * @param features new features to add
     */
    saveConvertedFeatures(features: IFeature[]): any[] | any;
    /**
     * Returns saved features corresponded to the options
     * @param options request options
     * @param options.bbox bounding box for requested features
     * @param options.filter additional filter by features
     */
    getFeatures(options: object | { bbox?: Rect; filter?: Function | null; } ): IFeature[] | Iterator;
    /**
     * Removes feature(s) from the store
     * @param features feature(s) to remove
     */
    removeFeatures(features: Iterator | IFeature): this;
    /**
     * Clears all the features from the store
     */
    clear(): this;
}
