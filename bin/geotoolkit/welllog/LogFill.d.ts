import {LogPointSet} from './LogPointSet';
import {FillStyle} from '../attributes/FillStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {Rect} from '../util/Rect';

/**
 * LogFill class implements a fill between two LogPointSet.<br>
 * <br>
 * Those LogPointSet are generally either LogCurves or LogReferenceLine.<br>
 * The LogFill accepts 3 fillstyles, 'default', 'left' and 'right'.<br>
 * FillType can be one of the following types.<br>
 * 1) Left <br>
 * 2) Right <br>
 * 3) Left and Right(Dual left and right with different fill styles or Single which only has one fill style) please refer to the example below.
 * The given FillType will determine which fillstyles should be applied to each area in between given LogPointSet.<br>
 * If no FillType is specified the internal logic will assign the fillType based on the fillStyle.
 * It is recommended to pass both curve1 and curve2 parameters (even if the internal logic will try to fill missing parameters).<br>
 * <br>
 * @example
 * ```javascript
 * //Single Fill, one fill style is specified
 * import {LogFill} from '@int/geotoolkit/welllog/LogFill';
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * const fill = new LogFill({
 *  'curve1': orangeCurve,
 *  'curve2': redCurve,
 *  'fillstyle': new FillStyle(...)
 * });
 * ```
 * @example
 * ```javascript
 * import {FillType} from '@int/geotoolkit/welllog/LogFill';
 * //Dual Fill will use different fillstyles for left and right sides of orangeCurve
 * const fill = new LogFill({
 *  'curve1': orangeCurve,
 *  'curve2': ..., //if not specified, will be left (default case)
 *  'rightfillstyle': new FillStyle(...),
 *  'leftfillstyle': new FillStyle(...),
 *  'filltype': FillType.Dual
 * });
 * ```
 */
export class LogFill extends LogPointSet {
    /**
     * LogFill class implements a fill between two LogPointSet.<br>
     * <br>
     * Those LogPointSet are generally either LogCurves or LogReferenceLine.<br>
     * The LogFill accepts 3 fillstyles, 'default', 'left' and 'right'.<br>
     * FillType can be one of the following types.<br>
     * 1) Left <br>
     * 2) Right <br>
     * 3) Left and Right(Dual left and right with different fill styles or Single which only has one fill style) please refer to the example below.
     * The given FillType will determine which fillstyles should be applied to each area in between given LogPointSet.<br>
     * If no FillType is specified the internal logic will assign the fillType based on the fillStyle.
     * It is recommended to pass both curve1 and curve2 parameters (even if the internal logic will try to fill missing parameters).<br>
     * <br>
     * @param options left points set or a JSON
     * @param options.curve1 left point set
     * @param options.curve2 right point set
     * @param options.fillstyle fillstyle
     * @param options.leftfillstyle fillstyle for left part
     * @param options.rightfillstyle fillstyle for right part
     * @param options.negativefillstyle fill style to be used to fill negative areas
     * @param options.positivefillstyle fill style to be used to positive areas
     * @param options.filltype filltype
     * @param curve2 right point set
     * @param fillstyle fillstyle
     * @param leftfillstyle fillstyle for left part
     * @param rightfillstyle fillstyle for right part
     * @param filltype filltype
     */
    constructor(options?: LogPointSet | object | { curve1?: LogPointSet | number; curve2?: LogPointSet | number; fillstyle?: FillStyle | string | object; leftfillstyle?: FillStyle | string | object; rightfillstyle?: FillStyle | string | object; negativefillstyle?: FillStyle | string | object; positivefillstyle?: FillStyle | string | object; filltype?: FillType | string; }  | number, curve2?: LogPointSet | number, fillstyle?: FillStyle | string | object, leftfillstyle?: FillStyle | string | object, rightfillstyle?: FillStyle | string | object, filltype?: FillType | string);
    /**
     * manipulator for filltype aliases
     * @param filltype filltype
     */
    static getShortFillType(filltype: FillType): FillType;
    /**
     * Sets point set to fill from
     * @param curve a point set or number to fill from
     */
    setCurve1(curve: LogPointSet | number): this;
    /**
     * Returns a point set to fill from
     */
    getCurve1(): LogPointSet;
    /**
     * Sets point set to fill to
     * @param curve a point set or number to fill to
     */
    setCurve2(curve: LogPointSet | number): this;
    /**
     * Returns a point set to fill to
     */
    getCurve2(): LogPointSet;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Sets negative fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setNegativeFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Sets right (negative) fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setRightFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Returns fill style to be used to fill negative areas
     */
    getNegativeFillStyle(): FillStyle;
    /**
     * Returns fill style to be used to fill right (negative) areas
     */
    getRightFillStyle(): FillStyle;
    /**
     * Sets positive fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setPositiveFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Sets left (positive) fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setLeftFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Returns fill style to be used to fill positive areas
     */
    getPositiveFillStyle(): FillStyle;
    /**
     * Returns fill style to be used to fill left (positive) areas
     */
    getLeftFillStyle(): FillStyle;
    /**
     * return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Gets bounds
     */
    getBounds(): Rect;
    /**
     * Gets the fill type
     */
    getFillType(): FillType;
    /**
     * Sets the fill type
     * @param fillType enum of filltype
     */
    setFillType(fillType: FillType | string): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {curve1: LogPointSet; curve2: LogPointSet; fillstyle: FillStyle; negativefillstyle: FillStyle; positivefillstyle: FillStyle; filltype: FillType | string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.curve1 a curve to fill from
     * @param properties.curve2 a point set to fill to
     * @param properties.fillstyle fillstyle
     * @param properties.leftfillstyle fillstyle for left part
     * @param properties.rightfillstyle fillstyle for right part
     * @param properties.negativefillstyle fill style to be used to fill negative areas
     * @param properties.positivefillstyle fill style to be used to positive areas
     * @param properties.filltype enum of filltype
     */
    setProperties(properties: object | { curve1?: LogPointSet | number; curve2?: LogPointSet | number; fillstyle?: FillStyle | string | object; leftfillstyle?: FillStyle | string | object; rightfillstyle?: FillStyle | string | object; negativefillstyle?: FillStyle | string | object; positivefillstyle?: FillStyle | string | object; filltype?: FillType | string; } ): this;
}
/**
 * Enum of FillTypes
 */
export enum FillType {
    /**
     * Single Fill
     */
    Single = 'single',
    /**
     * Dual Fill
     */
    Dual = 'dual',
    /**
     * Positive Fill
     */
    Positive = 'positive',
    /**
     * Negative Fill
     */
    Negative = 'negative',
    /**
     * Positive And Negative Fill
     */
    PositiveAndNegative = 'positiveandnegative',
    /**
     * Left Fill
     */
    Left = 'left',
    /**
     * Right Fill
     */
    Right = 'right',
    /**
     * Left And Right Fill
     */
    LeftAndRight = 'leftandright'
}
