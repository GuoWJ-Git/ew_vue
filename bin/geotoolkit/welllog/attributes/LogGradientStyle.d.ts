import {LogDataStyle} from './LogDataStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {DiscreteGradientColorProvider} from '../../util/DiscreteGradientColorProvider';
import {Range} from '../../util/Range';
import {Pattern} from '../../attributes/Pattern';
import {ColorProvider} from '../../util/ColorProvider';

/**
 * Defines log gradient fill style. This fillstyle can have a color and a pattern plus data source that can be used to gradient colors.
 * If you need to set the gradient color based on the " Normalization Limits " please refer to setColorRange() method.
 */
export class LogGradientStyle extends LogDataStyle {
    /**
     * Defines log gradient fill style. This fillstyle can have a color and a pattern plus data source that can be used to gradient colors.
     * If you need to set the gradient color based on the " Normalization Limits " please refer to setColorRange() method.
     * @param color Rgba Color or properties object
     * @param color.colorprovider color provider
     * @param color.transparency value for alpha chanel
     * @param color.colorrange color range (min and max value)
     * @param pattern fill pattern
     * @param foregroundcolor Rgba Color
     */
    constructor(color?: string | RgbaColor | object | { colorprovider?: string | DiscreteGradientColorProvider; transparency?: number; colorrange?: Range; } , pattern?: Pattern, foregroundcolor?: string | RgbaColor);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: LogGradientStyle): this;
    /**
     * set color range (min and max value). If you need to set the gradient color based on the " Normalization Limits "  refer to the code in the example while changing normalization limits on the curve.
     * @param range color range (min and max value)
     */
    setColorRange(range: Range): this;
    /**
     * returns color range (min and max value)
     */
    getColorRange(): Range;
    /**
     * Set transparency
     * @param transparency value for alpha chanel
     */
    setTransparency(transparency: number): this;
    /**
     * Returns transparency
     */
    getTransparency(): number;
    /**
     * return color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * set color provider
     * @param colorProvider the color provider
     */
    setColorProvider(colorProvider: ColorProvider): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {colorprovider: DiscreteGradientColorProvider; transparency: number; colorrange: Range} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.colorprovider color provider
     * @param properties.transparency value for alpha chanel
     * @param properties.colorrange color range (min and max value)
     */
    setProperties(properties?: object | { colorprovider?: string | DiscreteGradientColorProvider; transparency?: number; colorrange?: Range; } ): this;
}
