import {Node} from '../../../scene/Node';
import {Text} from '../../../scene/shapes/Text';
import {IGeometryToShape} from '../adapters/IGeometryToShape';
import {IGeometryToText} from '../adapters/IGeometryToText';
import {IGetAnnotation} from '../strategies/IGetAnnotation';
import {AbstractFeature} from '../AbstractFeature';

/**
 * Manages {@link @int/geotoolkit/map/features/IFeature.IFeature}-to-{@link @int/geotoolkit/scene/Node.Node} logic used by
 * {@link @int/geotoolkit/map/layers/Template.Template} class or its inheritants
 * @example
 * ```javascript
 * function myShapeCallback(feature, shape) {
 *     if(feature.getId() === 'Houston') shape.setFillStyle({ 'color': 'red' });
 * };
 * ```
 * @example
 * ```javascript
 * import {BaseTemplate} from '@int/geotoolkit/map/features/templates/BaseTemplate';
 * import {Text} from '@int/geotoolkit/scene/shapes/Text';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * const template = new BaseTemplate({
 *      ...,
 *      'textshape': new Text({
 *          'textstyle': new TextStyle('blue'), // style for annotation
 *          'height': 12
 *      }),
 *      'textSizeInfo': {   // change annotation size dynamically
 *          'field': 'pop2015', // base size on population field
 *          'minDataValue': 500, // population varies from 500 to 3000
 *          'maxDataValue': 3000,
 *          'minSize': 10, // annotation size varies from 10px (for features with pop2015 <= 500) to 15px (pop2015 >= 3000)
 *          'maxSize': 15 // e.g. if pop2015 field value is 2000, it's annotation size is 13px (linear interpolation)
 *      }
 * });
 * ```
 */
export class BaseTemplate {
    /**
     * Manages {@link @int/geotoolkit/map/features/IFeature.IFeature}-to-{@link @int/geotoolkit/scene/Node.Node} logic used by
     * {@link @int/geotoolkit/map/layers/Template.Template} class or its inheritants
     * @param options options
     * @param options.shape carnac shape to visualize a feature instance
     * @param options.textshape text shape to visualize a feature annotations
     * @param options.geometrytoshape feature geometry to carnac shape state adapter
     * @param options.geometrytotext feature geometry to text shape state adapter
     * @param options.shapecallback callback to modify template's shape parameter(s) dynamically (see example below)
     * @param options.textstrategy strategy for getting annotation expression (overrides layer strategy if set)
     * @param options.textsizeinfo options for dynamically changing the annotation size basing on some attribute value
     * @param options.textsizeinfo.field feature attribute field name that specifies the annotation size
     * @param options.textsizeinfo.minDataValue attribute value minimum limit
     * @param options.textsizeinfo.maxDataValue attribute value maximum limit
     * @param options.textsizeinfo.minSize annotation size (in px) for minDataValue attribute. The size is calculated dynamically from the attribute value using linear interpolation between minSize and maxSize values.
     * @param options.textsizeinfo.maxSize annotation size (in px) for maxDataValue attribute. The size is calculated dynamically from the attribute value using linear interpolation between minSize and maxSize values.
     */
    constructor(options?: object | { shape?: Node; textshape?: Text; geometrytoshape?: IGeometryToShape; geometrytotext?: IGeometryToText; shapecallback?: Function; textstrategy?: IGetAnnotation; textsizeinfo?: object | { field?: string; minDataValue?: number; maxDataValue?: number; minSize?: number; maxSize?: number; } ; } );
    /**
     * Gets template options
     * @deprecated since 2021.1 (3.3) use getProperties() instead
     */
    getOptions(): object | any;
    /**
     * Gets template options
     */
    getProperties(): {shape: Node; textshape: Text; geometrytoshape: IGeometryToShape; geometrytotext: IGeometryToText} | any;
    /**
     * Sets template options. For the new options to take effect on layer, the layer has to be invalidated.
     * @deprecated since 2021.1 (3.3) use setProperties() instead
     * @param options options
     */
    setOptions(options?: any): this;
    /**
     * Sets template options. For the new options to take effect on layer, the layer has to be invalidated.
     * @param properties properties
     * @param properties.shape carnac shape associated with a feature
     * @param properties.geometrytoshape feature geometry-to-shape geometry adapter
     * @param properties.geometrytotext feature geometry-to-text anchor position adapter
     * @param properties.textstrategy strategy for getting annotation expression
     * @param properties.textsizeinfo options for dynamically changing the annotation size basing on some attribute value
     * @param properties.textsizeinfo.field feature attribute field name that specifies the annotation size
     * @param properties.textsizeinfo.minDataValue attribute value minimum limit
     * @param properties.textsizeinfo.maxDataValue attribute value maximum limit
     * @param properties.textsizeinfo.minSize annotation size (in px) for minDataValue attribute. The size is calculated dynamically from the attribute value using linear interpolation between minSize and maxSize values.
     * @param properties.textsizeinfo.maxSize annotation size (in px) for maxDataValue attribute. The size is calculated dynamically from the attribute value using linear interpolation between minSize and maxSize values.
     * @param properties.shapecallback shape callback function
     */
    setProperties(properties?: object | { shape?: Node; geometrytoshape?: IGeometryToShape; geometrytotext?: IGeometryToText; textstrategy?: IGetAnnotation; textsizeinfo?: object | { field?: string; minDataValue?: number; maxDataValue?: number; minSize?: number; maxSize?: number; } ; shapecallback?: Function; } ): this;
    /**
     * Sets callback function
     * @param callback callback function
     */
    setShapeCallback(callback: Function): this;
    /**
     * Gets {@link @int/geotoolkit/scene/Node.Node} carnac shape associated with a feature
     */
    getShape(): Node;
    /**
     * Gets feature_geometry-to-shape_geometry adapter
     */
    getGeometryToShape(): IGeometryToShape;
    /**
     * Gets feature_geometry-to-text_anchor_position adapter
     */
    getGeometryToText(): IGeometryToText;
    /**
     * Gets {geotoolkit.scene.shapes.Text} text shape for annotations
     * @param feature feature to annotate
     */
    getTextShape(feature?: AbstractFeature): Text;
    /**
     * Gets optional shape callback
     */
    getShapeCallback(): Function | null;
    /**
     * Returns strategy for getting annotation expression (if set)
     */
    getTextStrategy(): IGetAnnotation;
}
