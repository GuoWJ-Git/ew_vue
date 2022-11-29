import {RectangularShape} from './RectangularShape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Defines ellipse node which is an elongated circle defined by a bounding frame.
 */
export class Ellipse extends RectangularShape {
    /**
     * Defines ellipse node which is an elongated circle defined by a bounding frame.
     * @param centerX x coordinate of the center or properties object
     * @param centerX.centerx x coordinate of the center
     * @param centerX.centery y coordinate of the center
     * @param centerX.radiusx radius along the x axis
     * @param centerX.radiusy radius along the y axis
     * @param centerX.visible visibility
     * @param centerX.linestyle style applied on outline
     * @param centerX.fillstyle style applied on fill
     * @param centerY y coordinate of the center
     * @param radiusX radius along the x axis
     * @param radiusY radius along the y axis
     * @param visible visibility
     * @param linestyle style applied on outline
     * @param fillstyle style applied on fill
     */
    constructor(centerX?: number | object | { centerx?: number; centery?: number; radiusx?: number; radiusy?: number; visible?: boolean; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } , centerY?: number, radiusX?: number, radiusY?: number, visible?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * Creates ellipse
     * @param x x coordinate of the center OR options to specify ellipse { x : {number}, y : {number}, radiusX :
     *        {number}, radiusY : {number} }
     * @param y y coordinate of the center
     * @param radiusX radius along the x axis
     * @param radiusY radius along the y axis
     */
    setEllipse(x?: number | object, y?: number, radiusX?: number, radiusY?: number): this;
}
