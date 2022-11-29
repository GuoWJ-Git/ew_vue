import {AbstractReservoirData} from '../AbstractReservoirData';
import {IJKIndex} from '../../../scene/reservoir/IJKIndex';
import {BufferAttribute, Box3} from '../../../THREE';
import {Octree} from '../../util/Octree';

/**
 * Reservoir data using hexahedral geometry.<br>
 * options.cells is an array of object, while each object contains 'ijk', 'x', 'y', 'z' arrays.<br>
 * options.values is an array of object, while each object contains 'ijk', 'value' arrays.<br>
 * An octree structure is used to separate a large grid into multiple small subgrids.
 * See geotoolkit3d.data.util.octree for more information.
 */
export class ReservoirData extends AbstractReservoirData {
    /**
     * Reservoir data using hexahedral geometry.<br>
     * options.cells is an array of object, while each object contains 'ijk', 'x', 'y', 'z' arrays.<br>
     * options.values is an array of object, while each object contains 'ijk', 'value' arrays.<br>
     * An octree structure is used to separate a large grid into multiple small subgrids.
     * See geotoolkit3d.data.util.octree for more information.
     * @param options 
     * @param options.cells The cells position
     * @param options.values The cells value
     * @param options.additionaldata additional data values (can be used in reservoir filter)
     * @param options.computecellsvolume if true, precompute cells volume. Can be computed later using computeCellsVolume().
     * @param options.ijkcount The I,J,K dimensions of the grid
     * @param options.nullvalue the nullvalue
     */
    constructor(options?: object | { cells?: object[]; values?: object[]; additionaldata?: object[]; computecellsvolume?: boolean; ijkcount?: IJKIndex | object | number[]; nullvalue?: number; } );
    /**
     * Returns the reservoir data's attributes
     */
    getAttributes(): {positions: BufferAttribute; values: BufferAttribute; ijk: BufferAttribute; boundingbox: Box3; volume: Float32Array | any; cellcount: number; minvalue: number; maxvalue: number; mini: number; maxi: number; minj: number; maxj: number; mink: number; maxk: number; additionaldata: object[]} | object;
    /**
     * Returns the index for the reservoir cell
     * @param i i value for this cell
     * @param j j value for this cell
     * @param k k value for this cell
     */
    getIndexForCell(i: number, j: number, k: number): number | any;
    /**
     * This function clears all buffers and geometry.
     */
    reset(): this;
    /**
     * Set several cells options<br>
     * The geometrical data are expected in a regular order, see example<br>
     * <br>
     * x values are [xA, xB, xC, xD, xE, xF, xG, xH],<br>
     * y values are [yA, ..., yH] and z values are [zA, ..., zH]<br>
     * <br>
     * The cell geometry does not need to be orthogonal.<br>
     * It is strongly recommended that each face (ABDC, CDHG, GEAC...) is entirely included in a 3D plane.<br>
     * @example
     * ```javascript
     * x |------>
     * A ------- B            __
     * |\        |\            \
     * | \       | \            \  y
     * |  C ------- D     _      v
     * E -|----- F  |     |
     *  \ |       \ |     | z
     *   \|        \|     |
     *    G ------- H     v
     * ```
     * @param positions cells to set positions on
     * @param positions.x a cell's x-position array
     * @param positions.y a cell's y-position array
     * @param positions.z a cell's z-position array
     * @param positions.ijk a cell's IJK index array
     * @param values cells to set values on
     */
    setCellsOptions(positions?: object[] | object | { x?: number[]; y?: number[]; z?: number[]; ijk?: number[]; } , values?: object[]): this;
    /**
     * Returns the number of cells in the data object
     */
    getNumberOfCells(): number;
    /**
     * Returns the number of subgrids in the data object
     */
    getNumberOfGrids(): number;
    /**
     * Returns the Cell Data
     * @param ijk The ijk index
     */
    getCellData(ijk: IJKIndex | number[]): {ijk: number[]; x: number[]; y: number[]; z: number[]; value: number; volume: number | any; bound: number[]; additionalData: object} | object;
    /**
     * Returns the ijk count for this data.
     */
    getIJKCount(): IJKIndex;
    /**
     * Returns the octree which stores reservoir data
     */
    getOctree(): Octree;
    /**
     * Return the data stored in octree, separated by each node, in an array
     */
    getNodeData(): object[];
    /**
     * Get color values stored in BufferAttribute, separated by subgrids.
     */
    getNodeValues(): BufferAttribute[];
    /**
     * Compute the reservoir cells volume, and enable volume data in getCellData() method.
     */
    computeCellsVolume(): void;
}
