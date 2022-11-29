import {Layout} from './Layout';
import {Rect} from '../util/Rect';

/**
 */
export class TableLayout extends Layout {
    /**
     * @param rowCount A count of rows or propperties object
     * @param rowCount.rowcount rowcount rowcount
     * @param rowCount.columncount columncount columncount
     * @param rowCount.horizontaldistance horizontaldistance horizontal distance
     * @param rowCount.verticaldistance verticaldistance vertical distance
     * @param rowCount.direction direction of the layout
     * @param colCount A count of columns
     * @param dstRect 
     */
    constructor(rowCount?: number | object | { rowcount?: number; columncount?: number; horizontaldistance?: number; verticaldistance?: number; direction?: Direction; } , colCount?: number, dstRect?: Rect);
    /**
     * set direction for Table layout
     * @param value a new direction
     */
    setDirection(value: Direction): this;
    /**
     * Gets direction of the layout
     */
    getDirection(): Direction;
    /**
     * Sets the number of columns
     * @param colCount the number of columns for the layout
     */
    setColumnCount(colCount: number): this;
    /**
     * Gets the number of columns
     */
    getColumnCount(): number;
    /**
     * Sets the number of rows
     * @param rowCount the number of rows for the layout
     */
    setRowCount(rowCount: number): this;
    /**
     * Gets the number of Rows
     */
    getRowCount(): number;
    /**
     * Sets Distance between two columns.
     * @param distance a horizontal distance
     */
    setHorizontalDistance(distance: number): this;
    /**
     * Gets the Horizontal Distance between two columns
     */
    getHorizontalDistance(): number;
    /**
     * Sets Distance between two rows.
     * @param distance a vertical distance
     */
    setVerticalDistance(distance: number): this;
    /**
     * Gets the Vertical Distance between two rows
     */
    getVerticalDistance(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {rowcount: number; columncount: number; horizontaldistance: number; verticaldistance: number; direction: Direction} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.rowcount rowcount rowcount
     * @param properties.columncount columncount columncount
     * @param properties.horizontaldistance horizontaldistance horizontal distance
     * @param properties.verticaldistance verticaldistance vertical distance
     * @param properties.direction direction of the layout
     */
    setProperties(properties: object | { rowcount?: number; columncount?: number; horizontaldistance?: number; verticaldistance?: number; direction?: Direction; } ): this;
}
/**
 * Enum of mutual columns and rows positions in layout
 * @example
 * ```javascript
 * import {Direction} from '@int/geotoolkit/layout/TableLayout';
 * // Elements in the layout array go column-by-column:
 * const direction1 = Direction.Horizontal;
 * // Elements in the layout array go row-by-row:
 * const direction2 = Direction.Horizontal;
 * ```
 */
export enum Direction {
    /**
     * Elements set in row-by-row manner.
     */
    Horizontal = 'horizontal',
    /**
     * Elements set column-by-column manner.
     */
    Vertical = 'vertical'
}
