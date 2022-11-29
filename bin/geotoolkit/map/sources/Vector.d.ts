import {AbstractSource} from './AbstractSource';
import {AbstractFormat} from './formats/AbstractFormat';
import {QueryMode} from '../features/QueryMode';
import {Rect} from '../../util/Rect';
import {AbstractFeatureLayer} from '../layers/AbstractFeatureLayer';
import {AbstractFeature} from '../features/AbstractFeature';

/**
 * Vector source that allows user to get features from remote resource
 */
export class Vector extends AbstractSource {
    /**
     * Vector source that allows user to get features from remote resource
     * @param options options
     * @param options.format the remote features format
     * @param options.idfield field that contains the id for the features
     * @param options.mode the features requesting mode
     * @param options.requestresolution a grid size for layer partitioning, that is used for server requests in 'Grid' mode
     * @param options.timeout the timeout (in ms) between viewport changed and new features requested (if request is needed)
     */
    constructor(options?: object | { format?: AbstractFormat; idfield?: string; mode?: string | QueryMode; requestresolution?: number; timeout?: number; } );
    /**
     */
    _settings: object;
    /**
     * Sends a request for features in given bounding box.
     * @param bbox bounding box for features
     * @param layer layer requesting
     */
    queryFeatures(bbox: Rect, layer: AbstractFeatureLayer): this;
    /**
     * Notifies source to add features.
     * @param features features to add
     * @param needTransform true if features should be transformed to the map coordinates
     */
    addFeatures(features: AbstractFeature[], needTransform?: boolean): this;
    /**
     * Notifies source to remove feature.
     * @param feature feature to remove
     */
    removeFeature(feature: AbstractFeature): this;
    /**
     * Notifies source to remove all features added.
     */
    clearFeatures(): this;
    /**
     * Requests data from the resource and parses the response
     * @param resource resource url for request
     */
    requestData(resource: string): void;
    /**
     * Sets the unique identifier for the features
     * @param field unique identifier
     */
    setUniqueField(field: string): this;
    /**
     * Gets the unique identifier for the dataset
     */
    getUniqueField(): string;
    /**
     * Sets the grid size for layer partitioning that is used for server requests
     * @param resolution grid size
     */
    setRequestResolution(resolution: number): this;
    /**
     * Gets the grid size for layer partitioning that is used for server requests
     */
    getRequestResolution(): number;
}
