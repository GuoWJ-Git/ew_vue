import {FillStyle} from './FillStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Transformation} from '../util/Transformation';
import {Pattern} from './Pattern';

/**
 * Defines an abstract gradient fill style. It contains information about gradient stops and colors.
 */
export class GradientStyle extends FillStyle {
    /**
     * Defines an abstract gradient fill style. It contains information about gradient stops and colors.
     * @param color Color of FillStyle (not used in Gradient) or JSON with parameters
     * @param color.stoppoints Array with stop points. Each object should contain the position and the color.
     * @param color.spreadmethod Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
     * @param color.unittype Type of coordinated used to define gradient
     * @param color.transformation Gradient transformation
     * @param pattern The background pattern (not used in Gradient)
     * @param foreground The foreground color of the pattern (not used in Gradient)
     * @param evenoddmode The flag indicating whether even-odd fill mode is to be used.
     * @param spreadMethod Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
     * @param unitType Type of coordinated used to define gradient
     * @param transformation Gradient transformation
     */
    constructor(color?: RgbaColor | string | object | { stoppoints?: object[]; spreadmethod?: SpreadMethods | string; unittype?: GradientUnits | string; transformation?: Transformation; } , pattern?: Pattern, foreground?: string | RgbaColor, evenoddmode?: boolean, spreadMethod?: SpreadMethods | string, unitType?: GradientUnits | string, transformation?: Transformation);
    /**
     * Returns the transformation set on the gradient
     */
    getTransformation(): Transformation;
    /**
     * Sets transformation for the gradient
     * @param transform The new gradient transformation
     */
    setTransformation(transform: Transformation): this;
    /**
     */
    getSpreadMethod(): SpreadMethods | string;
    /**
     * Changes spread method for the gradient
     * @param sMethod Spread method to apply to the gradient
     */
    setSpreadMethod(sMethod: SpreadMethods | string): this;
    /**
     * Sets unit type for the gradient
     * @param u Unit type
     */
    setUnits(u: GradientUnits | string): this;
    /**
     * Gets the type of units
     */
    getUnits(): GradientUnits | string;
    /**
     * Return the number of defined gradient stop points
     */
    getStopPointsCount(): number;
    /**
     * Add a new stop point at a given position and color.
     * @param position position of the stop point, if in relative coordinates from 0 to 1
     * @param color color in CSS form for specified stop point
     */
    addStopPoint(position: number, color: string): this;
    /**
     * Removes stop point at index.
     * @param index index of the stop point
     */
    removeStopPoint(index: number): this;
    /**
     * Return color at a stop point by index.
     * @param index index of a stop point
     */
    getStopPointColor(index: number): string | any;
    /**
     * Sets color to a stop point by index.
     * @param index index of a stop point
     * @param color Color to set to the stop point
     */
    setStopPointColor(index: number, color: string | RgbaColor): this;
    /**
     * Return stop point position
     * @param index index of stop point
     */
    getStopPointPosition(index: number): number | any;
    /**
     * Clear all stop points
     */
    clearStopPoints(): this;
    /**
     * Returns style type
     */
    getStyleType(): string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {stoppoints: object[]; spreadmethod: SpreadMethods | string; unittype: GradientUnits | string; transformation: Transformation} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.stoppoints Array with stop points. Each object should contain the position and the color.
     * @param properties.spreadmethod Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
     * @param properties.unittype Type of coordinated used to define gradient
     * @param properties.transformation Gradient transformation
     */
    setProperties(properties?: object | { stoppoints?: object[]; spreadmethod?: SpreadMethods | string; unittype?: GradientUnits | string; transformation?: Transformation; } ): this;
    /**
     * Removes points that are identical, leaving only one
     */
    cleanDuplicatePoints(): this;
}
/**
 * Enum for gradient Spread methods
 */
export enum SpreadMethods {
    /**
     * Reflect
     */
    Reflect = 'reflect',
    /**
     * Repeat
     */
    Repeat = 'repeat',
    /**
     * Pad
     */
    Pad = 'pad'
}
/**
 * Enum for gradient units
 */
export enum GradientUnits {
    /**
     * Absolute Coordinates
     */
    AbsoluteCoordinates = 'absoluteCoordinates',
    /**
     * Object Bounding Box
     */
    ObjectBoundingBox = 'objectBoundingBox',
    /**
     * User Space On Use
     */
    UserSpaceOnUse = 'userSpaceOnUse'
}
