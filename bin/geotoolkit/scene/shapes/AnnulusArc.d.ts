import {ScaledShape} from './ScaledShape';
import {Rect} from '../../util/Rect';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Defines AnnulusArc node
 */
export class AnnulusArc extends ScaledShape {
    /**
     * Defines AnnulusArc node
     * @param x x coordinate of the center
     * @param x.x x coordinate of the center
     * @param x.y y coordinate of the center
     * @param x.innerradius innerRadius
     * @param x.outerradius outerRadius
     * @param x.startarc start arc
     * @param x.endarc end arc
     * @param x.sweepangle sweep angle of the arc
     * @param x.bounds shape bounds
     * @param y y coordinate of the center
     * @param innerRadius innerRadius
     * @param outerRadius outerRadius
     * @param startArc start arc
     * @param endArc end arc
     * @param visible visibility of node
     * @param linestyle style applied on outline
     * @param fillstyle style applied on fill
     */
    constructor(x?: number | object | { x?: number; y?: number; innerradius?: number; outerradius?: number; startarc?: number; endarc?: number; sweepangle?: number; bounds?: Rect | object; } , y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number, visible?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: AnnulusArc): this;
    /**
     * Creates arc
     * @param x x coordinate of the center OR options to specify ellipse { x : {number}, y : {number}, radius :
     *        {number}, startArc : {number}, endArc: {number} }
     * @param x.x x coordinate of the center
     * @param x.y y coordinate of the center
     * @param x.innerradius innerRadius
     * @param x.outerradius outerRadius
     * @param x.startarc start arc
     * @param x.endarc end arc
     * @param y y coordinate of the center
     * @param innerRadius innerRadius
     * @param outerRadius outerRadius
     * @param startArc start arc
     * @param endArc end arc
     */
    setAnnulusArc(x?: number | object | { x?: object; y?: number; innerradius?: number; outerradius?: number; startarc?: number; endarc?: number; } , y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number): this;
    /**
     * Return bounds of annulus arc, these bounds will include entire arc.
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {x: number; y: number; innerRadius: number; outerRadius: number; startArc: number; endArc: number; bounds: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.x x coordinate of the center
     * @param properties.y y coordinate of the center
     * @param properties.innerradius size of the innerradius
     * @param properties.outerradius size of the outerradius
     * @param properties.startarc angle where the arc starts
     * @param properties.endarc angle where the arc ends
     * @param properties.sweepangle Sweep angle of the arc
     * @param properties.bounds shape bounds
     */
    setProperties(properties: object | { x?: number; y?: number; innerradius?: number; outerradius?: number; startarc?: number; endarc?: number; sweepangle?: number; bounds?: Rect | object; } ): this;
}
