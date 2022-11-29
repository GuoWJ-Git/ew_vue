import {GradientStyle, SpreadMethods, GradientUnits} from './GradientStyle';
import {Point} from '../util/Point';
import {ColorProvider} from '../util/ColorProvider';
import {Transformation} from '../util/Transformation';

/**
 * Defines a linear gradient fill style to provide smooth transitions between two or more specified colors.
 */
export class LinearGradientStyle extends GradientStyle {
    /**
     * Defines a linear gradient fill style to provide smooth transitions between two or more specified colors.
     * @param startColor start color in CSS format or JSON with parameters
     * @param startColor.startcolor start color in CSS format
     * @param startColor.endcolor end color in CSS format
     * @param startColor.startpoint start point of gradient in relative form, 0-1 or absolute coordinates
     * @param startColor.endpoint end point of gradient in relative form, 0-1 or absolute coordinates
     * @param startColor.colorprovider colorProvider
     * @param endColor end color in CSS format
     * @param startPoint start point of gradient in relative form, 0-1 or absolute coordinates
     * @param endPoint end point of gradient in relative form, 0-1 or absolute coordinates
     * @param colorProvider colorProvider
     * @param spreadMethod Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
     * @param unitType Type of coordinated used to define gradient
     * @param transformation Gradient transformation
     */
    constructor(startColor?: string | object | { startcolor?: string; endcolor?: string; startpoint?: Point; endpoint?: Point; colorprovider?: ColorProvider; } , endColor?: string, startPoint?: Point, endPoint?: Point, colorProvider?: ColorProvider, spreadMethod?: SpreadMethods | string, unitType?: GradientUnits | string, transformation?: Transformation);
    /**
     * Set start point from 0 to 1
     * @param p start point
     */
    setStartPoint(p: Point): this;
    /**
     * Return start point from 0 to 1
     */
    getStartPoint(): Point;
    /**
     * Set end point from 0 to 1
     * @param p end point
     */
    setEndPoint(p: Point): this;
    /**
     * Return end point from 0 to 1
     */
    getEndPoint(): Point;
    /**
     * Sets start color
     * @param color color to set
     */
    setStartColor(color: string): this;
    /**
     * Returns start color
     */
    getStartColor(): string;
    /**
     * Sets end color
     * @param color color to set in CSS format
     */
    setEndColor(color: string): this;
    /**
     * Returns end color
     */
    getEndColor(): string;
    /**
     * Return type of the style.
     */
    getStyleType(): string;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {startcolor: string; endcolor: string; startpoint: Point; endpoint: Point; colorprovider: ColorProvider} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.startcolor start color in CSS format
     * @param properties.endcolor end color in CSS format
     * @param properties.startpoint start point of gradient in relative form, 0-1 or absolute coordinates
     * @param properties.endpoint end point of gradient in relative form, 0-1 or absolute coordinates
     * @param properties.colorprovider colorProvider
     */
    setProperties(properties: object | { startcolor?: string; endcolor?: string; startpoint?: Point; endpoint?: Point; colorprovider?: ColorProvider; } ): this;
}
