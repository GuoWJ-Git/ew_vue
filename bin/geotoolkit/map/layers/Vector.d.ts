import {Template} from './Template';

/**
 * Vector layer differs from the others in that it does not draw pictures, but vector data (called "features"): points, polylines and polygons. <br>
 * These features can be either used as additional information for drawing on top of another layer — for example, set of points-capitals from the maplayers.html tutorial — or cover the entire space and not requiring any background.<br>
 * Most of the layers —  ArcGISFeature, CSV, GeoJSON, GeoRSS, KML, WFS, etc. — are vector and allows to automatically parse vector data and drawing styles from different formats.
 * The implementation is capable of loading features data from files (objects) in different formats.<br>
 * It has following predefined shape templates:<br>
 * 'templates': [ <br>
 *     { 'featureclassname': geotoolkit.map.features.Polygon.getClassName(), 'template': new geotoolkit.map.features.templates.Polygon() },<br>
 *     { 'featureclassname': geotoolkit.map.features.MultiPolygon.getClassName(), 'template': new geotoolkit.map.features.templates.Polygon() },<br>
 *     { 'featureclassname': geotoolkit.map.features.LineString.getClassName(), 'template': new geotoolkit.map.features.templates.LineString() },<br>
 *     { 'featureclassname': geotoolkit.map.features.MultiLineString.getClassName(), 'template': new geotoolkit.map.features.templates.LineString() },<br>
 *     { 'featureclassname': geotoolkit.map.features.Point.getClassName(), 'template': new geotoolkit.map.features.templates.Point() },<br>
 *     { 'featureclassname': geotoolkit.map.features.MultiPoint.getClassName(), 'template': new geotoolkit.map.features.templates.Point() }<br>
 * ]
 */
export class Vector extends Template {
    /**
     * Vector layer differs from the others in that it does not draw pictures, but vector data (called "features"): points, polylines and polygons. <br>
     * These features can be either used as additional information for drawing on top of another layer — for example, set of points-capitals from the maplayers.html tutorial — or cover the entire space and not requiring any background.<br>
     * Most of the layers —  ArcGISFeature, CSV, GeoJSON, GeoRSS, KML, WFS, etc. — are vector and allows to automatically parse vector data and drawing styles from different formats.
     * The implementation is capable of loading features data from files (objects) in different formats.<br>
     * It has following predefined shape templates:<br>
     * 'templates': [ <br>
     *     { 'featureclassname': geotoolkit.map.features.Polygon.getClassName(), 'template': new geotoolkit.map.features.templates.Polygon() },<br>
     *     { 'featureclassname': geotoolkit.map.features.MultiPolygon.getClassName(), 'template': new geotoolkit.map.features.templates.Polygon() },<br>
     *     { 'featureclassname': geotoolkit.map.features.LineString.getClassName(), 'template': new geotoolkit.map.features.templates.LineString() },<br>
     *     { 'featureclassname': geotoolkit.map.features.MultiLineString.getClassName(), 'template': new geotoolkit.map.features.templates.LineString() },<br>
     *     { 'featureclassname': geotoolkit.map.features.Point.getClassName(), 'template': new geotoolkit.map.features.templates.Point() },<br>
     *     { 'featureclassname': geotoolkit.map.features.MultiPoint.getClassName(), 'template': new geotoolkit.map.features.templates.Point() }<br>
     * ]
     * @param options options
     * @param options.idfield field that contains the id for this shape
     */
    constructor(options?: object | { idfield?: string; } );
    /**
     * Parses features from the data object and adds it to the layer
     * @deprecated since 2020 (3.0)
     * @param data data object (or its string representation) containing the features data in a specific format
     */
    loadData(data: string | object): this;
    /**
     * Sets the unique identifier for the features
     * @param field unique identifier
     */
    setUniqueField(field: string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {idfield: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * see {@link @int/geotoolkit/map/layers/Vector.Vector#getProperties}
     * @param properties JSON containing the properties to set
     * @param properties.idfield field that contains the id for this shape
     */
    setProperties(properties?: object | { idfield?: string; } ): this;
}
