import {LogVisualHeader} from './LogVisualHeader';
import {LogFill} from '../LogFill';
import {TextStyle} from '../../attributes/TextStyle';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {RgbaColor} from '../../util/RgbaColor';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Define visual to render curve header
 */
export class LogFillVisualHeader extends LogVisualHeader {
    /**
     * Define visual to render curve header
     * @param options visual visual for curve header or properties object
     * @param options.displaynamestextstyle display value textstyle
     * @param options.symbol symbol to be used
     */
    constructor(options?: LogFill | object | { displaynamestextstyle?: TextStyle | string | object; symbol?: SymbolShape; } );
    /**
     * Sets a current text style for displayed value
     * @param textStyle a new shape text style
     * @param textStyle.color text color
     * @param textStyle.baseLine base line.
     * @param textStyle.alignment alignment.
     * @param textStyle.font font.
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setDisplayNamesTextStyle(textStyle: TextStyle | string | object | { color?: string | RgbaColor; baseLine?: string; alignment?: string; font?: string; } , merge?: boolean): this;
    /**
     * Return a current text style for displayed value
     */
    getDisplayNamesTextStyle(): FillStyle;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {displaynamestextstyle: TextStyle; symbol: SymbolShape} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.displaynamestextstyle display value textstyle
     * @param properties.symbol symbol to be used
     */
    setProperties(properties: object | { displaynamestextstyle?: TextStyle | string | object; symbol?: SymbolShape; } ): this;
}
