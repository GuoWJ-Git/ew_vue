import {AbstractTool} from '../../controls/tools/AbstractTool';
import {DataSheet} from '../datasheet/DataSheet';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * DataSheet selection tool
 * Selection tool specifically for DataSheet, supports selection of cells group and provide an event contains
 * first cell (top left) and last cell (bottom right) indicates position and size of selection box
 */
export class DataSheetSelection extends AbstractTool {
    /**
     * DataSheet selection tool
     * Selection tool specifically for DataSheet, supports selection of cells group and provide an event contains
     * first cell (top left) and last cell (bottom right) indicates position and size of selection box
     * @param dataSheet DataSheet
     * @param options See geotoolkit.controls.tools.AbstractTool constructor
     * @param options.selectionrect Selection rectangle options
     * @param options.selectionrect.fillstyle Selection box fill style for single cell selection
     * @param options.selectionrect.groupfillstyle Selection box fill style for group of cells selection
     * @param options.selectionrect.linestyle Selection box border line style
     */
    constructor(dataSheet: DataSheet, options?: object | { selectionrect?: object | { fillstyle?: FillStyle; groupfillstyle?: FillStyle; linestyle?: LineStyle; } ; } );
}
/**
 * DataSheet selection events
 */
export enum DataSheetSelectionEvents {
    /**
     * Event type fired when a header or column is clicked
     */
    HeaderClicked = 'onHeaderClicked',
    /**
     * Event type fired when a index or row is clicked
     */
    IndexClicked = 'onIndexClicked',
    /**
     * Event type fired when a cell is clicked
     */
    CellClicked = 'onCellClicked',
    /**
     * Event type fired when index title is clicked
     */
    IndexTitleClicked = 'onIndexTitleClicked',
    /**
     * onMove
     */
    onPointerMoved = 'onPointerMoved'
}
