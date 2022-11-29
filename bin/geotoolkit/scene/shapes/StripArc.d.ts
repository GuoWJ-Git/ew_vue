import {ScaledShape} from './ScaledShape';
import {Rect} from '../../util/Rect';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Defines the StripArc class, which is a modified AnnulusArc to allow "height" for pseudo-3d pie chart cap drawing
 */
export class StripArc extends ScaledShape {
    /**
     * Defines the StripArc class, which is a modified AnnulusArc to allow "height" for pseudo-3d pie chart cap drawing
     * @param x x coordinate of the center OR options to specify ellipse
     * @param x.x x coordinate of the center
     * @param x.y y coordinate of the center
     * @param x.innerradius innerRadius
     * @param x.outerradius outerRadius
     * @param x.startarc start arc
     * @param x.endarc end arc
     * @param x.height height of the arc when drawn with a "depth"
     * @param x.bounds bounds
     * @param y y coordinate of the center
     * @param innerRadius innerRadius
     * @param outerRadius outerRadius
     * @param startArc start arc
     * @param endArc end arc
     * @param linestyle the linestyle
     * @param fillstyle the fillstyle
     * @param height height of the arc when drawn with a "depth"
     */
    constructor(x?: number | object | { x?: number; y?: number; innerradius?: number; outerradius?: number; startarc?: number; endarc?: number; height?: number; bounds?: Rect; } , y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object, height?: number);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: StripArc): this;
    /**
     * Sets data for the arc
     * @param x x coordinate of the center OR options to specify ellipse { x : {number}, y : {number}, radius :
     *            {number}, startArc : {number}, endArc: {number}, height: {number} }
     * @param y y coordinate of the center
     * @param innerRadius innerRadius
     * @param outerRadius outerRadius
     * @param startArc start arc
     * @param endArc end arc
     * @param height height of the arc when drawn with a "depth"
     */
    setData(x?: number | object, y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number, height?: number): void;
    /**
     * Return bounds of strip arc, these bounds will include entire arc.
     */
    getBounds(): Rect;
    /**
     * Returns properties
     */
    getProperties(): {x: number; y: number; innerradius: number; outerradius: number; startarc: number; endarc: number; height: number; bounds: Rect} | any;
    /**
     * Set properties
     * @param properties the properties to set
     * @param properties.x x coordinate of the center
     * @param properties.y y coordinate of the center
     * @param properties.innerradius innerRadius
     * @param properties.outerradius outerRadius
     * @param properties.startarc start arc
     * @param properties.endarc end arc
     * @param properties.height height of the arc when drawn with a "depth"
     * @param properties.bounds bounds
     */
    setProperties(properties: object | { x?: number; y?: number; innerradius?: number; outerradius?: number; startarc?: number; endarc?: number; height?: number; bounds?: Rect; } ): this;
}
