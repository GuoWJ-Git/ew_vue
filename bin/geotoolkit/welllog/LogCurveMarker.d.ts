import {LogAbstractVisual} from './LogAbstractVisual';
import {LogCurve} from './LogCurve';
import {SymbolShape} from '../scene/shapes/SymbolShape';
import {FillStyle} from '../attributes/FillStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {Rect} from '../util/Rect';
import {Transformation} from '../util/Transformation';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * LogCurveMarker object can render symbol in position of the last/latest depth and value of the curve provided.
 */
export class LogCurveMarker extends LogAbstractVisual {
    /**
     * LogCurveMarker object can render symbol in position of the last/latest depth and value of the curve provided.
     * @param curve a curve to draw markers or properties object
     * @param curve.indexes array of numbers with marker indexes
     * @param curve.symbol symbol used for points along the curve
     * @param curve.curve curve
     */
    constructor(curve?: LogCurve | object | { indexes?: number[]; symbol?: SymbolShape; curve?: LogCurve; } );
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string | any, merge?: boolean): this;
    /**
     * Returns curve
     */
    getCurve(): LogCurve;
    /**
     * Sets curve
     * @param curve curve
     */
    setCurve(curve: LogCurve): LogCurve;
    /**
     * Returns symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Sets symbol
     * @param symbol used for points along the curve
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns bound in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Retrieves the world transformation of the spatial.
     */
    getContentsTransform(): Transformation | null;
    /**
     * Returns false
     */
    isSelectable(): boolean;
    /**
     * set marker indexes
     * @param indexes array of numbers with marker indexes
     */
    setIndexes(indexes: number[]): this;
    /**
     * Draw symbols
     * @param gr RenderingContext
     * @param tr Transformation of symbols
     * @param deviceRect invalid area of the device
     */
    drawSymbols(gr: RenderingContext, tr: Transformation, deviceRect: Rect): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {indexes: number[]; symbol: SymbolShape; fillstyle: FillStyle; curve: LogCurve} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.indexes array of numbers with marker indexes
     * @param properties.symbol symbol used for points along the curve
     * @param properties.fillstyle symbol fill style
     * @param properties.curve curve
     */
    setProperties(properties?: object | { indexes?: number[]; symbol?: SymbolShape; fillstyle?: FillStyle | string | object; curve?: LogCurve; } ): this;
}
