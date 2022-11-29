import {Pattern} from './Pattern';
import {Group} from '../scene/Group';
import {Transformation} from '../util/Transformation';

/**
 * Defines pattern as a collection of shapes
 * @deprecated since 2021.1 (3.3) use geotoolkit.attributes.PatternFactory.getInstance().createPattern instead
 */
export class GeometryPattern extends Pattern {
    /**
     * Defines pattern as a collection of shapes
     * @param options The image patterns options
     * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
     * @param options.model A geometry to draw the pattern from
     * @param options.scalable Flag that sets scalability of the pattern
     * coordinates, or relative to the shape it is filling
     */
    constructor(options?: object | { model?: Group; scalable?: boolean; } );
    /**
     * Makes a pattern from the image
     * @param context 2d rendering context from canvas
     * @param repetition style of repetition
     * @param foregroundColor of the pattern
     * @param transform Current transformation
     */
    getPattern(context: CanvasRenderingContext2D, repetition: string, foregroundColor?: string, transform?: Transformation): CanvasPattern;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {model: Group; scalable: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.model A geometry to draw the pattern from
     * @param properties.scalable Flag that sets scalability of the pattern
     */
    setProperties(properties: object | { model?: Group; scalable?: boolean; } ): this;
}
