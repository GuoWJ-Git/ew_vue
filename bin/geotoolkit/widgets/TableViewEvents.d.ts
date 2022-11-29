/**
 * TableView's Events enumerator
 */
export enum TableViewEvents {
    /**
     * Event type fired when the column width has changed
     */
    ColumnWidthChanged = 'onColumnWidthChanged',
    /**
     * Event type fired when the row height has changed
     */
    RowHeightChanged = 'onRowHeightChanged',
    /**
     * Event type fired when the table size has changed
     */
    TableSizeChanged = 'onTableSizeChanged',
    /**
     * Event type fired when the table content view position was changed
     */
    TableAdjusted = 'onTableAdjusted'
}
