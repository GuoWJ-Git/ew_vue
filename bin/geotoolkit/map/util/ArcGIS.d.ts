import {Text} from '../../scene/shapes/Text';

/**
 * ArcGIS feature templates parser
 */
export class ArcGIS {
    /**
     * ArcGIS feature templates parser
     */
    constructor();
    /**
     * Creates GeoToolkit Shape-based {@link @int/geotoolkit/map/features/IFeature.IFeature} objects based on ArcGIS features
     * @param data ArcGIS layers data
     * @param url ArcGIS server url (for relative references)
     * @param textShape annotations text shape
     */
    static parse(data: object, url: string, textShape?: Text): object;
}
