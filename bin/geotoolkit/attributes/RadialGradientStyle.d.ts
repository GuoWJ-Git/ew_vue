import {GradientStyle, GradientUnits} from './GradientStyle';
import {Point} from '../util/Point';
import {Transformation} from '../util/Transformation';

/**
 * Defines a radial gradient fill style, which represents a gradient of colors along of cone between two circles.<br>
 * Radial gradients are defined with relative numbers from 0-1 describing the inner and outer circles. radius values are percentages of the shape's radius
 */
export class RadialGradientStyle extends GradientStyle {
    /**
     * Defines a radial gradient fill style, which represents a gradient of colors along of cone between two circles.<br>
     * Radial gradients are defined with relative numbers from 0-1 describing the inner and outer circles. radius values are percentages of the shape's radius
     * @param startColor start color in CSS format or a JSON with properties
     * @param startColor.startcolor start color in CSS format
     * @param startColor.endcolor end color in CSS format
     * @param startColor.innercenter centerpoint of inner circle of gradient in relative form, 0-1 or absolute coordinates
     * @param startColor.outercenter centerpoint of outer circle of gradient in relative form, 0-1 or absolute coordinates
     * @param startColor.innerradius radius of inner circle in relative form, 0-1 or absolute coordinates
     * @param startColor.outerradius radius of outer circle of gradient from 0-1 or absolute coordinates
     * @param endColor end color in CSS format
     * @param innerCenter centerpoint of inner circle of gradient in relative form, 0-1 or absolute coordinates
     * @param outerCenter centerpoint of outer circle of gradient in relative form, 0-1 or absolute coordinates
     * @param innerRadius radius of inner circle in relative form, 0-1 or absolute coordinates
     * @param outerRadius radius of outer circle of gradient from 0-1 or absolute coordinates
     * @param transformation Gradient transformation
     * @param unitType Type of coordinated used to define gradient
     */
    constructor(startColor?: object | { startcolor?: string; endcolor?: string; innercenter?: Point; outercenter?: Point; innerradius?: number; outerradius?: number; }  | string, endColor?: string, innerCenter?: Point, outerCenter?: Point, innerRadius?: number, outerRadius?: number, transformation?: Transformation, unitType?: GradientUnits | string);
    /**
     * Set inner centerpoint in relative terms
     * @param p point defining center of inner circle
     */
    setInnerCenter(p: Point): this;
    /**
     * Get the center of the inner circle
     */
    getInnerCenter(): Point;
    /**
     * Set end point from 0 to 1
     * @param p end point
     */
    setOuterCenter(p: Point): this;
    /**
     * Return start center in relative coordinates from 0 to 1
     */
    getOuterCenter(): Point;
    /**
     * Set end point from 0 to 1
     * @param r radius of outer circle of gradient from 0-1
     */
    setOuterRadius(r: number): this;
    /**
     * Return start point from 0 to 1
     */
    getOuterRadius(): number;
    /**
     * @param r Radius of inner circle
     */
    setInnerRadius(r: number): this;
    /**
     */
    getInnerRadius(): number;
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
    getProperties(): {startcolor: string; endcolor: string; innercenter: Point; outercenter: Point; innerradius: number; outerradius: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.startcolor start color in CSS format
     * @param properties.endcolor end color in CSS format
     * @param properties.innercenter centerpoint of inner circle of gradient in relative form, 0-1 or absolute coordinates
     * @param properties.outercenter centerpoint of outer circle of gradient in relative form, 0-1 or absolute coordinates
     * @param properties.innerradius radius of inner circle in relative form, 0-1 or absolute coordinates
     * @param properties.outerradius radius of outer circle of gradient from 0-1 or absolute coordinates
     */
    setProperties(properties: object | { startcolor?: string; endcolor?: string; innercenter?: Point; outercenter?: Point; innerradius?: number; outerradius?: number; } ): this;
}
