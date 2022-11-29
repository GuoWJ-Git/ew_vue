import {IGetId} from '../features/strategies/IGetId';
import {IFeature} from '../features/IFeature';
import {Iterator} from '../../util/iterator';

/**
 * GeoJSON parser and converter
 */
export class GeoJSON {
    /**
     * GeoJSON parser and converter
     */
    constructor();
    /**
     * Creates GeoToolkit Shape-based {@link @int/geotoolkit/map/features/IFeature.IFeature} objects based on GeoJSON features
     * @param geoJsonFeatures array of GeoJSON features
     * @param iGetFeatureId how to retrieve feature id from geoJson feature's properties
     * @param crsConversion function for converting points into the map coordinate system
     * @param coordinateOrder x/y coordinate order ([1, 0] to reverse)
     */
    static parse(geoJsonFeatures: object | object[], iGetFeatureId?: IGetId, crsConversion?: Function, coordinateOrder?: any[]): IFeature[];
    /**
     * Converts GeoToolkit Shape-based {@link @int/geotoolkit/map/features/IFeature.IFeature} objects to GeoJSON format
     * @param features features to be converted to GeoJSON
     * @param crsConversion function for converting points into the result coordinate system
     * @param coordinateOrder x/y coordinate order ([1, 0] to reverse)
     */
    static toGeoJSON(features: IFeature | any[] | Iterator, crsConversion?: Function, coordinateOrder?: any[]): object;
}
