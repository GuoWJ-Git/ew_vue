/**
 * Parent class for reservoir data
 */
export class AbstractReservoirData {
    /**
     * Parent class for reservoir data
     */
    constructor();
    /**
     * Returns the vertex/index attributes
     */
    getAttributes(): object;
    /**
     * Returns the total number of cells
     */
    getNumberOfCells(): number;
    /**
     * Returns the total number of grids
     */
    getNumberOfGrids(): number;
}
