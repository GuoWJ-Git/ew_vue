import {AbstractReservoirData} from '../AbstractReservoirData';
import {IJKIndex} from '../../../scene/reservoir/IJKIndex';
import {BufferAttribute} from '../../../THREE';

/**
 * Reservoir data that used to create multiple subgrids.
 * This class stores information of both shared and individual attributes across all subgrids.
 */
export class MultiGridData extends AbstractReservoirData {
    /**
     * Reservoir data that used to create multiple subgrids.
     * This class stores information of both shared and individual attributes across all subgrids.
     * @param options 
     * @param options.cells The cells position
     * @param options.values The cells value
     * @param options.ijkcount The I,J,K dimensions of the grid
     */
    constructor(options?: object | { cells?: object[]; values?: object[]; ijkcount?: IJKIndex | object | number[]; } );
    /**
     * This function clears all buffers and geometry.
     */
    reset(): this;
    /**
     * Return the overall attributes of MultiGridData.<br>
     * To get buffer attributes of a specfic subgrid, use getGridAttributes(index).
     */
    getAttributes(): {cellcount: number; gridcount: number; minvalue: number; maxvalue: number; mini: number; maxi: number; minj: number; maxj: number; mink: number; maxk: number} | object;
    /**
     * Get attributes of a specfic grid by index
     * @param index grid index
     */
    getGridAttributes(index: number): {cellcount: number; positions: BufferAttribute; ijk: BufferAttribute; normals: BufferAttribute; values: BufferAttribute; numijk: IJKIndex; mini: number; maxi: number; minj: number; maxj: number; mink: number; maxk: number; minvalue: number; maxvalue: number} | object;
    /**
     * Set several cells options, see #setCellOptions() for detailed documentation.
     * @param cells cells to set options on
     * @param values values to set options on
     */
    setCellsOptions(cells: object[], values: object[]): this;
    /**
     * Returns the number of cells across all subgrids in the data object
     */
    getNumberOfCells(): number;
    /**
     * Returns the number of subgrids in the data object
     */
    getNumberOfGrids(): number;
}
