import {Cell} from './Cell';
import {CompositeNode} from '../../scene/CompositeNode';
import {DataSheet} from './DataSheet';

/**
 * DataSheet merged cell
 * A merged cell in DataSheet table
 */
export class MergedCell {
    /**
     * DataSheet merged cell
     * A merged cell in DataSheet table
     * @param firstCell First cell
     * @param lastCell Last cell
     * @param mergedCellLayer merged cell layer
     * @param mergedCells merged cells
     * @param dataSheet dataSheet
     */
    constructor(firstCell: Cell, lastCell: Cell, mergedCellLayer: CompositeNode, mergedCells: Cell[], dataSheet: DataSheet);
    /**
     * Get first cell (most top left cell) in to be merged rectangle.
     * All merged cell info will always be base on first cell of merged rectangle
     */
    getFirstCell(): Cell;
    /**
     * Get last cell (most bottom right cell) in to be merged rectangle.
     * All merged cell info will always be base on first cell of merged rectangle
     */
    getLastCell(): Cell;
    /**
     * Get number of row in merged cell
     */
    getNumberOfRows(): number;
    /**
     * Get number of column in merged cell
     */
    getNumberOfColumns(): number;
    /**
     * Check if merged cell contains a specific cell position
     * @param row Row index
     * @param column Column index
     */
    containsCell(row: number, column: number): boolean;
}
