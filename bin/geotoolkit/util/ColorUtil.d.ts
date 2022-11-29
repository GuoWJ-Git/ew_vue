import {RgbaColor} from './RgbaColor';
import {HsvColor} from './HsvColor';

/**
 * An utility class that provides helpful functions to manipulate colors. This class provides functions to parse, edit and convert colors from rgba to hsb.
 * It's especially useful to convert colors in css format to toolkit {@link @int/geotoolkit/util/RgbaColor.RgbaColor}.
 */
export class ColorUtil {
    /**
     * An utility class that provides helpful functions to manipulate colors. This class provides functions to parse, edit and convert colors from rgba to hsb.
     * It's especially useful to convert colors in css format to toolkit {@link @int/geotoolkit/util/RgbaColor.RgbaColor}.
     */
    constructor();
    /**
     * Returns random RGBA color
     * @param alpha transparency chanel from 0 to 1
     * @param pseudo pseudo random
     */
    static getRandomColorRgba(alpha?: number, pseudo?: boolean | number): string;
    /**
     * return random RGB color
     * @param pseudo pseudo random
     */
    static getRandomColorRgb(pseudo?: boolean | number): string;
    /**
     * convert css color {string} to {geotoolkit.util.RgbaColor}
     * @param color color to parse
     */
    static parseColor(color: string | RgbaColor): RgbaColor;
    /**
     * set value for the alpha chanel
     * @param color CSS color
     * @param a alpha component 0 - 255
     */
    static setAlpha(color: string, a: number): string;
    /**
     * Converts legacy MS Access Code to a RGBA color
     * @param accessCode The MS access code to convert to a color
     */
    static parseMSColor(accessCode: number): RgbaColor | any;
    /**
     * converts color to string
     * @param color color to convert
     */
    static colorToString(color: string | RgbaColor | HsvColor): string;
    /**
     * invert color
     * @param color color to parse
     */
    static invertColor(color: string | RgbaColor): string;
}
/**
 * Enum of Known Colors
 */
export enum KnownColors {
    /**
     * Black
     */
    Black = '#212121',
    /**
     * Gray
     */
    Gray = '#bdbdbd',
    /**
     * Grey
     */
    Grey = '#bdbdbd',
    /**
     * Light gray
     */
    LightGray = '#eeeeee',
    /**
     * Light grey
     */
    LightGrey = '#eeeeee',
    /**
     * Dark gray
     */
    DarkGray = '#757575',
    /**
     * Dark grey
     */
    DarkGrey = '#757575',
    /**
     * Orange
     */
    Orange = '#ef6c00',
    /**
     * Light orange
     */
    LightOrange = '#ffe0b2',
    /**
     * Dark orange
     */
    DarkOrange = '#e65100',
    /**
     * Green
     */
    Green = '#7cb342',
    /**
     * Light green
     */
    LightGreen = '#dcedc8',
    /**
     * Dark green
     */
    DarkGreen = '#33691e',
    /**
     * Blue
     */
    Blue = '#2196f3',
    /**
     * Light blue
     */
    LightBlue = '#bbdefb',
    /**
     * Dark blue
     */
    DarkBlue = '#1565c0',
    /**
     * Yellow
     */
    Yellow = '#fdd835',
    /**
     * Light yellow
     */
    LightYellow = '#fff9c4',
    /**
     * Dark yellow
     */
    DarkYellow = '#fbc02d',
    /**
     * Red
     */
    Red = '#e64a19',
    /**
     * Light red
     */
    LightRed = '#ff7043',
    /**
     * Dark red
     */
    DarkRed = '#bf360c',
    /**
     * Indigo
     */
    Indigo = '#4b0082',
    /**
     * Violet
     */
    Violet = '#ee82ee'
}
