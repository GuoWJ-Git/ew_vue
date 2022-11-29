import {Node} from '../../../scene/Node';
import {LineStyle} from '../../../attributes/LineStyle';
import {RgbaColor} from '../../../util/RgbaColor';
import {ITrack} from '../../ITrack';

/**
 * Define an abstract correlation to displayed in the correlation track
 */
export class Correlation extends Node {
    /**
     * Define an abstract correlation to displayed in the correlation track
     * @param options options
     * @param options.linestyle applied style
     */
    constructor(options?: object | { linestyle?: LineStyle | object | string; } );
    /**
     * Sets correlation marker style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Returns line style of correlation.
     */
    getLineStyle(): LineStyle;
    /**
     * Sets left and right well
     * @param leftWell left well
     * @param rightWell right well
     */
    setWells(leftWell: ITrack, rightWell: ITrack): this;
    /**
     * Return left well
     */
    getLeftWell(): ITrack | any;
    /**
     * Return right well
     */
    getRightWell(): ITrack | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {linestyle: LineStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.linestyle line style
     */
    setProperties(properties: object | { linestyle?: LineStyle | object | string; } ): this;
}
