import {AbstractTool} from '../AbstractTool';
import {TableView} from '../../shapes/tableview/TableView';
import {Dimension} from '../../../util/Dimension';

/**
 * Defines Column manipulator for Table View shape
 * Tool name: 'HeaderHandler'
 */
export class HeaderHandler extends AbstractTool {
    /**
     * Defines Column manipulator for Table View shape
     * Tool name: 'HeaderHandler'
     * @param options table view shape or tool options
     * @param options.tableview table view shape
     */
    constructor(options?: TableView | object | { tableview?: TableView; } );
    /**
     * Specify handle size
     * @param size new size
     */
    setSize(size: Dimension): this;
    /**
     * Returns handle size
     */
    getSize(): Dimension;
    /**
     * Specify handle margin from top right corner
     * @param margin new margin
     */
    setMargin(margin: Dimension): this;
    /**
     * Returns handle margin
     */
    getMargin(): Dimension;
}
/**
 * Events
 */
export enum Events {
    /**
     * onHeaderHover
     */
    onHeaderHover = 'onHeaderHover',
    /**
     * onButtonHover
     */
    onButtonHover = 'onButtonHover',
    /**
     * onClick
     */
    onClick = 'onClick'
}
