import {LogPointSet} from './LogPointSet';
import {LogAbstractData} from './data/LogAbstractData';
import {TextStyle} from '../attributes/TextStyle';
import {AnchorType} from '../util/AnchorType';
import {InterpolationType} from '../data/DataStepInterpolation';
import {Orientation} from '../util/Orientation';
import {FillStyle} from '../attributes/FillStyle';
import {DiscreteGradientColorProvider} from '../util/DiscreteGradientColorProvider';
import {RgbaColor} from '../util/RgbaColor';
import {Rect} from '../util/Rect';

/**
 * Creates the standard representation of a discrete well log curve. Data is passed in a LogAbstractData.
 */
export class LogDiscreteCurve extends LogPointSet {
    /**
     * Creates the standard representation of a discrete well log curve. Data is passed in a LogAbstractData.
     * @param options data source to be displayed or properties object
     * @param options.displaymode an array with a combination of values: "line" and "text"
     * @param options.fillinfo fill info see {@link @int/geotoolkit/welllog/LogDiscreteCurve.LogDiscreteCurve#setFillInfo}
     * @param options.filltype the type of the filling
     * @param options.textstyle the text style
     * @param options.textposition position of the text
     * @param options.interpolationtype the type of the interpolation
     * @param options.textorientation orientation of the text
     * @param options.data data source to be displayed
     * @param autoUpdate automatic update from data
     */
    constructor(options?: LogAbstractData | object | { displaymode?: string[] | string; fillinfo?: any; filltype?: FillType; textstyle?: TextStyle | string | object; textposition?: AnchorType; interpolationtype?: InterpolationType; textorientation?: Orientation; data?: LogAbstractData; } , autoUpdate?: boolean);
    /**
     * Sets data source to be displayed
     * @param data data to display
     * @param autoUpdate automatic update from data source
     */
    setData(data: LogAbstractData, autoUpdate?: boolean): this;
    /**
     * Sets fill mode
     * @param type data mode or fill type
     * @param mappingFunc a mapping function to adjust native values
     */
    setFillType(type: FillType, mappingFunc?: Function): this;
    /**
     * Returns fill type
     */
    getFillType(): FillType;
    /**
     * Returns unique categories
     */
    getCategories(): number[];
    /**
     * Sets fill info.  Each code has an associated pair of values and a fill style
     * @example
     * ```javascript
     * // options ['ranges'], ['names'] and ['fillstyles'] describes header content and the way we fill discrete curve.
     * // It doesn't matter how many values or sections data source has, user can specify ranges and it will be in the header even if datasource does not have such values.
     * var discreteCurve = new geotoolkit.welllog.LogDiscreteCurve(datasource)
     * .setFillInfo({
     *   'type': geotoolkit.welllog.LogDiscreteCurve.FillType.Continuous,
     *   'ranges': [
     *       [1, 3],
     *       [3, 5],
     *       [5, 7],
     *       [7, 8],
     *       [12, 14] //all values in data source is less than 8
     *   ],
     *   'names': ['Chert', 'Limestone', 'Shale', 'Salt', '12-14'],
     *   'fillstyles': [
     *       new geotoolkit.attributes.FillStyle(Helpers.getColor('green'), patterns.queryPattern('chert'), Helpers.getColor('gray')),
     *       new geotoolkit.attributes.FillStyle(Helpers.getColor('yellow'), patterns.queryPattern('lime'), Helpers.getColor('gray')),
     *       new geotoolkit.attributes.FillStyle(Helpers.getColor('orange'), patterns.queryPattern('shale'), Helpers.getColor('gray')),
     *       new geotoolkit.attributes.FillStyle(Helpers.getColor('blue'), patterns.queryPattern('salt'), Helpers.getColor('gray')),
     *       new geotoolkit.attributes.FillStyle('red') //however we see this red square in header because we specify it
     *   ]
     * });
     * ```
     * @param fillInfo An object contains a gradient color provider with type ColorProvider, or fill information for other types.
     * @param fillInfo.type the Fill type
     * @param fillInfo.codes code value for each section
     * @param fillInfo.ranges range to color or fill
     * @param fillInfo.names fill name for the section
     * @param fillInfo.fillstyles the fill style
     * @param fillInfo.colorprovider the color provider
     * @param fillInfo.defaultfillstyle the default fill style for uncovered values
     * @param fillInfo.textstyles the text styles for each section
     */
    setFillInfo(fillInfo: object | { type: FillType; codes?: number[]; ranges?: number[]; names?: string[]; fillstyles?: (FillStyle | object | string)[]; colorprovider?: DiscreteGradientColorProvider; defaultfillstyle?: FillStyle | string | object; textstyles?: (TextStyle | object | string)[]; } ): this;
    /**
     * Returns code info
     */
    getFillInfo(): object;
    /**
     * Returns welllog data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns minimum value
     */
    getMinValue(): number | null;
    /**
     * Returns maximum value
     */
    getMaxValue(): number | null;
    /**
     * Sets line visibility
     * @param visible line visibility
     */
    setVisibleSeparateLine(visible: boolean): this;
    /**
     * Returns line visibility
     */
    isVisibleSeparateLine(): boolean;
    /**
     * Sets text visibility
     * @param visible sets the visibility of the text along the track for each block on or off
     */
    setVisibleText(visible: boolean): this;
    /**
     * Returns text visibility
     */
    isVisibleText(): boolean;
    /**
     * Sets display mode
     * @param mode an array with a combination of values: "line" and "text"
     */
    setDisplayMode(mode: string[] | string): this;
    /**
     * Returns display mode
     * (any combination of values: "line" and "text", or an empty array)
     */
    getDisplayMode(): string[];
    /**
     * Sets text style
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Returns text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text position
     * @param position position of the text
     */
    setTextPosition(position: AnchorType): this;
    /**
     * Returns text position
     */
    getTextPosition(): AnchorType;
    /**
     */
    getModelLimits(): Rect | any;
    /**
     * Returns text orientation
     */
    getTextOrientation(): Orientation;
    /**
     * Sets text orientation
     * @example
     * ```javascript
     * // To set text orientation to vertical
     * import {Orientation} from '@int/geotoolkit/util/Orientation';
     * discreteCurve.setTextOrientation(Orientation.Vertical)
     * ```
     * @param orientation orientation of the text
     */
    setTextOrientation(orientation: Orientation): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displaymode: string[] | string; fillinfo: any; filltype: FillType; textstyle: TextStyle; textposition: AnchorType; interpolationtype: InterpolationType; textorientation: Orientation} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displaymode an array with a combination of values: "line" and "text"
     * @param properties.fillinfo fill info see {@link @int/geotoolkit/welllog/LogDiscreteCurve.LogDiscreteCurve#setFillInfo}
     * @param properties.filltype the type of the filling
     * @param properties.textstyle the text style
     * @param properties.textposition position of the text
     * @param properties.interpolationtype the type of the interpolation
     * @param properties.textorientation orientation of the text
     * @param properties.data data source to be displayed
     */
    setProperties(properties: object | { displaymode?: string[] | string; fillinfo?: any; filltype?: FillType; textstyle?: TextStyle | string | object; textposition?: AnchorType; interpolationtype?: InterpolationType; textorientation?: Orientation; data?: LogAbstractData; } ): this;
}
/**
 * fill type
 */
export enum FillType {
    /**
     * color provider
     */
    ColorProvider = 0,
    /**
     * discrete
     */
    Discrete = 1,
    /**
     * continuous
     */
    Continuous = 2
}
