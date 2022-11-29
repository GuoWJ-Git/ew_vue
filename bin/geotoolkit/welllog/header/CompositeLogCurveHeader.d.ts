import {LogVisualHeader} from './LogVisualHeader';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {TextStyle} from '../../attributes/TextStyle';
import {NumberFormat} from '../../util/NumberFormat';
import {RgbaColor} from '../../util/RgbaColor';

/**
 * Defines default header implementation for {geotoolkit.welllog.CompositeLogCurve} visual
 */
export class CompositeLogCurveHeader extends LogVisualHeader {
    /**
     * Defines default header implementation for {geotoolkit.welllog.CompositeLogCurve} visual
     * @param options header implementation for visual or properties object
     * @param options.displayvaluetextstyle text style of the display value
     * @param options.minvalueformat NumberFormat
     * @param options.maxvalueformat NumberFormat
     * @param options.valueformat NumberFormat
     */
    constructor(options: LogAbstractVisual | object | { displayvaluetextstyle?: TextStyle | string | object; minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; valueformat?: NumberFormat; } );
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
    /**
     * Sets a current text style for displayed value
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayValueTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayValueTextStyle(): TextStyle;
    /**
     * Return marker depth to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Returns the number formatter for the value
     */
    getValueFormat(): NumberFormat;
    /**
     * Update unit in header
     */
    updateUnit(): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displayvaluetextstyle: TextStyle; minvalueformat: NumberFormat; maxvalueformat: NumberFormat; valueformat: NumberFormat; markerdepth: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displayvaluetextstyle text style of the display value
     * @param properties.minvalueformat NumberFormat
     * @param properties.maxvalueformat NumberFormat
     * @param properties.valueformat NumberFormat
     */
    setProperties(properties: object | { displayvaluetextstyle?: TextStyle | string | object; minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; valueformat?: NumberFormat; } ): this;
}
