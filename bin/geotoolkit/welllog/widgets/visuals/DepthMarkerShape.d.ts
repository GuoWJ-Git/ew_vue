import {ScaledShape} from '../../../scene/shapes/ScaledShape';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {TextStyle} from '../../../attributes/TextStyle';
import {Format} from '../../../util/Format';
import {LogTrackContainer} from './LogTrackContainer';
import {RgbaColor} from '../../../util/RgbaColor';
import {Rect} from '../../../util/Rect';

/**
 * This class is used internally in WellLogWidget to show selected depths.
 */
export class DepthMarkerShape extends ScaledShape {
    /**
     * This class is used internally in WellLogWidget to show selected depths.
     * @param options shape options
     * @param options.linestyle style applied on outline
     * @param options.fillstyle style applied on fill
     * @param options.textstyle style applied on text
     * @param options.showdepth show depths
     * @param options.showlabel show labels
     * @param options.showinterpolatedvalues display symbol for interpolated values
     * @param options.datetimeformat date time format in case if track container scale unit belongs to 'time'
     * @param options.depthformater deprecated (since 2021.1 (3.3)) use options.depthformatter instead
     * @param options.depthformatter depth index format that accept number
     * @param options.valueformater deprecated (since 2021.1 (3.3)) use options.valueformatter instead
     * @param options.valueformatter curve value format that accept object with properties { 'curve', 'depth', 'value' }
     * @param trackContainer track container to display depth markers
     */
    constructor(options?: object | { linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; textstyle?: TextStyle | string | object; showdepth?: boolean; showlabel?: boolean; showinterpolatedvalues?: boolean; datetimeformat?: string; depthformater?: Format | Function; depthformatter?: Format | Function; valueformater?: Format | Function; valueformatter?: Format | Function; } , trackContainer?: LogTrackContainer);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: DepthMarkerShape): this;
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Set text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Return marker depth
     */
    getDepth(): number;
    /**
     * Set depth value
     * @param depth depth value
     */
    setDepth(depth: number): this;
}
