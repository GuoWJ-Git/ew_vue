import {BufferGeometry, Color} from '../../THREE';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';

/**
 * A line geometry intended to be use for well trajectory representation.<br>
 * <br>
 * This geometry class builds a line's geometry using given xyz values.<br>
 * Each vertex can be colored using the values parameter and a colorprovider.<br>
 */
export class LineGeometry extends BufferGeometry {
    /**
     * A line geometry intended to be use for well trajectory representation.<br>
     * <br>
     * This geometry class builds a line's geometry using given xyz values.<br>
     * Each vertex can be colored using the values parameter and a colorprovider.<br>
     * @param options The options
     * @param options.data The data options
     * @param options.data.x The x deviation values
     * @param options.data.y The y deviation values
     * @param options.data.z The elevation values
     * @param options.data.values A value attribute used for coloring the trajectory (see options.colorprovider for colormapping)
     * @param options.colorprovider A color provider or a single color in css format
     */
    constructor(options: object | { data: object | { x: number[]; y: number[]; z: number[]; values?: number[] | number; } ; colorprovider?: ColorProvider | string; } );
    /**
     * @param options The options
     * @param options.colorprovider A color provider or a single color in css format
     */
    setOptions(options?: object | { colorprovider?: ColorProvider | string | Color; } ): this;
}
