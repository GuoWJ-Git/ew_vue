import {RgbaColor} from '../../util/RgbaColor';
import {FillStyle} from '../../attributes/FillStyle';
import {LinearGradientStyle} from '../../attributes/LinearGradientStyle';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Defines helper methods for component nodes to work with colored styles
 */
export class StyleUtils {
    /**
     * Defines helper methods for component nodes to work with colored styles
     */
    constructor();
    /**
     * Gets average gray color
     * @param srcColor input RGBA-color
     */
    static getAverageGrayColor(srcColor: RgbaColor): RgbaColor;
    /**
     * Gets average gray fill style
     * @param srcFillStyle input fill style
     */
    static getGrayScaleFillStyle(srcFillStyle: FillStyle | LinearGradientStyle): FillStyle | null;
    /**
     * Gets average gray line style
     * @param srcLineStyle input line style
     */
    static getGrayScaleLineStyle(srcLineStyle: LineStyle): LineStyle | null;
}
