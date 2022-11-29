import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {SymbolShape} from '../scene/shapes/SymbolShape';
import {LogAbstractVisual} from './LogAbstractVisual';
import {TextStyle} from '../attributes/TextStyle';
import {SpaceStyle} from '../attributes/SpaceStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {AbstractNode} from '../scene/AbstractNode';
import {Rect} from '../util/Rect';
import {Text} from '../scene/shapes/Text';
import {Point} from '../util/Point';

/**
 * Callback function to define each comment section fill style manually.
 */
export type fillStylesCallback = (depth: number, value: string, index: number) => FillStyle | string | object;
/**
 * Callback function to define each comment section fill style manually.
 */
export type lineStylesCallback = (depth: number, value: string, index: number) => LineStyle | string | object;
/**
 * Callback function to define each comment section symbol shape manually.
 */
export type symbolStylesCallback = (depth: number, value: string, index: number) => SymbolShape | Function | object;
/**
 * Define visual to represent comment section intervals.
 */
export class LogMudLogSection extends LogAbstractVisual {
    /**
     * Define visual to represent comment section intervals.
     * @param depths an array of the depths or properties object
     * @param depths.depths an array of the depths
     * @param depths.values array of the corresponding values
     * @param depths.fillmode mode for how to display the values
     * @param depths.fillstyles comments fill styles array to use one by one
     * or a callback function to define each style manually
     * @param depths.evenfillstyle even fill style
     * @param depths.oddfillstyle odd fill style
     * @param depths.linestyles linestyles
     * @param depths.evenlinestyle EvenLineStyle
     * @param depths.oddlinestyle OddLineStyle
     * @param depths.textstyle text style of the displayed values
     * @param depths.textstyles textstyles
     * @param depths.eventextstyle EvenTextStyle
     * @param depths.oddtextstyle OddTextStyle
     * @param depths.ellipsisstring ellipsis text to string (must be under 15 characters)
     * @param depths.textalign textalign
     * @param depths.radius properties for specifying the corner radius
     * @param depths.padding properties for specifying the padding for each comment section
     * @param depths.padding.top top padding
     * @param depths.padding.bottom bottom padding
     * @param depths.padding.right right padding
     * @param depths.padding.left left padding
     * @param depths.margins properties for specifying the margins for each comment section
     * @param depths.margins.top top margin
     * @param depths.margins.bottom top margin
     * @param depths.margins.right right margin
     * @param depths.margins.left left margin
     * @param depths.symbols symbols
     * @param depths.evensymbol EvenSymbol
     * @param depths.oddsymbol OddSymbol
     * @param depths.symbolmargins properties for specifying the margins for symbols
     * @param depths.symbolmargins.top top margin
     * @param depths.symbolmargins.bottom top margin
     * @param depths.symbolmargins.right right margin
     * @param depths.symbolmargins.left left margin
     * @param depths.symbolposition symbol position
     * @param depths.selectedindices array of selected indices
     * @param depths.selectedtextstyle text style for selected segment
     * @param depths.selectedlinestyle line style for selected segment
     * @param depths.selectedfillstyle fill style for selected segment
     * @param depths.selectedsymbol symbol for selected segment
     * @param values array of the corresponding values
     * @param fillstyles comments fill styles array to use one by one
     * or a callback function to define each style manually
     */
    constructor(depths?: number[] | object | { depths?: number[]; values?: string[]; fillmode?: FillMode; fillstyles?: (FillStyle | string | object)[] | Function; evenfillstyle?: FillStyle | string | object; oddfillstyle?: FillStyle | string | object; linestyles?: (LineStyle | string | object)[] | Function; evenlinestyle?: LineStyle | string | object; oddlinestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; textstyles?: (TextStyle | string | object)[] | Function; eventextstyle?: TextStyle | string | object; oddtextstyle?: TextStyle | string | object; ellipsisstring?: string; textalign?: TextAlign; radius?: number; padding?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; margins?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; symbols?: SymbolShape | SymbolShape[] | Function; evensymbol?: SymbolShape; oddsymbol?: SymbolShape; symbolmargins?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; symbolposition?: SymbolPosition; selectedindices?: number[]; selectedtextstyle?: TextStyle | Function; selectedlinestyle?: LineStyle | Function; selectedfillstyle?: FillStyle | Function; selectedsymbol?: SymbolShape | Function; } , values?: string[], fillstyles?: FillStyle[] | Function);
    /**
     * Sets array of depths and array of corresponding values
     * @param depths array of depths
     * @param values array of corresponding values along the depth
     */
    setDepthsAndValues(depths: number[], values: (string | any)[] | Function): this;
    /**
     * Return selected indices
     */
    getSelectedIndices(): number[] | null;
    /**
     * Set selected indices
     * @param indices selected indices
     */
    setSelectedIndices(indices: number[] | null): this;
    /**
     * Returns selected segment text style
     */
    getSelectedTextStyle(): TextStyle | Function;
    /**
     * Sets text style for selected segment
     * @param textStyle a new text style
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setSelectedTextStyle(textStyle: TextStyle | object | string | Function, merge?: boolean): this;
    /**
     * Returns selected segment fill style
     */
    getSelectedFillStyle(): FillStyle | Function;
    /**
     * Sets fill style for selected segment
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setSelectedFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string | Function, merge?: boolean): this;
    /**
     * Returns selected segment line style
     */
    getSelectedLineStyle(): LineStyle | Function;
    /**
     * Sets line style for selected segment
     * @param lineStyle a new line style
     * @param lineStyle.color color
     * @param lineStyle.width line width
     * @param lineStyle.pattern pattern
     * @param merge true if you want to merge LineStyle with existing attribute, false by default
     */
    setSelectedLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string | Function, merge?: boolean): this;
    /**
     * Return selected segment symbol
     */
    getSelectedSymbol(): SymbolShape | Function;
    /**
     * Set symbol for selected segment
     * @param symbol symbol for selected segments
     */
    setSelectedSymbol(symbol: SymbolShape | Function): this;
    /**
     * Returns array of depths
     */
    getDepths(): number[];
    /**
     * Returns array of values
     */
    getValues(): (string | any)[] | Function;
    /**
     * Returns a text style
     */
    getTextStyle(): TextStyle;
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
     * Returns array of text styles or a text style callback
     */
    getTextStyles(): TextStyle[] | Function;
    /**
     * Sets array of text Styles
     * @param textStyles text styles array to use
     * one by one or a callback function to define each style manually
     */
    setTextStyles(textStyles: (TextStyle | string | object)[] | Function): this;
    /**
     * Returns even text style
     */
    getEvenTextStyle(): TextStyle | null;
    /**
     * Sets even text style
     * @param textStyle a new text style
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setEvenTextStyle(textStyle: TextStyle | object | string, merge?: boolean): this;
    /**
     * Returns odd text style
     */
    getOddTextStyle(): TextStyle | null;
    /**
     * Sets odd text style
     * @param textStyle a new text style
     * @param merge true if you want to merge textStyle with existing attribute, false by default
     */
    setOddTextStyle(textStyle: TextStyle | object | string, merge?: boolean): this;
    /**
     * Returns array of fill styles or a fill style callback
     */
    getFillStyles(): FillStyle[] | Function;
    /**
     * Sets array of fill Styles
     * @param fillStyles fill styles array to use
     * one by one or a callback function to define each style manually
     */
    setFillStyles(fillStyles: (FillStyle | string | object)[] | Function): this;
    /**
     * Returns even fill style
     */
    getEvenFillStyle(): FillStyle;
    /**
     * Sets even fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setEvenFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Returns odd fill style
     */
    getOddFillStyle(): FillStyle;
    /**
     * Sets odd fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setOddFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Returns array of line styles or a line style callback
     */
    getLineStyles(): LineStyle[] | Function;
    /**
     * Sets array of line Styles
     * @param lineStyles line styles array to use
     * one by one or a callback function to define each style manually
     */
    setLineStyles(lineStyles: (LineStyle | string | object)[] | Function): this;
    /**
     * Returns even line style
     */
    getEvenLineStyle(): LineStyle;
    /**
     * Sets even line style
     * @param lineStyle a new line style
     * @param lineStyle.color color
     * @param lineStyle.width line width
     * @param lineStyle.pattern pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setEvenLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Returns odd line style
     */
    getOddLineStyle(): LineStyle;
    /**
     * Sets odd line style
     * @param lineStyle a new line style
     * @param lineStyle.color color
     * @param lineStyle.width line width
     * @param lineStyle.pattern pattern
     * @param merge true if you want to merge LineStyle with existing attribute, false by default
     */
    setOddLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Returns symbols position
     */
    getSymbolPosition(): SymbolPosition;
    /**
     * Set symbols position
     * @param position symbol position
     */
    setSymbolPosition(position: SymbolPosition): this;
    /**
     * Sets symbols margins style
     * @param margins margins style
     * @param merge true if you want to merge marginsStyle with existing attribute, false by default
     */
    setSymbolMarginsStyle(margins: SpaceStyle | object, merge?: boolean): AbstractNode;
    /**
     * Return symbols margins style
     */
    getSymbolMarginsStyle(): SpaceStyle | null;
    /**
     * Returns array of symbol shapes or a symbol shape callback
     */
    getSymbols(): SymbolShape | SymbolShape[] | Function;
    /**
     * Set array of symbol shapes or a symbol shape callback
     * @param symbols symbols
     */
    setSymbols(symbols: SymbolShape | SymbolShape[] | Function): this;
    /**
     * Returns even symbol shape
     */
    getEvenSymbol(): SymbolShape;
    /**
     * Sets even symbol shape
     * @param symbol a new symbol shape
     */
    setEvenSymbol(symbol: SymbolShape): this;
    /**
     * Returns odd symbol shape
     */
    getOddSymbol(): SymbolShape;
    /**
     * Sets odd symbol shape
     * @param symbol a new symbol shape
     */
    setOddSymbol(symbol: SymbolShape): this;
    /**
     * Set symbols aggregation
     * @param aggregation symbols aggregation
     * @param aggregation.strategy aggregation strategy 'stack' | 'collapse' | 'none' | null
     * @param aggregation.symbol aggregation symbol
     * @param aggregation.range aggregation range
     */
    setAggregation(aggregation: object | { strategy?: string; symbol?: SymbolShape | Function; range?: number; } ): this;
    /**
     * Returns symbols aggregation
     */
    getAggregation(): {strategy: number | null; symbol: SymbolShape | Function; range: number} | object;
    /**
     * Returns value closest to specified depth
     * @param depth value at depth of current section
     */
    getValueAtDepth(depth: number): {value: string; section: {ellipsis: Rect | any}} | object;
    /**
     * Returns fill mode
     */
    getFillMode(): FillMode;
    /**
     * Sets fill mode
     * @param fillMode The fill mode
     */
    setFillMode(fillMode: FillMode): this;
    /**
     * Returns text alignment
     */
    getTextAlign(): TextAlign;
    /**
     * Sets text alignment
     * @param textAlign text alignment
     */
    setTextAlign(textAlign: TextAlign): this;
    /**
     * Sets ellipsis text to string under 15 characters
     * @param str value in the current section
     */
    setEllipsisString(str: string): this;
    /**
     * Get ellipsis text to string
     */
    getEllipsisString(): string | any;
    /**
     * Returns vertical margin
     * @deprecated since 3.1, use getPaddingStyle instead
     */
    getVerticalMargin(): number;
    /**
     * Sets vertical margin
     * @deprecated since 3.1, use setPaddingStyle instead
     * @param verticalMargin vertical margin in pixel in device space
     */
    setVerticalMargin(verticalMargin: number): this;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param paddingStyle.top top padding
     * @param paddingStyle.bottom bottom padding
     * @param paddingStyle.right right padding
     * @param paddingStyle.left left padding
     * @param merge true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; } , merge?: boolean): this;
    /**
     * Returns padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets margins style
     * @param margins margins style
     * @param merge true if you want to merge marginsStyle with existing attribute, false by default
     */
    setMarginsStyle(margins: SpaceStyle | object, merge?: boolean): AbstractNode;
    /**
     * Return margins style
     */
    getMarginsStyle(): SpaceStyle | null;
    /**
     * Set border radius in device coordinates.
     * @param radius border radius in device coordinates
     */
    setCornerRadius(radius: number): Text;
    /**
     * return corner radius
     */
    getCornerRadius(): number;
    /**
     * Hit test in the device coordinate. This method checks if any point is intersects <html> node inside text
     * @param area model area or position
     * @param area.x optional array of x coordinates
     * @param area.y optional array of y coordinates
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point | object | { x?: number[]; y?: number[]; } , radius?: number): number[] | null;
    /**
     * Return text wrapping mode
     */
    getWrapMode(): WrapMode;
    /**
     * Set text wrapping mode
     * @param wrapMode text wrapping mode
     */
    setWrapMode(wrapMode: WrapMode): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depths: number[]; values: string[]; textstyle: TextStyle; textstyles: TextStyle[] | Function; eventextstyle: TextStyle; oddtextstyle: TextStyle; fillmode: FillMode; fillstyles: FillStyle[] | Function; evenfillstyle: FillStyle; oddfillstyle: FillStyle; linestyles: LineStyle[] | Function; evenlinestyle: LineStyle; oddlinestyle: LineStyle; symbols: SymbolShape[] | Function; evensymbol: SymbolShape; oddsymbol: SymbolShape; symbolmargins: SpaceStyle; symbolposition: SymbolPosition; ellipsisstring: string; textalign: TextAlign; padding: SpaceStyle; margins: SpaceStyle; selectedindices: number[] | null; selectedtextstyle: TextStyle | Function; selectedlinestyle: LineStyle | Function; selectedfillstyle: FillStyle | Function; selectedsymbol: SymbolShape | Function; radius: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depths array of depths
     * @param properties.values array of corresponding values along the depth
     * @param properties.textstyle the text style
     * @param properties.textstyles textstyles
     * @param properties.eventextstyle EvenTextStyle
     * @param properties.oddtextstyle OddTextStyle
     * @param properties.textalign textalign
     * @param properties.ellipsisstring ellipsis text to string under 15 characters
     * @param properties.fillmode mode for how to display the values
     * @param properties.fillstyles fillstyles
     * @param properties.evenfillstyle EvenFillStyle
     * @param properties.oddfillstyle OddFillStyle
     * @param properties.linestyles linestyles
     * @param properties.evenlinestyle EvenLineStyle
     * @param properties.oddlinestyle OddLineStyle
     * @param properties.symbols symbols
     * @param properties.evensymbol EvenSymbol
     * @param properties.oddsymbol OddSymbol
     * @param properties.symbolmargins properties for specifying the margins for symbols
     * @param properties.symbolmargins.top top margin
     * @param properties.symbolmargins.bottom top margin
     * @param properties.symbolmargins.right right margin
     * @param properties.symbolmargins.left left margin
     * @param properties.symbolposition symbol position
     * @param properties.radius properties for specifying the corner radius
     * @param properties.padding properties for specifying the padding for each comment section
     * @param properties.padding.top top padding
     * @param properties.padding.bottom bottom padding
     * @param properties.padding.right right padding
     * @param properties.padding.left left padding
     * @param properties.margins properties for specifying the margins for each comment section
     * @param properties.margins.top top margin
     * @param properties.margins.bottom top margin
     * @param properties.margins.right right margin
     * @param properties.margins.left left margin
     * @param properties.selectedindices array of selected indices
     * @param properties.selectedtextstyle text style for selected segment
     * @param properties.selectedlinestyle line style for selected segment
     * @param properties.selectedfillstyle fill style for selected segment
     * @param properties.selectedsymbol symbol for selected segment
     */
    setProperties(properties: object | { depths?: number[]; values?: string[]; textstyle?: TextStyle | string | object; textstyles?: (TextStyle | string | object)[] | Function; eventextstyle?: TextStyle | string | object; oddtextstyle?: TextStyle | string | object; textalign?: TextAlign; ellipsisstring?: string; fillmode?: FillMode; fillstyles?: (FillStyle | string | object)[] | Function; evenfillstyle?: FillStyle | string | object; oddfillstyle?: FillStyle | string | object; linestyles?: (LineStyle | string | object)[] | Function; evenlinestyle?: LineStyle | string | object; oddlinestyle?: LineStyle | string | object; symbols?: SymbolShape[] | Function; evensymbol?: SymbolShape; oddsymbol?: SymbolShape; symbolmargins?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; symbolposition?: SymbolPosition; radius?: number; padding?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; margins?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; selectedindices?: number[] | null; selectedtextstyle?: TextStyle | Function; selectedlinestyle?: LineStyle | Function; selectedfillstyle?: FillStyle | Function; selectedsymbol?: SymbolShape | Function; } ): this;
}
/**
 * An enum defining symbol position
 */
