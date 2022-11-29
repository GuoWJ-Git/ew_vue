import {Object3D} from '../../Object3D';
import {TrajectoryTube} from '../TrajectoryTube';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color} from '../../../THREE';

/**
 * A series of tops for a well.
 */
export class TopSymbol extends Object3D {
    /**
     * A series of tops for a well.
     * @param well The well which is the parent of the topsymbol
     * @param options The options
     * @param options.visible Whether TopSymbol is visible
     * @param options.opacity The opacity of symbol
     * @param options.type The type of symbol
     * @param options.size The size of symbol
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.heights The heights of symbols, and they should be negative
     */
    constructor(well: TrajectoryTube, options: object | { visible?: boolean; opacity?: number; type?: string; size?: number; colorprovider?: ColorProvider | string | Color; heights: number[]; } );
    /**
     * Get well.
     */
    getWell(): TrajectoryTube;
    /**
     * Get symbol
     * @deprecated since 2022 (v 3.4), use getSymbols instead
     */
    getSymbol(): TopSymbol;
    /**
     * Get symbols
     */
    getSymbols(): TopSymbol[];
    /**
     * Sets options
     * @param options The options
     * @param options.visible Whether TopSymbol is visible
     * @param options.opacity The opacity of symbol
     * @param options.type The type of symbol
     * @param options.size The size of symbol
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.heights The heights of symbols, and they should be negative
     */
    setOptions(options?: object | { visible?: boolean; opacity?: number; type?: string; size?: number; colorprovider?: ColorProvider | string | Color; heights?: number[]; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
}
