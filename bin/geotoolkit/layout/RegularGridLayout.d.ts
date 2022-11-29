import {BoxLayout} from './BoxLayout';
import {Rect} from '../util/Rect';
import {ILayoutable} from './ILayoutable';

/**
 * Children are arranged in a grid based on
 * number of Rows and Columns in the grid.
 */
export class RegularGridLayout extends BoxLayout {
    /**
     * Children are arranged in a grid based on
     * number of Rows and Columns in the grid.
     * @param rowCount number of columns for layout or properties object
     * @param rowCount.rowcount rowcount rowcount
     * @param rowCount.columncount columncount columncount
     * @param rowCount.direction direction of the layout
     * @param colCount number of rows for layout
     * @param containerDirection direction for container's layout
     * @param dstRect rectangular layout area
     */
    constructor(rowCount: number | object | { rowcount?: number; columncount?: number; direction?: ContainerDirection; } , colCount: number, containerDirection?: ContainerDirection, dstRect?: Rect);
    /**
     * Sets rectangular layout area
     * @param dstRect rectangular layout area
     */
    setRect(dstRect: Rect): this;
    /**
     * Layout
     * @param layoutRect desired rect to layout
     * @param targets array of nodes supposed to layout
     */
    layout(layoutRect?: Rect, targets?: ILayoutable[]): this;
    /**
     * Sets direction for container's layout
     * @param direction direction for container's layout
     */
    setDirection(direction: ContainerDirection): this;
    /**
     * Gets direction of the container that this layout for
     */
    getDirection(): ContainerDirection;
    /**
     * Sets number of columns for layout
     * @param colCount number of columns for layout
     */
    setColumnCount(colCount: number): this;
    /**
     * Gets number of columns for layout
     */
    getColumnCount(): number;
    /**
     * Sets number of rows for layout
     * @param rowCount number of rows for layout
     */
    setRowCount(rowCount: number): this;
    /**
     * Gets number of rows for layout
     */
    getRowCount(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {rowcount: number; columncount: number; direction: ContainerDirection} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.rowcount rowcount rowcount
     * @param properties.columncount columncount columncount
     * @param properties.direction direction of the layout
     */
    setProperties(properties: object | { rowcount?: number; columncount?: number; direction?: ContainerDirection; } ): this;
}
/**
 * Enum of mutual columns and rows positions in the layout
 * @example
 * ```javascript
 * import {ContainerDirection} from '@int/geotoolkit/layout/RegularGridLayout';
 * // Elements in the layout array go column-by-column:
 * const direction1 = ContainerDirection.Vertical;
 * // Elements in the layout array go row-by-row:
 * const direction2 = ContainerDirection.Vertical;
 * ```
 */
export enum ContainerDirection {
    /**
     * Elements in the layout array go column-by-column.
     */
    Vertical = 'vertical',
    /**
     * Elements in the layout array go row-by-row.
     */
    Horizontal = 'horizontal'
}