export enum SymbolPosition {
    /**
     * None, default
     */
    None = 'none',
    /**
     * Left, each symbol is aligned to the left track edge
     */
    Left = 'left',
    /**
     * Right, each symbol is aligned to the right track edge
     */
    Right = 'right',
    /**
     * Even-Odd, each next symbol has opposite position, starting from the left
     */
    EvenOdd = 'evenodd'
}
/**
 * An enum defining fill mode
 */
export enum FillMode {
    /**
     * All
     */
    All = 0,
    /**
     * TextOnly
     */
    TextOnly = 1,
    /**
     * Callout
     */
    Callout = 2,
    /**
     * Symbols only
     */
    SymbolOnly = 3
}
/**
 * An enum defining vertical text alignment
 */
export enum TextAlign {
    /**
     * Top
     */
    Top = 'top',
    /**
     * Middle
     */
    Middle = 'middle',
    /**
     * Bottom
     */
    Bottom = 'bottom'
}
/**
 * An enum defining text wrapping mode
 */
export enum WrapMode {
    /**
     * Default: default wrap mode, for backward compatibility
     */
    Default = 'default',
    /**
     * Wrapped Width: adds line breaks between words to fit it into a user defined width
     */
    WrappedWidth = 'wrapped-words',
    /**
     * WrappedWidthSplitWords: adds line breaks to text to fit it into a user defined width
     */
    WrappedWidthSplitWords = 'splitted-words'
}
