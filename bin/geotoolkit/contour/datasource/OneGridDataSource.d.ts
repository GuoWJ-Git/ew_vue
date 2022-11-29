import {AbstractContourDataSource} from './AbstractContourDataSource';
import {ContourAbstractGrid} from '../grid/ContourAbstractGrid';

/**
 * The data source implementation for a single grid
 */
export class OneGridDataSource extends AbstractContourDataSource {
    /**
     * The data source implementation for a single grid
     * @param grid The grid associated with this data.
     */
    constructor(grid?: ContourAbstractGrid);
    /**
     * Sets grid.
     * @param grid The grid associated with this data.
     */
    setGrid(grid: ContourAbstractGrid): this;
}
