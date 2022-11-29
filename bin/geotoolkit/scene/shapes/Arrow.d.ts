import {Line} from './Line';
import {Point} from '../../util/Point';
import {SymbolShape} from './SymbolShape';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Defines arrow node, a line with a symbol on one, both, or no ends.
 */
export class Arrow extends Line {
    /**
     * Defines arrow node, a line with a symbol on one, both, or no ends.
     * @param from origin point of arrow or the object with arrow properties
     * @param from.symbolstart arrow start symbol
     * @param from.symbolend arrow end symbol
     * @param from.heads the type of ends that this arrow had
     * @param to endpoint of arrow
     * @param visible arrow visible
     * @param symbolStart arrow start symbol
     * @param symbolEnd arrow end symbol
     * @param linestyle line style
     */
    constructor(from?: Point | object | { symbolstart?: SymbolShape; symbolend?: SymbolShape; heads?: Heads | string; } , to?: Point, visible?: boolean, symbolStart?: SymbolShape, symbolEnd?: SymbolShape, linestyle?: LineStyle | string | object);
    /**
     * Sets the symbol to be drawn at the start of the arrow
     * @param symbol symbol to be drawn at the start of the arrow
     */
    setSymbolStart(symbol: SymbolShape): this;
    /**
     * Sets the symbol to be drawn at the end of the arrow
     * @param symbol symbol to be drawn at the end of the arrow
     */
    setSymbolEnd(symbol: SymbolShape): this;
    /**
     * Sets the symbol to be drawn at both ends of the arrow
     * @param symbol symbol to be drawn at both ends of the arrow
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     */
    getSymbolStart(): SymbolShape;
    /**
     */
    getSymbolEnd(): SymbolShape;
    /**
     * Set heads
     * @param heads the type of ends that this arrow had
     */
    setHeads(heads: Heads | string): this;
    /**
     * Returns arrow heads
     */
    getHeads(): Heads;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {symbolstart: SymbolShape; symbolend: SymbolShape; heads: Heads} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.symbolstart start symbol
     * @param properties.symbolend end symbol
     * @param properties.heads the type of ends that this arrow had
     */
    setProperties(properties?: object | { symbolstart?: SymbolShape | object; symbolend?: SymbolShape | object; heads?: Heads | string; } ): this;
}
/**
 * Enum to define types of heads that arrow can have
 */
export enum Heads {
    /**
     * Symbol at start of arrow
     */
    Start = 'start',
    /**
     * Symbol at end of arrow
     */
    End = 'end',
    /**
     * Symbol on both ends of the arrow
     */
    Both = 'both',
    /**
     * No symbols on arrow
     */
    None = 'none'
}
