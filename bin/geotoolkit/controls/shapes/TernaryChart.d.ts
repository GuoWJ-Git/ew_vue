import {Shape} from '../../scene/shapes/Shape';
import {TernaryGrid} from './TernaryGrid';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';

/**
 * A Ternary Chart is displays data on ternary grid. Reference to twrnary grid should be provided
 */
export class TernaryChart extends Shape {
    /**
     * A Ternary Chart is displays data on ternary grid. Reference to twrnary grid should be provided
     * @param options 
     * @param options.name name of ternary chart object
     * @param options.ternarygrid reference to ternary grid
     * @param options.data contains list of visuals in this chart
     */
    constructor(options?: object | { name?: string; ternarygrid?: TernaryGrid; data?: Visual[]; } );
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.name name of ternary chart object
     * @param properties.ternarygrid reference to ternary grid
     * @param properties.data contains list of visuals in this chart
     */
    setProperties(properties?: object | { name?: string; ternarygrid?: TernaryGrid; data?: Visual[]; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {name: string; ternarygrid: TernaryGrid} | any;
    /**
     * Set the data to be plotted in chart
     * @param data ternary chart options
     * @param data.name name of ternary chart object
     * @param data.ternarygrid reference to ternary grid
     * @param data.data contains list of visuals in this chart
     */
    setData(data?: object | { name?: string; ternarygrid?: TernaryGrid; data?: Visual[]; } ): this;
    /**
     * Returns current bounds
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Reset highlighting
     */
    resetHighlighting(): void;
    /**
     * Highlights the selected indices
     * @param indices indices to be highlighted
     * @param series series number
     * @param reset un-highlights previously selected indices
     */
    highlightIndices(indices: number[], series?: number, reset?: boolean): this;
    /**
     * Hit test in the device coordinate
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): any[];
}
/**
 * Defines Ternary Chart Visual
 */
export type Visual = { name: string; values: {  top: number[];  left: number[];  right: number[] }; symbol: SymbolShape; hightlightedsymbol: SymbolShape; linestyle: LineStyle | string | object; textstyle: TextStyle | string | object}
