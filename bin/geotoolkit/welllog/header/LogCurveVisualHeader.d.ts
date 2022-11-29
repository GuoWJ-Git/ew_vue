import {LogVisualHeader} from './LogVisualHeader';
import {Node} from '../../scene/Node';
import {TextStyle} from '../../attributes/TextStyle';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {NumberFormat} from '../../util/NumberFormat';
import {RgbaColor} from '../../util/RgbaColor';

/**
 * Define visual to render curve header
 */
export class LogCurveVisualHeader extends LogVisualHeader {
    /**
     * Define visual to render curve header
     * @param options visual for the header or properties object
     * @param options.displayvaluetextstyle text style of the displayed value
     * @param options.symbol symbol to be displayed
     * @param options.inline draw inline or no
     * @param options.minvalueformat number format
     * @param options.maxvalueformat number format
     * @param options.valueformat number format for value
     */
    constructor(options?: Node | object | { displayvaluetextstyle?: TextStyle | string | object; symbol?: SymbolShape; inline?: boolean; minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; valueformat?: NumberFormat; } );
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
     * Sets symbol to be used
     * @param symbol symbol to be used
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Gets symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Sets inline mode
     * @param inline mode to draw everything in one line
     */
    setInline(inline: boolean): this;
    /**
     * gets inline mode
     */
    getInline(): boolean;
    /**
     * Return marker depth to be used to display value. By default it is nan and value is not displayed
     */
    getDisplayMarkerDepth(): number;
    /**
     * Returns the number formatter for the min value
     */
    getMinValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the min value
     * @param format number formatter
     */
    setMinValueFormat(format: NumberFormat): this;
    /**
     * Returns the number formatter for the max value
     */
    getMaxValueFormat(): NumberFormat;
    /**
     * Sets the number formatter for the max value
     * @param format number formatter
     */
    setMaxValueFormat(format: NumberFormat): this;
    /**
     * Returns the number formatter for the value
     */
    getValueFormat(): NumberFormat;
    /**
     * Gets value at last, first or custom depth position
     */
    getDisplayValue(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displayvaluetextstyle: TextStyle; symbol: SymbolShape; inline: boolean; minvalueformat: NumberFormat; maxvalueformat: NumberFormat; valueformat: NumberFormat} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displayvaluetextstyle text style of the displayed value
     * @param properties.symbol symbol to be displayed
     * @param properties.inline draw inline or no
     * @param properties.minvalueformat number format
     * @param properties.maxvalueformat number format
     * @param properties.valueformat number format for value
     */
    setProperties(properties: object | { displayvaluetextstyle?: TextStyle | string | object; symbol?: SymbolShape; inline?: boolean; minvalueformat?: NumberFormat; maxvalueformat?: NumberFormat; valueformat?: NumberFormat; } ): this;
}
