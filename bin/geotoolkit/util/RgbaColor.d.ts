/**
 * Specify RGBA color, which can be defined as s set of the four color
 * components (Red, Green, Blue, Alpha). The each component must be from 0 to
 * 255.
 */
export class RgbaColor {
    /**
     * Specify RGBA color, which can be defined as s set of the four color
     * components (Red, Green, Blue, Alpha). The each component must be from 0 to
     * 255.
     * @param red red component from 0 to 255 OR ready-to-use color (string, rgbacolor...)
     * @param green green component from 0 to 255
     * @param blue blue component from 0 to 255
     * @param alpha alpha component from 0 to 255
     */
    constructor(red?: number | string | RgbaColor, green?: number, blue?: number, alpha?: number);
    /**
     * Return clone of the color
     */
    clone(): RgbaColor;
    /**
     * set color value
     * @param red red component from 0 to 255 or CSS color as a string
     * @param green green component from 0 to 255
     * @param blue blue component from 0 to 255
     * @param alpha alpha component from 0 to 255
     */
    setColor(red?: number | string, green?: number, blue?: number, alpha?: number): this;
    /**
     * Sets the red component to the given value.<br>
     * This function expects the red component to be in range[0-255].<br>
     * @param val value of the red component
     */
    setRed(val: number): this;
    /**
     * Sets the blue component to the given value.<br>
     * This function expects the blue component to be in range[0-255].<br>
     * @param val value of the blue component
     */
    setBlue(val: number): this;
    /**
     * Sets the green component to the given value.<br>
     * This function expects the green component to be in range[0-255].<br>
     * @param val value of the green component
     */
    setGreen(val: number): this;
    /**
     * Sets the alpha component to the given value.<br>
     * This function expects the alpha component to be in range[0-1].<br>
     * @param val value of the alpha component
     */
    setAlpha(val: number): this;
    /**
     * Return the red component value.<br>
     * The value should be in range[0-255]
     */
    getRed(): number;
    /**
     * Return the green component value.<br>
     * The value should be in range[0-255]
     */
    getGreen(): number;
    /**
     * Return the blue component value.<br>
     * The value should be in range[0-255]
     */
    getBlue(): number;
    /**
     * Return the alpha component value.<br>
     * The value should be in range[0-255]
     */
    getAlpha(): number;
    /**
     * Convert color to string
     */
    toRgbaString(): string;
    /**
     * Convert color to string
     */
    toCSS(): string;
    /**
     * Create or get RGBA color from object
     * @param object object can be in format of constructor of
     * geotoolkit.util.RgbaColor
     */
    static fromObject(object: object | RgbaColor): RgbaColor | any;
    /**
     * Convert RGBA color to RGB
     * @param background Conversion will be based on this background color
     */
    toRgb(background?: string | RgbaColor): string;
    /**
     * Convert RGBA color to hexadecimal
     * @param a Include alpha channel in hexadecimal
     */
    toHex(a?: boolean): string;
}
