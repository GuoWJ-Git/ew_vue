import {IGetId} from '../features/strategies/IGetId';
import {IFeature} from '../features/IFeature';

/**
 * KML (Keyhole Markup Language) parser
 */
export class KML {
    /**
     * KML (Keyhole Markup Language) parser
     */
    constructor();
    /**
     * Creates GeoToolkit Shape-based {@link @int/geotoolkit/map/features/IFeature.IFeature} objects based on KML features
     * @param xmlElement DOMElement object that contains all the features data in KML format
     * @param iGetFeatureId how to retrieve feature id from geoJson feature's properties
     * @param crsConversion function for converting points into the map coordinate system
     * @param invalidateHandler function to be called when async templates are ready to be drawn
     * @param styles styles map that contains connection between style ids and feature templates
     * @param features features array to store parsed features (new array created if not provided)
     */
    static parse(xmlElement: object, iGetFeatureId?: IGetId, crsConversion?: Function, invalidateHandler?: Function, styles?: object, features?: IFeature[]): IFeature[];
}
