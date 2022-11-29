import {AbstractTool} from './AbstractTool';
import {ColorBar} from '../shapes/ColorBar';
import {CompositeNode} from '../../scene/CompositeNode';
import {SymbolShape} from '../../scene/shapes/SymbolShape';

/**
 * Add cursor to colorbar, which shows value from group
 */
export class ColorBarCursorTool extends AbstractTool {
    /**
     * Add cursor to colorbar, which shows value from group
     * @param options tool options
     * @param options.colorbar color bar
     * @param options.name name of the tool
     * @param options.offset offset of cursor across color bar
     * @param options.group manipulator layer, by default parent of color bar
     * @param options.symbolalignment option of orientation of cursor
     * @param options.symbol symbol, by default black triangle
     * @param options.cssclass symbol css class name
     * @param options.callback callback to return current position in terms of value for colorbar
     * @param options.init callback function to initialize tool
     */
    constructor(options: object | { colorbar: ColorBar; name?: string; offset?: number; group?: CompositeNode; symbolalignment?: SymbolAlignment; symbol?: SymbolShape; cssclass?: string; callback?: Function; init?: Function; } );
    /**
     */
    _symbol: SymbolShape;
    /**
     * set cursor offset across the colorbar
     * @param offset offset
     */
    setOffset(offset: number): this;
    /**
     * set cursor position along the colorbar
     * @param value value
     */
    setPosition(value: number): this;
    /**
     * update cursor position along the colorbar
     */
    updatePosition(): this;
    /**
     * Sets new symbol
     * @param symbol new symbol
     */
    setSymbol(symbol: SymbolShape): this;
}
/**
 * Enum for symbol alignment
 */
export enum SymbolAlignment {
    /**
     * Left
     */
    Left = 'left',
    /**
     * Right
     */
    Right = 'right',
    /**
     * Both
     */
    Both = 'both'
}
