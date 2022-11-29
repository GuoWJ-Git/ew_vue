import {RgbaColor} from './RgbaColor';

/**
 * Specify HSV color, which can be defined as s set of the three color
 * components (Hue, Saturation, Value).
 */
export class HsvColor {
    /**
     * Specify HSV color, which can be defined as s set of the three color
     * components (Hue, Saturation, Value).
     * @param hue hue from 0 to 360
     * @param sat sat from 0 to 1
     * @param val val from 0 to 1
     */
    constructor(hue?: number | RgbaColor, sat?: number, val?: number);
    /**
     * return new color
     */
    static getNewColor(): string;
    /**
     * Sets brightness
     * @param color color
     * @param correctionFactor correction Factor
     */
    static setBrightness(color: RgbaColor, correctionFactor: number): RgbaColor;
    /**
     * Return clone of the color
     */
    clone(): HsvColor;
    /**
     * Return hue
     */
    getHue(): number;
    /**
     * Return saturation
     */
    getSaturation(): number;
    /**
     * Return value
     */
    getValue(): number;
    /**
     * Add delta to saturation.
     * Saturation is between 0 and 1
     * @param delta delta value to be added
     */
    adjustSaturation(delta: number): this;
    /**
     * Add delta to value.
     * Value is between 0 and 1
     * @param delta delta value to be added
     */
    adjustValue(delta: number): this;
    /**
     * Multiply saturation factor.
     * Saturation is between 0 and 1
     * @param factor saturation factor (between 0 - 1)
     */
    adjustSaturationByFactor(factor: number): this;
    /**
     * Multiply value by factor.
     * Value is between 0 and 1
     * @param factor factor to multiply this color by
     */
    adjustValueByFactor(factor: number): this;
    /**
     * Convert current value and saturation to RGBA
     */
    toRgbaColor(): RgbaColor;
    /**
     * Convert color to string
     */
    toRgbaString(): string;
}
