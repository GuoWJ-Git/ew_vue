import {EventDispatcher} from './EventDispatcher';
import {IRasterable} from '../attributes/IRasterable';
import {FillStyle} from '../attributes/FillStyle';
import {RgbaColor} from './RgbaColor';
import {Surface} from '../renderer/Surface';
import {Raster} from '../attributes/Raster';

/**
 * This abstract class is the parent class of all ColorProviders. A colorprovider converts a value to a color based on its configuration. It's generally created by associating some colors to specific values.<br>
 * Then it will interpolate (algorithm depends of the actual implementation) those colors on the fly to find the actual color corresponding to a value.<br>
 * This class also provides a list of builtin color maps {@link @int/geotoolkit/util/ColorProvider.KnownScales}.<br>
 * All the color providers inherit from this class, for examples please refer to:<br>
 *     <br>
 *  {@link @int/geotoolkit/util/DefaultColorProvider.DefaultColorProvider} ; <br>
 *  {@link @int/geotoolkit/util/DiscreteGradientColorProvider.DiscreteGradientColorProvider} ; <br>
 *  {@link @int/geotoolkit/util/LogColorProvider.LogColorProvider} ; <br>
 *  {@link @int/geotoolkit/util/RangeColorProvider.RangeColorProvider} ; <br>
 */
export class ColorProvider extends EventDispatcher implements IRasterable {
    /**
     * This abstract class is the parent class of all ColorProviders. A colorprovider converts a value to a color based on its configuration. It's generally created by associating some colors to specific values.<br>
     * Then it will interpolate (algorithm depends of the actual implementation) those colors on the fly to find the actual color corresponding to a value.<br>
     * This class also provides a list of builtin color maps {@link @int/geotoolkit/util/ColorProvider.KnownScales}.<br>
     * All the color providers inherit from this class, for examples please refer to:<br>
     *     <br>
     *  {@link @int/geotoolkit/util/DefaultColorProvider.DefaultColorProvider} ; <br>
     *  {@link @int/geotoolkit/util/DiscreteGradientColorProvider.DiscreteGradientColorProvider} ; <br>
     *  {@link @int/geotoolkit/util/LogColorProvider.LogColorProvider} ; <br>
     *  {@link @int/geotoolkit/util/RangeColorProvider.RangeColorProvider} ; <br>
     */
    constructor();
    /**
     * Copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ColorProvider): this;
    /**
     * Return ColorProvider constructor from the object class name or type.
     * @param objectType ColorProvider class name
     */
    static getColorProviderType(objectType?: string): Function | any;
    /**
     * Returns known color value/s
     * @param colorName color name, if not specified then returns list of known colors
     */
    getNamedColor(colorName?: string | KnownColors): {name: string, value: (object | string | FillStyle)}[];
    /**
     * Set color value
     * @example
     * ```javascript
     * import {KnownColors} from '@int/geotoolkit/util/ColorProvider';
     * colorProvider.setNamedColor(KnownColors.NaN, { // set color for NaN values
     *   'title': 'absent', // title to use when displaying, e.g. by ColorBar shape
     *   'value': 'black' // color to use for NaNs
     * });
     * ```
     * @example
     * ```javascript
     * // use 'red' color for values greater than maxValue (default '+∞' title is used)
     * colorProvider.setNamedColor(KnownColors.PositiveInfinity, 'red');
     * ```
     * @param colorName color name
     * @param colorValue color or title/value settings object
     */
    setNamedColor(colorName: string | KnownColors, colorValue: object | string | FillStyle): this;
    /**
     * Return color for the current value
     * @param value value
     */
    getColor(value: number): RgbaColor | any;
    /**
     * Return list of used Stop Points
     */
    getStopPoints(): object[];
    /**
     * Return min
     */
    getMinValue(): number;
    /**
     * Return max
     */
    getMaxValue(): number;
    /**
     * invalidate the color provider and fire an event to the visuals
     */
    invalidate(): void;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param force true if parent should be invalidated immediately
     */
    setNotification(enable: boolean, force?: boolean): this;
    /**
     * Return state of notification
     */
    isNotificationEnabled(): boolean;
    /**
     * set properties
     * @param properties properties
     */
    setProperties(properties: object): this;
    /**
     * get properties
     */
    getProperties(): object | any;
    /**
     * returns surface that represents color map
     * @param width The image width
     * @param height The image height
     * @param isVertical True if image is oriented vertically
     */
    exportToImage(width: number, height: number, isVertical: boolean): Surface;
    /**
     * Returns a new instance of geotoolkit.attributes.Raster
     * @param xMin x Min position to get color
     * @param yMin y Min position to get color
     * @param xMax x Max position to get color
     * @param yMax y Max position to get color
     */
    getRaster(xMin?: number, yMin?: number, xMax?: number, yMax?: number): Raster;
}
/**
 * Enum of known Named Colors
 */
export enum KnownColors {
    /**
     * NaN
     */
    NaN = 'NaN',
    /**
     * NegativeInfinity
     */
    NegativeInfinity = 'NegativeInfinity',
    /**
     * PositiveInfinity
     */
    PositiveInfinity = 'PositiveInfinity'
}
/**
 * Enum of known Scales
 */
export enum KnownScales {
    /**
     * Autumn
     */
    Autumn = 'autumn',
    /**
     * Blue to Red
     */
    BlueToRed = 'bluetored',
    /**
     * Cool
     */
    Cool = 'cool',
    /**
     * Copper
     */
    Copper = 'copper',
    /**
     * Dark body
     */
    DarkBody = 'darkbody',
    /**
     * Flag
     */
    Flag = 'flag',
    /**
     * Gray
     */
    Gray = 'gray',
    /**
     * Hot
     */
    Hot = 'hot',
    /**
     * HSV
     */
    HSV = 'hsv',
    /**
     * Orange
     */
    Orange = 'orange',
    /**
     * Rainbow
     */
    Rainbow = 'rainbow',
    /**
     * Spring
     */
    Spring = 'spring',
    /**
     * Summer
     */
    Summer = 'summer',
    /**
     * Winter
     */
    Winter = 'winter',
    /**
     * Bone
     */
    Bone = 'bone',
    /**
     * Binary
     */
    Binary = 'binary',
    /**
     * Pink
     */
    Pink = 'pink',
    /**
     * Parula
     */
    Parula = 'parula'
}
/**
 * Style Events enumerator
 */
export enum Events {
    /**
     * Invalidate
     */
    Invalidate = 'Invalidate'
}
