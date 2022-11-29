import {LegendItem} from './LegendItem';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {AnchorType} from '../../util/AnchorType';

/**
 * Legend item with symbol and text elements
 */
export class SymbolLegendItem extends LegendItem {
    /**
     * Legend item with symbol and text elements
     * @param object associated with the legend item
     * @param options (see "setOptions" API for more info)
     */
    constructor(object?: object, options?: any);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: SymbolLegendItem): this;
    /**
     * Returns the current symbol legend options
     */
    getOptions(): {background: {linestyle: LineStyle; fillstyle: FillStyle}; textstyle: TextStyle; internalpadding: number; margintext: number; alignment: AnchorType; symbol: {width: number; height: number; painter: object; linestyle: LineStyle; fillstyle: FillStyle}} | any;
    /**
     * Sets item's options
     * @param options options
     * @param options.background background rectangle options
     * @param options.background.linestyle Line style for background rectangle
     * @param options.background.fillstyle Fill style for background rectangle
     * @param options.textstyle text style
     * @param options.internalpadding padding of the background rectangle
     * @param options.margintext Text margin for text to the left and right
     * @param options.alignment alignment
     * @param options.symbol symbol options
     * @param options.symbol.width symbol width
     * @param options.symbol.height symbol height
     * @param options.symbol.painter symbol painter
     * @param options.symbol.linestyle symbol line style
     * @param options.symbol.fillstyle symbol fill style
     */
    setOptions(options: object | { background?: object | { linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; textstyle?: TextStyle | string | object; internalpadding?: number; margintext?: number; alignment?: AnchorType; symbol?: object | { width?: number; height?: number; painter?: object; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } ): this;
}
