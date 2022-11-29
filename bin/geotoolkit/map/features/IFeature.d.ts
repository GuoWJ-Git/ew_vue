/**
 * The map feature interface IFeature shows the basic properties that any feature should have.
 */
export abstract class IFeature {
    /**
     * Gets ID <br>
     * Id is a unique identifier of the feature, usually one of the attributes. It is used to simplify settings for the user, as a default 'annotation' (text info) for the feature.
     */
    abstract getId(): number | string;
    /**
     * Gets attributes (non-spatial properties) <br>
     * Attributes are some additional (non-spatial) properties. These attributes can be written as a text next to the feature itself for more information for the user.<br>
     */
    abstract getAttributes(): any;
    /**
     * Gets geometry. Geometry is the place, where the feature should be rendered. It is point coordinates for a point feature or a points array for polygons and polylines.
     * @param isMapCS Map coordinate system flag
     */
    abstract getGeometry(isMapCS?: boolean): any;
}
