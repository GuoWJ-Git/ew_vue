import {Style} from './Style';
import {GraphicsPath} from '../renderer/GraphicsPath';

/**
 * Defines style to be used as model clipping style.
 */
export class ClipStyle extends Style {
    /**
     * Defines style to be used as model clipping style.
     * @param geometry clipping geometry or options object
     * @param geometry.geometry clipping geometry
     * @param geometry.evenodd true if evenodd mode is on ('nonzero' mode otherwise)
     * @param evenodd true if evenodd mode is on ('nonzero' mode otherwise)
     */
    constructor(geometry?: GraphicsPath | object | { geometry?: GraphicsPath; evenodd?: boolean; } , evenodd?: boolean);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ClipStyle): this;
    /**
     * Sets clipping geometry
     * @param geometry region or area
     */
    setGeometry(geometry: GraphicsPath): this;
    /**
     * Gets clipping geometry
     */
    getGeometry(): GraphicsPath;
    /**
     * Sets evenodd clipping mode
     * @param bool true if evenodd mode is on
     */
    setEvenOdd(bool: boolean): this;
    /**
     * Returns true if evenodd clipping mode is on
     */
    getEvenOdd(): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {geometry: GraphicsPath; evenodd: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.geometry clipping geometry
     * @param properties.evenodd true if evenodd mode is on ('nonzero' mode otherwise)
     */
    setProperties(properties: object | { geometry?: GraphicsPath; evenodd?: boolean; } ): this;
    /**
     * Create or get clipping style from object
     * @param object object can be in format of constructor ofgeotoolkit.attributes.ClipStyle
     */
    static fromObject(object?: object | ClipStyle): ClipStyle | null;
}
