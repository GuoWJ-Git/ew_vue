import {RgbaColor} from './RgbaColor';

/**
 * Specify HLS color, which can be defined as a set of the three color components (Hue, Luminosity and Saturation). It provides several functions to manipulate
 * colors based on (HLS) as well as to convert colors to {@link @int/geotoolkit/util/RgbaColor.RgbaColor}
 */
export class HlsColor {
    /**
     * Specify HLS color, which can be defined as a set of the three color components (Hue, Luminosity and Saturation). It provides several functions to manipulate
     * colors based on (HLS) as well as to convert colors to {@link @int/geotoolkit/util/RgbaColor.RgbaColor}
     * @param hue RGBA color between 0 - 360
     * @param luminosity between 0 - 1
     * @param saturation between 0 - 1
     */
    constructor(hue: number, luminosity: number, saturation: number);
    /**
     * Return hue
     */
    getHue(): number;
    /**
     * Return saturation
     */
    getSaturation(): number;
    /**
     * Return luminosity
     */
    getLuminosity(): number;
    /**
     * Convert color from HLS to RGBA
     */
    toRgbaColor(): RgbaColor;
    /**
     * Make the color lighter
     * @param percLighter percentage to lighten the color
     */
    lighter(percLighter: number): RgbaColor;
    /**
     * Make the color darker
     * @param percDarker percentage to make the color darker
     */
    darker(percDarker: number): RgbaColor;
}
